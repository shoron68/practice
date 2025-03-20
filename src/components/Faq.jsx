import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";

const faqData = [
  {
    question: "Frequently Asked Question Number 01",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veniam atque tempora aspernatur obcaecati nihil repudiandae at cum provident eos.",
  },
  {
    question: "Frequently Asked Question Number 02",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veniam atque tempora aspernatur obcaecati nihil repudiandae at cum provident eos.",
  },
  {
    question: "Frequently Asked Question Number 03",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veniam atque tempora aspernatur obcaecati nihil repudiandae at cum provident eos.",
  },
  {
    question: "Frequently Asked Question Number 04",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veniam atque tempora aspernatur obcaecati nihil repudiandae at cum provident eos.",
  },
  {
    question: "Frequently Asked Question Number 05",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veniam atque tempora aspernatur obcaecati nihil repudiandae at cum provident eos.",
  },
];

export default function FAQSection() {

    const [activeIndex, setActiveIndex] = useState(0);
  
    const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

  return (
    <div className=" bg-[#000] py-[124px]">
      <Container>
        <div className="text-white flex flex-col items-center py-[124px] justify-center p-8">
      <h2 className="text-3xl font-bold mb-6">FAQ</h2>
      <div className="w-[1320px]">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-700">
            <button
              className={`w-full text-left py-[20px] px-[30px] flex justify-between items-center ${
                activeIndex === index ? "bg-purple-600" : "bg-gray-900"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-[26px]">{item.question}</span>
              
              <motion.div
                animate={{ rotate: activeIndex === index ? 360 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {activeIndex === index ? (
                  <FaMinus className="text-yellow-400" />
                ) : (
                  <FaPlus className="text-yellow-400" />
                )}
              </motion.div>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-4 bg-gray-800">{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
    </Container>
    </div>
  );
}
