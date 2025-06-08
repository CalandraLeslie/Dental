import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServicePreview.css';

interface ServicePreviewProps {
  image: string;
  fallbackImage?: string;
  title: string;
  description: string;
  link: string;
}

const ServicePreview: React.FC<ServicePreviewProps> = ({ 
  image, 
  fallbackImage, 
  title, 
  description, 
  link 
}) => {
  const [imgSrc, setImgSrc] = useState<string>(image);
  const [imgError, setImgError] = useState<boolean>(false);

  const handleImageError = () => {
    if (!imgError && fallbackImage) {
      setImgSrc(fallbackImage);
      setImgError(true);
    }
  };

  return (
    <div className="service-preview">
      <div className="service-image">
        <img 
          src={imgSrc} 
          alt={title} 
          onError={handleImageError}
        />
      </div>
      <div className="service-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link} className="service-link">
          Learn More <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  );
};

export default ServicePreview;