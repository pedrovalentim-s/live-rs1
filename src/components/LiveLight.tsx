import type { ReactNode } from "react";
import {
  ArrowRight,
  Instagram,
  MessageCircle,
  Repeat,
  Smartphone,
  UtensilsCrossed,
} from "lucide-react";
import { TASTY_LOGO_URL } from "./LandingComponents";

// Versão clara e "nativa" das páginas da aula (/live-3 sem foto, /live-4 com foto).
// O texto vem de cada rota, igual ao das páginas originais (live-1 / live-2).

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

const RICK_HERO_PHOTO =
  "https://vibe.filesafe.space/1792349844330925725/attachments/1382695a-7ed2-4c57-839c-3647527cfdcd.jpg";
const RICK_PHOTO =
  "https://vibe.filesafe.space/1792349844330925725/attachments/0eff07c8-82a3-498f-8f6e-d3406e939317.png";
const PEDRO_PHOTO =
  "https://vibe.filesafe.space/1792349844330925725/attachments/14090e8b-56ff-4012-929c-cf409ce1273f.png";

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
      <div className="flex items-center justify-center gap-2 bg-[#5b46e8] px-4 py-2 text-center text-[11px] font-extrabold uppercase tracking-[0.14em] text-white sm:text-xs">
        <img src={TASTY_LOGO_URL} alt="" className="h-4 w-4 rounded-sm" />
        Segunda <Dot /> 15h <Dot /> Aula ao vivo e gratuita
      </div>

      <main className="outline-none">
        {/* Topo */}
        <section className="mx-auto max-w-5xl px-5 pt-8 pb-14 sm:pt-14 sm:pb-20">
          {rick ? (
            <div className="grid items-center gap-8 md:grid-cols-[1fr_360px] md:gap-12">
              <div className="order-2 md:order-1">
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d9d2ff] bg-white px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#5b46e8]">
                  <span className="h-2 w-2 rounded-full bg-[#5b46e8]" aria-hidden="true" />
                  Encontro exclusivo • Ao vivo
                </p>
                <HeroCopy content={content} />
              </div>
              <div className="order-1 md:order-2">
                <RickPolaroid />
              </div>
            </div>
          ) : (
            <div className="mx-auto max-w-3xl">
              <JourneySketch />
              <div className="mt-9">
                <HeroCopy content={content} />
              </div>
            </div>
          )}
        </section>

        <Ticker text={content.marquee} />

        {/* Para quem é */}
        <section className="mx-auto max-w-4xl px-5 py-16 text-center sm:py-20">
          <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">
            Para <span className="ll-mark whitespace-nowrap">negócios de alimentação</span> como:
          </h2>
          <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
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
        <section className="bg-white/70 px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-extrabold leading-tight sm:text-4xl">
              Na aula, você vai ver na prática:
            </h2>
            <ol className="mt-10 grid gap-5 sm:grid-cols-2">
              {content.topics.map((topic, i) => (
                <li
                  key={topic}
                  className="flex gap-4 rounded-2xl border border-[#e4dfd3] bg-white p-6 shadow-[0_1px_0_#e4dfd3]"
                >
                  <span className="ll-hand flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#5b46e8] text-2xl font-bold text-[#5b46e8]">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-[16px] leading-relaxed text-[#3d3933]">{topic}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Quem apresenta */}
        <section className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <h2 className="text-center text-3xl font-extrabold leading-tight sm:text-4xl">
            Quem vai te mostrar o método
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
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
        <section className="px-5 pb-16 sm:pb-20">
          <div className="mx-auto max-w-4xl rounded-3xl bg-[#5b46e8] px-6 py-12 text-center text-white sm:px-12 sm:py-14">
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
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

      <footer className="border-t border-[#e4dfd3] px-5 py-8 text-center">
        <p className="text-xs tracking-wide text-[#7a746a] sm:text-sm">
          Tasty Media • Performar Media Digital Ltda. • CNPJ 38.358.474/0001-82
        </p>
      </footer>
    </div>
  );
}

function HeroCopy({ content }: { content: LiveLightContent }) {
  return (
    <>
      <h1 className="text-[2rem] font-extrabold leading-[1.08] sm:text-5xl">
        {content.headlineBefore} <span className="ll-mark">Método 3 Estrelas</span>{" "}
        {content.headlineAfter}
      </h1>
      <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-[#4a4540] sm:text-lg">
        <strong className="text-[#16141f]">Não é sobre postar mais nem fazer promoção.</strong>{" "}
        {content.subheadline}
      </p>
      <div className="mt-8">
        <CtaLink href={content.ctaLink} />
        <p className="mt-3 max-w-md text-[13px] leading-snug text-[#6b6559]">{CTA_SUBTEXT}</p>
      </div>
    </>
  );
}

/** Botão para o grupo do WhatsApp. Dispara Lead no Pixel, como nas páginas originais. */
function CtaLink({ href, light = false }: { href: string; light?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        if (typeof window !== "undefined" && window.fbq) {
          window.fbq("track", "Lead");
        }
      }}
      className={`ll-cta ${light ? "ll-cta-light" : ""}`}
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span>Quero entrar no grupo da aula</span>
      <ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" />
    </a>
  );
}

/** Esboço "à mão" do caminho do cliente até a mesa (versão sem foto). */
function JourneySketch() {
  return (
    <figure
      aria-label="Do anúncio ao cliente voltando: anúncio, Instagram, WhatsApp ou iFood, salão cheio, cliente volta"
      className="rounded-2xl border-2 border-[#16141f] bg-white px-3 py-5 shadow-[4px_4px_0_#16141f] sm:px-6 sm:py-7"
    >
      <ol className="grid grid-cols-5 items-start gap-1 sm:gap-3">
        {JORNADA.map(({ icon: Icon, label }, i) => (
          <li key={label} className="relative flex flex-col items-center text-center">
            <span className="ll-hand flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#5b46e8] text-lg font-bold leading-none text-[#5b46e8] sm:h-9 sm:w-9 sm:text-2xl">
              {i + 1}
            </span>
            <span className="mt-2 flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#16141f] bg-[#f6f3ec] sm:h-16 sm:w-16 sm:rounded-2xl">
              <Icon className="h-5 w-5 sm:h-8 sm:w-8" strokeWidth={1.8} aria-hidden="true" />
            </span>
            <span className="ll-hand mt-2 text-[13px] font-bold leading-[1.05] sm:text-xl">
              {label}
            </span>
            {i < JORNADA.length - 1 ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 40 14"
                className="absolute top-[2.6rem] -right-[18%] w-[36%] text-[#5b46e8] sm:top-[3.6rem]"
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

/** Foto do Rick em moldura de polaroid, com os números da página original. */
function RickPolaroid() {
  return (
    <div className="relative mx-auto w-[230px] sm:w-[320px]">
      <figure className="rotate-2 rounded-sm bg-white p-2.5 pb-3 shadow-[0_18px_40px_-18px_rgb(22_20_31/0.45)] sm:p-3 sm:pb-4">
        <img
          src={RICK_HERO_PHOTO}
          alt="Rick Mottola, fundador do Porto Dicas e sócio da Tasty"
          width={1145}
          height={1374}
          className="aspect-[5/6] w-full object-cover object-top"
        />
        <figcaption className="ll-hand mt-2 text-center text-lg font-bold leading-tight sm:mt-3 sm:text-2xl">
          Rick Mottola
          <span className="block text-[15px] font-semibold text-[#5b46e8] sm:text-lg">
            Fundador do Porto Dicas • Sócio da Tasty
          </span>
        </figcaption>
      </figure>
      <Sticker
        className="-left-6 top-6 -rotate-3 sm:-left-10"
        value="+520 mil"
        label="seguidores no nicho"
      />
      <Sticker
        className="-right-5 bottom-20 rotate-2 sm:-right-8"
        value="+2.000"
        label="restaurantes impactados"
      />
    </div>
  );
}

function Sticker({ value, label, className }: { value: string; label: string; className: string }) {
  return (
    <div
      className={`absolute rounded-xl border-2 border-[#16141f] bg-[#fff8d6] px-3 py-2 shadow-[3px_3px_0_#16141f] ${className}`}
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
  photo: string;
  position: string;
  name: string;
  subtitle: string;
  bullets: string[];
}) {
  return (
    <article className="overflow-hidden rounded-3xl border border-[#e4dfd3] bg-white">
      <img
        src={photo}
        alt={name}
        className={`aspect-[4/3] w-full object-cover ${position}`}
        loading="lazy"
      />
      <div className="p-6 sm:p-7">
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
  return (
    <div aria-hidden="true" className="relative overflow-hidden py-6">
      <div className="absolute -inset-x-[5%] top-1/2 -translate-y-1/2 rotate-[2deg] bg-[#d9d2ff] py-2.5">
        <div className="ll-marquee-reverse flex w-max whitespace-nowrap text-sm font-extrabold uppercase tracking-wider text-[#5b46e8]/60">
          {items}
          {items}
        </div>
      </div>
      <div className="relative -mx-[5%] -rotate-[1.5deg] bg-[#16141f] py-2.5">
        <div className="ll-marquee flex w-max whitespace-nowrap text-sm font-extrabold uppercase tracking-wider text-white">
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
