import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { FaRegUserCircle, FaCalendarWeek } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { GoPencil } from "react-icons/go";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";

const routes = [
    {
        path: "/",
        name: "Dashboard",
        icon: <RxDashboard />,
    },
    {
        path: "/planner",
        name: "Planner",
        icon: <GoPencil />,
    },
    {
        path: "/calendar",
        name: "Calendar",
        icon: <FaCalendarWeek />,
    },
    {
        path: "/notes",
        name: "Notes",
        icon: <FaNoteSticky />,
    },
];

const SideBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            opacity: 1,
            width: "230px",
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <>
            <div className="main-container">
                <motion.div
                    animate={{
                        width: isOpen ? "300px" : "55px",
                        transition: {
                            duration: 0.5,
                            type: "spring",
                            damping: 10,
                        },
                    }}
                    className={`sidebar `}
                >
                    <div className="top_section">
                        <div className="bars" >
                            <FaRegUserCircle
                                onClick={toggle}
                                style={{
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                    fontSize: "2rem",
                                }}
                            />
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.h1
                                    variants={showAnimation}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className="logo"
                                >
                                    Name Surname
                                </motion.h1>
                            )}
                        </AnimatePresence>
                    </div>
                    <section className="routes">
                        {routes.map((route, index) => {
                            if (route.subRoutes) {
                                return (
                                    <SidebarMenu
                                        setIsOpen={setIsOpen}
                                        route={route}
                                        showAnimation={showAnimation}
                                        isOpen={isOpen}
                                        key={index} //
                                    />
                                );
                            }

                            return (
                                <NavLink
                                    to={route.path}
                                    key={index}
                                    className="link"
                                    activeClassName="active"
                                >
                                    <div className="icon">{route.icon}</div>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                variants={showAnimation}
                                                initial="hidden"
                                                animate="show"
                                                exit="hidden"
                                                className="link_text"
                                            >
                                                {route.name}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </NavLink>
                            );
                        })}
                    </section>
                </motion.div>

                <main>{children}</main>
            </div>
        </>
    );
};

export default SideBar;
