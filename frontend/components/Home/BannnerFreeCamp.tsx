import React from "react";

const BannnerFreeCamp = () => {
  return (
    <div className="camp-banner fade-in">
      <div className="camp-text">
        <div className="section-label">আসন্ন কার্যক্রম</div>
        <h2 className="section-title">বিনামূল্যে চক্ষু শিবির</h2>
        <p>
          প্রতি মাসে আমরা বাগেরহাটের প্রত্যন্ত গ্রামাঞ্চলে বিনামূল্যে চক্ষু
          শিবির পরিচালনা করি। যেখানে পরীক্ষা, চশমা বিতরণ ও প্রয়োজনে রেফারেল
          সেবা দেওয়া হয় একদম বিনামূল্যে।
        </p>
        <a
          href="#contact"
          className="btn-primary"
          style={{ marginTop: "24px", display: "inline-block" }}
        >
          শিবিরে অংশগ্রহণ করুন
        </a>
      </div>
      <div className="camp-action">
        <div className="camp-badge">
          <div className="camp-badge-num">৪৮+</div>
          <div className="camp-badge-label">বিনামূল্যে শিবির প্রতি বছর</div>
        </div>
        <div className="camp-badge">
          <div className="camp-badge-num">১২,০০০+</div>
          <div className="camp-badge-label">শিবিরে সেবাপ্রাপ্ত রোগী</div>
        </div>
      </div>
    </div>
  );
};

export default BannnerFreeCamp;
