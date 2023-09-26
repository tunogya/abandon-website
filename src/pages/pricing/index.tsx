import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Pricing - ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <div className="w-screen h-screen flex flex-col justify-center items-center py-4 px-3">
        Pricing
      </div>
    </Layout>
  );
}
