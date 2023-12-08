import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Image = ({src, width="auto", height="auto", alt, className="", styles={}}) => {
  return (
    <LazyLoadImage src={src} width={width} height={height} alt={alt} className={className} style={styles}/>
  )
}

export default Image