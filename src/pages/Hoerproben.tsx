import { useEffect, useRef, useState } from 'react';
import { Music, Play, Pause, SkipForward, Volume2, ExternalLink } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';

type Track = {
  id: number;
  title: string;
  url: string;
  pageUrl: string;
};

const tracks: Track[] = [
  {
    id: 29422806,
    title: 'Watschnplattler',
    url: 'https://dnma3z6c8ojev.cloudfront.net/songs/mp3_files/29422806/original/Watschnplattler.mp3?e8817609673e6ceae29a01aab0c7efb25f2dc06bc8c705941ee1d6d15a6e9244808ed437096f171c0527001c85ae3e66507905ff2d05b647f486217c42a0e50b51e4a0218002f1bdb6cf933c456b47161377791a5a577e4a7db0cf3a35d561d8dfbaae76d9ae',
    pageUrl: 'https://legacy.reverbnation.com/engerwitzdorferschuhplattler/song/29422806-watschnplattler',
  },
  {
    id: 29422804,
    title: 'Urlaubsplattler',
    url: 'https://dnma3z6c8ojev.cloudfront.net/songs/mp3_files/29422804/original/Urlaubsplattler.mp3?e8817609673e6ceae29a01aab0c7efb25f2dc06bc8c705941ee1d6d15a6e9244808ed437096f171c0527001c85ae3e66507905fd2d05b647953eb94d0b44f4845e076db378c7d3f0d21b4a85c84b693a897ab3799743473b6f99fb27ccefdba8af832d500acb',
    pageUrl: 'https://legacy.reverbnation.com/engerwitzdorferschuhplattler/song/29422804-urlaubsplattler',
  },
  {
    id: 29422800,
    title: 'Trompetenecho',
    url: 'https://dnma3z6c8ojev.cloudfront.net/songs/mp3_files/29422800/original/Trompetenecho.mp3?e8817609673e6ceae29a01aab2c7efb2d55c8363bc72270a4bb530626b94148c9def2d5b7ca69d7c7eef85515c5abcf2c3e7cf12286fa13fa1f4b74834b2da5d480bccc5661c2ee7550a66d48fcf250d9e0f34707f486f84e8fdfa87f8b9ae11300f5fc4',
    pageUrl: 'https://legacy.reverbnation.com/engerwitzdorferschuhplattler/song/29422800-trompetenecho',
  },
  {
    id: 29422793,
    title: 'Moos im Winkl',
    url: 'https://dnma3z6c8ojev.cloudfront.net/songs/mp3_files/29422793/original/Moosimwinkl.mp3?e8817609673e6ceae29a00a3bac7efb26ae29274e259f27f51cc29f86511b166d2a63bbeb427fc964faa51087e6895e663aba7d99c663a44fc9ad8778ad7bbe0d34c11f811f41e7d1ed392f32aaa793c843d9aa30bf078835bcfa372348d83d897d5',
    pageUrl: 'https://legacy.reverbnation.com/engerwitzdorferschuhplattler/song/29422793-moos-im-winkl',
  },
  {
    id: 29422790,
    title: 'Lindauer',
    url: 'https://dnma3z6c8ojev.cloudfront.net/songs/mp3_files/29422790/original/Lindauer.mp3?e8817609673e6ceae29a00a3b7c7efb2eb834e765a8561d72f67c7198f5220e233ca88636f3eca86d0774657c3e4d7fd7f5d42ac2cdc6039168616d991fcd919fc5d08a794da81512cb6665d710c3deca654cb188863d548549deb3f07fcd4',
    pageUrl: 'https://legacy.reverbnation.com/engerwitzdorferschuhplattler/song/29422790-lindauer',
  },
  {
    id: 29422788,
    title: 'Knappenplattler',
    url: 'https://dnma3z6c8ojev.cloudfront.net/songs/mp3_files/29422788/original/Knappenplattler.mp3?e8817609673e6ceae29a01aab0c7efb25f2dc06bc8c705941ee1d6d15a6e9244808ed437096f171c0527001c85ae3e6650760df12d05b6475208e0e6a229012eabb4fe8e20082acbceb326e8effe8d697e3915afa732c2759abfd6ca072c925598e5376058db',
    pageUrl: 'https://legacy.reverbnation.com/engerwitzdorferschuhplattler/song/29422788-knappenplattler',
  },
  {
    id: 29422784,
    title: 'Huat',
    url: 'https://dnma3z6c8ojev.cloudfront.net/songs/mp3_files/29422784/original/huat_web.mp3?e8817609673e6ceae29a00a3b7c7efb2eb834e765a8561d72f67c7198f5220e233ca88636f3eca86d0774657c3e4d7fd7f5d43a82cdc6039be01f5c7f61f7df6da097e7eda47ec5c44c8b3b5fdce4f5da073f75dd75a1d58ac7fb2afe667e2',
    pageUrl: 'https://legacy.reverbnation.com/engerwitzdorferschuhplattler/song/29422784-huat',
  },
  {
    id: 29422782,
    title: 'Holzhacker',
    url: 'https://dnma3z6c8ojev.cloudfront.net/songs/mp3_files/29422782/original/holzhacker_web.mp3?e8817609673e6ceae29a01aab3c7efb2e3ee1e8948484146505ccb581a42ea1d41a4017ec966c5982ba09aac2d5bafb2e894e7949915cd29d16392bda50d4e4c88e6a792c3d24014dfa95a1a0f0f17d668e7a9c2c0f49d26eeeec6fe20e51d5095f61343a4',
    pageUrl: 'https://legacy.reverbnation.com/engerwitzdorferschuhplattler/song/29422782-holzhacker',
  },
  {
    id: 29422779,
    title: 'Autobahnplattler',
    url: 'https://dnma3z6c8ojev.cloudfront.net/songs/mp3_files/29422779/original/autobahnplattler_web.mp3?e8817609673e6ceae29a01aab5c7efb2a16616a875045d42d8d5bb9a29e48ff929f5843e07403c9838e71d01ce615f9375e64f6f31dfbb6b0227c5f842d9079f498c02eb713ca09fac6b6ee5a8f78bb23aec87e1b152d919a1e60df5228648828226b003ae93e5468bdef6',
    pageUrl: 'https://legacy.reverbnation.com/engerwitzdorferschuhplattler/song/29422779-autobahnplattler',
  },
  {
    id: 29422776,
    title: 'Amboss',
    url: 'https://dnma3z6c8ojev.cloudfront.net/songs/mp3_files/29422776/original/amboss_web.mp3?e8817609673e6ceae29a00a3b5c7efb24f79b087c2983d7ab4c23ea2fb2058bb280bcdd59ec60054f4752c0927392ba52cbe49399c032bfdcc939fbc8cb44105f8baf627f5ff07e45c6ba001d262d6a4784dc52e776723585019b70cb1d96b0067',
    pageUrl: 'https://legacy.reverbnation.com/engerwitzdorferschuhplattler/song/29422776-amboss',
  },
  {
    id: 29422775,
    title: 'Linzabua',
    url: 'https://dnma3z6c8ojev.cloudfront.net/songs/mp3_files/29422775/original/linzabua_web.mp3?e8817609673e6ceae29a00a3bbc7efb29d1189a6c69be27b362144fcf10b4c8a0547862160f63bf460554969db537cfd7a5952f9d62efa0c6a988ba984aa9c47b2c73d0e228f82e89ed4a6c6a35edd0b809b6a5c46e97c046403cd506dcd3f1013bfbb',
    pageUrl: 'https://legacy.reverbnation.com/engerwitzdorferschuhplattler/song/29422775-linzabua',
  },
];

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds <= 0) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function Hoerproben() {
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setProgress(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
    };
  }, [currentTrack]);

  const playTrack = (trackId: number) => {
    if (currentTrack === trackId) {
      if (isPlaying) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play();
      }
    } else {
      setCurrentTrack(trackId);
      setProgress(0);
      setDuration(0);
      setTimeout(() => audioRef.current?.play(), 50);
    }
  };

  const playNext = () => {
    if (currentTrack === null) return;
    const idx = tracks.findIndex((t) => t.id === currentTrack);
    const next = tracks[(idx + 1) % tracks.length];
    setCurrentTrack(next.id);
    setProgress(0);
    setDuration(0);
    setTimeout(() => audioRef.current?.play(), 50);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pct * duration;
  };

  const progressPct = duration > 0 ? (progress / duration) * 100 : 0;
  const currentTitle = tracks.find((t) => t.id === currentTrack)?.title;

  return (
    <div>
      <PageHeader
        eyebrow="Musik"
        title="Hörproben"
        description="Hör dir unsere Plattler-Musik und Auftrittsbeispiele direkt hier an – ein Vorgeschmack auf echtes Mühlviertler Brauchtum."
        crumbs={[{ label: 'Start', to: '/' }, { label: 'Hörproben' }]}
      />

      <section className="bg-cream-50 py-16 md:py-24">
        <div className="container-px">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-club-600 text-white">
                    <Music className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-stone-900">Unsere Hörproben</h2>
                    <p className="mt-1 text-sm text-stone-600">
                      {tracks.length} Titel – direkt abspielbar, ohne Umweg.
                    </p>
                  </div>
                </div>
                <a
                  href="https://legacy.reverbnation.com/engerwitzdorferschuhplattler/songs"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  Auf ReverbNation
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            {/* Sticky player bar */}
            {currentTrack !== null && (
              <div className="sticky top-16 z-30 mb-6 overflow-hidden rounded-2xl bg-club-700 text-white shadow-xl md:top-20">
                <div className="flex items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6">
                  <button
                    onClick={() => playTrack(currentTrack)}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-club-700 transition-transform hover:scale-105"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="ml-0.5 h-5 w-5" />}
                  </button>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="truncate font-display text-sm font-semibold sm:text-base">
                        {currentTitle}
                      </span>
                      <span className="shrink-0 text-xs text-club-200">
                        {formatTime(progress)} / {formatTime(duration)}
                      </span>
                    </div>
                    <div
                      onClick={seek}
                      className="mt-1.5 h-1.5 cursor-pointer rounded-full bg-club-800"
                    >
                      <div
                        className="h-full rounded-full bg-cream-100 transition-[width] duration-150"
                        style={{ width: `${progressPct}%` }}
                      />
                    </div>
                  </div>
                  <button
                    onClick={playNext}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-club-600 text-white transition-colors hover:bg-club-500"
                    aria-label="Nächster Titel"
                  >
                    <SkipForward className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Track list */}
            <div className="space-y-2">
              {tracks.map((track, i) => {
                const active = track.id === currentTrack;
                return (
                  <Reveal key={track.id} delay={Math.min(i * 40, 240)}>
                    <button
                      onClick={() => playTrack(track.id)}
                      className={`group flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-200 ${
                        active
                          ? 'border-club-300 bg-white shadow-md'
                          : 'border-stone-200 bg-white/60 hover:border-club-200 hover:bg-white hover:shadow-sm'
                      }`}
                    >
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all ${
                          active
                            ? 'bg-club-600 text-white'
                            : 'bg-club-50 text-club-600 group-hover:bg-club-100'
                        }`}
                      >
                        {active && isPlaying ? (
                          <Pause className="h-5 w-5" />
                        ) : (
                          <Play className="ml-0.5 h-5 w-5" />
                        )}
                      </span>
                      <div className="min-w-0 flex-1">
                        <span className={`block font-display text-base font-semibold ${active ? 'text-club-700' : 'text-stone-900'}`}>
                          {track.title}
                        </span>
                        <span className="text-xs text-stone-500">
                          Engerwitzdorfer Schuhplattler
                        </span>
                      </div>
                      {active && (
                        <span className="hidden items-center gap-1 text-xs font-medium text-club-600 sm:flex">
                          <Volume2 className="h-3.5 w-3.5 animate-pulse" />
                          Läuft
                        </span>
                      )}
                      <span className="text-xs font-medium text-stone-400">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </button>
                  </Reveal>
                );
              })}
            </div>

            <p className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-stone-400">
              <Volume2 className="h-3.5 w-3.5" />
              Audio bereitgestellt von ReverbNation.
            </p>
          </div>
        </div>
      </section>

      <audio ref={audioRef} src={currentTrack !== null ? tracks.find((t) => t.id === currentTrack)?.url : undefined} crossOrigin="anonymous" />
    </div>
  );
}
