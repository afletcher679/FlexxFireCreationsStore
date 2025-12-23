import { useState } from "react";
import type { Creation, GalleryImage } from '~/creation';
import DefaultImage from '../default_featured_image';

export default function Product_Image_Gallery({ creation } : { creation : Creation}){ 
    const images = creation.gallery_images.length ? creation.gallery_images : [DefaultImage];
    const featuredImage = images.find( x => x.featured === true) || images[0];
    
    const [imageIndex, setImageIndex] = useState(images.indexOf(featuredImage));

    const selectedImage = images[imageIndex];

    const remainingImages = images.filter((_, index) => index !== imageIndex);
    return(
        <div className="flex gap-2 w-full h-full">
            {/* Thumbnails */}
            <div className="flex flex-col gap-2 overflow-hidden w-1/4">
                {images.length > 1 && remainingImages.map((gallery_image: GalleryImage, index: number) => (
                    <button
                        key={gallery_image.id}
                        className="flex-1"
                        onClick={() => {
                            setImageIndex(index >= imageIndex ? index + 1 : index);
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
            {/* Selected image */}
            <img src={selectedImage.image} alt={`${creation.name} image ${imageIndex}`} className="w-3/4 w-full object-cover rounded-lg aspect-square overflow-hidden"/>
        </div>
    )
}