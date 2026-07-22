interface IconBadgeProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  tone?: "amber" | "teal";
}

const IconBadge = ({ icon: Icon, tone = "teal" }: IconBadgeProps) => {
  return (
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
        tone === "amber"
          ? "bg-[#D98E04]/12 text-[#D98E04]"
          : "bg-[#0B4F4C]/10 text-[#0B4F4C]"
      }`}
    >
      <Icon className="h-5 w-5" strokeWidth={2} />
    </div>
  );
};

export default IconBadge;
