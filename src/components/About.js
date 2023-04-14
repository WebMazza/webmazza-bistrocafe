import React from "react";
import { aboutData } from "../data";
import { motion } from "framer-motion";
import { plateVariants, staggerContainer, fadeIn } from "../variants";

const About = () => {
  const { pretitle, title, subtitle, btnText, image } = aboutData;
  return (
    <section className="min-h-[620px]" id="About" name="About">
      <div className="container mx-auto min-h-[620]">
        {/* text & image wrapper */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="min-h-[620px] flex flex-col lg:flex-row items-center"
        >
          {/* text */}
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1.8)}
            className="flex-1 text-center lg:text-left"
          >
            <div className="pretitle">{pretitle}</div>
            <h2 className="h2 capitalize">{title}</h2>
            <p className="mb-8 max-w-[560px]">{subtitle}</p>
            <button className="btn cursor-not-allowed opacity-40 capitalize mx-auto lg:mx-0">
              {btnText}
            </button>
          </motion.div>
          {/* image */}
          <motion.div
            variants={plateVariants}
            className="-mb-[300px] -mr-[186px] z-10 w-[600px] h-[600px]"
          >
            <img src={image} alt="Delicious Meal" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
