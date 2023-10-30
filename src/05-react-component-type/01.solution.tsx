import React from "react";

type InputProps = React.JSX.IntrinsicElements["input"];

type InputComponent = React.ComponentType<InputProps>;

class MyNumberComponent extends React.Component<InputProps> {
  render(): React.ReactNode {
    return <input type="number" {...this.props} />;
  }
}

const inputs: Record<string, InputComponent> = {
  text: (props) => {
    return <input type="text" {...props} />;
  },
  number: MyNumberComponent,
};
