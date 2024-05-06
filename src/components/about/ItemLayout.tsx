"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import { ReactNode } from "react";
const ItemLayout = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx(
        "custom-bg p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
export default ItemLayout;
