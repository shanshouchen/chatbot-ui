import {GetServerSideProps} from "next";

export const getServerSideProps: GetServerSideProps = async context => {
  const { query } = context;
  if (!query?.code) {
    return {
      redirect: {
        destination: '/register/login',
        permanent: false,
      },
    }
  }
  return {
    props: {
      code: query.code,
    }
  }
}