import Head from "next/head";
import {useCreateReducer} from "@/hooks/useCreateReducer";
import {LoginInitialState, initialState} from "@/pages/login/login.state";

export default function Login() {
  const contextValue = useCreateReducer<LoginInitialState>({
    initialState,
  });

  const {
    state: {
      lightMode,
    },
    dispatch,
  } = contextValue;

  return <>
    <Head>
      <title>登录</title>
      <meta name="description" content="ChatGPT but better." />
      <meta
        name="viewport"
        content="height=device-height ,width=device-width, initial-scale=1, user-scalable=no"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main
      className={`flex h-screen w-screen flex-col text-sm text-white dark:text-white ${lightMode}`}
    >
      <div className="flex flex-col h-screen w-screen justify-center items-center">
        <div className="flex w-[300px] h-[300px] bg-white rounded-[10px] justify-center items-center">

        </div>
        <div className="flex w-[300px] h-[30px] mt-[20px]">
          <p className="w-full text-center">请使用微信扫码登录</p>
        </div>
      </div>
    </main>
  </>
}