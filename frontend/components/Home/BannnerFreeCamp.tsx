import React from "react";
import { Button } from "../ui/button";
import HeroSlider from "./HeroSlider";

const BannnerFreeCamp = () => {
  return (
    <div className="camp-banner fade-in">
      <div className="camp-text">
        <h6 className="section-label">আমাদের কার্যক্রম</h6>
        <h2 className="section-title">বিনামূল্যে চক্ষু শিবির</h2>
        <p className="mb-2">
          প্রতি মাসে আমরা বাগেরহাটের প্রত্যন্ত গ্রামাঞ্চলে বিনামূল্যে চক্ষু
          শিবির পরিচালনা করি। যেখানে পরীক্ষা, চশমা বিতরণ ও প্রয়োজনে রেফারেল
          সেবা দেওয়া হয় একদম বিনামূল্যে।
        </p>
        <Button
          variant="outline"
          className="rounded-full px-6 py-4 text-sm font-semibold "
        >
          Contact for Free Camp
        </Button>
      </div>
      <div className="camp-action p-2!">
        <HeroSlider />
      </div>
    </div>
  );
};

export default BannnerFreeCamp;
