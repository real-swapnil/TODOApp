import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#8E44AD", // Dusky Pink Background
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          backgroundColor: "#FF6347", // Tomato Color
          color: "white",
          padding: "20px 40px",
          borderRadius: "10px",
          fontSize: "24px",
          fontWeight: "bold",
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
        }}
      >
        To-Do List App
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          marginLeft: "20px",
          backgroundColor: "#D9773C", // Dusky Orange Color
          color: "white",
          padding: "15px 30px",
          borderRadius: "10px",
          fontSize: "20px",
          fontWeight: "bold",
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
        }}
      >
        Stay Organized!
      </motion.div>
    </div>
  );
};

export default Home;
