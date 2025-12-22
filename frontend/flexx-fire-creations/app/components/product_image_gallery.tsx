import { useState } from "react";
import type { Creation, GalleryImage } from '~/creation';

const defaultImage: GalleryImage = { id: 1, image: "/coming_soon_flame.jpg" };

export default function Product_Image_Gallery({ creation } : { creation : Creation}){ 
    const images = creation.gallery_images.length ? creation.gallery_images : [defaultImage];
    const [imageId, setImageId] = useState(0);

    const selectedImage = images[imageId];

    const remainingImages = images.filter((_, index) => index !== imageId);
    return(
        <div className="flex flex-col gap-4 w-full">
            {/* Selected image */}
            <img src={selectedImage.image} alt={`${creation.name} image ${imageId}`} className="w-full object-cover rounded-lg aspect-square"/>

            {/* Thumbnails */}
            <div className="flex gap-2 w-full overflow-hidden">
                {images.length > 1 && remainingImages.map((gallery_image: GalleryImage, index: number) => (
                    <button
                        key={gallery_image.id}
                        className="flex-1"
                        onClick={() => {
                            setImageId(index >= imageId ? index + 1 : index);
                        }}
                        >
                            <img
                                src={gallery_image.image}
                                alt={`${creation.name} image ${index}`}
                                className={"w-full object-cover cursor-pointer aspect-square rounded-md"}
                        
                            />
                        </button>
                    
                ))}
            </div>
        </div>
    )
}