import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import React from "react";


function Skillbar({ skill }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const skillbarVariant = {
    visible: { width: skill.width },
    hidden: { width: "0%" },
  };
 
  return (
    <div className="chart">
      <span>{skill.title}</span>
      <footer>
        <motion.div
          className="bar fill"
          ref={ref}
          variants={skillbarVariant}
          initial={"hidden"}
          animate={controls}
          transition={{ duration: 2 }}
        />
      </footer>
    </div>
  );
}

export default Skillbar;
