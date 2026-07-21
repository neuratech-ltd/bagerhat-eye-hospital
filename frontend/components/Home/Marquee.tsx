import React from "react";

const items = [
  "চক্ষু পরীক্ষা",
  "ছানি অপারেশন",
  "গ্লুকোমা চিকিৎসা",
  "নেত্রনালী DCR অপারেশন",
  "চশমা নির্ধারণ",
  "DCT অপারেশন",
  "টেরিজিয়াম অপারেশন",
  "গ্রাফটিং সহ অপারেশন",
  "সিস্ট অপারেশন",
  "কালাজিয়ান অপারেশন",

  "চক্ষু পরীক্ষা",
  "ছানি অপারেশন",
  "গ্লুকোমা চিকিৎসা",
  "নেত্রনালী DCR অপারেশন",
  "চশমা নির্ধারণ",
  "DCT অপারেশন",
  "টেরিজিয়াম অপারেশন",
  "গ্রাফটিং সহ অপারেশন",
  "সিস্ট অপারেশন",
  "কালাজিয়ান অপারেশন",
];

const Marquee = () => {
  return (
    <div className="marquee-bar">
      <div className="marquee-track">
        {items.map((item, index) => (
          <span key={index} className="marquee-item">
            {item} <span className="marquee-dot">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
