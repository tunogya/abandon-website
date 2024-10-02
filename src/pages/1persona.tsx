import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
    return (
        <Layout
            title={`AbandonAI - Decentralized AI Technology Inspired by Jung's Personality Theory`}
            description="AbandonAI is a leading AI technology company inspired by Jung's personality theory. We provide decentralized AI products to enhance our personality and make ourselves more complete.">
            <main>
                <div className="p-4">
                <p>
                        iOS App: <a href="https://apps.apple.com/cn/app/1persona/id6484276400">https://apps.apple.com/cn/app/1persona/id6484276400</a><br />
                        Web App: <a href="https://apps.abandon.ai/app/1persona">https://apps.abandon.ai/app/1persona</a>
                    </p>
                    <br/>
                    <h1 className="text-3xl font-bold mb-4">1Persona: Hack Your Mind</h1>
                    <p className="mb-4">1Persona is a cutting-edge AI-powered software that allows you to explore the depths of your psyche by simulating multiple personalities. Dive into the realm of cognitive hacking and push the boundaries of your consciousness.</p>
                    <h2 className="text-2xl font-semibold mb-2">Key Features:</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>Advanced AI algorithms for realistic persona generation</li>
                        <li>Secure, encrypted storage for your digital alter egos</li>
                        <li>Real-time personality switching with seamless transitions</li>
                        <li>Neural network-based chat system for lifelike interactions</li>
                        <li>Decentralized architecture using Nostr protocol for enhanced privacy and security</li>
                        <li>Peer-to-peer social interactions with other 1Persona users</li>
                    </ul>
                    <h2 className="text-2xl font-semibold mb-2">Quick Start Guide:</h2>
                    <ol className="list-decimal list-inside mb-4">
                        <li>Initialize a new persona instance</li>
                        <li>Inject personality traits via text input</li>
                        <li>Engage in deep-dive conversations with your digital self</li>
                        <li>Connect with other users through the Nostr network</li>
                    </ol>
                    <hr className="my-4" />
                    <p>©2024 Abandon Inc., All rights reserved.</p>
                    <p>8 The Green, STE R Dover DE 19901 USA.</p>
                    <p>Contact: <a href="mailto:tom@abandon.ai">tom@abandon.ai</a></p>
                    <p className="blink">_</p>
                </div>
                <script type="application/ld+json">
                    {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AbandonAI",
            "url": "https://abandon.ai",
            "logo": "https://abandon.ai/static/img/logo.svg",
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
