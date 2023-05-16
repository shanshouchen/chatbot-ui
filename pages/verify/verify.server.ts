import {GetServerSideProps} from "next";
import {useFetch} from "@/hooks/useFetch";
import axios from "axios";
import {request} from "https";
import * as https from "https";

interface Response {
  code: number;
  data: {
    api_key: string;
  }
}

async function fetchLogin(code: string | string[]) {
  return await axios.post<Response>('https://gpt.mshutech.com/api/user/login', {
   code
  });
}


export const getServerSideProps: GetServerSideProps = async context => {
  const { query, res } = context;
  if (!query?.code) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
  try {
    const data = await fetchLogin(query.code);
    if (data.data.code === 1 && data.data.data.api_key) {
      res.setHeader('Set-Cookie', `api_key=${data.data.data.api_key}; Path=/;`)
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  } catch (err) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
};