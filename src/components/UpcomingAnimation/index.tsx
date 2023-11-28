import { motion } from "framer-motion";

export const UpcomingAnimation = () => {
  const upcomingStr: string = "UPCOMING MOVIES";

  return (
    <motion.span
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1.6 }}
      transition={{
        delay: 1,
        repeatType: "reverse",
        repeat: Infinity,
        duration: 1.1,
      }}
      className="bg-black py-1 mt-2 text-center text-white text-base block font-robonto font-semibold z-50 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900"
    >
      {upcomingStr}
    </motion.span>
  );
};
