export type IUser = {
  name: string;
  email: string;
};

export type InitialStateProps = {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  user: IUser | null;
};
