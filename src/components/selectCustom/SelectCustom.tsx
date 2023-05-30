import Select from "react-select";
import { ContainerSelect } from "./SelectCustom.styled";
import makeAnimated from "react-select/animated";

export const SelectCustom = () => {
  const options = [
    { value: "red", label: "red" },
    { value: "green", label: "Green" },
    { value: "grey", label: "Grey" },
    { value: "blue", label: "Blue" },
    { value: "black", label: "Black" },
    { value: "brown", label: "Brown" },
  ];
  const animatedComponents = makeAnimated();
  return (
    <ContainerSelect>
      <Select
        options={options}
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            color:["red"],
            borderColor: state.isFocused ? "grey" : "#fff",
          }),
        }}
      />
    </ContainerSelect>
  );
};