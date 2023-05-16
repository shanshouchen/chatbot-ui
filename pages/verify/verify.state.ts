export interface VerifyInitialState {
  loading: boolean;
  lightMode: 'light' | 'dark';
}

export const initialState: VerifyInitialState = {
  loading: false,
  lightMode: 'light',
};