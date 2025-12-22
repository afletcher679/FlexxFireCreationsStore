import Product_Image_Gallery from "../components/product_image_gallery";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import Header from "~/components/header";
import type { Creation } from '~/creation';

export async function fetchCreation(id: string) {
  const res = await fetch(`http://127.0.0.1:8000/api/creations/${id}/`);

  if (!res.ok) {
    throw new Error("Failed to fetch creation");
  }

  return res.json();
}

export default function Product_Details(){
    
  const { id } = useParams();

  const { data : creation, isLoading, isError } = useQuery<Creation>({
    queryKey: ["creation", id],
    queryFn: () => fetchCreation(id!),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError || !creation) return <p>Error loading product</p>;

    return(
      <>
        <Header/>
        <div className="flex gap-4 ms-2 mt-2">
          <div className="w-1/2">
          <Product_Image_Gallery creation={creation}/>
          </div>

          <div className="w-1/2">
            <h1>{creation.name}</h1>
            <p>{creation.description}</p>
            <p>{creation.price}</p>
          </div>
        </div>
      </>
    
    )
}