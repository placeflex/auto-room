interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="max-w-screen-xl w-full m-auto pl-5 pr-5">{children}</div>;
};
