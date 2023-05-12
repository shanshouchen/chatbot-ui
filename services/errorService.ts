import { useMemo } from 'react';

import { ErrorMessage } from '@/types/error';

const useErrorService = () => {
  return {
    getModelsError: useMemo(
      () => (error: any) => {
        return !error
          ? null
          : ({
              title: '获取模型时出错。',
              code: error.status || 'unknown',
              messageLines: error.statusText
                ? [error.statusText]
                : ['请联系管理员(shanshouchen@gmail.com)'],
            } as ErrorMessage);
      },
      [],
    ),
  };
};

export default useErrorService;
