import type { Route } from "./+types/catalog";
import { useQuery } from "@tanstack/react-query";

type Creation = {
  id: number;
  name: string;
};

export default function Catalog() {
    const { data, isLoading, isError } = useQuery<Creation[]>({
    queryKey: ["creations"],
    queryFn: async () => {
      const res = await fetch("http://127.0.0.1:8000/api/creations/");
      if (!res.ok) throw new Error("Failed to fetch");
      return await res.json();
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading catalog</p>;

  return (
    <>
    <h1>This is the Catalog page</h1>
      <ul>
        {(data ?? []).map((creation) => (
        <li key={creation.id}>{creation.id} - {creation.name}</li>
      ))}
    </ul>
    </>
  );
}