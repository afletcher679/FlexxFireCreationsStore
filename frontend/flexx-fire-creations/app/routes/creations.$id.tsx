import Product_Image_Gallery from "../components/product_image_gallery";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import CreationDetailedInformation from "~/components/creation_detailed_information";
import Header from "~/components/header";
import CreationOrderForm from "~/components/product_order_form";
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
        <div className="mx-4 mt-2">
          <div className="flex gap-4 h-1/3 h-full">
            <div className="w-2/3">
            <Product_Image_Gallery creation={creation}/>
            </div>

            <div className="w-1/3 flex flex-col h-1/3 h-full gap-2 ms-2">
              <CreationOrderForm creation={creation}/>
            </div>
          </div>
          <CreationDetailedInformation creationDescription={creation.full_description}/>
        </div>
      </>
    
    )
}