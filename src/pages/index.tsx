import React from 'react';
import Layout from '@theme/Layout';
import {ArrowSmallRightIcon} from "@heroicons/react/24/solid";
import {CheckIcon} from "@heroicons/react/24/outline";

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Hello`}
      description="Welcome to AbandonAI.">
      <div className="flex flex-col justify-center items-center px-3 w-full pb-12">
        <div className={"w-full text-[64px] md:text-[128px] font-bold text-center gap-0.5 leading-[64px] md:leading-[128px] py-[5rem]"}>
          <p>Pay</p>
          <p>as you go</p>
        </div>
        <div className={'flex gap-3 flex-col md:flex-row'}>
          <a href={'https://app.abandon.ai/chat'} target={'_blank'}>
            <div className={"w-full md:w-[280px] h-[400px] p-8 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"}>
              <div className={'text-xl font-bold flex justify-between items-center'}>
                ChatGPT
                <ArrowSmallRightIcon className={'w-6 h-6'}/>
              </div>
              <p className={'mt-3 text-gray-500'}>
                Interact with OpenAI flagship language models in a conversational interface.
              </p>
              <div className={'mt-9 text-gray-500'}>
                <div className={'flex gap-1 items-center'}>
                  <CheckIcon className={'w-5 h-5'} />
                  gpt-4
                </div>
                <div className={'flex gap-1 items-center'}>
                  <CheckIcon className={'w-5 h-5'} />
                  gpt-3.5-turbo
                </div>
                <div className={'flex gap-1 items-center'}>
                  <CheckIcon className={'w-5 h-5'} />
                  gpt-3.5-16k
                </div>
              </div>
            </div>
          </a>
          <div className={"w-full md:w-[280px] h-[400px] p-8 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"}>
            <div className={'text-xl font-bold flex justify-between items-center'}>
              Completion
              <ArrowSmallRightIcon className={'w-6 h-6'}/>
            </div>
            <div className={'mt-3 text-gray-500'}>
              Understand and generate natural language or code.
            </div>
            <div className={'mt-9 text-gray-500'}>
              <div className={'flex gap-1 items-center'}>
                <CheckIcon className={'w-5 h-5'} />
                gpt-3.5-turbo-instruct
              </div>
            </div>
          </div>
          <div className={"w-full md:w-[280px] h-[400px] p-8 bg-gray-50 rounded-lg cursor-wait hover:bg-gray-100"}>
            <div className={'text-xl font-bold flex justify-between items-center'}>
              DALL·E
              {/*<ArrowSmallRightIcon className={'w-6 h-6'}/>*/}
            </div>
            <div className={'mt-3 text-gray-500'}>
              <p>
              Create realistic images and art from a description in natural language
              </p>
            </div>
          </div>
        </div>
        <div className={'mt-10 font-medium underline'}>
          No monthly membership fees!
        </div>
      </div>
    </Layout>
  );
}
