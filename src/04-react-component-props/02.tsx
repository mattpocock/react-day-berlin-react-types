// Imagine you don't control this component

const Select = ({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <select value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
};

// Your code:

type Props = React.ComponentProps<typeof Select>;
