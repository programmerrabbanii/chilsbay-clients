import { motion } from "framer-motion";
import whyus1 from "../assets/logo1.png";
import whyus2 from "../assets/logo2.png";
import whyus3 from "../assets/logo3.png";

const WhyUs = () => {
    return (
        <div className="mt-10">
            <motion.h4 
                className="text-center text-4xl font-bold mb-5 text-black"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            > 
                Why Use Chillsbay?
            </motion.h4>
            <motion.div 
                className="w-10/12 mx-auto bg-gradient-to-r from-blue-100 to-blue-300 p-8 rounded-xl shadow-lg grid grid-cols-2 md:grid-cols-3 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.3 }}
            >
                {[{ img: whyus1, title: "Your entire trip in one checkout!", desc: "Add multiple experiences to your cart and checkout on one click." },
                  { img: whyus2, title: "Pay with Crypto on the go", desc: "Enjoy the freedom of universal payments for a seamless marketplace experience" },
                  { img: whyus3, title: "Free Cancellation and ticket transfer!", desc: "Resell your tickets or cancel your reservations at zero cost 24 hours before." }]
                  .map((item, index) => (
                    <motion.div 
                        key={index} 
                        className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <img className="mx-auto w-16 h-16 mb-4" src={item.img} alt="" />
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                    </motion.div> 
                ))}
            </motion.div>
        </div>
    );
};

export default WhyUs;