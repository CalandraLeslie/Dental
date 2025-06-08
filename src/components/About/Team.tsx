import React from 'react';

const Team: React.FC = () => {
    const teamMembers = [
        {
            name: 'Dr. John Smith',
            role: 'Dentist',
            bio: 'Dr. Smith has over 10 years of experience in general dentistry and is passionate about providing quality care to his patients.',
            image: '/assets/team/dr_john_smith.jpg'
        },
        {
            name: 'Dr. Jane Doe',
            role: 'Orthodontist',
            bio: 'Dr. Doe specializes in orthodontics and has helped countless patients achieve their dream smiles.',
            image: '/assets/team/dr_jane_doe.jpg'
        },
        {
            name: 'Emily Johnson',
            role: 'Dental Hygienist',
            bio: 'Emily is dedicated to educating patients on oral health and ensuring a comfortable cleaning experience.',
            image: '/assets/team/emily_johnson.jpg'
        }
    ];

    return (
        <div style={{ backgroundColor: 'rgb(248, 249, 250)', padding: '20px' }}>
            <h2 style={{ color: 'rgb(41, 128, 185)' }}>Meet Our Team</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                {teamMembers.map((member, index) => (
                    <div key={index} style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', margin: '10px', padding: '15px', width: '250px' }}>
                        <img src={member.image} alt={member.name} style={{ width: '100%', borderRadius: '8px' }} />
                        <h3 style={{ color: 'rgb(44, 62, 80)' }}>{member.name}</h3>
                        <h4 style={{ color: 'rgb(46, 204, 113)' }}>{member.role}</h4>
                        <p style={{ color: 'rgb(44, 62, 80)' }}>{member.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;