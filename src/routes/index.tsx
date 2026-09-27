import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import {
  ArrowDoodle,
  Asterisk,
  Butterfly,
  Eye,
  FilmStrip,
  Flower,
  HandHeart,
  Heart,
  Moon,
  Ghost,
  Smiley,
  Sparkle,
} from "@/components/Stickers";
import cafeAsset from "@/assets/cafe.asset.json";
import cardiganAsset from "@/assets/cardigan.asset.json";
import eyesAsset from "@/assets/eyes.asset.json";
import juiceAsset from "@/assets/juice.asset.json";
import selfieAsset from "@/assets/selfie.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const PHOTOS = {
  eyes: eyesAsset.url,
  selfie: selfieAsset.url,
  cardigan: cardiganAsset.url,
  cafe: cafeAsset.url,
  juice: juiceAsset.url,
};

function Index() {
  return (
    <div className="grain relative min-h-screen overflow-x-clip bg-paper text-ink">
      <Opening />
      <TheQuote />
      <HerName />
      <ThreeThings />
      <TheWall />
      <WhatSheDoes />
      <Plainly />
      <End />
    </div>
  );
}

/* ---------------------------------------------------------------- parts */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body text-[0.68rem] font-medium uppercase tracking-[0.42em] text-graphite">
      {children}
    </p>
  );
}

function Hand({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`font-hand text-2xl leading-snug text-ink-soft md:text-[1.7rem] ${className ?? ""}`}>
      {children}
    </p>
  );
}

