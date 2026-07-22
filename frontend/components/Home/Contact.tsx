import React from "react";

const Contact = () => {
  return (
    <section className="location-section" id="contact">
      <div className="fade-in">
        <div className="location-map-placeholder">
          <div className="map-pin">
            <div className="map-pin-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="map-pin-label">বাগেরহাট আই হাসপাতাল</div>
          </div>
        </div>
      </div>
      <div className="fade-in">
        <div className="section-label">যোগাযোগ করুন</div>
        <h2 className="section-title">আমাদের খুঁজে পান</h2>
        <p className="section-body">
          অ্যাপয়েন্টমেন্ট নিন অথবা সরাসরি চলে আসুন — আমরা সর্বদা আপনার জন্য
          প্রস্তুত।
        </p>
        <div className="contact-items">
          <div className="contact-item">
            <div className="contact-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="contact-detail">
              <h4>ঠিকানা</h4>
              <p>
                প্রধান সড়ক, বাগেরহাট সদর
                <br />
                বাগেরহাট — ৯৩০০, বাংলাদেশ
              </p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.4 2 2 0 0 1 3.58 2.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.07 6.07l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className="contact-detail">
              <h4>ফোন</h4>
              <p>০৪৬৮-XXXXXX (সকাল ৮টা – রাত ৮টা)</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div className="contact-detail">
              <h4>সেবার সময়</h4>
              <p>
                শনি – বৃহস্পতি: সকাল ৮টা – রাত ৮টা
                <br />
                শুক্রবার: বিকাল ৩টা – রাত ৮টা
              </p>
            </div>
          </div>
        </div>
        <a
          href="tel:0468XXXXXX"
          className="btn-primary"
          style={{ marginTop: "32px", display: "inline-block" }}
        >
          এখনই ফোন করুন
        </a>
      </div>
    </section>
  );
};

export default Contact;
