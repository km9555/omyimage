# French (/fr) authoring brief

Shared brief for everyone writing French copy for oMyImage. Read it fully
before writing. Playbook: `conversion.md` (§3 per-page procedure, §6 traps,
§12 German, §13 Spanish — the same rollout twice already). Finished examples
of every file type: Spanish (`*.es.ts`, the most recent and closest) and
German (`*.de.ts`).

## Market and voice

- France first; the same copy serves Belgium, Switzerland and Québec, so
  avoid France-only slang. Tag `fr`, French-French usage.
- **Address the reader as "vous"** (iLoveIMG /fr and oMyPDF /fr do):
  « Importez votre image », « Téléchargez le résultat ». Button labels in the
  infinitive (« Sélectionner des images », « Télécharger », « Compresser »).
- Write natively, not word-for-word. Short sentences, concrete numbers, no
  fluff. Keep every fact of the English page exactly (what runs in the
  browser vs the server, limits, formats).
- **French typography** (non-negotiable, it is what separates native copy
  from machine output):
  - a no-break space before « : » and inside guillemets, and a narrow
    no-break space before « ; ! ? » — write them as the characters U+00A0
    (` `) and U+202F (` `) directly in the string, never a plain
    space (a line break there is the classic error);
  - quotation marks are « … » (with the no-break spaces inside), never a
    bare ASCII `"` inside a double-quoted TS string;
  - straight apostrophe `'` is fine (l'image, d'identité) — be consistent;
  - capitalise only the first word of headings (« Compresser une image »,
    not « Compresser Une Image »).
- Numbers: decimal comma (2,5 Mo), space as thousands separator (50 000),
  a no-break space between number and unit (100 Ko). **Units are French:
  o / Ko / Mo** (the UI already formats sizes that way — `format.ts`), and
  px / dpi / cm / mm. Dates JJ/MM/AAAA.
- Keep verbatim: **oMyImage**, format names (JPG, JPEG, PNG, WebP, HEIC,
  AVIF, GIF, BMP, SVG, ICO, PDF, MP4, APNG, EXIF), product names (WhatsApp,
  YouTube, LinkedIn, Facebook, Discord, Instagram, iPhone, Windows, macOS).
