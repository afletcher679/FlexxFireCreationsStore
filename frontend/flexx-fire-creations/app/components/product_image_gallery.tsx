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
        <div className="flex flex-col gap-2 w-full h-full">
            {/* Selected image */}
            <div className="flex-1 min-h-0 rounded-lg overflow-hidden h-3/4">
                <img src={selectedImage.image} alt={`${creation.name} image ${imageIndex}`} className="w-full h-full object-contain rounded-lg"/>
            </div>
            {/* Thumbnails */}
            <div className="w-full flex gap-2 h-1/4 justify-center">
                {images.length > 1 &&
                remainingImages.map((gallery_image: GalleryImage, index: number) => (
                    <button
                        key={gallery_image.id}
                        className=""
                        onClick={() => {
                            setImageIndex(index >= imageIndex ? index + 1 : index);
                        }}
                    >
                        <img
                            key={gallery_image.id}
                            src={gallery_image.image}
                            className="w-full h-full rounded-md"
                        />
                    </button>
                ))}
            </div> 
        </div>
    )
}