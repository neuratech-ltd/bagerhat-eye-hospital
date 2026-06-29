import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1A2B30"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <div className="footer-logo-text">Bagerhat Eye Hospital</div>
          </div>
          <p className="footer-tagline">
            দৃষ্টিহীনকে আলো দেওয়া, সুবিধাবঞ্চিতকে সুযোগ দেওয়া — এটাই আমাদের
            পথ।
          </p>
        </div>
        <div className="footer-col">
          <h4>সেবা</h4>
          <a href="#">চক্ষু পরীক্ষা</a>
          <a href="#">ক্যাটার‍্যাক্ট সার্জারি</a>
          <a href="#">গ্লুকোমা</a>
          <a href="#">রেটিনা সেবা</a>
          <a href="#">শিশু চক্ষু</a>
        </div>
        <div className="footer-col">
          <h4>হাসপাতাল</h4>
          <a href="#">আমাদের সম্পর্কে</a>
          <a href="#">চিকিৎসক দল</a>
          <a href="#">বিনামূল্যে শিবির</a>
          <a href="#">যোগাযোগ</a>
          <a href="#">অ্যাপয়েন্টমেন্ট</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 বাগেরহাট আই হাসপাতাল। সর্বস্বত্ব সংরক্ষিত।</span>
        <span>
          Made with <span className="heart">♥</span> by{" "}
          <a
            href="https://www.neuratechltd.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Neuratech Ltd.
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
