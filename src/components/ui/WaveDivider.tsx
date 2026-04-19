type Props = {
  fillClassName?: string;
  flip?: boolean;
  className?: string;
};

export function WaveDivider({
  fillClassName = "fill-white",
  flip = false,
  className = "",
}: Props) {
  return (
    <div
      className={`relative block w-full shrink-0 overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden
    >
      <svg
        className="relative block h-10 w-full md:h-14"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={fillClassName}
          d="M0 24c180-18 360 18 540 8s360-28 540-14 360 26 540 14 360-22 540-8v24H0z"
        />
      </svg>
    </div>
  );
}
