import React, { useState, useEffect } from 'react';
import Banner from '../Components/Banner';
import Axios from 'axios';

const Home = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  

    const handleLogin = (event) => {
    event.preventDefault()

       const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      const tokenDetails = token
      const config = {
        headers: {
          Authorization: 'Bearer ' + tokenDetails,
        },
      }

      Axios.get('http://localhost:8081/home/secure', config).then((response) =>
          console.log(response.data)
      )
      } 
      
  }

  const cardDetails = [
    {
      role: 'AWS Developer',
      description:
        'Join us and contribute to cutting-edge projects as an AWS Developer.',
      image:
        'https://img.freepik.com/free-photo/online-cloud-data-storage-concept-cloudscape-digital-online-server-global-network-business-web-database-backup-computer-private-infrastructure-technology_90220-1345.jpg?size=626&ext=jpg&ga=GA1.1.1047359146.1704866927&semt=sph'
    },
    {
      role: 'Cloud Solutions Architect',
      description:
        'Design and implement scalable and secure cloud solutions.',
      image:
        'https://img.freepik.com/free-photo/woman-scrolling-laptop_53876-167050.jpg?size=626&ext=jpg&ga=GA1.1.1047359146.1704866927&semt=ais'
    },
    {
      role: 'DevOps Engineer',
      description:
        'Automate and streamline development, testing, and deployment processes.',
      image:
        'https://img.freepik.com/free-vector/flat-design-devops-illustration_23-2149364438.jpg?size=626&ext=jpg&ga=GA1.1.1047359146.1704866927&semt=sph'
    },
    {
      role: 'Machine Learning Engineer',
      description:
        'Apply machine learning algorithms to solve complex problems.',
      image:
        'https://img.freepik.com/premium-photo/futuristic-artificial-intelligence_31965-4722.jpg?size=626&ext=jpg&ga=GA1.1.1047359146.1704866927&semt=ais'
    },
    {
      role: 'Security Consultant',
      description:
        'Safeguard systems and data by implementing robust security measures.',
      image:
        'https://img.freepik.com/free-vector/endpoint-concept-illustration_114360-2643.jpg?size=626&ext=jpg&ga=GA1.1.1047359146.1704866927&semt=ais'
    },
    {
      role: 'Data Scientist',
      description:
        'Extract valuable insights from data using statistical analysis and machine learning.',
      image:
        'https://img.freepik.com/free-vector/visual-data-concept-illustration_114360-1713.jpg?size=626&ext=jpg&ga=GA1.1.1047359146.1704866927&semt=ais'
    }
  ];

  return (
    <div>
      {/* Banner component */}
      <Banner />

      {/* Community Section */}
      <div className="ms-0  mb-5 bg-gray-100 p-8 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          {' '}
          {token}
          Join Our DEVHUB Communities
        </h2>
        <p className="text-gray-600 mb-4">
          Connect with like-minded professionals, share resources, and expand
          your knowledge by joining our communities.
        </p>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          onClick={handleLogin}
        >
          Search A Community
        </button>
      </div>

      {/* Job Role Card */}
      {cardDetails.map((card, index) => (
        <div
          key={index}
          className="p-4 bg-white rounded-md overflow-hidden shadow-xl mx-auto mb-8"
        >
          <div className="p-4">
            <h2 className="text-xl font-bold">{card.role}</h2>
            <p className="text-gray-600 mt-2">{card.description}</p>
            <img
              src={card.image}
              alt={`${card.role} Image`}
              className="mt-4 rounded-md shadow-lg w-24 h-50"
            />
            <button className="bg-blue text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600">
              Join Community
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
