/**
 * Hand-drawn sticker doodles. They inherit colour (currentColor) and take a
 * className for size, colour and rotation — so the page can stick them
 * anywhere like they were drawn on with a fine-liner.
 */

type StickerProps = {
  className?: string;
  strokeWidth?: number;
};

function Svg({
  className,
  strokeWidth = 1.4,
  children,
}: StickerProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export function Heart(props: StickerProps) {
  return (
    <Svg {...props}>
      <path d="M12 20.4C6.2 16.4 3.4 13.2 3.4 9.9c0-2.7 1.7-4.7 4.2-4.7 1.9 0 3.5 1.1 4.4 2.8.9-1.7 2.5-2.8 4.4-2.8 2.5 0 4.4 2 4.4 4.7 0 3.3-3 6.5-8.8 10.5Z" />
    </Svg>
  );
}

export function Sparkle(props: StickerProps) {
  return (
    <Svg {...props}>
      <path d="M12 2Q13.2 10.8 22 12Q13.2 13.2 12 22Q10.8 13.2 2 12Q10.8 10.8 12 2Z" />
    </Svg>
  );
}

export function Ghost(props: StickerProps) {
  return (
    <Svg {...props}>
      <path d="M4.8 20.2V10.5a7.2 7.2 0 0 1 14.4 0v9.7l-2.4-1.9-2.4 1.9-2.4-1.9-2.4 1.9-2.4-1.9Z" />
      <path d="M9.6 10.2v1.8M14.4 10.2v1.8" />
      <path d="M10.9 14.6a1.2 1.2 0 0 0 2.2 0" />
    </Svg>
  );
}

export function FilmStrip(props: StickerProps) {
  return (
    <Svg {...props}>
      <path d="M2.5 7.5h19v9h-19Z" />
      <path d="M10 7.5v9M14 7.5v9" />
      <path d="M4.6 10h2.2M4.6 14h2.2M17.2 10h2.2M17.2 14h2.2" />
    </Svg>
  );
}

export function Moon(props: StickerProps) {
  return (
    <Svg {...props}>
      <path d="M20.4 15.2A8.6 8.6 0 0 1 8.8 3.6 8.6 8.6 0 1 0 20.4 15.2Z" />
    </Svg>
  );
}

export function Eye(props: StickerProps) {
  return (
    <Svg {...props}>
      <path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.6" />
    </Svg>
  );
}

/** A cupped hand offering a small heart — touch as a love language. */
export function HandHeart(props: StickerProps) {
  return (
    <Svg {...props}>
      <path d="M3.2 13.5c1.2 4.2 4.4 7 8.8 7s7.6-2.8 8.8-7" />
      <path d="M3.2 13.5c-.7-1.4-.3-2.7.8-3 1-.3 1.8.5 2 1.9" />
      <path d="M12 9.4c-1.9-1.3-3-2.3-3-3.6 0-1 .7-1.8 1.6-1.8.6 0 1.1.3 1.4.8.3-.5.8-.8 1.4-.8.9 0 1.6.8 1.6 1.8 0 1.3-1.1 2.3-3 3.6Z" />
    </Svg>
  );
}

export function Smiley(props: StickerProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M9 10.2v1M15 10.2v1" />
      <path d="M8.4 14.2c1 1.4 2.3 2.1 3.6 2.1s2.6-.7 3.6-2.1" />
    </Svg>
  );
}

export function Flower(props: StickerProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="7" r="2.7" />
      <circle cx="16.8" cy="10.4" r="2.7" />
      <circle cx="15" cy="16" r="2.7" />
      <circle cx="9" cy="16" r="2.7" />
      <circle cx="7.2" cy="10.4" r="2.7" />
      <circle cx="12" cy="12" r="1.9" />
    </Svg>
  );
}

export function Butterfly(props: StickerProps) {
  return (
    <Svg {...props}>
      <path d="M12 12c-1.5-4-4.5-7-7-6.5S2.5 11 5 13.5s5 1.5 7-1.5Z" />
      <path d="M12 12c1.5-4 4.5-7 7-6.5s2.5 5.5 0 8-5 1.5-7-1.5Z" />
      <path d="M12 6.4v11" />
    </Svg>
  );
}

export function ArrowDoodle(props: StickerProps) {
  return (
    <Svg {...props}>
      <path d="M3.5 5.5c5.5 1 10 3.5 12.5 7.5.8 1.4 1.4 3 1.8 4.7" />
      <path d="M13.5 16.5 17.8 17.7 17.2 13.2" />
    </Svg>
  );
}

export function Asterisk(props: StickerProps) {
  return (
    <Svg {...props}>
      <path d="M12 4v16M4.9 8l14.2 8M19.1 8 4.9 16" />
    </Svg>
  );
}
