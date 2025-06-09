import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Pricing.css';
import ProcedureCard from '../components/Pricing/ProcedureCard';
import ProcedureModal from '../components/Pricing/ProcedureModal';

interface ProcedureType {
  id: number;
  title: string;
  image: string;
  imageLink?: string; // Add this property
  price: string;
  description: string;
  details: string[];
  duration?: string;
}

const Pricing: React.FC = () => {
  const [activeSection, setActiveSection] = useState('preventive');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProcedure, setSelectedProcedure] = useState<ProcedureType | null>(null);
  
  // Update the procedures data with proper links to dental resources
  const procedures = {
    preventive: [
      {
        id: 1,
        title: "Regular Check-up",
        image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageLink: "https://www.mouthhealthy.org/all-topics-a-z/dental-visit",
        price: "$65",
        description: "Regular dental check-ups are essential for maintaining good oral health and preventing issues before they start.",
        details: [
          "Comprehensive oral examination",
          "Professional cleaning to remove plaque and tartar",
          "Oral cancer screening",
          "Personalized advice for home care"
        ],
        duration: "30-45 minutes"
      },
      {
        id: 2,
        title: "Professional Cleaning",
        image: "https://images.pexels.com/photos/4270361/pexels-photo-4270361.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageLink: "https://www.mouthhealthy.org/all-topics-a-z/cleaning",
        price: "$85",
        description: "Professional dental cleaning removes plaque and tartar that regular brushing can't reach.",
        details: [
          "Removal of plaque and tartar build-up",
          "Thorough teeth polishing",
          "Stain removal",
          "Prevents gum disease and tooth decay"
        ],
        duration: "45-60 minutes"
      },
      {
        id: 3,
        title: "Dental Sealants",
        image: "https://images.pexels.com/photos/3881458/pexels-photo-3881458.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageLink: "https://www.mouthhealthy.org/all-topics-a-z/sealants",
        price: "$40 per tooth",
        description: "Dental sealants are thin protective coatings applied to the chewing surfaces of back teeth to prevent decay.",
        details: [
          "Quick and painless application",
          "Creates a protective shield against bacteria",
          "Most effective for children and teenagers",
          "Can last several years with proper care"
        ],
        duration: "15-30 minutes"
      }
    ],
    restorative: [
      {
        id: 4,
        title: "Composite Filling",
        image: "https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageLink: "https://www.mouthhealthy.org/all-topics-a-z/fillings",
        price: "$150 - $250",
        description: "Tooth-colored composite fillings restore decayed teeth while maintaining a natural appearance.",
        details: [
          "Matches your natural tooth color",
          "Bonds directly to tooth structure",
          "Requires less tooth removal than amalgam fillings",
          "Mercury-free alternative to traditional fillings"
        ],
        duration: "30-60 minutes"
      },
      {
        id: 5,
        title: "Dental Crown",
        image: "https://images.pexels.com/photos/298611/pexels-photo-298611.jpeg?auto=compress&cs=tinysrgb&w=800", // Toothbrush image
        imageLink: "https://www.colgate.com/en-us/oral-health/crowns-and-bridges/what-is-a-dental-crown",
        price: "$900 - $1,200",
        description: "Dental crowns are tooth-shaped caps placed over damaged teeth to restore shape, size, and strength.",
        details: [
          "Custom-made to match your natural teeth",
          "Protects weak teeth from breaking",
          "Restores severely worn or broken teeth",
          "Covers misshapen or discolored teeth"
        ],
        duration: "Two visits, 1-2 hours each"
      },
      {
        id: 6,
        title: "Root Canal Therapy",
        image: "https://images.pexels.com/photos/3779756/pexels-photo-3779756.jpeg?auto=compress&cs=tinysrgb&w=800", // Dental tools image
        imageLink: "https://www.aae.org/patients/root-canal-treatment/what-is-a-root-canal/",
        price: "$700 - $900",
        description: "Root canal treatment is needed when the pulp inside your tooth becomes infected or inflamed.",
        details: [
          "Removes infected or damaged pulp",
          "Alleviates tooth pain",
          "Saves your natural tooth",
          "Prevents spread of infection"
        ],
        duration: "1-2 hours per visit, usually 1-2 visits"
      }
    ],
    cosmetic: [
      {
        id: 7,
        title: "Teeth Whitening",
        image: "https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageLink: "https://www.mouthhealthy.org/all-topics-a-z/whitening",
        price: "$299",
        description: "Professional teeth whitening brightens your smile by removing stains and discoloration.",
        details: [
          "Visible results in just one visit",
          "Significantly whiter than over-the-counter products",
          "Customized treatment for optimal results",
          "Safe and monitored by dental professionals"
        ],
        duration: "60-90 minutes"
      },
      {
        id: 8,
        title: "Porcelain Veneers",
        image: "https://images.pexels.com/photos/3762940/pexels-photo-3762940.jpeg?auto=compress&cs=tinysrgb&w=800", // Beautiful smile image
        imageLink: "https://aacd.com/veneers",
        price: "$900 - $1,200 per tooth",
        description: "Porcelain veneers are thin shells custom-made to cover the front surface of teeth to improve appearance.",
        details: [
          "Transforms smile appearance dramatically",
          "Corrects chips, stains, gaps, or misaligned teeth",
          "Highly resistant to staining",
          "Mimics light-reflecting properties of natural teeth"
        ],
        duration: "Two visits, 1-2 hours each"
      },
      {
        id: 9,
        title: "Dental Bonding",
        image: "https://images.pexels.com/photos/3845548/pexels-photo-3845548.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageLink: "https://www.mouthhealthy.org/all-topics-a-z/bonding",
        price: "$200 - $400 per tooth",
        description: "Dental bonding uses tooth-colored resin to improve the appearance of teeth with minor imperfections.",
        details: [
          "Repairs chipped or cracked teeth",
          "Closes small gaps between teeth",
          "Improves shape of irregular teeth",
          "Quick, usually completed in one visit"
        ],
        duration: "30-60 minutes per tooth"
      }
    ],
    specialty: [
      {
        id: 10,
        title: "Dental Implant",
        image: "https://images.pexels.com/photos/4269696/pexels-photo-4269696.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageLink: "https://www.mouthhealthy.org/all-topics-a-z/implants",
        price: "$2,500 - $3,500",
        description: "Dental implants are titanium posts surgically placed into the jawbone to replace missing teeth roots.",
        details: [
          "Permanent solution for missing teeth",
          "Preserves jawbone integrity",
          "Looks and functions like natural teeth",
          "Doesn't affect adjacent healthy teeth"
        ],
        duration: "Multiple visits over 3-6 months"
      },
      {
        id: 11,
        title: "Invisalign® Treatment",
        image: "https://images.pexels.com/photos/6724355/pexels-photo-6724355.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageLink: "https://www.aaoinfo.org/orthodontic-treatment/types-of-appliances/clear-aligners/",
        price: "$3,500 - $6,000",
        description: "Invisalign® clear aligners straighten teeth discreetly without the need for traditional metal braces.",
        details: [
          "Nearly invisible orthodontic treatment",
          "Removable for eating and cleaning",
          "Custom-made for your unique needs",
          "Gradually shifts teeth into proper position"
        ],
        duration: "12-18 months on average"
      },
      {
        id: 12,
        title: "Wisdom Tooth Extraction",
        image: "https://images.pexels.com/photos/4270368/pexels-photo-4270368.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageLink: "https://www.mouthhealthy.org/all-topics-a-z/wisdom-teeth",
        price: "$300 - $500 per tooth",
        description: "Wisdom tooth extraction is the removal of the third molars to prevent or address pain, infection, or crowding.",
        details: [
          "Prevents potential alignment issues",
          "Removes impacted wisdom teeth",
          "Alleviates pain and discomfort",
          "Prevents damage to adjacent teeth"
        ],
        duration: "30-60 minutes"
      }
    ]
  };
  
  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['preventive', 'restorative', 'cosmetic', 'specialty', 'insurance'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Open modal with procedure details
  const openProcedureModal = (procedure: ProcedureType) => {
    setSelectedProcedure(procedure);
    setIsModalOpen(true);
    // Disable body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  // Close modal
  const closeProcedureModal = () => {
    setIsModalOpen(false);
    setSelectedProcedure(null);
    // Restore body scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="pricing-page">
      {/* Hero section */}
      <section className="pricing-hero">
        <img 
          src="https://images.pexels.com/photos/305564/pexels-photo-305564.jpeg" 
          alt="Modern dental clinic reception" 
          className="hero-bg"
        />
        <div className="container">
          <h1>Our Dental Services</h1>
          <p className="lead">Quality dental care with transparent pricing</p>
          <Link to="/appointment" className="btn btn-cta">Schedule Consultation</Link>
        </div>
      </section>

      {/* Sticky navigation */}
      <nav className="pricing-nav">
        <div className="container">
          <ul className="pricing-nav-list">
            <li className="pricing-nav-item">
              <a 
                href="#preventive" 
                className={`pricing-nav-link ${activeSection === 'preventive' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('preventive'); }}
              >
                Preventive Care
              </a>
            </li>
            <li className="pricing-nav-item">
              <a 
                href="#restorative" 
                className={`pricing-nav-link ${activeSection === 'restorative' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('restorative'); }}
              >
                Restorative
              </a>
            </li>
            <li className="pricing-nav-item">
              <a 
                href="#cosmetic" 
                className={`pricing-nav-link ${activeSection === 'cosmetic' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('cosmetic'); }}
              >
                Cosmetic
              </a>
            </li>
            <li className="pricing-nav-item">
              <a 
                href="#specialty" 
                className={`pricing-nav-link ${activeSection === 'specialty' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('specialty'); }}
              >
                Specialty
              </a>
            </li>
            <li className="pricing-nav-item">
              <a 
                href="#insurance" 
                className={`pricing-nav-link ${activeSection === 'insurance' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('insurance'); }}
              >
                Insurance
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Preventive Care Section */}
      <section id="preventive" className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Preventive Care</h2>
            <p className="section-subtitle">Regular check-ups and preventive treatments to maintain oral health</p>
          </div>
          
          {/* Procedure cards for Preventive section */}
          <div className="procedures-grid">
            {procedures.preventive.map(procedure => (
              <ProcedureCard 
                key={procedure.id}
                procedure={procedure}
                onLearnMore={openProcedureModal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Restorative Section */}
      <section id="restorative" className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Restorative Dentistry</h2>
            <p className="section-subtitle">Solutions to restore damaged teeth and replace missing teeth</p>
          </div>
          
          {/* Procedure cards for Restorative section */}
          <div className="procedures-grid">
            {procedures.restorative.map(procedure => (
              <ProcedureCard 
                key={procedure.id}
                procedure={procedure}
                onLearnMore={openProcedureModal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cosmetic Section */}
      <section id="cosmetic" className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Cosmetic Dentistry</h2>
            <p className="section-subtitle">Treatments to enhance the appearance of your smile</p>
          </div>
          
          {/* Procedure cards for Cosmetic section */}
          <div className="procedures-grid">
            {procedures.cosmetic.map(procedure => (
              <ProcedureCard 
                key={procedure.id}
                procedure={procedure}
                onLearnMore={openProcedureModal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section id="specialty" className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Specialty Services</h2>
            <p className="section-subtitle">Advanced dental procedures for complex needs</p>
          </div>
          
          {/* Procedure cards for Specialty section */}
          <div className="procedures-grid">
            {procedures.specialty.map(procedure => (
              <ProcedureCard 
                key={procedure.id}
                procedure={procedure}
                onLearnMore={openProcedureModal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section id="insurance" className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Insurance & Payment Options</h2>
            <p className="section-subtitle">We work with most major insurance providers</p>
          </div>
          
          <div className="insurance-icons">
            <div className="insurance-icon-item">
              <a href="https://www.deltadental.com/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://images.pexels.com/photos/3845727/pexels-photo-3845727.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Dental Insurance" 
                  className="insurance-icon"
                />
                <p>Dental Plans</p>
              </a>
            </div>
            <div className="insurance-icon-item">
              <a href="https://www.cigna.com/individuals-families/plans-services/dental-insurance-plans/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://images.pexels.com/photos/4269693/pexels-photo-4269693.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Dental Coverage" 
                  className="insurance-icon"
                />
                <p>Dental Coverage</p>
              </a>
            </div>
          </div>
          
          <div className="accepted-plans">
            <h3>Accepted Insurance Providers:</h3>
            <ul className="plans-list">
              <li>Delta Dental</li>
              <li>Aetna</li>
              <li>Blue Cross Blue Shield</li>
              <li>MetLife</li>
              <li>Cigna</li>
              <li>Guardian</li>
            </ul>
          </div>
          
          <div className="payment-options">
            <h3>We Accept:</h3>
            <p>All major credit cards, cash, personal checks, and flexible payment plans. We also accept HSA and FSA accounts for eligible services.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready for Your Smile Makeover?</h2>
          <p className="cta-text">Book your appointment today and discuss your treatment options with our experts.</p>
          <Link to="/appointment" className="btn-cta">Schedule Appointment</Link>
        </div>
      </section>
      
      {/* Modal for procedure details */}
      {isModalOpen && selectedProcedure && (
        <ProcedureModal 
          procedure={selectedProcedure} 
          onClose={closeProcedureModal} 
        />
      )}
    </div>
  );
};

export default Pricing;