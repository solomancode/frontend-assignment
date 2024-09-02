import { ChangeEvent, FunctionComponent, useCallback } from "react";

/*
 * The InputProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the InputProps interface
 */

interface InputProps {
  value: string;
  placholder: string;
  onChange: (value: string) => void;
}

const Input: FunctionComponent<InputProps> = (props) => {
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      props.onChange(e.target.value);
    },
    [props],
  );

  return (
    <input
      placeholder={props.placholder}
      value={props.value}
      onChange={onChange}
    />
  );
};

export default Input;
