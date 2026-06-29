import React from "react";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text fade-in">
        <div className="hero-eyebrow">
          <span></span>
          বিনামূল্যে চক্ষু চিকিৎসা সেবা
        </div>
        <h1 className="hero-title">
          আলোর পথে
          <br />
          <span className="accent">আপনার পাশে</span>
        </h1>
        <p className="hero-subtitle">বাগেরহাট আই হাসপাতাল</p>
        <p className="hero-tagline">
          আমরা বিশ্বাস করি দৃষ্টিশক্তি একটি মৌলিক অধিকার। সুবিধাবঞ্চিত ও দরিদ্র
          মানুষদের জন্য বিনামূল্যে ও স্বল্পমূল্যে উচ্চমানের চক্ষু চিকিৎসা প্রদান
          আমাদের অঙ্গীকার।
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">
            অ্যাপয়েন্টমেন্ট নিন
          </a>
          <a href="#services" className="btn-outline">
            আমাদের সেবা দেখুন
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <div className="stat-num">
              ১২<span className="unit">+</span>
            </div>
            <div className="stat-label">বছরের অভিজ্ঞতা</div>
          </div>
          <div className="stat">
            <div className="stat-num">
              ৫০,০০০<span className="unit">+</span>
            </div>
            <div className="stat-label">রোগী সেবা পেয়েছেন</div>
          </div>
          <div className="stat">
            <div className="stat-num">
              ৮০<span className="unit">%</span>
            </div>
            <div className="stat-label">বিনামূল্যে চিকিৎসা</div>
          </div>
        </div>
      </div>

      <div className="hero-visual fade-in">
        <div className="eye-container">
          <div className="eye-ring-outer"></div>
          <div className="eye-ring-mid"></div>
          <div className="eye-svg-wrap">
            <svg viewBox="0 0 200 200" xmlns="htctp://www.w3.org/2000/svg">
              <ellipse
                cx="100"
                cy="100"
                rx="95"
                ry="65"
                fill="white"
                opacity="0.96"
              />

              <circle cx="100" cy="100" r="48" fill="#0B3D91" />
              <circle
                cx="100"
                cy="100"
                r="48"
                fill="none"
                stroke="#1565C0"
                strokeWidth="6"
                strokeDasharray="4 3"
                opacity="0.5"
              />
              <circle cx="100" cy="100" r="36" fill="#00897B" />
              <circle
                cx="100"
                cy="100"
                r="36"
                fill="none"
                stroke="#26A69A"
                strokeWidth="4"
                strokeDasharray="3 4"
                opacity="0.4"
              />

              <circle cx="100" cy="100" r="22" fill="#061A3A" />

              <circle cx="87" cy="88" r="8" fill="white" opacity="0.85" />
              <circle cx="108" cy="108" r="3.5" fill="white" opacity="0.4" />

              <circle
                cx="100"
                cy="100"
                r="48"
                fill="none"
                stroke="#00BCD4"
                strokeWidth="2.5"
                opacity="0.7"
              />

              <path
                d="M30 85 Q40 65 60 60"
                stroke="#1A2B30"
                strokeWidth="3.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.7"
              />
              <path
                d="M60 60 Q75 52 95 50"
                stroke="#1A2B30"
                strokeWidth="3.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.7"
              />
              <path
                d="M95 50 Q115 48 135 55"
                stroke="#1A2B30"
                strokeWidth="3.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.7"
              />
              <path
                d="M135 55 Q158 65 170 80"
                stroke="#1A2B30"
                strokeWidth="3.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.7"
              />

              <path
                d="M35 118 Q48 138 70 142"
                stroke="#1A2B30"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.4"
              />
              <path
                d="M70 142 Q90 148 110 148"
                stroke="#1A2B30"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.4"
              />
              <path
                d="M110 148 Q130 145 155 135"
                stroke="#1A2B30"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.4"
              />

              <circle cx="100" cy="100" r="10" fill="#E8A94D" opacity="0.15" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
