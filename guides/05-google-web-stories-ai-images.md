# Publishing fields — paste into /admin/blog

| Field | Value |
|---|---|
| Title | How to Create Viral Google Web Stories Using AI Images in 2026 |
| Slug | google-web-stories-ai-images |
| Excerpt | A 2026 Google Web Stories tutorial: generate AI images, fix them to 9:16 (1080 × 1920), make them load fast, follow Google's rules, and earn from Discover. |
| Tag 1 | Web Stories |
| Tag 2 | AI images |
| Tag 3 | Guides |
| Author | oMyImage Team |
| Read time | 11 min |
| Accent | #7A4FD0 |
| SEO title | Google Web Stories Tutorial 2026: AI Images, 9:16 Size & SEO |
| SEO description | Make Google Web Stories with AI images in 2026: the 9:16 (1080×1920) image size, fast-loading WebP, Google's text and title rules, and how to monetize. |

---

<!-- BODY: paste everything below this line into "Body (Markdown)" -->

Google Web Stories are full-screen, tap-through pages that Google can show as their own result in Search and as large visual cards in Discover. AI Overviews now answer many questions before anyone scrolls to the blue links. Web Stories still get a spot of their own.

[Google's own documentation](https://developers.google.com/search/docs/appearance/enable-web-stories) says Discover shows these cards **most often in the United States, India and Brazil**. Those three markets are mostly mobile, and that is where Web Stories do best.

This guide covers how to build a story from AI images and how to get those images right. The images are where most AI-made stories fail.

## Web Stories image size: 9:16 aspect ratio (1080x1920) and other specs

The standard Web Stories image size is a 9:16 aspect ratio image of **1080 × 1920 pixels** (often written 1080x1920), meaning 1080 px wide and 1920 px tall. An image that size fills a phone screen with no letterboxing.

The **Source** column shows which numbers are Google's rules and which are best practice.

| What | Value | Source |
|---|---|---|
| Image shape | **9:16 portrait, 1080 × 1920 px** | Industry standard for full-screen mobile |
| Poster image | At least **640 × 853 px**, 3:4 | Google (required) |
| Publisher logo | At least **96 × 96 px**, square, not transparent | Google (required) |
| Title | Under 90 characters, ideally **under 70** | Google |
| Text per page | About **280 characters** max. A story where most pages have **more than 180** may not be eligible | Google content policy |
| Video per page | Under 15 seconds, 60 seconds max | Google |
| Story length | **10–20 pages** is the common sweet spot | Publisher practice |
| Image weight | Roughly **100–200 KB** per page as WebP | Rule of thumb for fast mobile loads |

## Why Web Stories + AI images is the 2026 hack

A Web Story needs a strong visual on **every** page. With 10 to 20 pages per story, custom photography or video quickly costs more than one story can earn back. Most creators give up after a handful of stories.

AI image generators remove that bottleneck. You can make a consistent set of visuals for a whole story in under an hour, so **publishing a story every day** becomes realistic. Steady publishing is what builds Discover visibility.

The format suits a few niches especially well in each of the three markets:

- **United States:** tech tutorials ("5 iPhone settings to change today"), personal finance explainers, travel lists, product round-ups.
- **India:** recipes, festival stories (Diwali, Holi, Navratri, Onam), cricket, exam and job updates, astrology. Stories in **Hindi** and other regional languages have real search demand of their own.
- **Brazil:** lifestyle, celebrity and entertainment news, football, beauty, quick recipes. Write them in **Brazilian Portuguese**; English stories rarely travel there.

### Making Web Stories in Hindi and Portuguese

Type Hindi or Portuguese text in the story editor, never inside the image, so Google can read it. Set the story's language (`hi` or `pt-BR`) and pick a font that supports the script, such as Noto Sans Devanagari or Mukta for Hindi.

The short-text rule still applies. Devanagari vowel signs count as characters, so a Hindi line reaches the limit sooner than it looks.

## Step-by-step: building a Web Story from scratch

### Step 1: Generate your visuals

Use whichever generator you like: Midjourney, ChatGPT's image generation, Google Gemini, or a free generator such as Microsoft Designer or Leonardo's free tier. Two habits make the next steps much easier:

- **Ask for a portrait image in the prompt.** In Midjourney, add `--ar 9:16`. In other tools, say "vertical 9:16 portrait image".
- **Keep the subject in the middle.** Leave empty space at the top and bottom of the frame. You will place your text there, and the story's own controls sit at the edges.

Don't ask the generator to write words into the image, because AI-generated text is often misspelled. Google also advises against **burned-in text**: text that is part of the image can't resize for different screens and can clash with the story's own text.

Add your text later in the story editor instead.

Generate every page of a story in **one consistent style**, with the same lighting, palette and character descriptions. A story should look like one piece, not a random gallery.

### Step 2: Optimize and format the images

AI images almost never come out ready for a Web Story:

- **Wrong shape.** Many generators default to a 1:1 square. ChatGPT's tall option is 1024 × 1536, which is 2:3, not 9:16.
- **Too few pixels.** Midjourney's 9:16 output is about 816 × 1456, smaller than the 1080 × 1920 full-screen standard. Stretched to fill a large phone, it looks soft.
- **Too heavy.** A raw PNG straight from a generator can be 2–6 MB. Twenty of those make a story crawl on a mobile connection.

Google's [Web Stories content policy](https://developers.google.com/search/docs/appearance/web-stories-content-policy) rules out **"stretched out or pixelated"** media, and a slow story loses readers before page two. Fix all three problems with free tools on oMyImage, in this order.

![A blurry, pixelated square AI image of a festival dance next to the same scene as a sharp 9:16 image filling a phone screen](https://images.omyimage.com/omyimage/blog/5fd69d46-8a0c-4abf-bb5b-3634c106ecc4.webp)

> **How to convert an image to 9:16 online:** open [Crop Image](/crop-image), choose the 9:16 ratio and position the frame. Then set exactly 1080 × 1920 in [Resize Image](/resize-image). Both run free in your browser.

**1. Upscale the image if it's too small.** Run any image narrower than 1080 px through the [AI Image Upscaler](/upscale-image) at 2×. It rebuilds edges and texture instead of just enlarging pixels, so faces, hair and fine textures stay sharp on a 6-inch screen. For a one-click "make it HD" pass, use [Image to HD](/image-to-hd).

**2. Crop to 9:16.** If the image isn't already portrait, open [Crop Image](/crop-image), pick the **9:16** ratio and drag the frame over the part of the picture that matters. Cropping yourself beats letting the story editor guess, because you decide what gets cut.

**3. Resize to exactly 1080 × 1920.** In [Resize Image](/resize-image), choose the **Social media** mode and the **Story / Reel** preset (1080 × 1920), or type the pixel values in yourself. Every page of the story then has identical dimensions, so nothing jumps or letterboxes as readers tap through.

**4. Compress or convert to WebP.** This step has the biggest effect on speed. [Convert to WebP](/convert-to-webp) usually cuts the file size by a large margin with no visible difference, or [Compress Image](/compress-image) lets you set the quality yourself.

If you want a hard ceiling, [Compress Image to 200KB](/compress-image-to-200kb) keeps every page under that limit automatically.

> **Privacy note:** Crop, Resize, Compress and Convert to WebP run **in your browser**. Your images aren't uploaded, and you don't need an account or pay anything.
>
> The AI Upscaler is the one exception. The model is too heavy for a browser tab, so it runs on oMyImage's server and results are deleted within an hour. It's free for 10 images a day, with no sign-up.

One note on WebP: Safari can display it but can't create it from a web page. On an iPhone or a Mac with Safari, do the WebP step in Chrome, Edge or Firefox, or fall back to JPG.

**Make the poster and logo too.** Every story needs a **poster image**, the thumbnail Google shows. Crop your strongest page to **3:4** in [Crop Image](/crop-image) and resize it to 960 × 1280, well above Google's 640 × 853 minimum.

Your **publisher logo** must be square and at least 96 × 96 px on a solid background. A 512 × 512 PNG from [Resize Image](/resize-image) works everywhere.

### Step 3: Assemble the story

Pick an editor that matches your site:

- **WordPress:** Google's free [Web Stories for WordPress](https://wp.stories.google/) plugin. It's a drag-and-drop editor with templates, and it handles the AMP markup, metadata and sitemap for you.
- **Any other site:** [MakeStories](https://makestories.io/) is a browser-based story editor that can publish to your own domain or export the files. It also has a WordPress plugin.
- **Canva:** good for designing the pages. Export them as images, then assemble the story in one of the editors above. A Canva design isn't a Web Story on your domain by itself.

Upload your 1080 × 1920 WebP files as **full-bleed backgrounds**. Then add the text **in the editor**, not in the image. Keep each page to one short sentence or a heading plus one line.

A Web Story must live on **your own domain** and be valid AMP. Before you share it, check it with the URL Inspection tool in Search Console.

## Google Web Stories SEO: 2026 rules

Web Stories are web pages, so ordinary SEO applies. A few rules matter more here.

**Technical checklist**

- **Title:** descriptive and **under 70 characters**, with the main keyword near the start. "10 Diwali Sweets You Can Make in 20 Minutes" beats "Diwali Special!!!".
- **Meta description:** 150–160 characters that say what the reader will learn. Most editors have a field for it.
- **Canonical tag:** every story should point to itself (self-referencing canonical). The WordPress plugin and MakeStories add it automatically. Check it if you hand-code.
- **Alt text on every image:** describe what is actually in the picture ("Gulab jamun in a brass bowl with saffron"), not just the keyword. Alt text helps accessibility and Google Images, and AI images have no other text for Google to read.
- **Required metadata:** title, publisher, publisher logo and poster image. Google won't show a story without them.
- **Sitemap:** include story URLs in your XML sitemap and link to your stories from normal pages on your site, such as a "Stories" section or related articles.
- **Speed:** small WebP images (Step 2), few fonts, no heavy embeds.

**Content rules (the ones that get stories filtered out)**

- **One idea per page.** If a page needs more than about **2–3 seconds** to read, split it.
- **Keep text short.** Google's [content policy](https://developers.google.com/search/docs/appearance/web-stories-content-policy) says a story whose pages mostly carry **more than 180 characters** of text may not be eligible. The 280-character figure is a ceiling, not a target.
- **Large text, high contrast.** White text on a dark area of the image, or dark text on a light area. Add a semi-transparent shape behind the text if the background is busy.
- **Have a narrative.** Give the story a clear opening, a middle and an ending. Google's policy excludes stories that lack a "binding theme or narrative structure", and incomplete stories that force readers to click elsewhere to get the point.
- **Don't make it an ad.** Stories whose only goal is to sell a product break the policy.
- **Use AI images honestly.** Don't use them to fake real news events or real people. Google's February 2026 Discover core update moved further away from sensational, clickbait content, so "viral" in 2026 means genuinely useful or delightful, not shocking.

## Web Stories monetization in the US, India and Brazil

**Ads (AdSense or Ad Manager).** Google's Web Stories for WordPress plugin supports AdSense and Ad Manager directly. Turn them on under the plugin's **Monetization** setting and enter your publisher ID and ad slot.

The runtime then places full-screen ads **between pages** automatically, so you don't position them yourself. Your AdSense account must already be approved for your site.

**Affiliate links.** Google allows affiliate links as long as they are a **minor part** of the story. Use one useful link on the final page or on a single product page, as a **page attachment** (the swipe-up panel) or a button, not a link on every page.

**Drive readers to your site.** The last page of the story can link to the full article. Your normal on-site ads, newsletter sign-up or product pages then do the earning.

**What to expect in each market:**

- **United States:** fewer readers per story than India, but ad rates are usually far higher. Finance, tech and shopping niches pay best, and affiliate links for tools and gadgets fit naturally.
- **India:** the biggest reach, especially for Hindi, festival, cricket and recipe stories. Ad rates per view are lower, so earnings come from volume. That is why a daily AI-image workflow matters here.
- **Brazil:** a large, engaged Discover audience for entertainment, football and lifestyle. Stories must be in Portuguese. Affiliate links to Brazilian marketplaces convert better than links to international stores.

## Web Stories examples you can copy

![Three phones showing 9:16 Web Story pages made with AI images: a curry recipe, wireless earbuds at sunset, and a floodlit football stadium](https://images.omyimage.com/omyimage/blog/7b0f69b7-ebbf-45ef-9e70-44eb3f434d26.webp)

- **Recipe (India):** "5 Navratri Vrat Recipes in 15 Minutes". A cover, five dish pages with one ingredient line each, and a final page linking to the full recipe post.
- **Tech tip (US):** "7 iPhone Settings to Change Today". One setting per page over a clean AI visual, with the last page linking to the full guide.
- **Football (Brazil):** "5 Jogadas que Mudaram o Brasileirão". One moment per page, written in Portuguese, with a recap on the final page.

Each one has a clear start, one idea per page and an ending that sends readers somewhere useful. That is the structure Google's policy asks for.

## A 30-minute workflow you can repeat daily

1. Write the 10–20 lines of the story first, one line per page.
2. Generate one AI image per line in a single consistent style, in portrait.
3. [Upscale](/upscale-image) anything under 1080 px wide.
4. [Crop](/crop-image) to 9:16, then [resize](/resize-image) to 1080 × 1920.
5. [Convert to WebP](/convert-to-webp) or [compress](/compress-image) every page.
6. Make the 3:4 poster and check the square logo.
7. Assemble the story in your editor and add text in the editor, not in the images.
8. Write the title, description and alt text, then publish and inspect the URL in Search Console.

## FAQ

### What size should images be for Google Web Stories?

Use 9:16 portrait images at 1080 × 1920 pixels for the pages. The poster image must be 3:4 and at least 640 × 853 px, and the publisher logo square and at least 96 × 96 px.

### What is the 9:16 image size in pixels?

1080 × 1920 px (1080x1920) is the standard. 720 × 1280 is also 9:16, but it looks softer on large phones.

### How many pages should a Web Story have?

Most successful stories have 10 to 20 pages, which is enough for a real beginning, middle and end without dragging. [Google News Initiative training](https://newsinitiative.withgoogle.com/resources/trainings/how-to-make-a-good-web-story/) suggests 9 to 15 for news stories.

### Can I use AI-generated images in Web Stories?

Yes. Google judges a story by its quality, not by how the images were made. Avoid low-resolution or stretched images, keep text out of the images, and don't use AI to fake real events or people.

### Are Google Web Stories still worth it in 2026?

Yes, especially if your readers are in the US, India or Brazil, where Google says Discover is most likely to show stories. Stories also appear as single results in Google Search in every region where Search is available.

### What is MakeStories?

MakeStories is a browser-based Web Story editor. It publishes to your own domain or exports the story files, and it has a WordPress plugin.

### How do Web Stories make money?

Through full-screen AdSense or Ad Manager ads inserted between pages automatically, a small number of affiliate links, and the traffic you send from the story to your own website.

## Start your first story today

You don't need a camera, a design team or a paid subscription. You need a clear story, a set of AI images and a few minutes of image prep. Google's rules on 9:16 shape, sharpness and speed are where most AI-made stories fail, and they are the easiest part to fix.

**Bookmark [oMyImage](/)** and keep [Resize Image](/resize-image), [Crop Image](/crop-image) and [Compress Image](/compress-image) open while you build. They're free, they need no account, and they work right in your browser.
