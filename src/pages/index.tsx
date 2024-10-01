import React from 'react';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Welcome to AbandonAI`}
      description="Embrace the future of personalized AI with AbandonAI">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to AbandonAI</h1>
        <p className="text-xl mb-6">Where innovation meets imagination, and personalities multiply.</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">What We Do</h2>
          <p>We're revolutionizing the concept of personal identity through AI. Our technology allows ordinary individuals to experience multiple AI-driven personalities, similar to those with Dissociative Identity Disorder, but in a controlled and enriching manner.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p>Imagine having access to a range of AI-powered personalities, each with unique skills, perspectives, and experiences. That's the future we're creating at AbandonAI.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">How It Works</h2>
          <p>Our AI technology integrates seamlessly with your consciousness, allowing you to switch between different AI-driven personas. Whether you need the analytical mind of a scientist, the creativity of an artist, or the empathy of a counselor, your AI personalities are just a thought away.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">App 1: 1Persona</h2>
          <p>Experience the power of multiple personalities with our groundbreaking iOS app, 1Persona. Dive into a world of diverse AI-driven personas at your fingertips.</p>
          <a href="https://apps.apple.com/cn/app/1persona/id6484276400" className="text-blue-500 hover:underline mt-2 inline-block">Download 1Persona from the App Store</a>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">App 2: LobeChat</h2>
          <p>LobeChat is a chatbot that allows you to chat with multiple AI personalities.</p>
          <a href="https://chat.abandon.ai/" className="text-blue-500 hover:underline mt-2 inline-block">Chat with LobeChat</a>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Benefits</h2>
          <ul className="list-disc list-inside">
            <li>Enhanced problem-solving abilities</li>
            <li>Improved emotional intelligence</li>
            <li>Expanded creativity and innovation</li>
            <li>Better adaptability to various social situations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Fun Fact</h2>
          <p>Did you know? Our AI can generate unique personalities. Here's a haiku from one of our AI personas:</p>
          <blockquote className="italic mt-2">
            "Minds within one self,<br/>
            AI weaves new perspectives,<br/>
            Endless selves unfold."
          </blockquote>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Get in Touch</h2>
          <p>Ready to explore the multifaceted future of your personality? Let's chat!</p>
          <a href="mailto:tom@abandon.ai" className="text-blue-500 hover:underline">tom@abandon.ai</a>
        </section>
      </main>
    </Layout>
  );
}
