import { useState } from "react";
import type { Creation, GalleryImage } from '~/creation';

const defaultImage: GalleryImage = { id: 1, image: "/coming_soon_flame.jpg" };
export default function Product_Image_Gallery({ creation } : { creation : Creation}){ 
        const images = creation.gallery_images.length ? creation.gallery_images : [defaultImage];
    const [imageId, setImageId] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[imageId])

    console.log("creation", creation)
    console.log("selectedImage", selectedImage)
    const remainingImages = images.filter((_, index) => index !== imageId);
    return(
        <div>
            <img src={selectedImage.image} alt={`${creation.name} image ${imageId}`} className="w-full h-full object-cover"/>
            <div className="flex">
                {images.length > 1 && remainingImages.map((gallery_image: GalleryImage, index: number) => (
                    <img
                        key={index}
                        src={gallery_image.image}
                        alt={`${creation.name} image ${index}`}
                        className={"w-20 h-20 object-cover cursor-pointer"}
                        onClick={() => {
                            setImageId(index);
                            setSelectedImage(gallery_image);
                        }}
                    />
                ))}
            </div>
        </div>
    )
}