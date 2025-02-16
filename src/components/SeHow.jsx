import { motion } from "framer-motion";
import sehow1 from "../assets/g1.png";
import sehow2 from "../assets/g2.png";
import sehow3 from "../assets/g3.png";
import sehow4 from "../assets/g4.png";
import sehow5 from "../assets/g5.png";
import sehow6 from "../assets/g6.png";

const images = [sehow1, sehow2, sehow3, sehow4, sehow5, sehow6];

const SeHow = () => {
    return (
        <div className="mt-10 w-11/12 mx-auto">
            <h3 className="text-3xl font-bold mb-4">See How people are chilling on <span className="text-[#0E8BFF]">Chillsbay</span></h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {images.map((image, index) => (
                    <motion.div 
                        key={index}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <img className="w-full rounded-lg shadow-lg" src={image} alt={`Chill ${index + 1}`} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SeHow; 
