import { motion } from "framer-motion";
import things1 from "../assets/card2.png";
import things2 from "../assets/img7.png";
import things3 from "../assets/img5.png";

const Things = () => {
    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const thingsData = [
        { img: things1, title: "Sight Seeing" },
        { img: things2, title: "Volley Ball Game" },
        { img: things3, title: "Wizkid Show" },
        { img: things3, title: "Wizkid Show" },
        { img: things1, title: "Sight Seeing" },
        { img: things2, title: "Volley Ball Game" },
        { img: things3, title: "Sight Seeing" },
        { img: things1, title: "Sight Seeing" },
    ];

    return (
        <div className="bg-blue-100 mt-10 py-8">
            <div className="w-11/12 mx-auto">
                <motion.h4 
                    className="text-4xl mb-4 font-bold"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Top things to do in Lagos
                </motion.h4>
                <motion.div 
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                >
                    {thingsData.map((thing, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <img className="h-80 w-full rounded-lg shadow-lg" src={thing.img} alt={thing.title} />
                            <h4 className="text-center mt-2 text-lg font-semibold">{thing.title}</h4>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Things;
