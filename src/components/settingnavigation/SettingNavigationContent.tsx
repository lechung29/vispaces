import React from 'react'
import { motion } from "framer-motion";
import { Outlet } from 'react-router-dom';

const SettingNavigationContent: React.FunctionComponent = () => {
  return (
    <motion.section className="bg-white border-slate-700 rounded-xl overflow-hidden my-6 md:py-12 md:px-20 p6 shadow-sm">
        <Outlet />
    </motion.section>
  )
}

export default SettingNavigationContent