import { ActionType } from '@/hooks/useCreateReducer';
import {createContext, Dispatch} from 'react';
import { OrderInitialState } from './order.state';

export interface OrderContextProps {
  state: OrderInitialState;
  dispatch: Dispatch<ActionType<OrderInitialState>>;
}

const OrderContext = createContext<OrderContextProps>(undefined!);

export default OrderContext;