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
                    <p>1Persona is a cutting-edge AI-powered software that allows you to explore the depths of your psyche by simulating multiple personalities. Dive into the realm of cognitive hacking and push the boundaries of your consciousness.</p>
                    <br/>
                    <h2>1Persona Technical Support Document</h2>
                    <br/>
                    <p>Welcome to 1Persona! This application is designed to help you record your memories, dreams, and thought processes. No registration is required; an anonymous address is automatically created upon installation.</p>
                    <br/>
                    <h3>1. Installation and Launch</h3>
                    <ol>
                        <li>Download the App from your app store</li>
                        <li>Install the App following the prompts</li>
                        <li>Launch the App by clicking the icon</li>
                    </ol>
                    <br/>
                    <h3>2. Basic Features</h3>
                    <p>1Persona offers features for recording, searching, and retrieving information.</p>
                    <br/>
                    <h3>3. Recording Feature</h3>
                    <ul>
                        <li>Create a new record</li>
                        <li>Edit a record</li>
                        <li>Delete a record</li>
                    </ul>
                    <br/>
                    <h3>4. Search Feature</h3>
                    <p>Use keywords to quickly find your records.</p>
                    <br/>
                    <h3>5. Library Retrieval</h3>
                    <p>Find related information to enrich your records.</p>
                    <br/>
                    <h3>6. Frequently Asked Questions</h3>
                    <ul>
                        <li>No registration required</li>
                        <li>Privacy ensured through anonymous address and local storage</li>
                        <li>Manual backups recommended</li>
                    </ul>
                    <br/>
                    <h1>7. Contact Us</h1>
                    <p>
                        Email: <a href="mailto:tom@abandon.ai">tom@abandon.ai</a><br />
                        Official Website: <a href="https://www.abandon.ai">www.abandon.ai</a><br />
                        Twitter: <a href="https://twitter.com/abandonai">@abandonai</a>
                    </p>
                    <br/>
                    <hr />
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
