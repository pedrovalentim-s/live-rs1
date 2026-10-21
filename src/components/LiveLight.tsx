import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  Instagram,
  MessageCircle,
  Repeat,
  Smartphone,
  UtensilsCrossed,
} from "lucide-react";
import { MARQUEE_SPEED, useMarqueeSpeed } from "./LandingComponents";

// Versão clara e "nativa" das páginas da aula (/live-rs-3 sem foto, /live-rs-4 com foto).
// O texto vem de cada rota, igual ao das páginas originais (live-rs-1 / live-rs-2).
// Foco em mobile: imagens locais leves (WebP em public/live), botão fixo no rodapé
// da tela e, na versão com foto, o Rick em cartão compacto acima da headline.

export interface LiveLightContent {
  ctaLink: string;
  /** Frase da headline antes e depois de "Método 3 Estrelas". */
  headlineBefore: string;
  headlineAfter: string;
  subheadline: string;
  marquee: string;
  topics: string[];
  rickSubtitle: string;
  closing: string;
}

// Versões otimizadas (WebP) das fotos do projeto; originais em vibe.filesafe.space.
const LOGO = "/live/logo-64.png";
const RICK_HERO = {
  src: "/live/rick-hero-800.webp",
  srcSet: "/live/rick-hero-480.webp 480w, /live/rick-hero-800.webp 800w",
};
const RICK_PHOTO = {
  src: "/live/rick-800.webp",
  srcSet: "/live/rick-480.webp 480w, /live/rick-800.webp 800w",
};
const PEDRO_PHOTO = {
  src: "/live/pedro-800.webp",
  srcSet: "/live/pedro-480.webp 480w, /live/pedro-800.webp 800w",
};

const TAGS = [
  "RESTAURANTE ITALIANO",
  "RESTAURANTE CARNES E PARRILLA",
  "SUSHI",
  "DELIVERY",
  "PIZZARIA",
  "PUB E BAR",
  "CASA DE EVENTOS",
  "ALIMENTAÇÃO SAUDÁVEL",
];

const JORNADA = [
  { icon: Smartphone, label: "Anúncio" },
  { icon: Instagram, label: "Instagram" },
  { icon: MessageCircle, label: "WhatsApp / iFood" },
  { icon: UtensilsCrossed, label: "Salão cheio" },
  { icon: Repeat, label: "Cliente volta" },
];

const CTA_SUBTEXT =
  "O botão leva direto para o grupo silencioso do WhatsApp, onde a gente manda o link da aula. Não precisa preencher formulário nem deixar e-mail.";
const CTA_SUBTEXT_CLOSING =
  "Não precisa preencher formulário nem deixar e-mail. O botão leva direto para o grupo.";

