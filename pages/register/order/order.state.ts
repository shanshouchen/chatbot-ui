export interface OrderInitialState {
  loading: boolean;
  lightMode: 'light' | 'dark';
}

export const initialState: OrderInitialState = {
  loading: false,
  lightMode: 'light',
};