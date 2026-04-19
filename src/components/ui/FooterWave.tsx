type Props = {
  className?: string;
};

export function FooterWave({ className = "" }: Props) {
  return (
    <div
      className={`-mt-10 relative z-10 -mb-px block w-full md:-mt-14 ${className}`}
      aria-hidden
    >
      <svg
        className="relative block h-14 w-full md:h-[4.5rem]"
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="var(--pk-footer)"
          d="M0 28c160-22 320 10 480 6s320-34 480-28 320 38 480 32 320-14 480-18v52H0z"
        />
      </svg>
    </div>
  );
}
