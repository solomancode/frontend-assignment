import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useSearch = () => {
  const [search, setSearch] = useState("");
  const [params] = useSearchParams();

  const normalized = useMemo(() => {
    return search.trim();
  }, [search]);

  return { search: normalized, setSearch, params };
};
