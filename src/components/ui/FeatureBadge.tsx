import TickImg from "@/assets/images/common/Allowed.png";

type FeatureBadgeProps = {
  text: string;
};

const FeatureBadge = ({ text }: FeatureBadgeProps) => {
  return (
    <div className="flex w-fit items-center gap-1 rounded-full border border-white/30 bg-white/5 px-4 py-2 text-xs text-white backdrop-blur">
      <img src={TickImg} alt="Tick-image" />
      <span>{text}</span>
    </div>
  );
};

export default FeatureBadge;
