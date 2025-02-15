import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//npm install framer-motion
import { motion } from "framer-motion";
import ElfCard from "./ElfCard.tsx";
import { ElfType } from "../../utils/FrontendTypes";
//import fillerImage from "./elf1_avatar.png"; you can import your own image in the mean time

const Homepage = () => {
  const navigate = useNavigate();
  const [elves, setElves] = useState<ElfType[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulating an API call
  useEffect(() => {
    setTimeout(() => {
      setElves([
        {
          name: "elf1",
          image: "",
          chatbox: "blah blah blah blah blah blah blah blah blah blah blah",
        },
        {
          name: "elf2",
          image: "",
          chatbox: "blah blah blah blah blah blah blah blah blah blah blah",
        },
        {
          name: "elf3",
          image: "",
          chatbox: "blah blah blah blah blah blah blah blah blah blah blah",
        },
       
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleLogout = () => navigate("/");
  const handleEdit = () => {
    // one edit, you can edit the clothes or delete ("ive resolved this")
  };
  const handleNewElf = () => navigate("/customise");

  return (
    <div className="flex flex-col items-center p-6 pb-20">
      <h1
        className="text-6xl"
        style={{ position: "fixed", top: 35, left: 65, color: "#778D63" }}
      >
        ease elves
      </h1>

      <div
        className="logout"
        style={{ position: "fixed", top: 40, right: 20, zIndex: 1000 }}
      >
        <button type="submit" onClick={handleLogout}>
          logout
        </button>
      </div>

      <div
        className="elf-cards-container flex flex-col items-center w-full mt-20 overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 235px)" }}
      >
        {loading ? (
          <div className="flex justify-center py-10">
            <div className="w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : elves.length > 0 ? (
          <motion.div
            initial="hidden"
            animate="show"
            className="w-full flex flex-wrap justify-center gap-6"
          >
            {elves.map((elf, index) => (
              <motion.div key={index} className="flex justify-center">
                <ElfCard elf={elf} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <p className="text-2xl text-gray-600 font-bold">
            No elves found. Create a new one!
          </p>
        )}
      </div>

      <div
        style={{
          position: "fixed",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          display: "flex",
          gap: "30px",
          fontSize: "1.2rem",
          color: "#778D63",
        }}
      >
        <button
          style={{
            color: "#778D63",
            backgroundColor: "#CAD7BE",
            borderRadius: "20px",
            marginRight: "1px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.2rem",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handleEdit}
        >
          {" "}
          edit{" "}
        </button>

        <button
          style={{
            color: "#778D63",
            backgroundColor: "#CAD7BE",
            borderRadius: "20px",
            marginRight: "1px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.2rem",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handleNewElf}
        >
          {" "}
          new{" "}
        </button>
      </div>
    </div>
  );
};

export default Homepage;
