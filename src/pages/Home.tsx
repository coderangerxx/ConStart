import React, { useCallback } from "react";
import { Home as HomeIcon, BookOpen, Award, MessageCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const features = [
  {
    icon: HomeIcon,
    title: "Personalized Guidance",
    description: "AI-powered career recommendations tailored to your profile.",
  },
  {
    icon: BookOpen,
    title: "Learning Resources",
    description: "Access curated educational materials and courses.",
  },
  {
    icon: Award,
    title: "Secure Credentials",
    description: "Blockchain-powered document verification system.",
  },
  {
    icon: MessageCircle,
    title: "AI Chat Support",
    description: "24/7 intelligent career guidance assistance.",
  },
];

const FeatureCard = ({ icon: Icon, title, description, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    onClick={onClick}
    className="relative group flex flex-col p-6 bg-white rounded-xl shadow-lg border border-gray-200 backdrop-blur-lg hover:border-indigo-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
  >
    <motion.div
      whileHover={{ rotate: 10, scale: 1.2 }}
      transition={{ duration: 0.3 }}
      className="p-3 rounded-full bg-indigo-50 group-hover:bg-indigo-100"
    >
      <Icon className="h-12 w-12 text-indigo-600 transition-all duration-300 group-hover:text-indigo-800" />
    </motion.div>
    <h3 className="mt-4 text-xl font-bold text-gray-900 group-hover:text-indigo-800">{title}</h3>
    <p className="mt-2 text-gray-600 text-center">{description}</p>
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-white opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
  </motion.button>
);

export function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleButtonClick = useCallback(
    (event) => {
      event.preventDefault();
      navigate(user ? "/dashboard" : "/login");
    },
    [user, navigate]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 py-20 text-center"
      >
        <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-600">
            Launching Dreams,
          </span>
          <span className="block text-indigo-700">Shaping Futures</span>
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-600 sm:text-xl">
          Navigate your career journey with AI-powered guidance and secure credential management.
        </p>
        <div className="mt-10 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleButtonClick}
            className="px-10 py-5 font-medium text-xl rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg transition-all duration-300"
          >
            Start Your Journey
          </motion.button>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} onClick={handleButtonClick} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