export function LiveLightPage({
  variant,
  content,
}: {
  variant: "sketch" | "rick";
  content: LiveLightContent;
}) {
  const rick = variant === "rick";

  return (
    <div className="ll min-h-screen overflow-x-clip bg-[#f6f3ec] text-[#16141f] antialiased">
      <div className="flex items-center justify-center gap-1.5 whitespace-nowrap bg-[#5b46e8] px-3 py-2 text-center text-[11px] font-extrabold uppercase tracking-[0.06em] text-white sm:gap-2 sm:text-xs sm:tracking-[0.14em]">
        <img src={LOGO} alt="" width={16} height={16} className="h-4 w-4 rounded-sm" />
        Segunda <Dot /> 15h <Dot /> Aula ao vivo e gratuita
      </div>

      <main className="outline-none">
        {/* Topo */}
        <section className="mx-auto max-w-5xl px-5 pt-3.5 pb-12 sm:pt-14 sm:pb-20">
          {rick ? (
            <div className="grid items-center gap-10 md:grid-cols-[1fr_360px] md:gap-12">
              <div>
                <RickCompact />
                <p className="mb-4 hidden md:inline-flex items-center gap-2 rounded-full border border-[#d9d2ff] bg-white px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#5b46e8]">
                  <span className="h-2 w-2 rounded-full bg-[#5b46e8]" aria-hidden="true" />
                  Encontro exclusivo • Ao vivo
                </p>
                <HeroCopy content={content} />
              </div>
              {/* No mobile o Rick já aparece no cartão compacto acima da headline. */}
              <div className="hidden md:block">
                <RickPolaroid />
              </div>
            </div>
          ) : (
            <div className="mx-auto max-w-3xl">
              <JourneySketch />
              <div className="mt-4 sm:mt-9">
                <HeroCopy content={content} />
              </div>
            </div>
          )}
        </section>

        <Ticker text={content.marquee} />

        {/* Para quem é */}
        <section className="mx-auto max-w-4xl px-5 py-12 text-center sm:py-20">
          <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">
            Para <span className="ll-mark whitespace-nowrap">negócios de alimentação</span> como:
          </h2>
          <ul className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2 sm:mt-8 sm:gap-2.5">
            {TAGS.map((t) => (
              <li
                key={t}
                className="rounded-lg bg-[#16141f] px-3.5 py-2 text-xs font-bold tracking-wide text-white sm:text-sm"
              >
                {t}
              </li>
            ))}
            <li className="rounded-lg border-2 border-[#5b46e8] bg-white px-3.5 py-1.5 text-xs font-bold tracking-wide text-[#5b46e8] sm:text-sm">
              E MUITO MAIS
            </li>
          </ul>
        </section>

        {/* Tópicos da aula */}
        <section className="bg-white/70 px-5 py-12 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-[1.75rem] font-extrabold leading-tight sm:text-4xl">
              Na aula, você vai ver na prática:
            </h2>
            <ol className="mt-7 grid gap-3.5 sm:mt-10 sm:grid-cols-2 sm:gap-5">
              {content.topics.map((topic, i) => (
                <li
                  key={topic}
                  className="flex gap-3.5 rounded-2xl border border-[#e4dfd3] bg-white p-5 shadow-[0_1px_0_#e4dfd3] sm:gap-4 sm:p-6"
                >
                  <span className="ll-hand flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#5b46e8] text-2xl font-bold text-[#5b46e8] sm:h-11 sm:w-11">
                    {i + 1}
                  </span>
                  <p className="pt-0.5 text-[15.5px] leading-relaxed text-[#3d3933] sm:pt-1 sm:text-base">
                    {topic}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Quem apresenta */}
        <section className="mx-auto max-w-5xl px-5 py-12 sm:py-20">
          <h2 className="text-center text-[1.75rem] font-extrabold leading-tight sm:text-4xl">
            Quem vai te mostrar o método
          </h2>
          <div className="mt-7 grid gap-5 sm:mt-10 md:grid-cols-2 md:gap-6">
            <Presenter
              photo={RICK_PHOTO}
              position="object-center"
              name="Rick Mottola"
              subtitle={content.rickSubtitle}
              bullets={[
                "Mais de 520 mil seguidores e mais de 1 bilhão de visualizações",
                "Já ajudou mais de 2.000 restaurantes a crescer com conteúdo",
                "Especialista em conteúdo que vende para restaurantes",
              ]}
            />
            <Presenter
              photo={PEDRO_PHOTO}
              position="object-[center_20%]"
              name="Pedro Valentim"
              subtitle="CEO e fundador da Tasty"
              bullets={[
                "Mais de 200 consultorias gastronômicas",
                "Especialista em crescimento de restaurantes",
                "+7 anos no mercado de marketing e tecnologia",
              ]}
            />
          </div>
        </section>

        {/* Fechamento */}
        <section id="ll-fechamento" className="px-3 pb-12 min-[360px]:px-5 sm:pb-20">
          <div className="mx-auto max-w-4xl rounded-3xl bg-[#5b46e8] px-4 py-10 text-center text-white min-[360px]:px-5 sm:px-12 sm:py-14">
            <p className="mx-auto max-w-2xl text-[17px] leading-relaxed text-white/90 sm:text-xl">
              {content.closing}
            </p>
            <div className="mt-8 flex flex-col items-center">
              <CtaLink href={content.ctaLink} light />
              <p className="mt-3 max-w-md text-[13px] leading-snug text-white/75">
                {CTA_SUBTEXT_CLOSING}
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* No mobile o rodapé ganha espaço para não ficar atrás do botão fixo. */}
      <footer className="border-t border-[#e4dfd3] px-5 pt-8 pb-28 text-center md:pb-8">
        <p className="text-xs tracking-wide text-[#7a746a] sm:text-sm">
          Tasty Media • Performar Media Digital Ltda. • CNPJ 38.358.474/0001-82
        </p>
      </footer>

      <StickyCta href={content.ctaLink} />
    </div>
  );
}

function HeroCopy({ content }: { content: LiveLightContent }) {
  return (
    <>
      <h1 className="text-[1.6rem] font-extrabold leading-[1.13] sm:text-5xl sm:leading-[1.08]">
        {content.headlineBefore} <span className="ll-mark">Método 3 Estrelas</span>{" "}
        {content.headlineAfter}
      </h1>
      <p className="mt-3 max-w-2xl text-[15px] leading-[1.55] text-[#4a4540] sm:mt-5 sm:text-lg sm:leading-relaxed">
        <strong className="text-[#16141f]">Não é sobre postar mais nem fazer promoção.</strong>{" "}
        {content.subheadline}
      </p>
      <div id="ll-hero-cta" className="mt-5 sm:mt-8">
        <CtaLink href={content.ctaLink} />
        <p className="mt-3 max-w-md text-[13px] leading-snug text-[#6b6559]">{CTA_SUBTEXT}</p>
      </div>
    </>
  );
}

/** Botão para o grupo do WhatsApp. Dispara Lead no Pixel, como nas páginas originais. */
function CtaLink({
  href,
  light = false,
  className = "",
  tabIndex,
}: {
  href: string;
  light?: boolean;
  className?: string;
  tabIndex?: number;
}) {
  return (
    <a
      href={href}
      tabIndex={tabIndex}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        if (typeof window !== "undefined" && window.fbq) {
          window.fbq("track", "Lead");
        }
      }}
      className={`ll-cta ${light ? "ll-cta-light" : ""} ${className}`}
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span>Quero entrar no grupo da aula</span>
      <ArrowRight className="ll-cta-arrow h-5 w-5 shrink-0" aria-hidden="true" />
    </a>
  );
}

