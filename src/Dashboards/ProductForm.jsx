import React from "react";

import { useState } from "react";
import {
  ChevronDownIcon,
  XMarkIcon,
  CloudArrowUpIcon,
} from "@heroicons/react/24/outline";
import CreateFormHeader from "./CreateFormHeader";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProductForm = () => {
  const { addProduct } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    category: "",
    tags: ["FURNITURE"],
    shortDescription: "",
    manufacturerName: "",
    brand: "",
    stocks: "",
    price: "",
    discount: "",
    orders: "",
    status: "Published",
    visibility: "Public",
    publishSchedule: "",
  });

  const [dragActive, setDragActive] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTagRemove = (tagToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const [files, setFiles] = useState([]); // Start with an empty array

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    const structuredFiles = selectedFiles.map((file) => ({
      image_name: file.name,
      image_file: file,
    }));

    setFiles((prevFiles) => [...prevFiles, ...structuredFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...droppedFiles]);
  };

  const handleCancel = () => {
    navigate("/sellerdash/sellerproductpage");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    const data = new FormData();
    data.append("productName", formData.productName);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("tags", JSON.stringify(formData.tags)); // Convert tags array to JSON string
    data.append("shortDescription", formData.shortDescription);
    data.append("manufacturerName", formData.manufacturerName);
    data.append("brand", formData.brand);
    data.append("stocks", formData.stocks);
    data.append("price", formData.price);
    data.append("discount", formData.discount);
    data.append("order", formData.orders);
    data.append("status", formData.status);
    data.append("visibility", formData.visibility);
    data.append("publishSchedule", formData.publishSchedule);

    const MAX_SIZE_MB = 5;
    const oversized = files.find(
      (file) => file.size > MAX_SIZE_MB * 1024 * 1024
    );
    if (oversized) {
      setErrorMsg(
        `File "${oversized.name}" is too large (max ${MAX_SIZE_MB}MB).`
      );
      return;
    }

    files.forEach((file) => {
      data.append("productPic", file.image_file);
    }); // Append files to formData

    const logFormData = (formData) => {
      console.log("FormData contents:");
      for (let pair of formData.entries()) {
        console.log(`${pair[0]}:`, pair[1]);
      }
    };
    
    logFormData(data);
    

    try{ await addProduct(data);

   
      navigate("/sellerdash/sellerproductpage");}
    catch (setErrorMsg){
    console.errorMsg("Failed to add product. Check your token or server.");
  }
  };

  return (
    <div className="overflow-hidden  p-4 lg:p-0">
      <CreateFormHeader />
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm">
        <form
          onSubmit={handleSubmit}
          className="p-6 lg:p-8"
          encType="multipart/form-data"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Description */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Description
                </h2>

                {/* Product Name */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    PRODUCT NAME
                  </label>
                  <input
                    type="text"
                    name="productName"
                    value={formData.productName}
                    onChange={handleInputChange}
                    placeholder="Enter Product Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Product Description */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    PRODUCT DESCRIPTION
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Enter Product Description"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>
              </div>

              {/* Product Categories */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Product Categories
                </h3>

                {/* Category Dropdown */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    PRODUCT CATEGORY
                  </label>
                  <div className="relative">
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                    >
                      <option value="">Select Category</option>
                      <option value="furniture">Furniture</option>
                      <option value="electronics">Electronics</option>
                      <option value="clothing">Clothing</option>
                    </select>
                    <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Product Tags */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    PRODUCT TAGS
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {formData.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => handleTagRemove(tag)}
                          className="ml-2 text-gray-400 hover:text-gray-600"
                        >
                          <XMarkIcon className="w-4 h-4" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Short Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    PRODUCT SHORT DESCRIPTION
                  </label>
                  <textarea
                    name="shortDescription"
                    value={formData.shortDescription}
                    onChange={handleInputChange}
                    placeholder="Add short description for product"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - General Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  General Info
                </h2>

                {/* Manufacturer Name */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    MANUFACTURER NAME
                  </label>
                  <input
                    type="text"
                    name="manufacturerName"
                    value={formData.manufacturerName}
                    onChange={handleInputChange}
                    placeholder="Enter Manufacturer Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Manufacturer Brand */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    MANUFACTURER BRAND
                  </label>
                  <input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                    placeholder="Enter Manufacturer Brand"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Stocks and Price */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      STOCKS
                    </label>
                    <input
                      type="number"
                      name="stocks"
                      value={formData.stocks}
                      onChange={handleInputChange}
                      placeholder="Stocks"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      PRICE, $
                    </label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="Price"
                      step="0.01"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Discount and Orders */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      DISCOUNT, %
                    </label>
                    <input
                      type="number"
                      name="discount"
                      value={formData.discount}
                      onChange={handleInputChange}
                      placeholder="Discount"
                      min="0"
                      max="100"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ORDERS
                    </label>
                    <input
                      type="number"
                      name="orders"
                      value={formData.orders}
                      onChange={handleInputChange}
                      placeholder="Orders"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Product Gallery */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Product Gallery
                </h3>
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    dragActive
                      ? "border-blue-400 bg-blue-50"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  onDragOver={handleDragOver}
                  onDragEnter={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-gray-600">
                    Drop files here or click to upload
                  </p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    id="file-upload"
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer inline-block mt-2 text-blue-600 hover:text-blue-700"
                  >
                    Browse files
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Show uploaded files */}
          {files.length > 0 && (
            <div className="mt-4">
              <h4 className="font-medium text-gray-800">Selected Files:</h4>
              <ul className="list-disc ml-6 text-sm text-gray-600">
                {files.map((file, idx) => (
                  <li key={idx}>{file.image_name}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Publish Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Publish
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  STATUS
                </label>
                <div className="relative">
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                  >
                    <option value="Published">Published</option>
                    <option value="Draft">Draft</option>
                    <option value="Archived">Archived</option>
                  </select>
                  <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Visibility */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  VISIBILITY
                </label>
                <div className="relative">
                  <select
                    name="visibility"
                    value={formData.visibility}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                  >
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                    <option value="Password Protected">
                      Password Protected
                    </option>
                  </select>
                  <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Publish Schedule */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  PUBLISH SCHEDULE
                </label>
                <input
                  type="datetime-local"
                  name="publishSchedule"
                  value={formData.publishSchedule}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
              {errorMsg && <p className="text-red-600 mb-4">{errorMsg}</p>}
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-[#eba91c] text-white rounded-lg hover:bg-[#f3b530] transition-colors font-medium"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
