import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface ImageProps{
  src: string;
  width?: string | number;
  height?: string | number;
  alt: string;
  className?: string;
  styles?: any;
}

const Image: React.FC<ImageProps> = ({src, width="auto", height="auto", alt, className="", styles={}}) => {
  return (
    <LazyLoadImage src={src} width={width} height={height} alt={alt} className={className} style={styles}/>
  )
}

export default Image