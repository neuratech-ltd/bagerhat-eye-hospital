"use client";

import logo from "../../assets/logo1.png";

const Header = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <div className="w-15 bg-white rounded-full h-15 flex items-center justify-center">
          <img src={logo.src} alt="Bagerhat Eye Hospital Logo" />
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
