import {useCreateReducer} from "@/hooks/useCreateReducer";
import Head from "next/head";
import {initialState, VerifyInitialState} from "@/pages/verify/verify.state";

export default function Verify() {
  const contextValue = useCreateReducer<VerifyInitialState>({
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
      className={`flex h-screen w-screen flex-col text-sm bg-[#ffffff]`}
    >
      <div className="flex flex-col h-screen w-screen justify-center items-center max-sm:hidden">
      </div>
    </main>
  </>
}