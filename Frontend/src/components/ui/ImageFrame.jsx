import { useState } from 'react';

const fallbackImage = '/brand/vatsal-nathwani.jpg';

export default function ImageFrame({ src, alt, className = '', ...props }) {
    const [imageSource, setImageSource] = useState(src);

    return (
        <div className={`h-full w-full overflow-hidden bg-black-light ${className}`}>
            <img
                src={imageSource}
                alt={alt}
                onError={() => setImageSource(fallbackImage)}
                {...props}
                className="h-full w-full object-cover object-center"
            />
        </div>
    );
}