import React from 'react';
import './ProcedureCard.css';

interface ProcedureType {
  id: number;
  title: string;
  image: string;
  imageLink?: string; // We'll keep this in the interface but won't use it
  price: string;
  description: string;
  details: string[];
  duration?: string;
}

interface ProcedureCardProps {
  procedure: ProcedureType;
  onLearnMore: (procedure: ProcedureType) => void;
}

const ProcedureCard: React.FC<ProcedureCardProps> = ({ procedure, onLearnMore }) => {
  return (
    <div className="procedure-card">
      <div className="procedure-card-image">
        {/* Remove the link wrapper and just show the image */}
        <img src={procedure.image} alt={procedure.title} />
      </div>
      <div className="procedure-card-content">
        <h3>{procedure.title}</h3>
        <div className="procedure-card-price">{procedure.price}</div>
        <p>{procedure.description}</p>
        <button 
          className="btn btn-primary"
          onClick={() => onLearnMore(procedure)}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ProcedureCard;