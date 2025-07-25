import React from 'react'
import { useState } from "react"
import { Search, Phone, Video, Settings, Smile, Paperclip, VideoIcon, Send, Download } from "lucide-react"
import MessageHeader from './MessageHeader'
import BuyerNav from '../Buyerdash/BuyerNav'
import BuyerSideBar from '../Buyerdash/BuyerSideBar'

const ChatRoom = () => {
    const [selectedChat, setSelectedChat] = useState(0)
  const [message, setMessage] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
   const [sidebarOpen, setSidebarOpen] = useState(false)

  const contacts = [
    {
      id: 1,
      name: "Micheal John",
      message: "I would like to order this how much...",
      time: "2:36 PM",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Micheal John",
      message: "I would like to order this how much...",
      time: "2:36 PM",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Micheal John",
      message: "I would like to order this how much...",
      time: "2:36 PM",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Micheal John",
      message: "I would like to order this how much...",
      time: "2:36 PM",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Micheal John",
      message: "I would like to order this how much...",
      time: "2:36 PM",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      name: "Micheal John",
      message: "I would like to order this how much...",
      time: "2:36 PM",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 7,
      name: "Micheal John",
      message: "I would like to order this how much...",
      time: "2:36 PM",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const chatMessages = [
    {
      id: 1,
      sender: "Jennifer Fritz",
      message:
        "Your story continues on mobile. Build and edit decks. Give and receive feedback. Add content from any other app! 😊",
      time: "3:45 PM",
      isOwn: false,
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 2,
      sender: "You",
      message: "I've always been on the fringe of people in the design community.",
      time: "3:48 PM",
      isOwn: true,
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 3,
      sender: "Jennifer Fritz",
      message: "Can you Send the file of Loara United Group ?",
      time: "3:51 PM",
      isOwn: false,
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 4,
      sender: "You",
      message: "Yeah Sure, Here it is...",
      time: "3:52 PM",
      isOwn: true,
      avatar: "/placeholder.svg?height=32&width=32",
      hasAttachment: true,
      attachmentName: "Loara United logo.AI",
    },
  ]

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage("")
    }
  }


  return (
    <div>
         <div className="flex  bg-gray-50">
    

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
        <MessageHeader/>
     <div className="flex h-screen bg-gray-50">
      {/* Sidebar - Contacts List */}
      <div
        className={`${isMobileMenuOpen ? "block" : "hidden"} lg:block w-full lg:w-80 bg-white border-r border-gray-200 flex flex-col`}
      >
        {/* Search Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Contacts List */}
        <div className="flex-1 overflow-y-auto">
          {contacts.map((contact, index) => (
            <div
              key={contact.id}
              onClick={() => {
                setSelectedChat(index)
                setIsMobileMenuOpen(false)
              }}
              className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 ${
                selectedChat === index ? "bg-blue-50 border-l-4 border-l-blue-500" : ""
              }`}
            >
              <img
                src={contact.avatar || "/placeholder.svg"}
                alt={contact.name}
                className="w-12 h-12 rounded-full mr-3 bg-gray-300"
              />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-gray-900 truncate">{contact.name}</h3>
                  <span className="text-xs text-gray-500 ml-2">{contact.time}</span>
                </div>
                <p className="text-sm text-gray-600 truncate mt-1">{contact.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className={`${isMobileMenuOpen ? "hidden" : "flex"} lg:flex flex-1 flex-col`}>
        {/* Chat Header */}
        <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden mr-3 p-2 hover:bg-gray-100 rounded-lg"
            >
              <div className="w-5 h-5 flex flex-col justify-center">
                <div className="w-full h-0.5 bg-gray-600 mb-1"></div>
                <div className="w-full h-0.5 bg-gray-600 mb-1"></div>
                <div className="w-full h-0.5 bg-gray-600"></div>
              </div>
            </button>
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="Jennifer Fritz"
              className="w-10 h-10 rounded-full mr-3 bg-gray-300"
            />
            <div>
              <h2 className="font-semibold text-gray-900">Jennifer Fritz</h2>
              <p className="text-sm text-green-500">Active Now</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Phone className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Video className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {chatMessages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}>
              <div className={`flex max-w-xs lg:max-w-md ${msg.isOwn ? "flex-row-reverse" : "flex-row"}`}>
                <img
                  src={msg.avatar || "/placeholder.svg"}
                  alt={msg.sender}
                  className={`w-8 h-8 rounded-full bg-gray-300 ${msg.isOwn ? "ml-2" : "mr-2"}`}
                />
                <div
                  className={`px-4 py-2 rounded-2xl ${
                    msg.isOwn ? "bg-blue-500 text-white rounded-br-md" : "bg-gray-200 text-gray-900 rounded-bl-md"
                  }`}
                >
                  <p className="text-sm">{msg.message}</p>
                  {msg.hasAttachment && (
                    <div className="mt-2 p-2 bg-white bg-opacity-20 rounded-lg flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center mr-2">
                          <span className="text-white text-xs font-bold">AI</span>
                        </div>
                        <span className="text-sm">{msg.attachmentName}</span>
                      </div>
                      <Download className="w-4 h-4 ml-2" />
                    </div>
                  )}
                  <p className={`text-xs mt-1 ${msg.isOwn ? "text-blue-100" : "text-gray-500"}`}>{msg.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="flex items-center space-x-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type message here"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Smile className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Paperclip className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <VideoIcon className="w-5 h-5 text-gray-600" />
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                Create Order Quote
              </button>
            </div>
            <button
              onClick={handleSendMessage}
              className="px-6 py-2 bg-[#eba91c]  text-white rounded-lg hover:bg-[#f3b530] transition-colors flex items-center"
            >
              <Send className="w-4 h-4 mr-2" />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ChatRoom