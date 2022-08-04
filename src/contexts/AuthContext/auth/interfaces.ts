export type Login = {
  login: string;
  senha: string;
};

export type InitialStateProps = {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  user: Login | null;
};