function Polaroid({
  src,
  alt,
  caption,
  className,
  tilt = "-2deg",
  children,
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  tilt?: string;
  children?: React.ReactNode;
}) {
  return (
    <figure
      className={`group relative bg-card p-2.5 pb-14 shadow-[var(--shadow-print)] transition-shadow duration-700 hover:shadow-[var(--shadow-lift)] ${className ?? ""}`}
      style={{ rotate: tilt }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="photo-print aspect-[4/5] w-full object-cover"
      />
      <figcaption className="absolute inset-x-3 bottom-3 font-hand text-lg leading-tight text-ink-soft">
        {caption}
      </figcaption>
      {children}
    </figure>
  );
}

/* ------------------------------------------------------------- opening */

function Opening() {
  return (
    <header className="relative z-10 mx-auto flex min-h-[100svh] max-w-[46rem] flex-col justify-center px-6 py-24">
      <Sparkle className="absolute left-8 top-24 h-6 w-6 animate-float-slow text-graphite [animation-delay:-3s]" />
      <Heart className="absolute right-10 top-[38%] h-7 w-7 rotate-12 animate-float text-ink-soft/70" />
      <Moon className="absolute bottom-32 left-12 hidden h-8 w-8 animate-sway text-graphite/70 md:block" />
      <Asterisk className="absolute bottom-24 right-16 h-5 w-5 animate-float-slow text-graphite [animation-delay:-6s]" />

      <Reveal>
        <Eyebrow>a small page about her</Eyebrow>
      </Reveal>

      <Reveal delay={120}>
        <h1 className="mt-8 font-display text-[clamp(4.2rem,19vw,11rem)] leading-[0.85] tracking-[-0.03em] text-ink">
          23.08.26
        </h1>
      </Reveal>

      <Reveal delay={280}>
        <p className="mt-8 max-w-[34ch] font-display text-[clamp(1.35rem,4.6vw,2rem)] leading-[1.25] text-ink">
          A date I didn&rsquo;t know would become a memory.
        </p>
      </Reveal>

      <Reveal delay={440}>
        <div className="mt-14 flex items-end justify-between gap-6">
          <div className="flex items-center gap-3 text-graphite">
            <ArrowDoodle className="h-6 w-6 -scale-x-100" />
            <Hand className="text-xl">scroll, slowly</Hand>
          </div>
          <p className="font-hand text-lg text-graphite">
            written at 2am<span className="animate-blink">|</span>
          </p>
        </div>
      </Reveal>
    </header>
  );
}

/* --------------------------------------------------------------- quote */

function TheQuote() {
  return (
    <section className="relative z-10 px-6 py-24 md:py-32">
      <Reveal className="mx-auto max-w-[38rem]">
        <blockquote className="tape relative bg-card/70 px-7 py-12 text-center shadow-[var(--shadow-print)] md:px-14 md:py-16">
          <p className="font-display text-[clamp(1.4rem,5.2vw,2.3rem)] leading-[1.35] italic text-ink">
            Two people, somewhere behind two screens,
            <br className="hidden sm:block" /> not knowing that a simple
            conversation would become something worth remembering.
          </p>
          <footer className="mt-8 font-hand text-xl text-graphite">
            the part I keep coming back to
          </footer>
        </blockquote>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------- her name */

function HerName() {
  return (
    <section className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-[52rem] items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <Eyebrow>her</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-[clamp(2.6rem,9vw,4.6rem)] leading-[0.95] tracking-[-0.02em]">
              Subekshya
              <span className="block text-graphite">K.C.</span>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <Hand className="mt-6">everyone who matters calls her Subu</Hand>
          </Reveal>
          <Reveal delay={320}>
            <p className="mt-8 max-w-[42ch] text-[0.98rem] leading-[1.9] text-ink-soft">
              I didn&rsquo;t plan on learning a name by heart. That&rsquo;s not
              how it works when you&rsquo;re just two people talking badly
              through a phone. It happened anyway, quietly, somewhere in the
              middle of a conversation neither of us wanted to end.
            </p>
          </Reveal>
          <Reveal delay={420}>
            <p className="mt-6 max-w-[42ch] text-[0.98rem] leading-[1.9] text-ink-soft">
              Now it&rsquo;s the first thing I think of when something good
              happens, and the last thing before I sleep.
            </p>
          </Reveal>
          <Butterfly className="mt-10 h-8 w-8 animate-sway text-graphite/80" />
        </div>

        <Reveal delay={200} className="relative">
          <Polaroid
            src={PHOTOS.selfie}
            alt="Subu taking a selfie in a white shirt"
            caption="the first face I ask for"
            tilt="2deg"
          >
            <Smiley className="absolute -right-3 -top-3 h-8 w-8 rotate-6 animate-float text-ink-soft/80" />
          </Polaroid>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- three things */

const THINGS = [
  {
    n: "01",
    title: "Black and white",
    sticker: Moon,
    body: "She likes her world without colour in it. Not forty shades of something to decide between — just black, just white, and the honest grey in between. I've started seeing it her way. It's quieter. It's truer. This page is in her colours because nothing else would have felt like hers.",
    note: "no in-between, apparently",
  },
  {
    n: "02",
    title: "Horror movies",
    sticker: Ghost,
    body: "She likes the ones that make her forget to breathe. She sits through the whole thing, completely unbothered, then turns and asks if I'm still there. I always am. There is no better version of an evening than one where she's two seconds from screaming and still refuses to look away.",
    note: "she never hides. I do.",
  },
  {
    n: "03",
    title: "Touch is her love language",
    sticker: HandHeart,
    body: "This is the one that rearranged things for me. It means a message will never be the whole story with her, and I've stopped pretending it should be. I would trade every typed word I've ever sent her for one ordinary minute of actually sitting next to her. Not doing something. Just being near.",
    note: "so I want to be there, not here",
  },
] as const;

function ThreeThings() {
  return (
    <section className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[42rem]">
        <Reveal>
          <Eyebrow>three things I learned about her</Eyebrow>
          <Flower className="mt-6 h-8 w-8 animate-sway text-graphite/80" />
        </Reveal>

        <ol className="mt-16 space-y-20">
          {THINGS.map((thing, i) => {
            const Sticker = thing.sticker;
            return (
              <li key={thing.n}>
                <Reveal delay={i * 60}>
                  <article className="relative border-l border-line pl-7 md:pl-10">
                    <span className="absolute -left-3 top-0 bg-paper px-1 font-hand text-lg text-graphite">
                      {thing.n}
                    </span>
                    <div className="flex flex-wrap items-center gap-4">
                      <h3 className="font-display text-[clamp(1.8rem,6.5vw,2.6rem)] leading-tight">
                        {thing.title}
                      </h3>
                      <Sticker className="h-8 w-8 animate-float text-ink-soft/80" />
                    </div>
                    <p className="mt-5 max-w-[46ch] text-[0.98rem] leading-[1.95] text-ink-soft">
                      {thing.body}
                    </p>
                    <p className="mt-5 font-hand text-xl text-graphite">
                      {thing.note}
                    </p>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- the wall */

function TheWall() {
  return (
    <section className="relative z-10 px-6 py-24 md:py-32">
      <Reveal className="mx-auto max-w-[52rem]">
        <Eyebrow>the wall</Eyebrow>
        <Hand className="mt-5 max-w-[28ch]">
          the ones I keep going back to, pinned up in no particular order
        </Hand>
      </Reveal>

      <div className="mx-auto mt-16 grid max-w-[52rem] grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
        <Reveal className="md:mt-10">
          <Polaroid
            src={PHOTOS.eyes}
            alt="Close-up of her eyes"
            caption="the eyes I describe to people who weren't there"
            tilt="-3deg"
          >
            <Eye className="absolute -left-3 top-6 h-7 w-7 animate-float-slow text-ink-soft/70" />
          </Polaroid>
        </Reveal>

        <Reveal delay={90}>
          <Polaroid
            src={PHOTOS.cafe}
            alt="Subu reading a menu at a table"
            caption="reading the menu like the answer is in it"
            tilt="2.5deg"
          />
        </Reveal>

        <Reveal delay={180} className="md:mt-10">
          <Polaroid
            src={PHOTOS.juice}
            alt="Subu drinking from a carton outdoors"
            caption="unbothered, outdoors, perfect"
            tilt="-1.5deg"
          >
            <Sparkle className="absolute -right-4 bottom-8 h-6 w-6 animate-float text-graphite" />
          </Polaroid>
        </Reveal>

        <Reveal delay={270}>
          <Polaroid
            src={PHOTOS.cardigan}
            alt="Her cardigan with gold buttons over a black top"
            caption="black underneath, gold buttons, no notes"
            tilt="3deg"
          >
            <FilmStrip className="absolute -left-4 -bottom-4 h-8 w-8 -rotate-6 animate-sway text-graphite/80" />
          </Polaroid>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- what she does */

const LINES = [
  "She says something completely casual and I lose an hour to it.",
  "I get excited about her like it's a secret, which it isn't.",
  "Something good happens and she is the first person I want to tell.",
  "A normal day rearranges itself around whether she wrote.",
  "I'm not subtle anymore, and I've stopped trying to be.",
];

function WhatSheDoes() {
  return (
    <section className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[40rem]">
        <Reveal>
          <Eyebrow>what she does to me</Eyebrow>
        </Reveal>
        <ul className="mt-12 space-y-6">
          {LINES.map((line, i) => (
            <li key={line}>
              <Reveal delay={i * 70}>
                <p className="flex items-start gap-4 border-b border-line pb-6 font-display text-[clamp(1.25rem,4.6vw,1.75rem)] leading-[1.35]">
                  <Heart className="mt-1.5 h-5 w-5 shrink-0 text-ink-soft/70" />
                  <span>{line}</span>
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal delay={200}>
          <Hand className="mt-10 text-center">
            that&rsquo;s the whole embarrassing truth of it
          </Hand>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- plainly */

function Plainly() {
  return (
    <section className="relative z-10 px-6 py-24 md:py-32">
      <Reveal className="mx-auto max-w-[40rem]">
        <div className="tape relative bg-card/70 px-7 py-14 shadow-[var(--shadow-print)] md:px-14 md:py-20">
          <Eyebrow>so, plainly</Eyebrow>
          <p className="mt-8 font-display text-[clamp(1.5rem,5.6vw,2.4rem)] leading-[1.3]">
            I like her. Not the idea of her — her.
          </p>
          <p className="mt-8 max-w-[44ch] text-[0.98rem] leading-[1.95] text-ink-soft">
            The black and white. The horror films. The way she wants to be near
            someone, which is the most honest thing a person can want. The way
            she says my name like it&rsquo;s nothing, when it&rsquo;s the only
            part of the day I look forward to.
          </p>
          <p className="mt-8 max-w-[44ch] text-[0.98rem] leading-[1.95] text-ink-soft">
            23.08.26 is the day I have a favourite date now. It didn&rsquo;t
            feel important at the time. That&rsquo;s how you know they&rsquo;re
            the real ones.
          </p>
          <div className="mt-12 flex items-center justify-between gap-6">
            <Hand>— me, still behind the screen. not for long.</Hand>
            <Heart className="h-7 w-7 shrink-0 animate-float text-ink" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ end */

function End() {
  return (
    <footer className="relative z-10 px-6 pb-16 pt-10">
      <div className="mx-auto flex max-w-[52rem] flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-5 text-graphite">
          <Sparkle className="h-5 w-5 animate-float-slow" />
          <Moon className="h-5 w-5 animate-float-slow [animation-delay:-4s]" />
          <Flower className="h-5 w-5 animate-float-slow [animation-delay:-8s]" />
          <Ghost className="h-5 w-5 animate-float-slow [animation-delay:-2s]" />
          <Heart className="h-5 w-5 animate-float-slow [animation-delay:-6s]" />
        </div>
        <p className="font-hand text-2xl text-ink-soft">
          made for Subu · 23.08.26
        </p>
        <a
          href="/"
          className="rule-ink text-[0.7rem] uppercase tracking-[0.35em] text-graphite transition-colors hover:text-ink"
        >
          back to the beginning
        </a>
      </div>
    </footer>
  );
}
