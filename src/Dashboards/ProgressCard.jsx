import React, { useState } from 'react';
import { CheckCircle, Circle } from "lucide-react"
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const ProgressCard = () => {
  const navigate = useNavigate();
  const { registrationData, activeCard, setActiveCard } = useAuth();

  const cards = [
    {
      title: "Business Information",
      status: registrationData.businessInfo.completed ? "completed" : "pending",
      completed: registrationData.businessInfo.completed,
      path: "/businessinfo" 
    },
    {
      title: "Company Information",
      status: registrationData.companyInfo.completed ? "completed" : "pending",
      completed: registrationData.companyInfo.completed,
      path: "/companyinfo"
    },
  ];

  const handleCardClick = (path, index) => {
    setActiveCard(index);
    navigate(path);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:w-120">
    {cards.map((card, index) => (
      <div
        onClick={() => handleCardClick(card.path, index)}
        key={index}
        className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
          card.completed 
            ? "bg-amber-50 border-amber-200" 
            : activeCard === index 
              ? "bg-white border-gray-200 shadow-sm" 
              : "bg-gray-50 border-gray-200"
        }`}
      >
        <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
        <div className="flex items-center space-x-2">
          {card.completed ? (
            <CheckCircle size={16} className="text-green-500" />
          ) : (
            <Circle size={16} className="text-red-500" />
          )}
          <span className={`text-sm capitalize ${
            card.completed ? "text-green-600" : "text-red-600"
          }`}>
            {card.status}
          </span>
        </div>
      </div>
    ))}
  </div>
  )
}

export default ProgressCard