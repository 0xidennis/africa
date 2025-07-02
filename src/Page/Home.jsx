import React from 'react'
import image25 from '../assets/image 25.png'
import { Search, MessageCircle, CheckCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion";
import frame from '../assets/image/fram.png'
import image from '../assets/image.png'
import fram from '../assets/frame.png'
import image27 from '../assets/image 27.png'
import Layout from '../Layout/Layout'
import Footer from '../Statics/Footer'
import vect from '../assets/vect.png'
import watch from '../assets/watch.png'
import bags from '../assets/bags.png'
import shoe from '../assets/shoe.png'
import skinscare from '../assets/skinscare.png'
import ship from '../assets/image/image 12.png'
import sew from '../assets/image/sew.png'
import magazine from '../assets/image/magazine.png'
import logo from '../assets/logo/from.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import LoadingSpinner from '../Spinner/LoadingSpinner';
// import shoe from '../assets/shoe.png'

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5 seconds
    return () => clearTimeout(timer);
  }, []);
    const categories = [
        { name: "Clothing", icon: <span className="text-2xl"><img src={vect} alt="" /></span> },
        { name: "Footwear" , icon: <span className="text-2xl "><img src={shoe} alt="" /></span> },
        { name: "Accessories", icon: <span className="text-2xl"><img src={watch} alt="" /></span> },
        { name: "Skin Care", icon: <span className="text-2xl"><img src={skinscare} alt="" /></span> },
        { name: "Bags", icon: <span className="text-2xl"><img src={bags} alt="" /></span> },
        { name: "Traditional", icon: <span className="text-2xl"><img src={vect} alt="" /></span> },
      ]

  return (
    <>{loading ? (
      <LoadingSpinner />
    ) : (
    <div className='overflow-x-hidden min-h-screen '>
        <Layout/>
        <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Text Column Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#eba91c]">Connecting</span> African
              <br />
              Manufacturers to
              <br />
              <span className="text-[#eba91c]">Global Market</span>
            </h1>
            <p className="text-gray-700 mb-8 max-w-lg">
              Explore authentic quality products from verified manufacturers across Africa. Shop now and bring the
              spirit of Africa home!
            </p>
            <div className="flex flex-wrap gap-4 align-center items-center">
              <a
                href="#"
                className="bg-[#eba91c] hover:bg-amber-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
              >
                Start Sourcing
              </a>
              <Link to="/reg">
                <a
                  href="#"
                  className="border border-[black] text-[black] hover:bg-amber-50 font-medium py-2 px-6 rounded-md transition-colors"
                >
                  Become a supplier
                </a>
              </Link>
            </div>
          </motion.div>

          {/* Image Column Animation */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={image25}
              width={300}
              height={300}
              alt=""
              className="rounded-lg w-full h-auto object-cover"
            />
            <img
              src={image}
              width={300}
              height={300}
              alt=""
              className="rounded-lg w-full h-auto object-cover"
            />
            <img
              src={image27}
              width={300}
              height={300}
              alt=""
              className="rounded-lg w-full h-auto mx-auto object-cover col-span-2"
            />
          </motion.div>
        </div>
      </div>
    </section>

    <section className="bg-[#5c3c28] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-center">

          {/* Feature 1 */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="bg-white rounded-full p-4 mb-4">
              {/* <MessageCircle className="h-8 w-8 text-[#eba91c]" /> */}
              <img src={fram} alt="" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
            <p className="text-white text-sm">
              Connect with verified African <br /> suppliers and buyers from around <br /> the world
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
          >
            <div className="bg-white rounded-full p-4 mb-4">
              <MessageCircle className="h-8 w-8 text-[#eba91c]" />
              
            </div>
            <h3 className="text-xl font-semibold mb-2">Direct Communication</h3>
            <p className="text-white text-sm">
              Built-in messaging system for <br /> seamless business negotiations
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          >
            <div className="bg-white rounded-full p-4 mb-4">
            <img src={frame} alt="" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Verified Manufacturers</h3>
            <p className="text-white text-sm">
              Access to authenticated African <br /> manufacturing companies
            </p>
          </motion.div>

        </div>
      </div>
    </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-2xl font-bold mb-8">Product Categories</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((category) => (
        <div
          key={category.name}
          className="border border-[#523523] rounded-lg p-4 flex flex-col items-center 
                   hover:shadow-md transition-all duration-300 ease-out
                   transform hover:-translate-y-1 hover:scale-105
                   opacity-0 animate-fadeInUp"
          style={{
            animationFillMode: 'forwards',
            animationDuration: '0.6s',
            animationTimingFunction: 'ease-out'
          }}
        >
          <div className="text-amber-500 mb-2">{category.icon}</div>
          <h3 className="font-medium text-center mb-2">{category.name}</h3>
          <a href="#" className="text-md text-[#523523] flex items-center">
            Browse Product <ArrowRight className="h-3 w-3 ml-1" />
          </a>
        </div>
      ))}
    </div>
  </div>
  
  {/* Add this to your global CSS or Tailwind config */}
  <style jsx global>{`
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fadeInUp {
      animation-name: fadeInUp;
    }
  `}</style>
</section>

      {/* Bridge Gap Section */}
      <section className="py-16 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading Animation */}
        <motion.h2
          className="text-2xl font-normal mb-4 text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          We bridge the gap{" "}
          <span className="text-black font-bold">
            between Africa's top <br />
            manufacturers and global buyers.
          </span>
        </motion.h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          
          {/* Card 1 */}
          <motion.div
            className="border rounded-lg overflow-hidden bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src={ship}
              width={500}
              height={300}
              alt="Shipping port with containers"
              className="w-full h-65 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">B2B Trade Platform</h3>
              <p className="text-gray-600">
                Meet verified manufacturers for various categories of <br />
                consumer goods in Africa.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="border rounded-lg overflow-hidden bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <img
              src={sew}
              width={500}
              height={300}
              alt="Sewing production line"
              className="w-full h-65 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-[#523523]">
                Source directly from The African Market
              </h3>
              <p className="text-gray-600">
                Meet verified manufacturers for various categories of consumer <br />
                goods in Africa.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
      <div className="container mx-auto px-4">

        {/* Section Title */}
        <motion.h2
          className="text-2xl font-bold mb-12 text-center text-[#523523]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          How It Works
        </motion.h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Step 1 */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="bg-[#523523] rounded-full p-4 mb-4 transition-transform duration-300 ease-out hover:scale-110">
              <Search className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Search & Discover:</h3>
            <p className="text-gray-600 text-md">
              Use our intuitive search to find <br />
              manufacturers and products <br />
              tailored to your needs.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="flex flex-col items-center text-center relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="hidden md:block absolute top-8 -left-16 w-32">
              <ArrowRight className="h-6 w-6 text-[#523523]" />
            </div>
            <div className="bg-[#523523] rounded-full p-4 mb-4 transition-transform duration-300 ease-out hover:scale-110">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Connect Instantly</h3>
            <p className="text-gray-600 text-md">
              Initiate conversations with <br />
              manufacturers through our <br />
              built-in chat feature.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="flex flex-col items-center text-center relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="hidden md:block absolute top-8 -left-16 w-32">
              <ArrowRight className="h-6 w-6 text-[#523523]" />
            </div>
            <div className="bg-[#523523] rounded-full p-4 mb-4 transition-transform duration-300 ease-out hover:scale-110">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Build Partnerships:</h3>
            <p className="text-gray-600 text-md">
              Start meaningful collaborations <br />
              that drive success.
            </p>
          </motion.div>

        </div>
      </div>
    </section>

      {/* E-Magazine Section */}
      <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Text Block Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Explore Africa's Marketplace-
              <br />
              Download Our Free E-Magazine
            </h2>
            <p className="text-gray-300 mb-6">
              Discover exclusive content, interviews with top brands, and expert insights into Africa's booming
              e-commerce scene. Click here to download the latest issue.
            </p>
            <a
              href="#"
              className="bg-white text-gray-900 hover:bg-gray-100 font-medium py-2 px-6 rounded-md transition-colors inline-block"
            >
              Download
            </a>
          </motion.div>

          {/* Image Block Animation */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={magazine}
              width={500}
              height={300}
              alt="magazine"
              className="w-[80%] h-auto object-contain"
            />
          </motion.div>

        </div>
      </div>
    </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-[#523523] mb-8 max-w-2xl mx-auto text-md">
            Join thousands of businesses already connecting and trading on <br /> FromAfrica
          </p>
          <a
            href="#"
            className="bg-[#523523] hover:bg-black text-white font-medium py-3 px-8 rounded-md transition-colors inline-block"
          >
            Get started Now
          </a>
        </motion.div>
      </div>
    </section>

      {/* Footer */}
      {/* <footer className="bg-[#5c3c28] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              
              <img src={logo} width={150} height={50} alt="" className='mb-4' />
              <p className="text-sm text-gray-50">
                Connecting African Manufacturers
                <br />
                Excellence to the World
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-white hover:text-amber-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-amber-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-amber-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-amber-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-50">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-50">
                <li>
                  <a href="#" className="hover:text-white">
                    African Fashion
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    African Accessories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    African Skincare
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-50 mb-2">support@fromafrica.com</p>
              <p className="text-gray-50">+1 234 567 8900</p>
            </div>
          </div>
          <div className="mb-100  ml-10 pt-8 text-center text-md">
            <p>© 2025 fromafrica2b.com. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
       <Footer/>
      {/* Live Chat Button */}
      <div className="fixed bottom-0 right-6 z-50">
        <button className="bg-amber-500 hover:bg-amber-600 text-white rounded-full p-4 shadow-lg flex items-center">
          <MessageCircle className="h-6 w-6 mr-2" />
          {/* <span>Live Chat</span> */}
        </button>
      </div>
    </main>
    </div>
    )}
    </>
  )
}

export default Home