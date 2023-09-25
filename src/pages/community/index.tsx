import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Community - ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        Community
      </main>
    </Layout>
  );
}
