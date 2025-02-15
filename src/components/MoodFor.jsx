import { motion } from "framer-motion";
import moodFor1 from "../assets/img1.png";
import moodFor2 from "../assets/img2.png";
import moodFor3 from "../assets/img3.png";
import moodFor4 from "../assets/img4.png";

const MoodFor = () => {
  return (
    <section className="py-12">
      <motion.h3
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        What are you in the mood for?
      </motion.h3> 

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  w-11/12 mx-auto">
        {[moodFor1, moodFor2, moodFor3, moodFor4].map((img, index) => (
          <motion.div
            key={index}
            className="text-center cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={img}
              alt=""
              className=" shadow-lg w-full"
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            />
            <h4 className="mt-3 text-lg font-semibold">
              {["Eat & Drink", "Event", "Club", "Things to do"][index]}
            </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MoodFor;
