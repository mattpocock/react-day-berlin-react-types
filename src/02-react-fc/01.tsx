// Component without props
const Component: React.FC = () => {
  return <div />;
};

// Component WITH props:
const Button: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return <button>{children}</button>;
};

// Gives you defaultProps...
Button.defaultProps;

// ...and displayName!
Button.displayName;
