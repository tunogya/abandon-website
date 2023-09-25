import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Pricing - ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        Pricing
      </main>
    </Layout>
  );
}
