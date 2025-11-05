import { useState, useRef, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

import Logo from "../assets/Images/LOGO.svg";
import Phone from "../assets/Images/Phone_Light.svg";

const Header = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const autoCloseTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (autoCloseTimerRef.current) {
        clearTimeout(autoCloseTimerRef.current);
        autoCloseTimerRef.current = null;
      }
    };
  }, []);

  const handleCopyNumber = async (number) => {
    try {
      await navigator.clipboard.writeText(number);
      setShowCopyMessage(true);
      setTimeout(() => setShowCopyMessage(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <div
      dir="rtl"
      className="glass-effect border border-1 flex flex-row rounded-xl m-4 py-2 px-4 justify-between items-center fixed top-0 left-0 right-0 z-50"
    >
      {/* Left group: logo, divider, titles */}
      <div className="flex flex-row items-center gap-3">
        <Link to="/">
          <button className="cursor-pointer">
            <img src={Logo} alt="لوگو" />
          </button>
        </Link>
        <div className="self-stretch w-px xs:bg-stone-900" />
        <div className="flex flex-col h-11 justify-between py-[2px]">
          <p className="font-sans font-black text-xs invisible xs:visible">
            پژوهشکده نظام فَنام
          </p>
          <p className="font-sans text-xs invisible xs:visible">
            دانشگاه صنعتی امیرکبیر
          </p>
        </div>
      </div>
      {/* Centered navigation */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-row gap-4 max-[800px]:hidden">
        {/* <Link to="/works">
          <button className="nav-button text-sm font-no-features">
            طرح‌های انجام شده
          </button>
        </Link> */}
        <Link to="/services">
          <button className="nav-button text-sm font-no-features">
            شرح خدمات
          </button>
        </Link>
        <Link to="/why-us">
          <button className="nav-button text-sm font-no-features">
            درباره ما
          </button>
        </Link>
      </div>
      <div
        className="relative"
        onMouseLeave={() => {
          if (window.matchMedia("(min-width: 800px)").matches) {
            setIsAnimating(true);
            setTimeout(() => setShowTooltip(false), 300);
          }
        }}
      >
        <button
          type="button"
          className="flex w-30 items-center gap-2 bg-text text-white text-xs font-sans px-3 h-8 hover:text-secondary transition-all duration-150 ease-in-out"
          onMouseEnter={() => {
            if (window.matchMedia("(min-width: 800px)").matches) {
              setShowTooltip(true);
              setIsAnimating(false);
            }
          }}
          onClick={() => {
            if (window.matchMedia("(max-width: 799px)").matches) {
              setIsAnimating(false);
              setShowTooltip((prev) => {
                const next = !prev;
                if (autoCloseTimerRef.current) {
                  clearTimeout(autoCloseTimerRef.current);
                  autoCloseTimerRef.current = null;
                }
                if (next) {
                  autoCloseTimerRef.current = setTimeout(() => {
                    setIsAnimating(true);
                    setShowTooltip(false);
                    autoCloseTimerRef.current = null;
                  }, 3000);
                }
                return next;
              });
            }
          }}
        >
          <span className="font-light text-base">ارتباط با ما</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <path
              d="M14.7559 11.4226L16.9627 13.6294C17.2594 13.9261 17.2594 14.4072 16.9627 14.704C15.3583 16.3083 12.8184 16.4888 11.0033 15.1275L9.69048 14.1429C8.23753 13.0532 6.94685 11.7625 5.85714 10.3095L4.87251 8.99668C3.51117 7.18156 3.69168 4.64166 5.29603 3.03731C5.59277 2.74056 6.07389 2.74056 6.37064 3.03731L8.57741 5.24408C8.90285 5.56951 8.90285 6.09715 8.57741 6.42259L7.72645 7.27355C7.59122 7.40878 7.55769 7.61538 7.64322 7.78644C8.63211 9.76421 10.2358 11.3679 12.2136 12.3568C12.3846 12.4423 12.5912 12.4088 12.7265 12.2735L13.5774 11.4226C13.9028 11.0972 14.4305 11.0972 14.7559 11.4226Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </button>

        {/* Tooltip */}
        {(showTooltip || isAnimating) && (
          <div
            className="absolute top-full bg-black text-white border-t z-50 min-w-[130px] left-0"
            style={{
              padding: "16px",
              willChange: "transform, opacity",
              animationFillMode: "both",
              animation: isAnimating
                ? "slideOutToBottom 0.3s ease-out"
                : "slideInFromBottom 0.3s ease-out",
            }}
            onMouseEnter={() => {
              if (window.matchMedia("(min-width: 800px)").matches) {
                setShowTooltip(true);
                setIsAnimating(false);
              }
            }}
            onAnimationEnd={() => {
              if (isAnimating) {
                setIsAnimating(false);
              }
            }}
          >
            <div className="flex flex-col">
              {/* Title with line */}
              <div className="flex items-center mb-4" style={{ gap: "4px" }}>
                <div className="flex-1 h-px bg-secondary"></div>
                <span className="text-sm font-medium">تماس</span>
              </div>

              {/* Phone numbers */}
              <div dir="ltr" className="flex flex-col gap-1">
                <span
                  className="text-sm font-bold cursor-pointer hover:text-secondary transition-colors"
                  onClick={() => handleCopyNumber("0912 199 1758")}
                >
                  0912 199 1758
                </span>
                <span
                  className="text-sm font-bold cursor-pointer hover:text-secondary transition-colors"
                  onClick={() => handleCopyNumber("021 64545831")}
                >
                  021 64545831
                </span>
              </div>

              {/* Copy notification message */}
              {showCopyMessage && (
                <div className="absolute top-full left-0 mt-1 bg-secondary text-black text-xs font-medium px-3 py-1 z-60 whitespace-nowrap">
                  کپی شد
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
