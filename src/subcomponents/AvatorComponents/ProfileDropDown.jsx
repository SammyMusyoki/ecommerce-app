import { BiCog, BiHeart, BiLogInCircle, BiLogOutCircle, BiStore, BiUserCircle } from "react-icons/bi";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'


const ProfileDropDown = ({isOpen, ItemVarients}) => {
  const [isVendor, setIsVendor] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  return (
    <React.Fragment>
      <div className={`${isOpen ? "" : "hidden"}`}>
        <div className="relative isoate w-64 h-full border rounded-lg bg-sky-300 bg-opacity-30 p-2">
          {isLoggedIn ? (
            <motion.ul
              varients={{
                open: {
                  clipPath: "inset(0% 0% 0% 0% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.7,
                    delayChildren: 0.3,
                    staggerChildren: 0.05,
                  },
                },
                closed: {
                  clipPath: "inset(10% 50% 90% 50% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3,
                  },
                },
              }}
              animate={isOpen ? "open" : "closed"}
              style={{ pointerEvents: isOpen ? "auto" : "none" }}
              className="space-y-2"
            >
              {isVendor && (
                <motion.li
                  variants={ItemVarients}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className=" p-2 hover:bg-sky-400 bg-sky-300 rounded-lg flex items-center justify-center gap-2 my-2"
                >
                  {" "}
                  <BiStore className="h-7 w-7" />{" "}
                  <Link to="vendor-admin-dashboard" className="text-lg font-medium">
                    My Shop
                  </Link>{" "}
                </motion.li>
              )}
              <motion.li
                variants={ItemVarients}
                className=" rounded-full p-2 hover:bg-sky-200"
              >
                <Link
                  to="/profile"
                  className="text-lg font-medium flex items-center gap-2"
                >
                  <BiUserCircle className="h-7 w-7" />
                  Profile
                </Link>
              </motion.li>
              <motion.li
                variants={ItemVarients}
                className=" rounded-full p-2  hover:bg-sky-200"
              >
                <Link
                  to="/settings"
                  className="text-lg font-medium gap-2 flex items-center"
                >
                  <BiCog className="h-7 w-7" />
                  Settings
                </Link>
              </motion.li>
              <motion.li
                variants={ItemVarients}
                className=" rounded-full p-2 hover:bg-sky-200"
              >
                <Link
                  to="/profile"
                  className="text-lg font-medium flex items-center gap-2"
                >
                  <BiHeart className="h-7 w-7" />
                  Favourite
                </Link>
              </motion.li>
              <motion.li
                variants={ItemVarients}
                className=" rounded-full p-2 hover:bg-red-200"
              >
                <Link
                  to="/logout"
                  className="text-lg text-red-500 font-medium flex items-center gap-2"
                >
                  <BiLogOutCircle className="h-7 w-7" />
                  Log out
                </Link>
              </motion.li>
            </motion.ul>
          ) : (
            <ul className="space-y-2">
              <li className=" rounded-full p-2 hover:bg-sky-200">
                <Link
                  to="/login"
                  className="text-lg font-medium flex items-center gap-2"
                >
                  <BiLogInCircle className="h-7 w-7" />
                  Login
                </Link>
              </li>
              <li className=" rounded-full p-2 hover:bg-sky-200">
                <Link
                  to="/register"
                  className="text-lg font-medium flex items-center gap-2"
                >
                  <BiUserCircle className="h-7 w-7" />
                  Register
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileDropDown;
