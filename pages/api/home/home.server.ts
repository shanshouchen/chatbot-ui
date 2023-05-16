import {GetServerSideProps} from "next";
import {fallbackModelID, OpenAIModelID} from "@/types/openai";
import * as querystring from "querystring";
import axios from "axios";

function getUserInfo(key: string) {
  return axios.get(`https://gpt.mshutech.com/api/user/info?openid=${key}`);
}

export const getServerSideProps: GetServerSideProps = async context => {
  const _cookie: Record<string, any> = {};
  context.req.headers.cookie?.split(';').forEach(item => {
    const _cookieItem = querystring.parse(item.trim());
    Object.keys(_cookieItem).forEach(key => {
      _cookie[key] = _cookieItem[key];
    })
  })

  const apiKey = _cookie.api_key;
  console.log(apiKey);

  if (!apiKey) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
  let user = null;
  try {
    const data = await getUserInfo(apiKey);
    console.log(data.data);
    if (data.data) {
      user = data.data;
    }
  } catch (e) {
    user = null;
  }

  const defaultModelId =
    (process.env.DEFAULT_MODEL &&
      Object.values(OpenAIModelID).includes(
        process.env.DEFAULT_MODEL as OpenAIModelID,
      ) &&
      process.env.DEFAULT_MODEL) ||
    fallbackModelID;

  return {
    props: {
      serverSideApiKeyIsSet: !!process.env.OPENAI_API_KEY,
      defaultModelId,
      user,
    },
  };
};