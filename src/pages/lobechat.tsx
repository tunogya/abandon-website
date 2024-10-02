import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
    return (
        <Layout
            title={`LobeChat`}
            description="">
            <main>
                <div className="p-4">
                    <p>App: <a href="https://chat.abandon.ai">https://chat.abandon.ai</a></p>
                    <p>Github: <a href="https://github.com/lobehub/lobe-chat">https://github.com/lobehub/lobe-chat</a></p>
                    <br />
                    <h1>🤯 Lobe Chat - an open-source, modern-design AI chat framework.</h1>
                    <p>Supports Multi AI Providers (OpenAI / Claude 3 / Gemini / Ollama / Azure / DeepSeek), Knowledge Base (file upload / knowledge management / RAG), Multi-Modals (Vision/TTS) and plugin system.</p>
                    <p>One-click FREE deployment of your private ChatGPT/ Claude application.</p>
                    <br />
                    <h1>👋🏻 Getting Started & Join Our Community</h1>
                    <p>
                        We are a group of e/acc design-engineers, hoping to provide modern design components and tools for AIGC. By adopting the Bootstrapping approach, we aim to provide developers and users with a more open, transparent, and user-friendly product ecosystem.
                    </p>
                    <p>
                        Whether for users or professional developers, LobeHub will be your AI Agent playground. Please be aware that LobeChat is currently under active development, and feedback is welcome for any issues encountered.
                    </p>
                    <br />
                    <h1>✨ Features</h1>
                    <p>1 File Upload/Knowledge Base<br />
                        LobeChat supports file upload and knowledge base functionality. You can upload various types of files including documents, images, audio, and video, as well as create knowledge bases, making it convenient for users to manage and search for files. Additionally, you can utilize files and knowledge base features during conversations, enabling a richer dialogue experience.</p>
                    <br/>
                    <p>2 Multi-Model Service Provider Support<br />
                        In the continuous development of LobeChat, we deeply understand the importance of diversity in model service providers for meeting the needs of the community when providing AI conversation services. Therefore, we have expanded our support to multiple model service providers, rather than being limited to a single one, in order to offer users a more diverse and rich selection of conversations.

                        In this way, LobeChat can more flexibly adapt to the needs of different users, while also providing developers with a wider range of choices.
                    </p>
                    <br/>
                    <p>3 Local Large Language Model (LLM) Support<br />
                        To meet the specific needs of users, LobeChat also supports the use of local models based on Ollama, allowing users to flexibly use their own or third-party models.</p>
                    <br/>
                    <p>4 Model Visual Recognition<br />
                        LobeChat now supports OpenAI's latest gpt-4-vision model with visual recognition capabilities, a multimodal intelligence that can perceive visuals. Users can easily upload or drag and drop images into the dialogue box, and the agent will be able to recognize the content of the images and engage in intelligent conversation based on this, creating smarter and more diversified chat scenarios.

                        This feature opens up new interactive methods, allowing communication to transcend text and include a wealth of visual elements. Whether it's sharing images in daily use or interpreting images within specific industries, the agent provides an outstanding conversational experience.</p>
                    <br/>
                    <p>5 TTS & STT Voice Conversation<br/>
LobeChat supports Text-to-Speech (TTS) and Speech-to-Text (STT) technologies, enabling our application to convert text messages into clear voice outputs, allowing users to interact with our conversational agent as if they were talking to a real person. Users can choose from a variety of voices to pair with the agent.

Moreover, TTS offers an excellent solution for those who prefer auditory learning or desire to receive information while busy. In LobeChat, we have meticulously selected a range of high-quality voice options (OpenAI Audio, Microsoft Edge Speech) to meet the needs of users from different regions and cultural backgrounds. Users can choose the voice that suits their personal preferences or specific scenarios, resulting in a personalized communication experience.</p>
                    <br/>
                    <p>6 Text to Image Generation<br/>
                        LobeChat now supports the latest text-to-image generation technology, allowing users to invoke image creation tools directly within conversations with the agent. By leveraging the capabilities of AI tools such as DALL-E 3, MidJourney, and Pollinations, the agents are now equipped to transform your ideas into images.

                        This enables a more private and immersive creative process, allowing for the seamless integration of visual storytelling into your personal dialogue with the agent.</p>
                    <br/>
                    <p>7 Plugin System (Function Calling)<br/>
                        The plugin ecosystem of LobeChat is an important extension of its core functionality, greatly enhancing the practicality and flexibility of the LobeChat assistant. Through our plugin system, which is based on ChatGPT's function calling feature, LobeChat can integrate various third-party services and tools, allowing the AI to perform a wide range of tasks beyond just conversation.

                        Key features of our plugin system include:
                        
                        • Expandable Capabilities: Users can install plugins to add new functionalities to their AI assistant, such as weather forecasting, web searches, or data analysis.
                        
                        • Custom Development: Developers can create custom plugins to meet specific needs, making LobeChat adaptable to various professional and personal scenarios.
                        
                        • Easy Integration: The plugin system is designed for seamless integration, allowing users to easily enhance their LobeChat experience without complex setups.
                        
                        • Real-time Information Access: Plugins can provide the AI with access to real-time data and services, ensuring that responses are based on the most current information available.

                        This feature significantly expands the potential applications of LobeChat, making it a powerful tool for both personal and professional use.</p>
                    <br/>
                    <p>8 Agent Market (GPTs)<br/>
                        In LobeChat Agent Marketplace, creators can discover a vibrant and innovative community that brings together a multitude of well-designed agents, which not only play an important role in work scenarios but also offer great convenience in learning processes. Our marketplace is not just a showcase platform but also a collaborative space. Here, everyone can contribute their wisdom and share the agents they have developed.</p>
                    <br/>
                    <p>9 Support Local / Remote Database<br/>
                        LobeChat supports the use of both server-side and local databases. Depending on your needs, you can choose the appropriate deployment solution:

                        • Local database: suitable for users who want more control over their data and privacy protection. LobeChat uses CRDT (Conflict-Free Replicated Data Type) technology to achieve multi-device synchronization. This is an experimental feature aimed at providing a seamless data synchronization experience.

                        • Server-side database: suitable for users who want a more convenient user experience. LobeChat supports PostgreSQL as a server-side database. For detailed documentation on how to configure the server-side database, please visit Configure Server-side Database.

                        Regardless of which database you choose, LobeChat can provide you with an excellent user experience.</p>
                    <br/>
                    <p>10 Support Multi-User Management<br/>
                        LobeChat supports multi-user management and provides two main user authentication and management solutions to meet different needs:</p>
                    <ul>
                        <li><strong>next-auth:</strong> LobeChat integrates next-auth, a flexible and powerful identity verification library that supports multiple authentication methods, including OAuth, email login, credential login, etc. With next-auth, you can easily implement user registration, login, session management, social login, and other functions to ensure the security and privacy of user data.</li>
                        <li><strong>Clerk:</strong> For users who need more advanced user management features, LobeChat also supports Clerk, a modern user management platform. Clerk provides richer functions, such as multi-factor authentication (MFA), user profile management, login activity monitoring, etc. With Clerk, you can get higher security and flexibility, and easily cope with complex user management needs.</li>
                    </ul>
                    <p>Regardless of which user management solution you choose, LobeChat can provide you with an excellent user experience and powerful functional support.</p>

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
