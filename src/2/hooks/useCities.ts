import { useCallback, useState } from "react";

const CITIES = [
  { name: "Tokyo" },
  { name: "New York" },
  { name: "London" },
  { name: "Paris" },
  { name: "Beijing" },
  { name: "Mumbai" },
  { name: "São Paulo" },
  { name: "Los Angeles" },
  { name: "Moscow" },
  { name: "Cairo" },
  { name: "Bangkok" },
  { name: "Istanbul" },
  { name: "Buenos Aires" },
  { name: "Jakarta" },
  { name: "Mexico City" },
  { name: "Sydney" },
  { name: "Lagos" },
  { name: "Seoul" },
  { name: "Shanghai" },
  { name: "Karachi" },
  { name: "Delhi" },
  { name: "Rio de Janeiro" },
  { name: "Kuala Lumpur" },
  { name: "Lima" },
  { name: "Nairobi" },
  { name: "Dubai" },
  { name: "Toronto" },
  { name: "Berlin" },
  { name: "Madrid" },
  { name: "Rome" },
  { name: "Vienna" },
  { name: "Copenhagen" },
  { name: "Stockholm" },
  { name: "Amsterdam" },
  { name: "Cape Town" },
  { name: "Santiago" },
  { name: "Bogotá" },
  { name: "Hong Kong" },
  { name: "Singapore" },
  { name: "Barcelona" },
  { name: "Munich" },
  { name: "Zurich" },
  { name: "Hanoi" },
  { name: "Tehran" },
  { name: "Manila" },
  { name: "Buenos Aires" },
  { name: "Casablanca" },
  { name: "Dublin" },
  { name: "Prague" },
  { name: "Warsaw" },
];

interface City {
  name: string;
}

export const useCities = () => {
  const [cities, setCities] = useState<City[]>(CITIES);

  const filter = useCallback((fn: (city: City) => boolean) => {
    const filtered = CITIES.filter(fn);
    setCities(filtered);
  }, []);

  const reset = useCallback(() => {
    setCities(CITIES);
  }, []);

  return { cities, filter, reset };
};

