import React, { useState } from 'react';
import { ImagePlaceholder } from './ImagePlaceholder.jsx';

export const SafeImage = ({ src, alt, className = '', width, height, placeholder = null }) => {
  const [error, setError] = useState(false);
  if (error) {
    return placeholder ?? <ImagePlaceholder alt={alt} className={className} />;
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      width={width}
      height={height}
      onError={() => setError(true)}
    />
  );
};