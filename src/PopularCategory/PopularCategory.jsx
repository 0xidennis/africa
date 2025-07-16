import React from 'react';
import car1 from '../assets/Cars/car1.png';
import accessory1 from '../assets/Vehicle accessories/accessory1.jpg';
import accessory3 from '../assets/Vehicle accessories/accessory3.jpg';
import Tools1 from '../assets/Vehicle Tools/Tools1.jpg';
import Tools3 from '../assets/Vehicle Tools/Tools3.jpg';
import Category from './Category';
import menwears from '../assets/menwears.jpg'
import { Link } from 'react-router-dom';


const categories = [
    {
      id: 1,
      title: "Automotive Tools & Equipment",
      description: "Automotive tools have been designed to help car owners maintain and repair their vehicles.",
      image: Tools1,
      link:"/productbeforelogin/Automotive Tools & Equipment"
    },
    {
      id: 2,
      title: "Auto Safety & Security",
      description:
        "Automotive safety is the study and practice of design, construction, equipment and regulation to minimize the occurrence and consequences of traffic collisions involving motor vehicles.",
      image: Tools3,
      link:"/productbeforelogin/Auto Safety & Security"
    },
    {
      id: 3,
      title: "Vehicle Accessories",
      description:
        "motor vehicle accessory means any part or equipment that is designed to be fitted to a motor vehicle after its manufacture to change its appearance or performance.",
      image: accessory3,
      link:"/productbeforelogin/Vehicle Accessories"
    },
    {
      id: 4,
      title: "Vehicle Parts",
      description:
        "motor vehicle accessory means any part or equipment that is designed to be fitted to a motor vehicle after its manufacture to change its appearance or performance.",
      image: accessory1,
      link:"/productbeforelogin/Vehicle Parts"
    },
    {
      id: 5,
      title: "Vehicles",
      description:
        "a machine, usually with wheels and an engine, used for transporting people or goods, especially on land.",
      image: car1,
      link:"/productbeforelogin/Vehicles"
    },
    {
      id: 6,
      title: "Men's Apparel",
      description: "The Apparel segment Men's Apparel comprises clothing for men.",
      image: menwears,
      link:"/productbeforelogin/Vehicles"
    },
  ]
const PopularCategory = () => {
  return (
    <div>
     <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          Popular Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link to={category.link}>
            <Category
              key={category.id}
              title={category.title}
              description={category.description}
              image={category.image}
            />
            </Link>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default PopularCategory