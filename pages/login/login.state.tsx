export interface LoginInitialState {
  loading: boolean;
  lightMode: 'light' | 'dark';
}

export const initialState: LoginInitialState = {
  loading: false,
  lightMode: 'dark',
};