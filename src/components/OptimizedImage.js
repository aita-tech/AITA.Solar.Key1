import React, { useState, useRef } from 'react';
import useInViewport from '../hooks/useInViewport';

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder = 'blur',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [viewportRef, isInViewport] = useInViewport();
  const imgRef = useRef();

  // Generate srcSet for responsive images
  const generateSrcSet = (baseSrc) => {
    if (!baseSrc) return '';
    const extension = baseSrc.split('.').pop();
    const baseName = baseSrc.replace(`.${extension}`, '');
    
    return [
      `${baseName}-480w.${extension} 480w`,
      `${baseName}-768w.${extension} 768w`,
      `${baseName}-1024w.${extension} 1024w`,
      `${baseName}-1280w.${extension} 1280w`,
      `${baseName}-1920w.${extension} 1920w`,
    ].join(', ');
  };

  const shouldLoad = priority || isInViewport;

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    console.warn(`Failed to load image: ${src}`);
  };

  return (
    <div 
      ref={viewportRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Placeholder */}
      {!isLoaded && !hasError && placeholder === 'blur' && (
        <div 
          className="absolute inset-0 bg-gray-200 loading-skeleton"
          style={{ width, height }}
        />
      )}
      
      {/* Main Image */}
      {shouldLoad && !hasError && (
        <img
          ref={imgRef}
          src={src}
          srcSet={generateSrcSet(src)}
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}
      
      {/* Error fallback */}
      {hasError && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500"
          style={{ width, height }}
        >
          <span className="text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage; 