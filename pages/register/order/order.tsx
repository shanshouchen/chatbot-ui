import Head from "next/head";
import {useCreateReducer} from "@/hooks/useCreateReducer";
import {LoginInitialState, initialState} from "@/pages/login/login.state";
import {useState} from "react";
import {Button, Input, message} from 'antd';
import {useFetch} from "@/hooks/useFetch";
import {useRouter} from "next/router";

interface Props {
  code: string;
}

interface Response {
  code: number;
  data: {
    state: number;
  },
  message: string;
}

export default function Login( props: Props ) {
  const { code } = props;
  const contextValue = useCreateReducer<LoginInitialState>({
    initialState,
  });
  const {
    state: {
      lightMode,
    },
    dispatch,
  } = contextValue;
  const [value, setValue] = useState('');
  const [messageApi, contextHolder] = message.useMessage();
  const [submitLoading, setSubmitLoading] = useState(false);
  const fetch = useFetch();
  const router = useRouter();
  async function register() {
    if (!value) {
      messageApi.warning('订单编号不能为空');
      return;
    }
    if (!code) {
      messageApi.warning('登录状态已失效');
      return;
    }
    setSubmitLoading(true);
    const data = await fetch.post<Response>('/api/user/sign_in', {
      body: {
        code,
        trade_no: value
      }
    });
    setSubmitLoading(false);
    if (data.code === 1 && data.data.state === 0) {
      await router.replace('/login');
      return;
    }
    messageApi.error(data.message);
  }


  return <>
    <Head>
      <title>账号开通</title>
      <meta name="description" content="ChatGPT but better." />
      <meta
        name="viewport"
        content="height=device-height ,width=device-width, initial-scale=1, user-scalable=no"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main
      className={`flex h-screen w-screen justify-center items-center flex-col text-sm bg-[#ffffff]`}
    >
      {contextHolder}
      <div className="flex w-96 h-12">
        <Input value={value} onChange={e => setValue(e.target.value)} type="text" placeholder="请输入订单编号" className="w-full h-full border-2 border-[#999] rounded-[10px] pl-4 pr-4 text-xl" />
      </div>
      <div className="flex w-96 h-12 mt-8">
        <Button onClick={register} type="primary" loading={submitLoading} className="w-full h-full bg-[#1677ff]">
          立即开通
        </Button>
      </div>
    </main>
  </>
}