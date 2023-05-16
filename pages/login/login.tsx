import Head from "next/head";
import {useCreateReducer} from "@/hooks/useCreateReducer";
import {LoginInitialState, initialState} from "@/pages/login/login.state";
import { IconBrandWechat } from "@tabler/icons-react";
import {useEffect} from "react";
import { v4 as uuid } from "uuid";
import Script from "next/script";

export default function Login( props: any ) {
  const contextValue = useCreateReducer<LoginInitialState>({
    initialState,
  });
  const {
    state: {
      lightMode,
    },
    dispatch,
  } = contextValue;

  async function login() {
    const redirect = encodeURIComponent('https://gpt.mshutech.com/verify');
    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxbfeea335db304f5b&redirect_uri=${redirect}&response_type=code&scope=snsapi_userinfo&state=${uuid()}#wechat_redirect`
  }

  useEffect(() => {
    setTimeout(() => {
      (window as any).WxLogin({
        self_redirect:false,
        id:"login_container",
        appid: "wx6b7ab2a1331e2aed",
        scope: "snsapi_login",
        redirect_uri: "https://gpt.mshutech.com/verify",
        state: uuid()
      });
    }, 300);
  }, [])

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
    <Script src="https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js" />
    <main
      className={`flex h-screen w-screen flex-col text-sm bg-[#ffffff]`}
    >
      <div id="login_container" className="flex flex-col h-screen w-screen justify-center items-center max-sm:hidden">
      </div>
      <div className="flex flex-col h-screen w-screen justify-center items-center sm:hidden">
        <IconBrandWechat size={100} onClick={login} />
        <p>微信登录</p>
      </div>
    </main>
  </>
}