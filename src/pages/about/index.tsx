import React from 'react';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`About`}
      description="Description will go into a meta tag in <head />">
      <div className="flex flex-col justify-center items-center px-3">
        <div className="w-screen h-screen flex flex-col justify-center items-center py-4 px-3">
          Best AI for Everyone
        </div>
        <div>
          <p>We manage everything for you.</p>
          <p>You focus on more important things.</p>
          <p>With per-request pricing, you pay only for what you use.</p>
        </div>
        <div>
          Fast
          We know each millisecond is important for you.
          Sample
          Keep the things as simple as possible but not simpler.
          Robust
          We win your trust with robustness.
        </div>
        <div>
          Our Investors
          We are fortunate to work with some of the best investors in the world. Chances are you are already using the products they helped to create.

        </div>
      </div>
    </Layout>
  );
}
