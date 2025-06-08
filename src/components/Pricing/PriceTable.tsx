import React from 'react';
import './PriceTable.css'; // Assuming you will create a CSS file for styling

interface PriceItem {
  service: string;
  description: string;
  price: number;
  duration?: string;
}

interface PriceTableProps {
  category: string;
  items: PriceItem[];
}

const PriceTable: React.FC<PriceTableProps> = ({ category, items }) => {
  return (
    <div className="price-table">
      <h3 className="price-category" style={{ color: 'rgb(41, 128, 185)' }}>{category}</h3>
      <div className="price-list">
        {items.map((item, index) => (
          <div key={index} className="price-item">
            <div className="service-info">
              <h4 className="service-name" style={{ color: 'rgb(44, 62, 80)' }}>{item.service}</h4>
              <p className="service-description">{item.description}</p>
              {item.duration && <span className="service-duration">{item.duration}</span>}
            </div>
            <div className="service-price" style={{ color: 'rgb(44, 62, 80)' }}>
              ${item.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceTable;