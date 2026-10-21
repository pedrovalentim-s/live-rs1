import React, { useEffect, useRef, type RefObject } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

// Velocidade das faixas passantes "Método 3 Estrelas", em pixels por segundo.
// A duração da animação é calculada pelo tamanho do texto, então todas as faixas
// andam na mesma velocidade, seja qual for o texto (amplo ou RS) ou a tela.
export const MARQUEE_SPEED = 25;

/** Ajusta a duração da animação da faixa para andar a `pxPerSecond`. */
export function useMarqueeSpeed(ref: RefObject<HTMLElement | null>, pxPerSecond: number) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const apply = () => {
      // A animação percorre metade da largura (o conteúdo é duplicado).
      const distance = el.scrollWidth / 2;
      if (distance > 0) el.style.animationDuration = `${distance / pxPerSecond}s`;
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref, pxPerSecond]);
}

// Logo pequeno (64 px) para a faixa do topo e o ícone da aba; o original de 3000 px
// (TASTY_LOGO_URL) fica só para a prévia de compartilhamento (og:image).
export const TASTY_LOGO_SMALL = "/live/logo-64.png";

export const TASTY_LOGO_URL =
  "https://vibe.filesafe.space/1792349844330925725/attachments/a3536abe-8157-40ac-a56b-17a945b34005.png";

interface CtaButtonProps {
  buttonLink?: string;
  subtext?: string;
  className?: string;
}

export function CtaButton({
  buttonLink = "[LINK DO BOTÃO]",
  subtext = "O botão leva direto para o grupo silencioso do WhatsApp, onde a gente manda o link da aula. Não precisa preencher formulário nem deixar e-mail.",
  className = "",
}: CtaButtonProps) {
  return (
    <div
      className={`flex flex-col items-center text-center w-full max-w-xl mx-auto my-6 ${className}`}
    >
      <a
        href={buttonLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          if (typeof window !== "undefined" && window.fbq) {
            window.fbq("track", "Lead");
          }
        }}
        className="group relative w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base sm:text-lg font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-xl shadow-indigo-900/40 hover:shadow-indigo-600/50 hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0 active:scale-[0.99] border border-blue-400/30"
      >
        <MessageCircle
          aria-hidden="true"
          className="w-6 h-6 fill-white/20 shrink-0 animate-pulse"
        />
        <span className="tracking-wide uppercase">QUERO ENTRAR NO GRUPO DA AULA</span>
        <ArrowRight
          aria-hidden="true"
          className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform"
        />
      </a>
      {subtext && (
        <p className="mt-3 text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed">
          {subtext}
        </p>
      )}
    </div>
  );
}

export function TopBar() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-950 via-indigo-950 to-blue-950 border-b border-indigo-500/20 py-2.5 px-4 flex items-center justify-center gap-2">
      <img
        src={TASTY_LOGO_SMALL}
        alt="Tasty"
        width={16}
        height={16}
        className="w-4 h-4 rounded-sm shrink-0 shadow-sm"
      />
      <p className="text-xs sm:text-sm font-semibold tracking-wide text-indigo-200 uppercase">
        segunda • 15h • AULA AO VIVO E GRATUITA
      </p>
    </div>
  );
}

export function MarqueeBanner({
  text = "MÉTODO 3 ESTRELAS • EXCLUSIVO PARA DONOS DE RESTAURANTE DO RIO GRANDE DO SUL • ",
}: {
  text?: string;
}) {
  const repeatedText = Array(12).fill(text).join(" ");
  const trackRef = useRef<HTMLDivElement>(null);
  useMarqueeSpeed(trackRef, MARQUEE_SPEED);

  return (
    <div
      aria-hidden="true"
      className="w-full bg-indigo-950/80 border-y border-indigo-500/30 py-3 overflow-hidden select-none"
    >
      <div ref={trackRef} className="animate-marquee whitespace-nowrap flex items-center">
        <span className="text-xs sm:text-sm font-bold tracking-widest text-indigo-300 uppercase px-2">
          {repeatedText}
        </span>
        <span className="text-xs sm:text-sm font-bold tracking-widest text-indigo-300 uppercase px-2">
          {repeatedText}
        </span>
      </div>
    </div>
  );
}

export function PresentersSection({
  rickSubtitle = "fundador do Porto Dicas e sócio da Tasty",
}: {
  rickSubtitle?: string;
}) {
  // Versões WebP no tamanho de exibição (originais em PNG de ~1,3 MB no vibe.filesafe.space).
  const rickPhoto = "/live/rick-800.webp";
  const rickSrcSet = "/live/rick-480.webp 480w, /live/rick-800.webp 800w";
  const pedroPhoto = "/live/pedro-800.webp";
  const pedroSrcSet = "/live/pedro-480.webp 480w, /live/pedro-800.webp 800w";

  return (
    <div className="w-full py-10 sm:py-12 px-4 bg-card/40 border-y border-border/50 my-10 rounded-2xl">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-white mb-8 tracking-tight">
          Quem vai te mostrar o método
        </h2>

        {/* Dois cards individuais, cada um com sua foto e bio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Rick Mottola */}
          <div className="flex flex-col rounded-2xl bg-background/80 border border-border/80 shadow-md overflow-hidden group hover:border-indigo-500/40 transition-colors">
            {/* Foto Rick */}
            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden border-b border-border/60">
              <img
                src={rickPhoto}
                srcSet={rickSrcSet}
                sizes="(min-width: 768px) 360px, 100vw"
                width={800}
                height={800}
                loading="lazy"
                decoding="async"
                alt="Rick Mottola"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            </div>

            {/* Conteúdo Rick */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Rick Mottola</h3>
              <p className="text-xs font-medium text-indigo-400 mb-4">{rickSubtitle}</p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span aria-hidden="true" className="text-indigo-400 font-bold">
                    •
                  </span>
                  <span>Mais de 520 mil seguidores e mais de 1 bilhão de visualizações</span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true" className="text-indigo-400 font-bold">
                    •
                  </span>
                  <span>Já ajudou mais de 2.000 restaurantes a crescer com conteúdo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true" className="text-indigo-400 font-bold">
                    •
                  </span>
                  <span>Especialista em conteúdo que vende para restaurantes</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card Pedro Valentim */}
          <div className="flex flex-col rounded-2xl bg-background/80 border border-border/80 shadow-md overflow-hidden group hover:border-indigo-500/40 transition-colors">
            {/* Foto Pedro */}
            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden border-b border-border/60">
              <img
                src={pedroPhoto}
                srcSet={pedroSrcSet}
                sizes="(min-width: 768px) 360px, 100vw"
                width={800}
                height={1199}
                loading="lazy"
                decoding="async"
                alt="Pedro Valentim"
                className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            </div>

            {/* Conteúdo Pedro */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Pedro Valentim</h3>
              <p className="text-xs font-medium text-indigo-400 mb-4">CEO e fundador da Tasty</p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span aria-hidden="true" className="text-indigo-400 font-bold">
                    •
                  </span>
                  <span>Mais de 200 consultorias gastronômicas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true" className="text-indigo-400 font-bold">
                    •
                  </span>
                  <span>Especialista em crescimento de restaurantes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true" className="text-indigo-400 font-bold">
                    •
                  </span>
                  <span>+7 anos no mercado de marketing e tecnologia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
