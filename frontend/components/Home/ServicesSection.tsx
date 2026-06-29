import React from "react";

const ServicesData = [
  {
    title: "বিনামূল্যে চক্ষু পরীক্ষা",
    description:
      "সম্পূর্ণ বিনামূল্যে দৃষ্টিশক্তি পরীক্ষা, চাপ পরীক্ষা ও সামগ্রিক চোখের স্বাস্থ্য মূল্যায়ন।",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    free: true,
  },
  {
    title: "ক্যাটার‍্যাক্ট সার্জারি",
    description:
      "অত্যাধুনিক ফ্যাকো সার্জারি পদ্ধতিতে ছানি অপারেশন। গরিব রোগীদের জন্য বিনামূল্যে।",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    free: true,
  },
  {
    title: "গ্লুকোমা চিকিৎসা",
    description:
      "গ্লুকোমার প্রাথমিক শনাক্তকরণ ও দীর্ঘমেয়াদী ব্যবস্থাপনায় বিশেষজ্ঞ সেবা।",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    free: false,
  },
  {
    title: "ডায়াবেটিক রেটিনোপ্যাথি",
    description:
      "ডায়াবেটিস জনিত চোখের জটিলতার স্ক্রিনিং, লেজার চিকিৎসা ও দীর্ঘমেয়াদী ফলোআপ।",
    icon: (
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
    ),
    free: false,
  },
];

const ServicesSection = () => {
  return (
    <section className="services" id="services">
      <div className="services-header fade-in">
        <div className="section-label">আমাদের সেবাসমূহ</div>
        <h2 className="section-title">সম্পূর্ণ চক্ষু স্বাস্থ্যসেবা</h2>
        <p className="section-body">
          অভিজ্ঞ চক্ষু বিশেষজ্ঞদের নেতৃত্বে আমরা প্রদান করি একটি পূর্ণাঙ্গ চক্ষু
          স্বাস্থ্যসেবার অভিজ্ঞতা।
        </p>
      </div>
      <div className="services-grid">
        {ServicesData.map((service, index) => (
          <div className="service-card fade-in" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {service.free && <span className="service-free">বিনামূল্যে</span>}
            {!service.free && (
              <span className="service-free">স্বল্পমূল্যে</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
