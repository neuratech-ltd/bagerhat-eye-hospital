import React from "react";
import {
  Eye,
  Search,
  ScanEye,
  ShieldCheck,
  Droplets,
  HeartPulse,
  Scissors,
  Sparkles,
  CircleDot,
  Syringe,
  Activity,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  free: boolean;
}

const ServicesData: Service[] = [
  {
    title: "চক্ষু পরীক্ষা",
    description:
      "দৃষ্টিশক্তি পরীক্ষা, চোখের চাপ (IOP) পরিমাপ, পাওয়ার নির্ণয় এবং চোখের সামগ্রিক স্বাস্থ্য পরীক্ষা।",
    icon: <Eye />,
    free: false,
  },
  {
    title: "ছানি অপারেশন",
    description:
      "আধুনিক ফ্যাকো সার্জারি পদ্ধতিতে ছানি অপারেশন এবং উন্নত মানের লেন্স প্রতিস্থাপনের মাধ্যমে দৃষ্টিশক্তি পুনরুদ্ধার।",
    icon: <Scissors />,
    free: true,
  },
  {
    title: "গ্লুকোমা চিকিৎসা",
    description:
      "গ্লুকোমা রোগের প্রাথমিক শনাক্তকরণ, চোখের চাপ নিয়ন্ত্রণ ও প্রয়োজনীয় চিকিৎসার মাধ্যমে দৃষ্টি সুরক্ষা।",
    icon: <ScanEye />,
    free: false,
  },
  {
    title: "নেত্রনালী DCR অপারেশন",
    description:
      "চোখ দিয়ে পানি পড়ার সমস্যা দূর করতে বন্ধ হয়ে যাওয়া অশ্রুনালী DCR সার্জারির মাধ্যমে পুনঃস্থাপন।",
    icon: <Droplets />,
    free: false,
  },
  {
    title: "DCT অপারেশন",
    description:
      "অশ্রুনালীর সমস্যার জন্য DCT অপারেশনের মাধ্যমে কার্যকর চিকিৎসা ও দীর্ঘমেয়াদী সমাধান প্রদান।",
    icon: <Activity />,
    free: false,
  },
  {
    title: "টেরিজিয়াম অপারেশন",
    description:
      "চোখের সাদা অংশ থেকে কর্নিয়ার দিকে বেড়ে ওঠা টেরিজিয়াম আধুনিক সার্জারির মাধ্যমে অপসারণ।",
    icon: <Eye />,
    free: false,
  },
  {
    title: "গ্রাফটিং সহ অপারেশন",
    description:
      "কর্নিয়া ও চোখের বিভিন্ন সমস্যায় প্রয়োজন অনুযায়ী গ্রাফটিংসহ উন্নত সার্জিক্যাল চিকিৎসা প্রদান।",
    icon: <ShieldCheck />,
    free: false,
  },
  {
    title: "কালাজিয়ান অপারেশন",
    description:
      "চোখের পাতার ভেতরে হওয়া কালাজিয়ান নিরাপদ ছোট সার্জারির মাধ্যমে অপসারণ।",
    icon: <CircleDot />,
    free: false,
  },
  {
    title: "সিস্ট অপারেশন",
    description:
      "চোখের পাতা বা আশেপাশে তৈরি হওয়া সিস্ট বিশেষজ্ঞ চিকিৎসকের মাধ্যমে অপসারণ।",
    icon: <Syringe />,
    free: false,
  },
  {
    title: "ইমপ্লান্টসহ ইনুক্লেশন",
    description:
      "চোখের অনিরাময়যোগ্য রোগ বা গুরুতর আঘাতের ক্ষেত্রে ইনুক্লেশন সার্জারির মাধ্যমে চোখ অপসারণ এবং কক্ষপথে ইমপ্লান্ট স্থাপন করা হয়",
    icon: <HeartPulse />,
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
