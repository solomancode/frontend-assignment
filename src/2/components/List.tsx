import { FunctionComponent, ReactNode, useMemo } from "react";

// Components
import Item from "./Item";

/*
 * The ListProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ListProps interface
 */

interface ListProps {
  list: ReactNode[];
}

const List: FunctionComponent<ListProps> = (props) => {
  const items = useMemo(() => {
    return props.list.map((node, i) => <Item key={i}>{node}</Item>);
  }, [props.list]);

  return <ul className="list">{items}</ul>;
};

export default List;
