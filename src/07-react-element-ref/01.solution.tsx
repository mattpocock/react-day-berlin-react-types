import React from "react";
import Select from "react-select";

type RefForSelect = React.ElementRef<typeof Select>;

const MyComponent = () => {
  const ref = React.useRef<RefForSelect>(null);

  return <Select ref={ref} />;
};
