"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ChattieImage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-64 h-64 relative"
    >
      <Image
        src="/chappie_robot.png"
        alt="Chattie the Robot"
        layout="fill"
        objectFit="contain"
      />
    </motion.div>
  );
}

