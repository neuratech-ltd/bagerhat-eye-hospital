import React from "react";

const Map = () => {
  return (
    <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-2xl border border-[#0A2540]/10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.95700509487!2d89.7774427!3d22.6553916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fff5765e67eb41%3A0x1c44b6c09c4a70e5!2sBagerhat%20Eye%20Hospital!5e0!3m2!1sen!2sbd!4v1784697007670!5m2!1sen!2sbd"
        className="h-[320px] w-full sm:h-[400px]"
        title="Bagerhat Eye Hospital location"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default Map;
