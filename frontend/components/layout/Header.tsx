import React from "react";

const Header = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <div className="nav-logo-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1A2B30"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>
        <div className="nav-logo-text">
          <div className="en">Bagerhat Eye Hospital</div>
          <div className="bn">বাগেরহাট আই হাসপাতাল</div>
        </div>
      </div>
      <div className="nav-links">
        <a href="#services">সেবাসমূহ</a>
        <a href="#doctors">চিকিৎসক</a>
        <a href="#mission">আমাদের লক্ষ্য</a>
        <a href="#contact">যোগাযোগ</a>
        <a href="#contact" className="nav-cta">
          অ্যাপয়েন্টমেন্ট
        </a>
      </div>
    </div>
  );
};

export default Header;
