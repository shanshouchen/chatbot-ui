import { useMemo } from 'react';

import { useTranslation } from 'next-i18next';

import { ErrorMessage } from '@/types/error';

const useErrorService = () => {
  const { t } = useTranslation('chat');

  return {
    getModelsError: useMemo(
      () => (error: any) => {
        return !error
          ? null
          : ({
              title: t('Error fetching models.'),
              code: error.status || 'unknown',
              messageLines: error.statusText
                ? [error.statusText]
                : ['请联系管理员(shanshouchen@gmail.com)'],
            } as ErrorMessage);
      },
      [t],
    ),
  };
};

export default useErrorService;
