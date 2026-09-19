/**
 * Portuguese site-level copy — the brand tagline and the description used for
 * the `/pt` layout defaults, the Portuguese home page and its Open Graph card.
 *
 * Written for the SERP snippet, not as a translation of the English one. The
 * English tagline ("Effortless Power for Image Workflows") is a brand line with
 * no local search volume; the Portuguese H1 carries the head term Brazilians
 * actually type — "editar imagens online grátis" / "ferramentas de imagem" —
 * the substitution oMyPDF made on its own /pt home.
 *
 * iLoveIMG's /pt H1 is "Todas as ferramentas necessárias para editar imagens
 * em lote"; ours leads with the same intent but names the tools people search
 * (comprimir, redimensionar, converter, remover fundo).
 *
 * "Grátis" rather than "gratuito": both are correct, "grátis" is what gets
 * typed. The description closes on the two objections that decide the click —
 * nothing to install, no sign-up.
 */

export const ptSite = {
  tagline: "Ferramentas de imagem online grátis",
  description:
    "Ferramentas de imagem online grátis: comprima, redimensione, recorte, converta, remova o fundo e coloque marca d'água em fotos. Arquivos processados direto no seu navegador — sem instalar nada e sem criar conta.",
  /** Home page `<h1>` — carries the head term. */
  homeH1: "Ferramentas de imagem online grátis",
  homeIntro:
    "Comprima, redimensione, converta e edite suas imagens direto no navegador — sem instalar nada e sem criar conta.",
} as const;
