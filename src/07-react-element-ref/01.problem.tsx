import React from "react";
import Select from "react-select";

type RefForSelect = HTMLSelectElement;

const MyComponent = () => {
  const ref = React.useRef<RefForSelect>(null);

  return <Select ref={ref} />;
};
