import { FunctionComponent, useEffect, useMemo } from "react";

// Components
import Input from "./components/Input";
import List from "./components/List";
import { useCities } from "./hooks/useCities";
import { useSearch } from "./hooks/useSearch";

const Task2: FunctionComponent = () => {
  const { search, setSearch } = useSearch();
  const { cities, filter } = useCities();

  const list = useMemo(() => {
    return cities.map((city) => <pre>{city.name}</pre>);
  }, [cities]);

  useEffect(() => {
    filter(
      (city) => city.name.toLowerCase().match(search.toLowerCase()) !== null,
    );
  }, [search, filter]);

  return (
    <div>
      <Input placholder="Enter City Name" value={search} onChange={setSearch} />
      <br />
      <List list={list} />
    </div>
  );
};

export default Task2;
