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

Google Web Stories are full-screen, tap-through pages that Google can show as their own result in Search and as large visual cards in Discover. AI Overviews now answer plenty of questions before anyone scrolls down to the blue links, yet Web Stories still get a spot of their own.

[Google's own documentation](https://developers.google.com/search/docs/appearance/enable-web-stories) says Discover shows these cards most often in the United States, India and Brazil. All three are mostly mobile markets, which is where Web Stories do best.

This guide shows you how to build a story from AI images and how to get those images right, since the images are where most AI-made stories fall apart.

## Web Stories image size: 9:16 aspect ratio (1080x1920) and other specs

The standard Web Stories image size is a 9:16 aspect ratio image of **1080 × 1920 pixels** (often written 1080x1920): 1080 px wide and 1920 px tall. At that size the picture fills a phone screen with no letterboxing.

Some of the numbers below are Google's rules and some are just good practice, so the last column tells you which is which.

| What | Value | Source |
|---|---|---|
| Image shape | **9:16 portrait, 1080 × 1920 px** | Industry standard for full-screen mobile |
| Poster image | At least **640 × 853 px**, 3:4 | Google (required) |
| Publisher logo | At least **96 × 96 px**, square, not transparent | Google (required) |
| Title | Under 90 characters, ideally **under 70** | Google |
| Text per page | About **280 characters** max. A story where most pages have **more than 180** may not be eligible | Google content policy |
| Video per page | Under 15 seconds, 60 seconds max | Google |
| Story length | **10 to 20 pages** is the common sweet spot | Publisher practice |
| Image weight | Roughly **100 to 200 KB** per page as WebP | Rule of thumb for fast mobile loads |

## Why Web Stories + AI images is the 2026 hack

Every page of a Web Story needs a strong visual. At 10 to 20 pages per story, custom photography or video quickly costs more than a single story can earn back, and most creators quit after a handful.

AI image generators take that cost out. You can make a matching set of visuals for a whole story in under an hour, which makes publishing a story every day realistic. And steady publishing is what builds Discover visibility.

Each of the three big markets has its own niches where the format works well. In the United States that means tech tutorials ("5 iPhone settings to change today"), personal finance explainers and travel lists. Product round-ups work too.

India leans toward recipes and festival stories (Diwali, Holi, Navratri, Onam). Cricket does well there too, along with astrology and exam or job updates. Stories in Hindi and other regional languages have real search demand of their own there.

Brazil is strong for lifestyle and celebrity news, with football and beauty close behind, plus quick recipes. Write those in Brazilian Portuguese, because English stories rarely travel there.

### Making Web Stories in Hindi and Portuguese

Type Hindi or Portuguese text in the story editor, never inside the image, so Google can read it. Set the story's language (`hi` or `pt-BR`) and pick a font that supports the script, such as Noto Sans Devanagari or Mukta for Hindi.

The short-text rule still applies. Devanagari vowel signs count as characters, so a Hindi line hits the limit sooner than it looks like it should.

## Step-by-step: building a Web Story from scratch

### Step 1: Generate your visuals

Any generator will do: Midjourney, ChatGPT's image generation, Google Gemini, or a free one like Microsoft Designer or Leonardo's free tier. Two habits save you work later.

- Ask for a portrait image in the prompt. In Midjourney, add `--ar 9:16`; in other tools, write "vertical 9:16 portrait image".
- Keep the subject in the middle and leave empty space at the top and bottom of the frame, since your text goes there and the story's own controls sit at the edges.

Don't ask the generator to write words into the image, because AI-generated text is often misspelled. Google also advises against burned-in text. Text that's part of the picture can't resize for different screens, and it can clash with the story's own text layer, so add your words later in the editor.

Generate every page in one consistent style, with the same lighting and palette and the same character descriptions. Twenty pages in twenty different styles reads like a random gallery.

### Step 2: Optimize and format the images

AI images almost never come out of the generator ready for a Web Story. Many tools default to a 1:1 square, and ChatGPT's tall option is 1024 × 1536, which is 2:3 rather than 9:16.

Resolution is the next problem. Midjourney's 9:16 output is about 816 × 1456, smaller than the 1080 × 1920 full-screen standard, and it looks soft once it's stretched across a large phone.

Then there's file weight.

A raw PNG straight from a generator can be 2 to 6 MB, and twenty of those will make a story crawl on a mobile connection.

Google's [Web Stories content policy](https://developers.google.com/search/docs/appearance/web-stories-content-policy) rules out "stretched out or pixelated" media, and a slow story loses readers before page two. You can fix both with free tools on oMyImage, in this order.

![A blurry, pixelated square AI image of a festival dance next to the same scene as a sharp 9:16 image filling a phone screen](https://images.omyimage.com/omyimage/blog/5fd69d46-8a0c-4abf-bb5b-3634c106ecc4.webp)

> **How to convert an image to 9:16 online:** open the [9:16 Aspect Ratio Image Converter](/9-16-aspect-ratio-image). It's already set to 1080 × 1920. You can crop to fill and drag the frame over what matters, pad with a colour, or fill the gaps with a blurred copy of the picture. It runs free in your browser.

1. Upscale anything too small. Run any image narrower than 1080 px through the [AI Image Upscaler](/upscale-image) at 2×. It rebuilds edges and texture instead of just enlarging pixels. Faces and hair stay sharp on a 6-inch screen. For a one-click "make it HD" pass, use [Image to HD](/image-to-hd).
2. Crop to 9:16. If the image isn't portrait yet, open the [9:16 Aspect Ratio Image Converter](/9-16-aspect-ratio-image) and press the crop button on the image. The frame is locked to 9:16, so all you do is drag it over the part that matters. That beats letting the story editor guess what to cut. For a wide picture you'd rather keep whole, choose **Blur fill** instead.
3. Download at exactly 1080 × 1920. The same converter saves every image at that size, and a batch comes as one ZIP. With identical dimensions on every page, nothing jumps or letterboxes as readers tap through.
4. Compress or convert to WebP. Of the four steps, this one does the most for speed. [Convert to WebP](/convert-to-webp) usually cuts file size by a wide margin with no visible difference, or you can set the quality yourself in [Compress Image](/compress-image).

If you want a hard ceiling, [Compress Image to 200KB](/compress-image-to-200kb) keeps every page under that limit automatically.

> Crop, Resize, Compress and Convert to WebP all run in your browser. Your images aren't uploaded, there's no account to make and nothing to pay.
>
> The AI Upscaler is the one exception. Its model is too heavy for a browser tab, so it runs on oMyImage's server and deletes results within an hour. It's free for 10 images a day, with no sign-up.

A quick warning about WebP on Apple devices: Safari can display it but can't create it from a web page. On an iPhone or a Mac, do the WebP step in Chrome, Edge or Firefox, or fall back to JPG.

You also need a poster and a logo. The **poster image** is the thumbnail Google shows, and every story needs one. Crop your strongest page to 3:4 in [Crop Image](/crop-image) and resize it to 960 × 1280, comfortably above Google's 640 × 853 minimum.

The publisher logo has to be square, at least 96 × 96 px, on a solid background. A 512 × 512 PNG from [Resize Image](/resize-image) works everywhere.

### Step 3: Assemble the story

Which editor you use depends on your site. On WordPress, Google's free [Web Stories for WordPress](https://wp.stories.google/) plugin gives you a drag-and-drop editor with templates and handles the AMP markup and metadata for you, sitemap included.

Anywhere else, [MakeStories](https://makestories.io/) is a browser-based story editor that publishes to your own domain or exports the files. It has a WordPress plugin too.

Canva is good for designing pages, but a Canva design on its own isn't a Web Story on your domain. Export the pages as images and assemble them in one of the editors above.

Upload your 1080 × 1920 WebP files as full-bleed backgrounds, then add the text in the editor rather than in the image. One short sentence per page is plenty, or a heading plus one line. A Web Story must live on your own domain and be valid AMP. Before you share it, run it through the URL Inspection tool in Search Console.

## Google Web Stories SEO: 2026 rules

Web Stories are web pages, so ordinary SEO applies.

A few rules matter more than usual, though, mostly because a story has so little text for Google to work with and so much riding on images and load speed on a phone over mobile data.

### Technical checklist

- Keep the title descriptive and under 70 characters, with the main keyword near the start. "10 Diwali Sweets You Can Make in 20 Minutes" beats "Diwali Special!!!".
- Write a meta description of 150 to 160 characters that says what the reader will learn. Most editors have a field for it.
- Every story should point to itself with a self-referencing canonical tag. The WordPress plugin and MakeStories add it automatically; check it if you hand-code.
- Give every image alt text that describes what's actually in the picture ("Gulab jamun in a brass bowl with saffron"), not just the keyword. AI images have no other text for Google to read, so alt text carries both accessibility and Google Images.
- Fill in the required metadata (title, publisher, publisher logo, poster image). Google won't show a story without it.
- List story URLs in your XML sitemap, and link to your stories from normal pages on your site, such as a "Stories" section or related articles.
- For speed, use the small WebP images from Step 2. Keep fonts to a minimum and skip heavy embeds.

### Content rules that get stories filtered out

Put one idea on each page. If a page takes more than about 2 to 3 seconds to read, split it.

Keep the text short. Google's [content policy](https://developers.google.com/search/docs/appearance/web-stories-content-policy) says a story whose pages mostly carry more than 180 characters may not be eligible. Treat the 280-character figure as a ceiling you stay well under.

Use large, high-contrast text: white on a dark area of the image, or dark on a light one. If the background is busy, put a semi-transparent shape behind the words.

Give the story a narrative that runs from a clear opening to a real ending. Google's policy excludes stories that lack a "binding theme or narrative structure", along with incomplete stories that make readers click elsewhere to get the point. Stories whose only goal is to sell a product break the policy as well.

Finally, never use AI images to fake real news events or real people. Google's February 2026 Discover core update moved further away from sensational, clickbait content. A "viral" story in 2026 is one people find useful or delightful, and shock value now works against you.

## Web Stories monetization in the US, India and Brazil

Google's Web Stories for WordPress plugin supports AdSense and Ad Manager directly. Turn ads on under the plugin's **Monetization** setting and enter your publisher ID and ad slot. From then on the runtime places full-screen ads between pages by itself, so you never position them. Your AdSense account must already be approved for your site.

Affiliate links are allowed as long as they stay a minor part of the story. Put one useful link on the final page or on a single product page, as a page attachment (the swipe-up panel) or a button. A link on every page crosses the line.

The third route is sending readers to your own site.

The last page can link to the full article, and your normal on-site ads, newsletter sign-up or product pages do the earning from there.

What you can expect differs a lot by market. US stories get fewer readers than Indian ones, but ad rates are usually far higher; finance and tech niches pay best, along with shopping, and affiliate links for tools and gadgets fit naturally.

India offers the biggest reach, especially for Hindi stories about festivals, cricket or recipes. Ad rates per view are lower, so earnings come from volume, and that's exactly why a daily AI-image workflow matters there.

Brazil has a large, engaged Discover audience for entertainment and football, plus lifestyle. Stories must be in Portuguese, and affiliate links to Brazilian marketplaces convert better than links to international stores.

## Web Stories examples you can copy

![Three phones showing 9:16 Web Story pages made with AI images: a curry recipe, wireless earbuds at sunset, and a floodlit football stadium](https://images.omyimage.com/omyimage/blog/7b0f69b7-ebbf-45ef-9e70-44eb3f434d26.webp)

- A recipe story for India, "5 Navratri Vrat Recipes in 15 Minutes": a cover, five dish pages with one ingredient line each, and a final page linking to the full recipe post.
- A tech tip for the US, "7 iPhone Settings to Change Today": one setting per page over a clean AI visual, with the last page linking to the full guide.
- A football story for Brazil, "5 Jogadas que Mudaram o Brasileirão": one moment per page, written in Portuguese, with a recap on the final page.

All three start clearly, keep one idea per page and end by sending readers somewhere useful, which is the structure Google's policy asks for.

## A 30-minute workflow you can repeat daily

1. Write the 10 to 20 lines of the story first, one line per page.
2. Generate one AI image per line in a single consistent style, in portrait.
3. [Upscale](/upscale-image) anything under 1080 px wide.
4. [Convert](/9-16-aspect-ratio-image) each image to 9:16 at 1080 × 1920.
5. [Convert to WebP](/convert-to-webp) or [compress](/compress-image) every page.
6. Make the 3:4 poster and check the square logo.
7. Assemble the story in your editor and add text in the editor, not in the images.
8. Write the title, description and alt text. After publishing, inspect the URL in Search Console.

## FAQ

### What size should images be for Google Web Stories?

Use 9:16 portrait images at 1080 × 1920 pixels for the pages. The poster image must be 3:4 and at least 640 × 853 px, and the publisher logo square and at least 96 × 96 px.

### What is the 9:16 image size in pixels?

The standard is 1080 × 1920 px (1080x1920). 720 × 1280 is also 9:16, but it looks softer on large phones.

### How many pages should a Web Story have?

Most successful stories run 10 to 20 pages, enough for a real beginning, middle and end without dragging. [Google News Initiative training](https://newsinitiative.withgoogle.com/resources/trainings/how-to-make-a-good-web-story/) suggests 9 to 15 for news stories.

### Can I use AI-generated images in Web Stories?

You can. Google judges a story by its quality, not by how the images were made. Just avoid low-resolution or stretched images, keep text out of the pictures, and don't use AI to fake real events or people.

### Are Google Web Stories still worth it in 2026?

They are, especially if your readers are in the US, India or Brazil, where Google says Discover is most likely to show stories. Stories also appear as single results in Google Search in every region where Search is available.

### What is MakeStories?

MakeStories is a browser-based Web Story editor. It publishes to your own domain or exports the story files, and it has a WordPress plugin.

### How do Web Stories make money?

Mostly through full-screen AdSense or Ad Manager ads that the runtime inserts between pages. A small number of affiliate links and the traffic you send from the story to your own website add to that.

## Start your first story today

You don't need a camera, a design team or a paid subscription to start. A clear story, a set of AI images and a few minutes of image prep will do. The 9:16 shape, sharpness and speed rules trip up most AI-made stories, and they're also the easiest part to get right.

Bookmark [oMyImage](/) and keep [Resize Image](/resize-image), [Crop Image](/crop-image) and [Compress Image](/compress-image) open in a tab while you build your first one. They're free, need no account and run right in your browser.
