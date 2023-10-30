// This component doesn't accept children
const Component: React.FC = () => {
  return <div />;
};

// Errors! But it didn't use to...
<Component>123</Component>;
