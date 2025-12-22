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
        <div className="flex gap-4 ms-2 mt-2 h-1/3 h-full">
          <div className="w-1/2">
          <Product_Image_Gallery creation={creation}/>
          </div>

          <div className="w-1/2 flex flex-col gap-2 mx-2">
            <h1 className="text-2xl text-orange-500 font-zalando">{creation.name}</h1>
            <p className="text-semibold">${creation.price}</p>
            <div className="flex gap-2 w-1/4">
              <button className="bg-orange-200 rounded-md text-black w-1/4">-</button>
              <input className="border-solid border border-gray-300 rounded-md p-1 text-center w-1/2" type="number" value="1"/>
              <button className="bg-orange-200 rounded-md text-black w-1/4">+</button>
            </div>
            <div>
              <button className="bg-orange-500 text-white p-2 w-full rounded-md">Add to Cart</button>
            </div>
            

            <p>{creation.description}</p>
          </div>
        </div>
      </>
    
    )
}