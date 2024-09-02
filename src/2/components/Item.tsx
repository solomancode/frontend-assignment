import { PropsWithChildren } from "react";

/*
 * The ItemProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ItemProps interface
 */

const Item = (props: PropsWithChildren<{}>) => {
  return <li>{props.children}</li>;
};

export default Item;
