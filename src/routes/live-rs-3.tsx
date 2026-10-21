import { createFileRoute } from "@tanstack/react-router";
import { LiveLightPage, type LiveLightContent } from "../components/LiveLight";

// Versão clara e "nativa" da live-rs-1 (sem foto): mesmo texto, mesmo grupo e mesmo evento de Pixel.
const CONTENT: LiveLightContent = {
  ctaLink: "https://chat.whatsapp.com/DzndJHyCSUq6lNOP9OhN9n",
  headlineBefore: "Donos de restaurante do Rio Grande do Sul estão usando o",
  headlineAfter: "para faturar mais todo mês, com previsibilidade e lucro.",
  subheadline:
    "Na próxima segunda, o Rick, fundador do Porto Dicas e sócio da Tasty, abre ao vivo o método que levou restaurantes gaúchos ao maior faturamento da história deles, e mostra como descobrir onde o faturamento do teu está travando.",
  marquee: "MÉTODO 3 ESTRELAS • EXCLUSIVO PARA DONOS DE RESTAURANTE DO RIO GRANDE DO SUL •",
  topics: [
    "Os 3 números que formam o faturamento de qualquer restaurante, e como descobrir qual deles está travando o teu.",
    "Quanto custa trazer um cliente novo para o teu restaurante, e por que quase nenhum dono sabe esse número.",
    "Como o Movimento Constante faz cliente novo chegar toda semana, do salão ao delivery.",
    "O case completo de um restaurante gaúcho que bateu o recorde de faturamento, com os números reais.",
  ],
  rickSubtitle: "fundador do Porto Dicas e sócio da Tasty",
  closing:
    "Essa aula faz sentido para dono ou sócio de restaurante do Rio Grande do Sul que já fatura bem, mas sente que o faturamento parou de crescer, e quer crescer com previsibilidade e lucro, sem viver de promoção.",
};

export const Route = createFileRoute("/live-rs-3")({
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
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700;800&family=Caveat:wght@600;700&display=swap",
      },
    ],
  }),
  component: () => <LiveLightPage variant="sketch" content={CONTENT} />,
});