- Every `{placeholder}` in a key must appear in the translation (gate).
- Vocabulary: **image** is the head noun (compresser image 33.1K vs
  compresser photo 14.8K); « photo » where the query carries it (photo
  d'identité, retoucher une photo, photo noir et blanc, photo de profil).
  fichier, importer (upload), télécharger (download), navigateur, appareil,
  ordinateur (fine in French), téléphone, gratuit, sans inscription, sans
  filigrane, qualité, résolution, poids/taille du fichier. « IA » for AI.
  « Arrière-plan » (with hyphen) for background.

## SEO rules per tool page

- `metaTitle` (≤ 60 chars incl. " | oMyImage") and the H1/name lead with the
  **primary French query** below. metaTitle may add « – gratuit et en
  ligne » / « sans inscription ». metaDescription 140–160 chars with the
  primary query and one secondary.
- Use secondaries naturally in the intro, one heading and one FAQ.
- FAQs: at least as many as English; you may ADD French-market questions
  (« Mes images sont-elles envoyées sur un serveur ? », RGPD, upload limits
  of administrative and job portals in general terms — never invented
  limits for named institutions such as ANTS or Pôle emploi/France Travail).
- Every tool page must RENDER ≥ 900 words; keep each module at least as long
  as its English (Spanish ran 15–25 % longer, which is the right range).
- The H1 must differ from the English H1 (the verifier fails an identical
  one — German lost a round on « Meme Generator »).
- Variant pages (compresser-image-100ko etc.) stay distinct (similarity
  ceiling 0.6) — translate each one's own specifics.

## Primary French queries (France, volume per month, Nov 2026)

| id | fr slug | primary query | secondary |
|---|---|---|---|
| remove-background | supprimer-arriere-plan | Supprimer l'arrière-plan (12.1K) | supprimer fond image (9.9K), enlever fond (5.4K), détourer image (3.6K), fond transparent (3.6K), gratuit |
| image-to-pdf | image-en-pdf | Image en PDF (49.5K) | PNG en PDF (60.5K), JPG en PDF (33.1K), convertir JPG en PDF (40.5K), photo en PDF (27.1K) |
| compress-image | compresser-image | Compresser une image (33.1K) | compresser photo (14.8K), compresser JPG, compresser PNG, réduire taille image, réduire poids image |
| watermark-image | ajouter-filigrane | Ajouter un filigrane | filigrane (49.5K), filigrane photo, mettre un filigrane |
| remove-watermark | supprimer-filigrane | Supprimer un filigrane | enlever filigrane, retirer filigrane (KD 3–6) |
| meme-generator | generateur-de-meme | Générateur de mème | meme generator (40.5K — keep in metaTitle), créer un mème |
| passport-photo-maker | photo-identite | Photo d'identité (33.1K) | photo identité (22.2K), photo passeport (14.8K), photo d'identité en ligne, 35 × 45 mm |
| image-color-picker | selecteur-de-couleur | Sélecteur de couleur (9.9K) | color picker (22.2K), pipette couleur (3.6K), couleur image |
| upscale-image | ameliorer-qualite-image | Améliorer la qualité d'une image (18.1K) | améliorer qualité photo, augmenter résolution image, upscale, agrandir image |
| resize-image | redimensionner-image | Redimensionner une image (18.1K) | réduire taille photo (12.1K), changer taille image, redimensionner photo |
| png-to-jpg | png-en-jpg | PNG en JPG (22.2K) | convertir PNG en JPG, png to jpg |
| heic-to-jpg | heic-en-jpg | HEIC en JPG (14.8K) | convertir HEIC en JPG (18.1K), photos iPhone |
| jpg-to-png | jpg-en-png | JPG en PNG (14.8K) | convertir JPG en PNG |
| svg-to-png | svg-en-png | SVG en PNG (12.1K) | convertir SVG en PNG |
| png-to-ico | png-en-ico | PNG en ICO (9.9K) | créer un favicon |
| image-editor | retoucher-photo | Retoucher une photo (8.1K) | éditeur photo, retouche photo en ligne, modifier photo |
| merge-images | fusionner-images | Fusionner des images | montage photo (14.8K), assembler des photos, collage photo |
| grayscale-image | photo-noir-et-blanc | Photo en noir et blanc (5.4K) | mettre une photo en noir et blanc |
| blur-image | flouter-photo | Flouter une photo (3.6K) | flouter image, flou photo |
| blur-face | flouter-visage | Flouter un visage (1.6K) | pixeliser un visage |
| blur-background | flouter-arriere-plan | Flouter l'arrière-plan | flou arrière-plan |
| change-background-color | changer-fond-photo | Changer le fond d'une photo | fond blanc photo (5.4K), changer couleur fond |
| remove-object | supprimer-objet-photo | Supprimer un objet d'une photo | effacer objet photo, enlever une personne d'une photo |
| unblur-image | rendre-photo-nette | Rendre une photo nette | améliorer netteté photo, déflouter photo |
| image-to-hd | image-en-hd | Image en HD | photo HD, convertir image en HD |
| crop-image | recadrer-image | Recadrer une image | rogner image, recadrer photo |
| rotate-image | pivoter-image | Faire pivoter une image | tourner une image |
| flip-image | image-miroir | Image miroir | effet miroir photo, retourner une image |
| circle-crop | recadrer-photo-en-cercle | Recadrer une photo en cercle | photo ronde, image ronde |
| add-border | ajouter-bordure-image | Ajouter une bordure à une image | cadre photo |
| image-to-text | image-en-texte | Image en texte | convertir image en texte, extraire texte image, OCR en ligne |
| convert-to-jpg / -png / -webp | convertir-en-jpg / -png / -webp | Convertir en JPG / PNG / WebP | convertir une image en … |
| webp-to-jpg and other pairs | x-en-y | X en Y | convertir X en Y |
| gif-maker | creer-gif | Créer un GIF | faire un GIF, GIF maker (KD 77 — metaTitle only) |
| video-to-gif | video-en-gif | Vidéo en GIF | MP4 en GIF, convertir vidéo en GIF |
| gif-compressor | compresser-gif | Compresser un GIF (3.6K) | réduire la taille d'un GIF |
| other GIF tools | redimensionner-gif, recadrer-gif, pivoter-gif, inverser-gif, vitesse-gif, couper-gif, gif-en-webp, gif-en-apng, gif-en-sprite-sheet, fusionner-gif, ajouter-texte-gif, gif-texte-machine-a-ecrire, webp-en-gif, gif-en-images, gif-en-mp4 | as the slug reads | |
| invert-image | inverser-couleurs-image | Inverser les couleurs d'une image | négatif photo |
| pixelate-image | pixeliser-image | Pixeliser une image | pixeliser photo |
| image-brightness | luminosite-image | Luminosité d'une image | éclaircir une photo |
| glitch-effect | effet-glitch | Effet glitch | |
| round-corners | arrondir-coins-image | Arrondir les coins d'une image | coins arrondis |
| split-image | decouper-image | Découper une image (2.4K) | diviser une image |
| image-overlay | superposer-images | Superposer des images | |
| instagram-grid-maker | grille-instagram | Grille Instagram | |
| image-metadata / remove-exif | voir-metadonnees-photo / supprimer-metadonnees | Voir les métadonnées d'une photo / Supprimer les métadonnées | EXIF |
| reduce/increase-image-size-in-kb | reduire-taille-image-ko / augmenter-taille-image-ko | Réduire la taille d'une image en Ko | |
| compress-image-to-NNkb / 1mb / 2mb | compresser-image-NNko / -1mo / -2mo | Compresser une image à NN Ko | réduire une photo à NN Ko |
| jpg-to-pdf-under-NNkb | jpg-en-pdf-moins-de-NNko | JPG en PDF de moins de NN Ko | |
| signature-resizer | redimensionner-signature | Redimensionner une signature | signature image |
| dpi-converter / dpi-checker | changer-dpi-image / verifier-dpi-image | Changer le DPI d'une image / Vérifier le DPI | |
| resize-image-in-cm | redimensionner-image-en-cm | Redimensionner une image en cm | |
| 9-16-aspect-ratio-image | image-9-16-1080x1920 | Format 9:16 (1.9K) | 1080x1920 |
| youtube-thumbnail-resizer | taille-miniature-youtube | Taille de miniature YouTube | miniature YouTube (2.4K) |
| whatsapp-dp-resizer | photo-de-profil-whatsapp | Photo de profil WhatsApp (3.6K) | sans recadrer |
| linkedin-banner-resizer | banniere-linkedin | Bannière LinkedIn (6.6K) | taille bannière LinkedIn |
| facebook-cover-resizer | couverture-facebook | Photo de couverture Facebook | taille couverture Facebook |
| discord-banner-resizer | banniere-discord | Bannière Discord | |

Photo d'identité: the tool's presets are 35×45 mm, 2×2 in, 3×4 cm, 4×6 cm,
2×3 cm, 5×7 cm, 33×48 mm, 50×70 mm. 35 × 45 mm is the French format, but
French ID card and passport applications use an ePhoto with a digital
signature code from a certified booth or photographer (ANTS) — say plainly
that a home-made photo is for printing, visas of other countries, CVs,
forms and checking a photo, and never claim acceptance by an authority.

Not shipped in French: 3x4-photo, 2x2-photo — but name them in
`dictionaries/fr/tools.ts` so lists never fall back.

## Shared UI glossary (use EXACTLY these, in ui blocks and when prose quotes a button)

| English key | French |
|---|---|
| Compress | Compresser |
| Compress & download | Compresser et télécharger |
| Increase | Augmenter |
| Download | Télécharger |
| Select images / Select image | Sélectionner des images / Sélectionner une image |
| Resize | Redimensionner |
| Resize & download | Redimensionner et télécharger |
| Crop to fill | Recadrer pour remplir |
| Pad | Ajouter des marges |
| Blur fill | Fond flouté |
| Padding colour | Couleur des marges |
| Custom size | Taille personnalisée |
| Keep aspect ratio (fit) | Conserver les proportions (ajuster) |
| Create PDF | Créer le PDF |
| Images per page | Images par page |
| Fit to image | Adapter à l'image |
| Remove background | Supprimer l'arrière-plan |
| Strip metadata | Supprimer les métadonnées |
| Accept All / Reject All / Customize | Tout accepter / Tout refuser / Personnaliser |
| Cookie Settings | Paramètres des cookies |
| Continue with Google | Continuer avec Google |
| Import from Google Drive | Importer depuis Google Drive |
| Last updated: | Dernière mise à jour : |

Tool names quoted in prose use the H1 names in the table above
(« Supprimer l'arrière-plan », « Compresser une image », « Fusionner des
images », « Créer un GIF »…). "frame" = « image » in GIF context only where
unambiguous, otherwise « frame » is understood — prefer « image (frame) » on
first use, then « image ».

## Files and gates

- Tool module: `src/content/tools/<id>.fr.ts`, the SHAPE of `<id>.en.ts`
  exactly (fields, feature `icon`s in order, section `id`s, ≥ FAQ count;
  an extra French-only section is allowed), `locale: "fr"`. `<id>.es.ts`
  shows how the most recent locale laid out the same module, including
  shared `ui` blocks (e.g. `ui: cropper.ui`) and module-scope labels the key
  script cannot see.
- `ui` block: `node scripts/i18n-keys.mjs fr <bucket>` (from `frontimg/`)
  prints every key; translate the values, keys stay byte-identical English.
  Mark values deliberately identical to English with `// i18n-same`.
- French has two plural forms (0 and 1 are singular); translate both
  `"1 image"` / `"{n} images"`.
- Gates (from `frontimg/`): `node scripts/i18n-keys.mjs fr <your buckets>` → 0
  missing; `node scripts/i18n-charset.mjs`; `npx tsc --noEmit --incremental
  false` with no errors in YOUR files.
- **Do not** touch status.ts, slugs.ts, routes under `src/app/fr/` (except the
  legal writer), registries, or files outside your assignment. **No git, no
  build, no dev server.**
