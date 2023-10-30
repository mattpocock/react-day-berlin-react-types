// React.FC used to return React.ReactElement...
const Component1 = (): React.ReactElement => {
  return 123;
};

// Now, it returns React.ReactNode:
const Component2: React.FC = () => {
  return 123;
};
