// /live-4: versão antiga (escura) da página ampla com foto, que antes ficava em /live-2.
// O endereço /live-2 agora mostra a versão clara.
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Utensils, MessageCircle, ArrowRight } from "lucide-react";
import { TopBar, MarqueeBanner, PresentersSection } from "../components/LandingComponents";

export const Route = createFileRoute("/live-4")({
  head: () => ({
    meta: [
      { title: "Método 3 Estrelas • Acelere o Faturamento do seu Restaurante" },
      {
        name: "description",
        content:
          "Descubra o Método 3 Estrelas para faturar mais todo mês com previsibilidade e lucro, sem depender de promoção.",
      },
      {
        property: "og:title",
        content: "Método 3 Estrelas • Acelere o Faturamento do seu Restaurante",
      },
      {
        property: "og:description",
        content:
          "Descubra o Método 3 Estrelas para faturar mais todo mês com previsibilidade e lucro.",
      },
    ],
  }),
  component: Live2,
});

function Live2() {
  const ctaLink = "https://chat.whatsapp.com/Jr8W5ZV0EyzG1VO3UilW4a";

  // Foto oficial do Rick Mottola
  const rickHeroImage = "/live/rick-hero-800.webp";
  const rickHeroSrcSet = "/live/rick-hero-480.webp 480w, /live/rick-hero-800.webp 800w";

  const tags = [
    "RESTAURANTE ITALIANO",
    "RESTAURANTE CARNES E PARRILLA",
    "SUSHI",
    "DELIVERY",
    "PIZZARIA",
    "PUB E BAR",
    "CASA DE EVENTOS",
    "ALIMENTAÇÃO SAUDÁVEL",
    "E MUITO MAIS",
  ];

  const topics = [
    "Os 3 números que formam o faturamento de qualquer restaurante, e como descobrir qual deles está travando o teu.",
    "Quanto custa trazer um cliente novo para o teu restaurante, e por que quase nenhum dono sabe esse número.",
    "Como o Movimento Constante faz cliente novo chegar toda semana, do salão ao delivery.",
    "O case completo de um restaurante que bateu o recorde de faturamento, com os números reais.",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-indigo-500/30 overflow-x-hidden">
      <main className="w-full flex-1 flex flex-col items-center">
        {/* 1. FAIXA DO TOPO */}
        <TopBar />

        {/* HERO SECTION - Inspirada na referência com foto do Rick + badges flutuantes */}
        <section className="relative w-full max-w-6xl px-4 sm:px-6 pt-6 sm:pt-10 pb-8 sm:pb-12 flex flex-col items-center">
          {/* Luz de fundo estilizada */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/4 -right-10 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl -z-10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-10 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl -z-10"
          />

          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* Coluna de texto (Headline, Subheadline, CTA) */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
              {/* Logo Tasty + Badge indicativa */}
              <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
                <img
                  src="/live/logo-64.png"
                  width={32}
                  height={32}
                  alt="Tasty Logo"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg shadow-md shrink-0"
                />
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wide uppercase">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                  Encontro Exclusivo • Ao Vivo
                </div>
              </div>

              {/* 2. HEADLINE */}
              <h1 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight leading-[1.2] sm:leading-[1.15] mb-5 sm:mb-6">
                Donos de restaurante estão usando o{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-indigo-100 underline decoration-indigo-500/50 decoration-wavy decoration-1 underline-offset-4">
                  Método 3 Estrelas
                </span>{" "}
                para faturar mais todo mês, com previsibilidade e lucro.
              </h1>

              {/* 3. SUBHEADLINE */}
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl mb-6 sm:mb-8">
                Não é sobre postar mais nem fazer promoção. Na próxima segunda, o Rick, fundador do
                Porto Dicas e sócio da Tasty, abre ao vivo o método que levou restaurantes ao maior
                faturamento da história deles, sem depender de promoção nem de aplicativo, e mostra
                como descobrir onde o faturamento do teu está travando.
              </p>

              {/* 4. BOTÃO HERO */}
              <div className="w-full max-w-md flex flex-col items-center lg:items-start">
                <a
                  href={ctaLink}
                  onClick={() => window.fbq?.("track", "Lead")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base sm:text-lg font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-xl shadow-indigo-900/40 hover:shadow-indigo-600/50 hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0 active:scale-[0.99] border border-blue-400/30"
                >
                  <MessageCircle
                    aria-hidden="true"
                    className="w-6 h-6 fill-white/20 shrink-0 animate-pulse"
                  />
                  <span className="tracking-wide uppercase text-sm sm:text-base">
                    QUERO ENTRAR NO GRUPO DA AULA
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed text-center lg:text-left">
                  O botão leva direto para o grupo silencioso do WhatsApp, onde a gente manda o link
                  da aula. Não precisa preencher formulário nem deixar e-mail.
                </p>
              </div>
            </div>

            {/* Coluna Visual (Foto do Rick com grafismo geométrico de fundo e cards de métricas como na referência) */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center mt-2 lg:mt-0 w-full">
              {/* Moldura / Grafismo geométrico de fundo (estilo a marca amarela da referência, aqui em gradiente indigo/azul) */}
              <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] flex items-center justify-center">
                {/* Forma gráfica de impacto atrás da foto */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-6 top-8 bottom-4 bg-gradient-to-br from-indigo-500/30 via-blue-600/20 to-transparent rounded-3xl transform rotate-3 border border-indigo-400/20"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-4 top-4 bottom-6 bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-transparent rounded-3xl transform -rotate-2 border border-blue-400/20"
                />

                {/* Imagem do Rick */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border/80 shadow-2xl bg-card/60">
                  <img
                    src={rickHeroImage}
                    srcSet={rickHeroSrcSet}
                    sizes="(min-width: 640px) 448px, 100vw"
                    width={800}
                    height={960}
                    alt="Rick Mottola - Fundador do Porto Dicas e sócio da Tasty"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Gradiente sutil na base para integrar com o fundo */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background via-background/60 to-transparent" />

                  {/* Identificação de Rick no rodapé da imagem */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <p className="text-white font-bold text-sm drop-shadow-md">Rick Mottola</p>
                    <p className="text-indigo-300 text-xs drop-shadow-md">
                      Fundador do Porto Dicas • Sócio da Tasty
                    </p>
                  </div>
                </div>

                {/* Card de Prova 1 (superior esquerdo / flutuante) */}
                <div className="absolute -top-3 -left-3 sm:-left-6 bg-card/90 backdrop-blur-md border border-indigo-500/30 rounded-xl px-3.5 py-2 shadow-xl shadow-black/40">
                  <p className="text-lg sm:text-xl font-extrabold text-white leading-tight">
                    +520 mil
                  </p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground font-medium">
                    seguidores no nicho
                  </p>
                </div>

                {/* Card de Prova 2 (inferior direito / flutuante - estilo ref) */}
                <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-card/95 backdrop-blur-md border border-indigo-500/40 rounded-xl px-4 py-2.5 shadow-2xl shadow-black/50 text-left">
                  <p className="text-lg sm:text-2xl font-extrabold text-white leading-none mb-0.5">
                    +2.000
                  </p>
                  <p className="text-[11px] sm:text-xs text-muted-foreground font-medium leading-tight">
                    restaurantes impactados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. FAIXA ROLANTE */}
        <MarqueeBanner text="MÉTODO 3 ESTRELAS • EXCLUSIVO PARA DONOS DE RESTAURANTE • " />

        {/* CONTENT CONTAINER */}
        <div className="w-full max-w-3xl px-4 py-10 space-y-12">
          {/* 6. PARA QUEM É */}
          <section className="w-full bg-card/60 border border-border/80 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
              <Utensils className="w-5 h-5 text-indigo-400" />
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Para negócios de alimentação como:
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-2.5 justify-center sm:justify-start">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-indigo-950/60 border border-indigo-500/20 text-xs sm:text-sm font-semibold tracking-wide text-indigo-200 hover:border-indigo-400/40 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* 7. TÓPICOS DA AULA */}
          <section className="w-full bg-card/60 border border-border/80 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-2xl font-bold text-white mb-6 text-center sm:text-left tracking-tight">
              Na aula, você vai ver na prática:
            </h2>
            <div className="space-y-4">
              {topics.map((topic, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <CheckCircle2
                    aria-hidden="true"
                    className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5"
                  />
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {topic}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 8. QUEM APRESENTA (Bloco fácil de remover/editar) */}
          {/* REMOVER ESTE BLOCO SE NECESSÁRIO - INÍCIO */}
          <PresentersSection rickSubtitle="fundador do Porto Dicas e sócio da Tasty" />
          {/* REMOVER ESTE BLOCO SE NECESSÁRIO - FIM */}

          {/* 9. FECHAMENTO */}
          <section className="w-full text-center py-6 px-4 bg-gradient-to-b from-transparent via-indigo-950/30 to-transparent rounded-2xl">
            <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              Essa aula faz sentido para dono ou sócio de restaurante que já fatura bem, mas sente
              que o faturamento parou de crescer, e quer crescer com previsibilidade e lucro, sem
              viver de promoção.
            </p>

            {/* BOTÃO FECHAMENTO */}
            <div className="w-full max-w-md mx-auto flex flex-col items-center">
              <a
                href={ctaLink}
                onClick={() => window.fbq?.("track", "Lead")}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base sm:text-lg font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-xl shadow-indigo-900/40 hover:shadow-indigo-600/50 hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0 active:scale-[0.99] border border-blue-400/30"
              >
                <MessageCircle
                  aria-hidden="true"
                  className="w-6 h-6 fill-white/20 shrink-0 animate-pulse"
                />
                <span className="tracking-wide uppercase text-sm sm:text-base">
                  QUERO ENTRAR NO GRUPO DA AULA
                </span>
                <ArrowRight
                  aria-hidden="true"
                  className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform"
                />
              </a>
              <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed text-center">
                Não precisa preencher formulário nem deixar e-mail. O botão leva direto para o
                grupo.
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* 10. RODAPÉ */}
      <footer className="w-full border-t border-border/60 py-6 px-4 text-center bg-background">
        <p className="text-xs sm:text-sm text-muted-foreground tracking-wide">
          Tasty Media • Performar Media Digital Ltda. • CNPJ 38.358.474/0001-82
        </p>
      </footer>
    </div>
  );
}
