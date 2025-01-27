import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title={`AbandonAI`}
      description="AbandonAI">
      <main>
        <div className="p-4">
        </div>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AbandonAI",
            "url": "https://abandon.ai",
            "logo": "https://abandon.ai/img/logo.svg",
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "tom@abandon.ai",
              "contactType": "Customer Service"
            },
            "sameAs": [
              "https://www.facebook.com/abandonai",
              "https://www.twitter.com/abandonai",
              "https://www.linkedin.com/company/abandonai"
            ]
          }
          `}
        </script>
      </main>
    </Layout>
  );
}
