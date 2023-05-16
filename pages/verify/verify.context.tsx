import { ActionType } from '@/hooks/useCreateReducer';
import {createContext, Dispatch} from 'react';
import { VerifyInitialState } from './verify.state';

export interface VerifyContextProps {
  state: VerifyInitialState;
  dispatch: Dispatch<ActionType<VerifyInitialState>>;
}

const VerifyContext = createContext<VerifyContextProps>(undefined!);

export default VerifyContext;