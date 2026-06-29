const doctors = [
  {
    name: "ডা. মোহাম্মদ রফিকুল ইসলাম",
    degree: "FCPS (Ophthalmology) • MS (Eye)",
    specialty: "সিনিয়র চক্ষু বিশেষজ্ঞ ও সার্জন",
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    name: "ডা. নাজমুন নাহার",
    degree: "MBBS • DO (Ophthalmology)",
    specialty: "শিশু চক্ষু রোগ বিশেষজ্ঞ",
    image: "https://i.pravatar.cc/300?img=32",
  },
  {
    name: "ডা. করিম উদ্দিন আহমেদ",
    degree: "MBBS • MS (Retina)",
    specialty: "রেটিনা ও গ্লুকোমা বিশেষজ্ঞ",
    image: "https://i.pravatar.cc/300?img=13",
  },
  {
    name: "ডা. সালমা বেগম",
    degree: "MBBS • FCPS (Part II)",
    specialty: "ক্যাটার‍্যাক্ট ও কর্নিয়া বিশেষজ্ঞ",
    image: "https://i.pravatar.cc/300?img=44",
  },
];

const DoctorsList = () => {
  return (
    <section className="doctors" id="doctors">
      <div className="doctors-header fade-in">
        <div className="section-label">আমাদের চিকিৎসক দল</div>
        <h2 className="section-title">
          অভিজ্ঞ বিশেষজ্ঞদের হাতে
          <br />
          আপনার চোখ
        </h2>
      </div>
      <div className="doctors-grid">
        {doctors.map((doctor, index) => (
          <div className="doctor-card fade-in" key={index}>
            <div
              className="doctor-avatar"
              style={{
                backgroundImage: `url(${doctor.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* <div className="doctor-avatar-initial">ম</div> */}
              {/* <div className="doctor-avatar-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                {doctor.image ? (
                  <img src={doctor.image} alt={doctor.name} />
                ) : (
                  <div className="doctor-avatar-initial">
                    {doctor.name.charAt(0)}
                  </div>
                )}
              </div> */}
            </div>
            <div className="doctor-info">
              <h3>{doctor.name}</h3>
              <div className="degree">{doctor.degree}</div>
              <div className="specialty">{doctor.specialty}</div>
            </div>
          </div>
        ))}

        {/* <div className="doctor-card fade-in">
          <div
            className="doctor-avatar"
            style={{
              background: "linear-gradient(135deg, #00897B 0%, #26A69A 100%)",
            }}
          >
            <div className="doctor-avatar-initial">ন</div>
            <div className="doctor-avatar-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
          <div className="doctor-info">
            <h3>ডা. নাজমুন নাহার</h3>
            <div className="degree">MBBS • DO (Ophthalmology)</div>
            <div className="specialty">শিশু চক্ষু রোগ বিশেষজ্ঞ</div>
          </div>
        </div>
        <div className="doctor-card fade-in">
          <div
            className="doctor-avatar"
            style={{
              background: "linear-gradient(135deg, #1565C0 0%, #42A5F5 100%)",
            }}
          >
            <div className="doctor-avatar-initial">ক</div>
            <div className="doctor-avatar-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
          <div className="doctor-info">
            <h3>ডা. করিম উদ্দিন আহমেদ</h3>
            <div className="degree">MBBS • MS (Retina)</div>
            <div className="specialty">রেটিনা ও গ্লুকোমা বিশেষজ্ঞ</div>
          </div>
        </div>
        <div className="doctor-card fade-in">
          <div
            className="doctor-avatar"
            style={{
              background: "linear-gradient(135deg, #00695C 0%, #004D40 100%)",
            }}
          >
            <div className="doctor-avatar-initial">স</div>
            <div className="doctor-avatar-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
          <div className="doctor-info">
            <h3>ডা. সালমা বেগম</h3>
            <div className="degree">MBBS • FCPS (Part II)</div>
            <div className="specialty">ক্যাটার‍্যাক্ট ও কর্নিয়া বিশেষজ্ঞ</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default DoctorsList;
