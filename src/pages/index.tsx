import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from "@docusaurus/Link";

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello, ${siteConfig.title}`}
      description="Welcome to AbandonAI.">
      <div className="flex flex-col justify-center items-center py-4 gap-2 px-3">
        <div className={'h-[480px] w-full flex flex-col justify-center items-center gap-20'}>
          <div className="text-center text-2xl md:text-3xl font-serif">
            &quot;Abandon yourself to a life of pleasure!&quot;
          </div>
        </div>
        <Link
          href={"https://app.abandon.ai"} target={'_blank'}
          className="flex px-3 py-3 w-full sm:w-[240px] border-2 border-gray-950 rounded items-center justify-center gap-2 font-medium"
        >
          Try it out!
        </Link>
      </div>
    </Layout>
  );
}
