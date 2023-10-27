---
title: Next.js에 Google Drive API를 달아보자
---

Google API의 경우, 대부분이 서버에서 API를 호출해야합니다.

그렇기에 React보다는 Next.js에서 서버상에서 호출 후, 프론트에서 해당 API 엔드포인트에서 값을 얻는 것이 가장 빠르다고 봅니다.

```tsx
// pages/index.tsx

const HomePage = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [authUrl, setAuthUrl] = useState("");

  // 로그인/인증 URL 얻기
  const fetchAuthUrl = useCallback(async () => {
    try {
      const response = await axios.get(
        `${process.env.API_ENDPOINT_ORIGIN}/api/auth`
      );
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
      if (code) {
        fetchTokens(code);
        setIsSuccess(response.data.success);
      } else if (!response.data.success) {
        setAuthUrl(response.data.url);
        setIsSuccess(response.data.success);
      } else {
        setIsSuccess(response.data.success);
      }
    } catch (err) {
      console.log("err", err);
    }
  }, []);

  const getFiles = async () => {
    const response = await axios.get(
      `${process.env.API_ENDPOINT_ORIGIN}/api/drive`
    );
    // Google Drive 파일 목록이 나옴
    console.log(response);
  };

  // Google에서 리다이렉트된 후 인증 코드 사용하여 토큰 얻기
  const fetchTokens = async (code: string) => {
    try {
      await axios.post(`${process.env.API_ENDPOINT_ORIGIN}/api/auth`, {
        code,
      });
    } catch (err) {
      console.log("fetchToken error", err);
    }
  };

  // 로그아웃
  const handleLogout = async () => {
    const res = await axios.delete(
      `${process.env.API_ENDPOINT_ORIGIN}/api/auth`
    );
    // 로그아웃 후 페이지 리프레시 또는 다른 처리
    if (res) {
      window.location.pathname = "";
      window.location.search = "";
      window.location.reload();
    }
  };

  useEffect(() => {
    fetchAuthUrl();
  }, [fetchAuthUrl]);

  return (
    <>
      {isSuccess ? (
        <>
          <button onClick={handleLogout}>로그아웃</button>
          <button onClick={getFiles}>파일 가져오기</button>
        </>
      ) : (
        <button onClick={(window.location.href = authUrl)}>
          구글 드라이브 연결하기
        </button>
      )}
    </>
  );
};

export default HomePage;
```

API_ENDPOINT_ORIGIN의 경우, 로컬에서는 localhost:3000을 따르고, 배포 시에는 해당 오리진에 맞게 할당하면 됩니다.

이제 서버 로직을 짭니다.

```tsx
// pages/api/auth.ts
import oauth2Client from "@/utils/googleAuth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // CORS 프리플라이트 요청 처리
    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }

    if (req.method === "GET") {
      const refreshToken = req.cookies.refresh_token;

      // 이미 로그인했었던 이력이 있는지 확인
      if (!refreshToken) {
        const url = oauth2Client.generateAuthUrl({
          access_type: "offline",
          prompt: "consent",
          scope: ["https://www.googleapis.com/auth/drive"],
          redirect_uri: process.env.API_ENDPOINT_ORIGIN,
        });
        res.status(200).json({ success: false, url });
      }

      // 리프레시 토큰으로 액세스 토큰 갱신
      oauth2Client.setCredentials({ refresh_token: refreshToken });

      const newTokens = await oauth2Client.refreshAccessToken();
      oauth2Client.setCredentials(newTokens.credentials);

      res.status(200).json({ success: true });
    } else if (req.method === "POST") {
      const { code } = req.body;
      const { tokens } = await oauth2Client.getToken(code);
      oauth2Client.setCredentials(tokens);

      // 리프레시 토큰을 HTTP Only 쿠키에 저장
      if (tokens.refresh_token) {
        res.setHeader(
          "Set-Cookie",
          `refresh_token=${tokens.refresh_token}; HttpOnly; Path=/; Max-Age=${
            7 * 24 * 60 * 60
          }`
        );
      }

      res.status(200).json({ success: true });
    } else if (req.method === "DELETE") {
      // 로그아웃 처리
      // 리프레시 토큰 쿠키 삭제
      res.setHeader(
        "Set-Cookie",
        "refresh_token=; HttpOnly; Path=/; Max-Age=0"
      );
      res.status(200).json({ success: true });
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  } catch (err) {
    console.log("ERR", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
```
