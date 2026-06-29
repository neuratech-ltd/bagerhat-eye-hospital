import React from "react";

const MissionSection = () => {
  return (
    <section className="mission" id="mission">
      <div className="fade-in">
        <div className="section-label">আমাদের অঙ্গীকার</div>
        <h2 className="section-title">দৃষ্টিশক্তি হোক সবার অধিকার</h2>
        <p className="section-body">
          বাগেরহাটের প্রত্যন্ত অঞ্চলের মানুষেরা যেন অর্থের অভাবে চোখের চিকিৎসা
          থেকে বঞ্চিত না হন — এই বিশ্বাস নিয়েই আমাদের যাত্রা শুরু। আমরা প্রতিটি
          রোগীকে পরিবারের সদস্য মনে করি।
        </p>
        <div className="mission-quote">
          "একটি সুস্থ চোখ একটি আলোকিত ভবিষ্যতের দরজা খুলে দেয়। আমরা সেই দরজা
          সবার জন্য উন্মুক্ত রাখতে চাই।"
        </div>
      </div>
      <div className="mission-pillars fade-in">
        <div className="pillar">
          <div className="pillar-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <div className="pillar-text">
            <h4>মানবিক সেবা প্রথম</h4>
            <p>
              অর্থনৈতিক অবস্থা যাই হোক, প্রতিটি রোগী সর্বোচ্চ মানের চিকিৎসা
              পাওয়ার যোগ্য।
            </p>
          </div>
        </div>
        <div className="pillar">
          <div className="pillar-icon">
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
          <div className="pillar-text">
            <h4>সময়মতো চিকিৎসা</h4>
            <p>
              দ্রুত অ্যাপয়েন্টমেন্ট ও জরুরি চক্ষু সেবা নিশ্চিত করতে আমরা সর্বদা
              প্রস্তুত।
            </p>
          </div>
        </div>
        <div className="pillar">
          <div className="pillar-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div className="pillar-text">
            <h4>সমতার ভিত্তিতে সেবা</h4>
            <p>
              ধনী-গরিব, নারী-পুরুষ, শিশু-বৃদ্ধ — সবাই সমান মনোযোগ ও যত্ন পান
              এখানে।
            </p>
          </div>
        </div>
        <div className="pillar">
          <div className="pillar-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
          <div className="pillar-text">
            <h4>আধুনিক প্রযুক্তি</h4>
            <p>
              সর্বাধুনিক চক্ষু চিকিৎসা সরঞ্জাম ও প্রযুক্তি ব্যবহার করে আমরা
              নিরাময় নিশ্চিত করি।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
