import React from 'react';
import Layout from '@theme/Layout';
import {ArrowRightIcon} from "@heroicons/react/20/solid";
import Translate from '@docusaurus/Translate';

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Hello`}
      description="Welcome to AbandonAI.">
      <div className="flex flex-col justify-center items-center w-full">
        <div
          className={"flex flex-col w-full text-center items-center justify-center text-white h-[calc(100vh-60px)] "}
          style={{
            backgroundImage: `url("/img/0TxTsbg8Re58cQJi.webp")`,
            backgroundSize: "cover",
            backgroundPosition: 'center',
          }}
        >
          <p className={"text-4xl md:text-6xl font-bold text-white"}>
            <Translate>
             Unlimited access to GPT-4
            </Translate>
          </p>
          <p className={'mt-4 text-lg md:text-xl font-bold text-gray-100'}>
            <Translate>
              GPT 3.5 always free!
            </Translate>
          </p>
          <div className={'flex flex-col md:flex-row justify-center my-8 gap-2 w-full md:w-fit px-4'}>
            <a
              href={"https://app.abandon.ai/chat"}
              target={'_blank'}
              className={'bg-white text-black px-4 py-2 rounded font-bold cursor-pointer flex items-center gap-2 justify-between'}
            >
              <Translate>
                ChatGPT
              </Translate>
              <ArrowRightIcon className={'w-5 h-5'}/>
            </a>
            <a
              href={"https://app.abandon.ai/"}
              target={'_blank'}
              className={'bg-white text-black px-4 py-2 rounded font-bold cursor-pointer flex items-center gap-2 justify-between'}
            >
              <Translate>
                Assistants
              </Translate>
              <ArrowRightIcon className={'w-5 h-5'}/>
            </a>
            <a
              href={"https://app.abandon.ai/"}
              target={'_blank'}
              className={'bg-white text-black px-4 py-2 rounded font-bold cursor-pointer flex items-center gap-2 justify-between'}
            >
              <Translate>
                DALL·E 3
              </Translate>
              <ArrowRightIcon className={'w-5 h-5'}/>
            </a>
          </div>
        </div>

        <div className={"mt-20 md:mt-40 px-4"}>
          <div className={"text-3xl md:text-[36px] font-bold text-center"}>
            <Translate>
              "Abandon yourself to a life of pleasure!"
            </Translate>
          </div>
        </div>

        <div className={'p-4 w-full mt-20 md:mt-40 px-4 md:px-20 xl:px-40'}>
          <img src={'/img/app.png'} alt={'Abandon AI'} className={'w-full'}/>
        </div>

        <div className={'mt-20 md:mt-40 text-center'}>
          <div className={"text-3xl md:text-[36px] font-bold"}>
            <Translate>
              Service Provider
            </Translate>
          </div>
          <div className={'w-full flex flex-col md:flex-row items-center justify-center gap-10 mt-10'}>
            <a href={'https://openai.com'} target={'_blank'}>
              <img src={"/img/openai-logo.svg"} alt={'OpenAI'} className={'w-24 h-10'}/>
            </a>
            <a href={'https://aws.amazon.com'} target={'_blank'}>
              <img src={"/img/aws-logo.svg"} alt={'AWS'} className={'w-24 h-10'}/>
            </a>
            <a href={'https://vercel.com'} target={'_blank'}>
              <img src={"/img/vercel-logo.svg"} alt={'Vercel'} className={'w-24 h-10'}/>
            </a>
            <a href={'https://upstash.com'} target={'_blank'}>
              <img src={"/img/upstash-logo.svg"} alt={'Vercel'} className={'w-24 h-10'}/>
            </a>
            <a href={'https://stripe.com'} target={'_blank'}>
              <img src={"/img/stripe-logo.svg"} alt={'Stripe'} className={'w-24 h-10'}/>
            </a>
          </div>
        </div>

        <div
          className={"w-full mt-20 md:mt-40"}
        >
          <div
            className={"w-full h-16"}
            style={{
              backgroundImage: `url("/img/top-wave-blue.svg")`,
            }}
          />
          <div
            className={"bg-[#c8dfff] w-full py-16 text-center flex flex-col justify-center items-center gap-4 px-4"}
          >
            <p className={"text-3xl md:text-[40px] font-bold text-[#081B4B]"}>
              <Translate>
                Let's go
              </Translate>
            </p>
            <p className={"text-md text-[#4D5B7C]"}>
              <Translate>
                Sign up now and you'll be using GPT-3.5 and GPT-4 on AbandonAI in just minutes.
              </Translate>
            </p>
            <a
              href={'https://app.abandon.ai/'}
              target={'_blank'}
              className={"bg-white text-[#081B4B] h-[48px] flex items-center px-4 rounded-lg font-bold cursor-pointer"}
            >
              <Translate>
                Sign up to get started
              </Translate>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
