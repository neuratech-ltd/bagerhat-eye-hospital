import React from "react";
import logo from "@/assets/logo-icon.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">
              <img
                src={logo.src}
                alt="Bagerhat Eye Hospital Logo"
                className="rounded-full "
              />
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
          <a href="/#services">আমাদের সেবা</a>
          <a href="/#doctors">চিকিৎসক দল</a>
          <Link href="/contact">যোগাযোগ</Link>
          <Link href="/appointment-details">অ্যাপয়েন্টমেন্ট</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Bagerhat Eye Hospital। Copyright © 2026.</span>
        <span>
          Made with <span className="heart">♥</span> by
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
