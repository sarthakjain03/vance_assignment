import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

// export default function SlideTabsNav() {
//   return (
//     <div>
//       <SlideTabs />
//     </div>
//   );
// }

export default function SlideTabs() {
  const [position, setPosition] = useState({
    left: 0,
    activeLeft: 0,
    width: 0,
    activeWidth: 0,
    opacity: 0,
  });
  const [activeTab, setActiveTab] = useState("curr_conv");

  const handleSetActiveTab = (tabId, ref) => {
    setActiveTab(tabId);
    const { width } = ref.current.getBoundingClientRect();
    
    setPosition({
      left: ref.current.offsetLeft,
      activeLeft: ref.current.offsetLeft,
      width: width,
      activeWidth: width,
      opacity: 1,
    });

    const section = document.getElementById(tabId);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const sectionIds = [
      "curr_conv",
      "liverates",
      "setalert"
    ];
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Adjust this based on when you want the tab to activate
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
          const tabRef = document.getElementById(`tab-${entry.target.id}`);
          if (tabRef) {
            const { width } = tabRef.getBoundingClientRect();
            setPosition({
              left: tabRef.offsetLeft,
              activeLeft: tabRef.offsetLeft,
              width,
              activeWidth: width,
              opacity: 1,
            });
          }
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line
  }, []);

  return (
    <ul
      onMouseLeave={() => {
        if (activeTab === null) {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }
      }}
      className="relative mx-auto flex w-fit rounded-full font-poppins bg-primary p-1 gap-2"
    >
      <Tab
        id="curr_conv"
        setPosition={setPosition}
        activeTab={activeTab}
        onClick={handleSetActiveTab}
        position={position}
      >
        Currency converter
      </Tab>
      <Tab
        id="liverates"
        setPosition={setPosition}
        activeTab={activeTab}
        onClick={handleSetActiveTab}
        position={position}
      >
        Live rates
      </Tab>
      <Tab
        id="setalert"
        setPosition={setPosition}
        activeTab={activeTab}
        onClick={handleSetActiveTab}
        position={position}
      >
        Set rate alert
      </Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, onClick, id, position, activeTab }) => {
  const ref = useRef(null);

  const handleMouseEnter = () => {
    if (!ref?.current) return;
    const { width } = ref.current.getBoundingClientRect();
    setPosition((prev) => ({
      ...prev,
      left: ref.current.offsetLeft,
      width,
      opacity: 1,
    }));
  };

  return (
    <li
      ref={ref}
      id={`tab-${id}`}
      onClick={() => onClick(id, ref)}
    //   onMouseEnter={handleMouseEnter}
    //   onMouseLeave={() => {
    //     setPosition((prev) => ({
    //         ...prev,
    //         left: position.activeLeft,
    //         width: position.activeWidth,
    //     }));
    //   }}
      className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs font-medium ${activeTab === id ? "text-white" : "text-black"} hover:text-white`}
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-[#6B48FF]"
    />
  );
};