/** Esboço "à mão" do caminho do cliente até a mesa (versão sem foto). */
function JourneySketch() {
  return (
    <figure
      aria-label="Do anúncio ao cliente voltando: anúncio, Instagram, WhatsApp ou iFood, salão cheio, cliente volta"
      className="rounded-2xl border-2 border-[#16141f] bg-white px-2.5 py-3.5 shadow-[4px_4px_0_#16141f] sm:px-6 sm:py-7"
    >
      <ol className="grid grid-cols-5 items-start gap-1 sm:gap-3">
        {JORNADA.map(({ icon: Icon, label }, i) => (
          <li key={label} className="relative flex flex-col items-center text-center">
            <span className="ll-hand flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#5b46e8] text-base font-bold leading-none text-[#5b46e8] sm:h-9 sm:w-9 sm:text-2xl">
              {i + 1}
            </span>
            <span className="mt-1.5 flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#16141f] bg-[#f6f3ec] sm:mt-2 sm:h-16 sm:w-16 sm:rounded-2xl">
              <Icon className="h-5 w-5 sm:h-8 sm:w-8" strokeWidth={1.8} aria-hidden="true" />
            </span>
            <span className="ll-hand mt-1.5 text-[13px] font-bold leading-[1.05] sm:mt-2 sm:text-xl">
              {label}
            </span>
            {i < JORNADA.length - 1 ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 40 14"
                className="absolute top-[2.2rem] -right-[18%] w-[36%] text-[#5b46e8] sm:top-[3.6rem]"
              >
                <path
                  d="M2 9 C 12 3, 24 3, 34 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="3 4"
                />
                <path
                  d="M30 3 L 36 7 L 30 11"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : null}
          </li>
        ))}
      </ol>
    </figure>
  );
}

/** Rick em cartão compacto acima da headline, só no mobile (a polaroid vem depois do botão). */
function RickCompact() {
  return (
    <div className="mb-4 flex items-center gap-3 rounded-2xl border border-[#e4dfd3] bg-white p-2.5 pr-3.5 md:hidden">
      <img
        src="/live/rick-hero-480.webp"
        alt="Rick Mottola"
        width={64}
        height={64}
        className="h-14 w-14 shrink-0 rounded-full object-cover object-top"
      />
      <div className="min-w-0">
        <p className="text-[11px] font-extrabold uppercase tracking-wide text-[#5b46e8]">
          Encontro exclusivo • Ao vivo
        </p>
        <p className="text-[15px] font-extrabold leading-tight">Rick Mottola</p>
        <p className="text-xs leading-snug text-[#5c574d]">
          Fundador do Porto Dicas • Sócio da Tasty
        </p>
        <p className="mt-1 text-[11px] font-bold leading-snug text-[#16141f]">
          +520 mil seguidores no nicho · +2.000 restaurantes impactados
        </p>
      </div>
    </div>
  );
}

/**
 * Botão fixo no rodapé da tela (só mobile): aparece depois que o botão do topo sai da
 * tela e some quando o bloco de fechamento (que tem o próprio botão) está visível.
 */
function StickyCta({ href }: { href: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("ll-hero-cta");
    const closing = document.getElementById("ll-fechamento");
    if (!hero || !closing || typeof IntersectionObserver === "undefined") return;
    const state = { heroAhead: true, closingVisible: false };
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) state.heroAhead = e.isIntersecting || e.boundingClientRect.top > 0;
        if (e.target === closing) state.closingVisible = e.isIntersecting;
      }
      setShow(!state.heroAhead && !state.closingVisible);
    });
    io.observe(hero);
    io.observe(closing);
    return () => io.disconnect();
  }, []);
  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-[#e4dfd3] bg-[#f6f3ec]/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur transition-transform duration-300 md:hidden ${show ? "translate-y-0" : "translate-y-full"}`}
    >
      <CtaLink href={href} tabIndex={show ? 0 : -1} className="w-full" />
    </div>
  );
}

