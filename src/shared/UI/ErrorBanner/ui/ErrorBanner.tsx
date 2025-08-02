type TProps = {
  error: string;
};

export const ErrorBanner = ({ error }: TProps) => {
  return <div>{error}</div>;
};
