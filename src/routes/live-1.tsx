import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Utensils } from "lucide-react";
import {
  TopBar,
  CtaButton,
  MarqueeBanner,
  PresentersSection,
} from "../components/LandingComponents";

export const Route = createFileRoute("/live-1")({
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
  component: Live1,
});

function Live1() {
  const ctaLink = "[LINK DO BOTÃO]";

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
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-indigo-500/30">
      <main className="w-full flex-1 flex flex-col items-center">
        {/* 1. FAIXA DO TOPO */}
        <TopBar />

        {/* HERO SECTION (2. Headline, 3. Subheadline, 4. Botão) */}
        <section className="w-full max-w-3xl px-4 pt-8 sm:pt-12 pb-8 flex flex-col items-center text-center">
          {/* 2. HEADLINE */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.2] sm:leading-[1.15] mb-6">
            Donos de restaurante estão usando o Método 3 Estrelas para faturar mais todo mês, com
            previsibilidade e lucro.
          </h1>

          {/* 3. SUBHEADLINE */}
          <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
            Não é sobre postar mais nem fazer promoção. Na próxima segunda, a gente abre ao vivo o
            método que levou restaurantes ao maior faturamento da história deles, sem depender de
            promoção nem de aplicativo, e mostra como descobrir onde o faturamento do teu está
            travando.
          </p>

          {/* 4. BOTÃO HERO */}
          <CtaButton buttonLink={ctaLink} />
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
          <PresentersSection rickSubtitle="sócio da Tasty e fundador do Porto Dicas" />
          {/* REMOVER ESTE BLOCO SE NECESSÁRIO - FIM */}

          {/* 9. FECHAMENTO */}
          <section className="w-full text-center py-6 px-4 bg-gradient-to-b from-transparent via-indigo-950/30 to-transparent rounded-2xl">
            <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              Essa aula faz sentido para dono ou sócio de restaurante que já fatura bem, mas sente
              que o faturamento parou de crescer, e quer crescer com previsibilidade e lucro, sem
              viver de promoção.
            </p>

            {/* BOTÃO FECHAMENTO */}
            <CtaButton
              buttonLink={ctaLink}
              subtext="Não precisa preencher formulário nem deixar e-mail. O botão leva direto para o grupo."
            />
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
