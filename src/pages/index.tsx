import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="frontend, development, programming, stock, economy, apple, google, meta, facebook, instagram, tiktok, amazon, aws, microsoft, react, nextjs, vercel, javascript, typescript, jsx"
    >
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
