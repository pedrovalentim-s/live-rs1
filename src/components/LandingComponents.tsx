import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";

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
    <div className="w-full bg-gradient-to-r from-blue-950 via-indigo-950 to-blue-950 border-b border-indigo-500/20 py-2.5 px-4 text-center">
      <p className="text-xs sm:text-sm font-semibold tracking-wide text-indigo-200 uppercase">
        segunda • 15h • AULA AO VIVO E GRATUITA
      </p>
    </div>
  );
}

export function MarqueeBanner() {
  const marqueeText =
    "MÉTODO 3 ESTRELAS • EXCLUSIVO PARA DONOS DE RESTAURANTE DO RIO GRANDE DO SUL • ";
  const repeatedText = Array(12).fill(marqueeText).join(" ");

  return (
    <div
      aria-hidden="true"
      className="w-full bg-indigo-950/80 border-y border-indigo-500/30 py-3 overflow-hidden select-none"
    >
      <div className="animate-marquee whitespace-nowrap flex items-center">
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

export function PresentersSection() {
  return (
    <div className="w-full py-12 px-4 bg-card/40 border-y border-border/50 my-10 rounded-2xl">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-white mb-8 tracking-tight">
          Quem vai te mostrar o método
        </h2>

        {/* Space for Photo */}
        <div className="mb-8 flex flex-col items-center">
          <div className="relative w-full max-w-lg aspect-[16/9] rounded-2xl overflow-hidden border border-indigo-500/30 bg-muted flex items-center justify-center group shadow-2xl">
            <img
              src="https://vibe.filesafe.space/1792349844330925725/assets/cf6155b4-112d-4d3f-8444-a2e77211159b.png"
              alt="Rick e Pedro"
              className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-4 right-4 text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-background/80 backdrop-blur-md text-xs font-semibold text-indigo-300 border border-indigo-500/30">
                [ESPAÇO PARA FOTO: Rick e Pedro]
              </span>
            </div>
          </div>
        </div>

        {/* Bios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-background/80 border border-border/80 shadow-md">
            <h3 className="text-lg font-bold text-white mb-1">Rick Mottola</h3>
            <p className="text-xs font-medium text-indigo-400 mb-4">
              fundador do Porto Dicas e sócio da Tasty
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
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
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-background/80 border border-border/80 shadow-md">
            <h3 className="text-lg font-bold text-white mb-1">Pedro Valentim</h3>
            <p className="text-xs font-medium text-indigo-400 mb-4">CEO e fundador da Tasty</p>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
