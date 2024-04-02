import React from 'react';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  return (
    <Layout
      title={``}
      description="Abandon yourself to a life of pleasure.">
      <div className="flex flex-col justify-center items-center w-full">
        <div className={'py-40'}>
          <div className={"md:text-3xl lg:text-5xl xl:text-6xl text-center font-medium"}>
            Abandon yourself to a life of pleasure.
          </div>
        </div>
        <div className={"text-xl px-8 py-4 border-2 rounded-full"}>
          637 users on AbandonAI
        </div>
      </div>
      <div className={'absolute bottom-2 w-full text-center text-xs'}>
        <p>
          ©{new Date().getFullYear()} Abandon Inc., All rights reserved.
        </p>
        <p>
          8 The Green, STE R Dover DE 19901 USA. <a href="mailto:tom@abandon.ai" className={"underline"}>tom@abandon.ai</a>
        </p>
      </div>
    </Layout>
  );
}
