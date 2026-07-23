"use client";

import React from "react";
import { Button } from "../ui/button";
import HeroSlider from "./HeroSlider";
import { useRouter } from "next/navigation";

const BannnerFreeCamp = () => {
  const router = useRouter();

  return (
    <div className="camp-banner fade-in flex lg:flex-row flex-col items-center justify-between gap-4 flex-wrap">
      <div className="camp-text flex flex-col items-center justify-center lg:items-start">
        <h6 className="section-label">আমাদের কার্যক্রম</h6>
        <h2 className="section-title">বিনামূল্যে চক্ষু শিবির</h2>
        <p className="mb-2">
          প্রতি মাসে আমরা বাগেরহাটের প্রত্যন্ত গ্রামাঞ্চলে বিনামূল্যে চক্ষু
          শিবির পরিচালনা করি। যেখানে পরীক্ষা, চশমা বিতরণ ও প্রয়োজনে রেফারেল
          সেবা দেওয়া হয় একদম বিনামূল্যে।
        </p>
        <Button
          onClick={() => {
            router.push("/contact");
          }}
          variant="outline"
          className="rounded-full bg-white border border-gray-300 hover:bg-black hover:text-white px-6 py-4 text-sm font-semibold "
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
