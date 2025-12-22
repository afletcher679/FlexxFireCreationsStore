import Header from "~/components/header";
import type { Route } from "./+types/catalog";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "~/components/product_card";

import type { Creation } from '~/creation';

export default function Catalog() {
    const { data, isLoading, isError } = useQuery<Creation[]>({
    queryKey: ["creations"],
    queryFn: async () => {
      const res = await fetch("http://127.0.0.1:8000/api/creations/");
      const json = await res.json();
      if (!res.ok) throw new Error("Failed to fetch");
      //console.log("API RESPONSE:", json);
      return json;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading catalog</p>;

  return (
    <>
    <Header />
      <ul className="flex flex-row">
        {(data ?? []).map((creation) => (
        <li key={creation.id} className="m-4"><ProductCard creation={creation} /></li>
      ))}
    </ul>
    </>
  );
}