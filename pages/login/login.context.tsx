import { ActionType } from '@/hooks/useCreateReducer';
import {createContext, Dispatch} from 'react';
import { LoginInitialState } from './login.state';

export interface LoginContextProps {
  state: LoginInitialState;
  dispatch: Dispatch<ActionType<LoginInitialState>>;
}

const LoginContext = createContext<LoginContextProps>(undefined!);

export default LoginContext;