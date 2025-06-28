import React from 'react'
import { CheckCircle, Circle } from "lucide-react"

const ProgressCard = () => {
    const cards = [
        {
          title: "Business Information",
          status: "completed",
          completed: true,
        },
        {
          title: "Company Information",
          status: "pending",
          completed: false,
        },
      ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:w-120">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg border-2 ${
            card.completed ? "bg-amber-50 border-amber-200" : "bg-white border-gray-200"
          }`}
        >
          <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
          <div className="flex items-center space-x-2">
            {card.completed ? (
              <CheckCircle size={16} className="text-green-500" />
            ) : (
              <Circle size={16} className="text-red-500" />
            )}
            <span className={`text-sm capitalize ${card.completed ? "text-green-600" : "text-red-600"}`}>
              {card.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProgressCard