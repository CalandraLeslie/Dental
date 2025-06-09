import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProcedureModal.css';

interface ProcedureType {
  id: number;
  title: string;
  image: string;
  price: string;
  description: string;
  details: string[];
  duration?: string;
}

interface ProcedureModalProps {
  procedure: ProcedureType;
  onClose: () => void;
}

const ProcedureModal: React.FC<ProcedureModalProps> = ({ procedure, onClose }) => {
  // Add ESC key handler for closing the modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);
  
  // Handle content click to prevent closing
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  
  return (
    <div className="procedure-modal-overlay" onClick={onClose}>
      <div className="procedure-modal-content" onClick={handleContentClick}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <span aria-hidden="true">×</span>
        </button>
        
        <div className="modal-header">
          <img src={procedure.image} alt={procedure.title} />
          <div className="modal-title-container">
            <h2>{procedure.title}</h2>
            <div className="procedure-price">{procedure.price}</div>
          </div>
        </div>
        
        <div className="modal-body">
          <p className="procedure-description">{procedure.description}</p>
          
          <h3>What to Expect:</h3>
          <ul className="procedure-details-list">
            {procedure.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          
          {procedure.duration && (
            <p className="procedure-duration">
              <strong>Typical Duration:</strong> {procedure.duration}
            </p>
          )}
        </div>
        
        <div className="modal-footer">
          <Link to="/appointment" className="btn btn-primary">
            Book Appointment
          </Link>
          <button type="button" className="btn btn-outline" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProcedureModal;