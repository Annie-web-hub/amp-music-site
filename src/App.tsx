import { useEffect, useRef, useState } from 'react'

const releases = [
  {
    title: 'Electric Bloom',
    artist: 'Maya Sol',
    image:
      'https://images.unsplash.com/photo-1526218626217-dc65a29bb444?auto=format&fit=crop&w=900&q=85',
    color: 'bg-[#ff6433]',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    title: 'After Midnight',
    artist: 'Static Hearts',
    image:
      'https://images.unsplash.com/photo-1526749464606-83091e34a261?auto=format&fit=crop&w=900&q=85',
    color: 'bg-[#b7ff3c]',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    title: 'All Together Now',
    artist: 'The Frequency',
    image:
      'https://images.unsplash.com/photo-1559228461-4fa1e7eb677c?auto=format&fit=crop&w=900&q=85',
    color: 'bg-[#ffbbd4]',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5">
      <path d="M5 12h14M14 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function PlayIcon({ paused = false }: { paused?: boolean }) {
  return paused ? (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
      <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
      <path d="m7 4 13 8-13 8z" />
    </svg>
  )
}

export default function App() {
  const [playing, setPlaying] = useState<string | null>(null)
  const [joined, setJoined] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const currentRelease =
    releases.find((release) => release.title === playing) ?? (playing === 'hero' ? releases[0] : null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (!currentRelease) {
      audio.pause()
      return
    }

    if (audio.src !== currentRelease.audio) {
      audio.src = currentRelease.audio
    }
    audio.play().catch(() => setPlaying(null))
  }, [currentRelease])

  const toggleTrack = (track: string) => {
    if (playing === track) {
      audioRef.current?.pause()
      setPlaying(null)
      return
    }
    setPlaying(track)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f2e8] text-[#16112b]">
      <nav className="relative z-20 flex items-center justify-between border-b-2 border-[#16112b] px-5 py-4 md:px-10">
        <a href="#" className="font-display text-2xl leading-none tracking-tight">
          AMP<span className="text-[#ff4b2b]">!</span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-bold uppercase tracking-wider md:flex">
          <a className="nav-link" href="#discover">
            Discover
          </a>
          <a className="nav-link" href="#live">
            Live
          </a>
          <a className="nav-link" href="#about">
            About
          </a>
        </div>
        <a
          href="#newsletter"
          className="rounded-full border-2 border-[#16112b] bg-[#d6b5ff] px-5 py-2 text-sm font-extrabold uppercase shadow-[3px_3px_0_#16112b] transition hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#16112b]"
        >
          Join the club
        </a>
      </nav>

      <section className="relative grid min-h-[720px] border-b-2 border-[#16112b] lg:grid-cols-[1.05fr_.95fr]">
        <div className="relative z-10 flex flex-col justify-between px-5 py-14 md:px-10 md:py-20">
          <div>
            <p className="mb-6 flex items-center gap-3 text-sm font-black uppercase tracking-[0.25em]">
              <span className="inline-block size-3 rounded-full bg-[#ff4b2b]"></span>
              Independent sound, turned up
            </p>
            <h1 className="font-display max-w-[760px] text-[clamp(4.2rem,10vw,9rem)] leading-[0.82] tracking-[-0.055em]">
              MUSIC
              <br />
              <span className="text-[#ff4b2b]">MOVES</span>
              <br />
              US.
            </h1>
            <p className="mt-8 max-w-lg text-lg font-semibold leading-relaxed md:text-xl">
              Meet the artists making noise, find your next favorite track, and feel it live.
              No algorithms. Just brilliant music.
            </p>
          </div>
          <a href="#discover" className="group mt-12 flex w-fit items-center gap-4 font-black uppercase">
            Start listening
            <span className="grid size-11 place-items-center rounded-full bg-[#b7ff3c] transition group-hover:translate-x-2">
              <ArrowIcon />
            </span>
          </a>
        </div>

        <div className="relative min-h-[540px] overflow-hidden border-t-2 border-[#16112b] lg:border-l-2 lg:border-t-0">
          <img
            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1400&q=90"
            alt="A colorful crowd watching a live concert"
            className="absolute inset-0 h-full w-full object-cover grayscale-[15%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#5d1b92]/80 via-transparent to-[#ff4b2b]/25 mix-blend-color"></div>
          <div className="absolute left-5 top-5 rotate-[-5deg] bg-[#b7ff3c] px-5 py-3 font-black uppercase text-[#16112b] shadow-[5px_5px_0_#16112b] md:left-9 md:top-9">
            Feel everything
          </div>
          <button
            onClick={() => toggleTrack('hero')}
            className="absolute bottom-8 right-8 grid size-20 place-items-center rounded-full border-2 border-[#16112b] bg-[#ffbbd4] shadow-[5px_5px_0_#16112b] transition hover:scale-105"
            aria-label={playing === 'hero' ? 'Pause featured track' : 'Play featured track'}
          >
            <PlayIcon paused={playing === 'hero'} />
          </button>
          <div className="absolute bottom-8 left-6 text-white md:left-10">
            <p className="text-xs font-black uppercase tracking-[0.25em]">Now spotlighting</p>
            <p className="mt-1 text-2xl font-black">NEON JUNE</p>
          </div>
        </div>
      </section>

      <section id="discover" className="px-5 py-20 md:px-10 md:py-28">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-black uppercase tracking-[0.2em] text-[#ff4b2b]">Freshly pressed</p>
            <h2 className="font-display text-5xl leading-none md:text-7xl">NEW & LOUD</h2>
          </div>
          <p className="max-w-sm text-xl font-black leading-snug">
            Your next obsession is one play away. Turn it up.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {releases.map((release, index) => {
            const isPlaying = playing === release.title
            return (
              <article
                key={release.title}
                className={`music-card group border-2 border-[#16112b] ${release.color} p-3 shadow-[6px_6px_0_#16112b]`}
              >
                <div className="relative aspect-square overflow-hidden border-2 border-[#16112b]">
                  <img
                    src={release.image}
                    alt={`${release.artist} performing live`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 grid size-9 place-items-center rounded-full bg-[#f8f2e8] text-sm font-black">
                    0{index + 1}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3 px-2 py-5">
                  <div>
                    <h3 className="text-xl font-black">{release.title}</h3>
                    <p className="mt-1 text-sm font-bold uppercase tracking-wider">{release.artist}</p>
                  </div>
                  <button
                    onClick={() => toggleTrack(release.title)}
                    className="grid size-12 shrink-0 place-items-center rounded-full border-2 border-[#16112b] bg-[#f8f2e8] transition hover:scale-110"
                    aria-label={`${isPlaying ? 'Pause' : 'Play'} ${release.title}`}
                  >
                    <PlayIcon paused={isPlaying} />
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section id="live" className="relative border-y-2 border-[#16112b] bg-[#6d35b1] px-5 py-20 text-white md:px-10">
        <div className="absolute -right-10 -top-14 size-52 rounded-full border-[28px] border-[#ffbbd4] opacity-80"></div>
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-4 font-black uppercase tracking-[0.2em] text-[#b7ff3c]">This week, live</p>
            <h2 className="font-display text-6xl leading-[0.9] md:text-8xl">GET IN THE ROOM.</h2>
          </div>
          <div className="divide-y-2 divide-white/60 border-y-2 border-white">
            {[
              ['18 OCT', 'Luna Park', 'The Roundhouse — London'],
              ['22 OCT', 'Kofi & The Waves', 'Paradiso — Amsterdam'],
              ['29 OCT', 'Neon June', 'La Maroquinerie — Paris'],
            ].map(([date, artist, venue]) => (
              <a
                key={artist}
                href="#newsletter"
                className="group grid gap-3 py-6 transition hover:bg-white/10 sm:grid-cols-[90px_1fr_auto] sm:items-center sm:px-3"
              >
                <span className="text-sm font-black text-[#b7ff3c]">{date}</span>
                <span>
                  <strong className="block text-xl">{artist}</strong>
                  <span className="text-sm text-white/70">{venue}</span>
                </span>
                <span className="flex items-center gap-2 text-sm font-black uppercase">
                  Tickets <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="marquee border-b-2 border-[#16112b] bg-[#b7ff3c] py-5">
        <div className="marquee-track font-display flex w-max gap-8 text-3xl uppercase">
          <span>New sounds • Real artists • Loud nights •</span>
          <span aria-hidden="true">New sounds • Real artists • Loud nights •</span>
          <span aria-hidden="true">New sounds • Real artists • Loud nights •</span>
        </div>
      </section>

      <footer id="newsletter" className="grid border-b-2 border-[#16112b] md:grid-cols-2">
        <div className="bg-[#ff6433] px-5 py-16 md:px-10 md:py-20">
          <p className="font-display text-4xl leading-tight md:text-6xl">GOOD MUSIC IN YOUR INBOX.</p>
        </div>
        <div className="flex flex-col justify-center bg-[#ffbbd4] px-5 py-16 md:px-10">
          <p className="mb-7 max-w-md font-semibold">
            One sharp email a week. New releases, intimate gigs, and artists worth knowing.
          </p>
          {joined ? (
            <p className="text-xl font-black">You’re on the list. Turn it up.</p>
          ) : (
            <form
              className="flex max-w-xl flex-col gap-3 sm:flex-row"
              onSubmit={(event) => {
                event.preventDefault()
                setJoined(true)
              }}
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@email.com"
                className="min-w-0 flex-1 border-2 border-[#16112b] bg-[#f8f2e8] px-5 py-4 font-bold outline-none placeholder:text-[#16112b]/50 focus:shadow-[4px_4px_0_#16112b]"
              />
              <button className="border-2 border-[#16112b] bg-[#b7ff3c] px-6 py-4 font-black uppercase shadow-[4px_4px_0_#16112b] transition hover:-translate-y-0.5">
                Sign me up
              </button>
            </form>
          )}
        </div>
      </footer>
      <div className="flex flex-col justify-between gap-2 px-5 py-6 text-sm font-bold md:flex-row md:px-10">
        <p>© 2025 AMP! Independent music culture.</p>
        <p>Made for listening loudly.</p>
      </div>
      <audio ref={audioRef} onEnded={() => setPlaying(null)} preload="none" />
      {currentRelease && (
        <div className="fixed bottom-4 left-1/2 z-50 flex w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 items-center gap-4 border-2 border-[#16112b] bg-[#f8f2e8] p-3 shadow-[6px_6px_0_#16112b]">
          <img
            src={currentRelease.image}
            alt=""
            className="size-12 border-2 border-[#16112b] object-cover"
          />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-black">{currentRelease.title}</p>
            <p className="truncate text-xs font-bold uppercase tracking-wider text-[#16112b]/60">
              {currentRelease.artist} · Now playing
            </p>
          </div>
          <div className="sound-bars" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <button
            onClick={() => toggleTrack(playing!)}
            className="grid size-10 shrink-0 place-items-center rounded-full bg-[#ff4b2b] text-white"
            aria-label={`Pause ${currentRelease.title}`}
          >
            <PlayIcon paused />
          </button>
        </div>
      )}
    </main>
  )
}