/** Foto do Rick em moldura de polaroid, com os números da página original. */
function RickPolaroid() {
  return (
    <div className="relative mx-auto w-[210px] sm:w-[320px]">
      <figure className="rotate-2 rounded-sm bg-white p-2.5 pb-3 shadow-[0_18px_40px_-18px_rgb(22_20_31/0.45)] sm:p-3 sm:pb-4">
        <img
          src={RICK_HERO.src}
          srcSet={RICK_HERO.srcSet}
          sizes="(min-width: 640px) 300px, 210px"
          alt="Rick Mottola, fundador do Porto Dicas e sócio da Tasty"
          width={800}
          height={960}
          decoding="async"
          className="aspect-[5/6] w-full object-cover object-top"
        />
        <figcaption className="ll-hand mt-2 text-center text-lg font-bold leading-tight sm:mt-3 sm:text-2xl">
          Rick Mottola
          <span className="block text-[15px] font-semibold text-[#5b46e8] sm:text-lg">
            Fundador do Porto Dicas • Sócio da Tasty
          </span>
        </figcaption>
      </figure>
      <Sticker className="-top-5 -left-10 -rotate-3" value="+520 mil" label="seguidores no nicho" />
      <Sticker
        className="-right-8 bottom-24 rotate-2"
        value="+2.000"
        label="restaurantes impactados"
      />
    </div>
  );
}

// No mobile os números já aparecem no cartão compacto acima da headline, então os
// adesivos só aparecem a partir de sm e ficam nos cantos, fora do rosto.
function Sticker({ value, label, className }: { value: string; label: string; className: string }) {
  return (
    <div
      className={`absolute hidden rounded-xl border-2 border-[#16141f] bg-[#fff8d6] px-3 py-2 shadow-[3px_3px_0_#16141f] sm:block ${className}`}
    >
      <p className="text-lg font-extrabold leading-none sm:text-2xl">{value}</p>
      <p className="mt-0.5 text-[11px] font-semibold leading-tight text-[#4a4540] sm:text-xs">
        {label}
      </p>
    </div>
  );
}

function Presenter({
  photo,
  position,
  name,
  subtitle,
  bullets,
}: {
  photo: { src: string; srcSet: string };
  position: string;
  name: string;
  subtitle: string;
  bullets: string[];
}) {
  return (
    <article className="overflow-hidden rounded-3xl border border-[#e4dfd3] bg-white">
      <img
        src={photo.src}
        srcSet={photo.srcSet}
        sizes="(min-width: 768px) 480px, 100vw"
        alt={name}
        width={800}
        height={600}
        loading="lazy"
        decoding="async"
        className={`aspect-[4/3] w-full object-cover ${position}`}
      />
      <div className="p-5 sm:p-7">
        <h3 className="text-xl font-extrabold">{name}</h3>
        <p className="ll-hand mt-0.5 text-xl text-[#5b46e8]">{subtitle}</p>
        <ul className="mt-4 space-y-2.5">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2.5 text-[15px] leading-snug text-[#4a4540]">
              <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#5b46e8]" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/** Faixa inclinada correndo com o texto da faixa original. */
function Ticker({ text }: { text: string }) {
  const items = Array.from({ length: 8 }, (_, i) => (
    <span key={i} className="px-2">
      {text}
    </span>
  ));
  const backRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  // Faixa de trás um pouco mais lenta que a da frente, para dar profundidade.
  useMarqueeSpeed(backRef, MARQUEE_SPEED * 0.8);
  useMarqueeSpeed(frontRef, MARQUEE_SPEED);
  return (
    <div aria-hidden="true" className="relative overflow-hidden py-6">
      <div className="absolute -inset-x-[5%] top-1/2 -translate-y-1/2 rotate-[2deg] bg-[#d9d2ff] py-2.5">
        <div
          ref={backRef}
          className="ll-marquee-reverse flex w-max whitespace-nowrap text-sm font-extrabold uppercase tracking-wider text-[#5b46e8]/60"
        >
          {items}
          {items}
        </div>
      </div>
      <div className="relative -mx-[5%] -rotate-[1.5deg] bg-[#16141f] py-2.5">
        <div
          ref={frontRef}
          className="ll-marquee flex w-max whitespace-nowrap text-sm font-extrabold uppercase tracking-wider text-white"
        >
          {items}
          {items}
        </div>
      </div>
    </div>
  );
}

function Dot(): ReactNode {
  return <span className="opacity-60">•</span>;
}
