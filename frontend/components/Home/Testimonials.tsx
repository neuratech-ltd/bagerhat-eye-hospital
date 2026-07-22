import React from "react";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-header fade-in">
        <div className="section-label">রোগীদের কথা</div>
        <h2 className="section-title">আলো ফিরে পাওয়ার গল্প</h2>
        <p className="section-body">
          তাদের অভিজ্ঞতাই আমাদের সবচেয়ে বড় পুরস্কার।
        </p>
      </div>
      <div className="testimonials-grid">
        <div className="testimonial-card fade-in">
          <div className="testimonial-stars">★★★★★</div>
          <p className="testimonial-text">
            "অনেক বছর ধরে চোখে কম দেখছিলাম। টাকার অভাবে চিকিৎসা করাতে পারিনি।
            এখানে এসে বিনামূল্যে অপারেশন করলাম, এখন আলহামদুলিল্লাহ স্বাভাবিক
            দেখতে পাই।"
          </p>
          <div className="testimonial-author">
            <div className="testimonial-avatar">র</div>
            <div>
              <div className="testimonial-name">রহিমা বেগম</div>
              <div className="testimonial-loc">মোরেলগঞ্জ, বাগেরহাট</div>
            </div>
          </div>
        </div>
        <div className="testimonial-card fade-in">
          <div className="testimonial-stars">★★★★★</div>
          <p className="testimonial-text">
            "আমার ছেলের চোখে সমস্যা ছিল ছোটবেলা থেকে। ডাক্তাররা এখানে অনেক যত্ন
            করে দেখলেন, বিনামূল্যে চশমা দিলেন। এখন স্কুলে পড়াশোনায় অনেক ভালো
            করছে।"
          </p>
          <div className="testimonial-author">
            <div className="testimonial-avatar">ক</div>
            <div>
              <div className="testimonial-name">করিম শেখ</div>
              <div className="testimonial-loc">চিতলমারী, বাগেরহাট</div>
            </div>
          </div>
        </div>
        <div className="testimonial-card fade-in">
          <div className="testimonial-stars">★★★★★</div>
          <p className="testimonial-text">
            "ডায়াবেটিসের কারণে চোখে ঝাপসা দেখছিলাম। ডাক্তাররা লেজার চিকিৎসা
            করলেন। এখন অনেকটা ভালো আছি। এত কম খরচে এত ভালো সেবা আর কোথাও পাইনি।"
          </p>
          <div className="testimonial-author">
            <div className="testimonial-avatar">জ</div>
            <div>
              <div className="testimonial-name">জহিরুল ইসলাম</div>
              <div className="testimonial-loc">রামপাল, বাগেরহাট</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
