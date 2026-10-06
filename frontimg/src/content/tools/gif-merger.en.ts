import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /gif-merger. The page <title> and meta description stay in
 * lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "gif-merger",
  locale: "en",
  name: "GIF Merger",
  tagline:
    "Join several animated GIFs into one: put them in order and they play one after another, each frame with its own timing. Free, in your browser.",
  category: { id: "edit", label: "Edit" },

  intro:
    "Sometimes one GIF isn't enough: a reaction needs its follow-up, a tutorial comes in three short clips, or a before-and-after works better as one animation. oMyImage's GIF Merger joins them. Add two or more GIFs, put them in the order you want, choose how GIFs of different sizes should fit, and merge. The result plays every GIF in turn, keeps every frame's timing, and loops as one animation.",

  sections: [
    {
      heading: "Order and timing",
      id: "order",
      body: [
        "The GIFs play from the top of the list to the bottom. Use the arrows beside each GIF to move it up or down, the cross to remove it, and Add GIFs to bring in more. The list shows each GIF's size, frame count and length, so you can plan the sequence.",
        "Every frame keeps its own duration, so each part plays at its original speed, pauses included. The merged GIF loops as a whole: after the last GIF ends, the first one starts again.",
      ],
    },
    {
      heading: "GIFs of different sizes",
      id: "sizes",
      body: [
        "A GIF has one size for all its frames, so the merged GIF needs one too. Choose the size of the first GIF, the largest or the smallest. GIFs that already have that size are copied pixel for pixel; the others are scaled to fit.",
        "Fit inside keeps each frame whole and adds borders where the shapes differ — transparent, or a colour you pick. Fill and crop scales each frame to cover the whole output and trims what sticks out, so there are no borders but the edges of the odd-shaped GIFs are lost.",
      ],
    },
    {
      heading: "Colours and file size",
      id: "colours",
      body: [
        "One GIF can use only 256 colours at a time. When the GIFs you merge share a small set of colours and the same size, those colours are kept exactly. Otherwise one palette of 256 colours is chosen from all of them; GIFs with very different colours, such as a cartoon and a photo clip, may lose a little colour detail.",
        "The merged file is roughly the size of the GIFs added together. If it is too big for where it is going, run it through the GIF Compressor or the GIF Resizer afterwards.",
      ],
    },
    {
      heading: "Ideas",
      id: "ideas",
      body: [
        "Turn three short screen recordings into one step-by-step tutorial. Chain a question GIF and its punchline. Put a before clip and an after clip in one animation. Rejoin the parts of a long GIF that you split with the GIF Cutter, in a new order. Make a reel of the best moments from several reaction GIFs.",
        "The merger joins GIFs in time, one after another. To trim each part first, use the GIF Cutter; to change the pace of one part, use the GIF Speed Changer before merging.",
      ],
    },
    {
      heading: "Loops and boomerangs",
      id: "loops",
      body: [
        "The merged GIF loops forever as one animation, even if one of the parts was set to play only once. That allows a simple trick: merge a GIF with a reversed copy of itself, made with Reverse GIF, and it plays forwards and then backwards. Merging the same GIF twice doubles its length without changing its speed — handy when a site asks for a minimum duration.",
      ],
    },
    {
      heading: "Privacy",
      id: "privacy",
      body: [
        "Every GIF is decoded and the merged GIF is written entirely in your browser. Nothing is uploaded, and nothing is kept after you close the page.",
      ],
    },
  ],

  howToTitle: "How to merge GIFs",
  steps: [
    { title: "Add the GIFs", description: "Select two or more animated GIFs from your computer or phone." },
    { title: "Set the order", description: "Move GIFs up or down, then choose the size and how other sizes fit." },
    { title: "Merge and download", description: "Click Merge GIFs, watch the result and download it." },
  ],

  features: [
    { icon: "layers", title: "One after another", description: "Every GIF plays in turn, each frame with its own timing." },
    { icon: "swap_vert", title: "Any order", description: "Reorder, add or remove GIFs before merging." },
    { icon: "lock", title: "Nothing uploaded", description: "Merged entirely in your browser." },
  ],

  faqs: [
    { q: "How do I combine GIFs into one?", a: "Add two or more GIFs, put them in order and click Merge GIFs. They play one after another in the result." },
    { q: "Can I change the order?", a: "Yes. Use the up and down arrows next to each GIF." },
    { q: "Do the GIFs keep their speed?", a: "Yes. Every frame keeps its original duration." },
    { q: "What if the GIFs are different sizes?", a: "Choose the output size, then Fit inside to keep frames whole with borders, or Fill and crop to avoid borders." },
    { q: "Can the borders be transparent?", a: "Yes, by default. You can also pick a colour." },
    { q: "Will the colours change?", a: "Not when the GIFs share a few colours. Very different GIFs share one 256-colour palette, which may soften colours slightly." },
    { q: "How big will the merged GIF be?", a: "About the total of the GIFs' sizes. The GIF Compressor can shrink it afterwards." },
    { q: "Can I put GIFs side by side?", a: "No — this tool joins GIFs in time, one after another." },
    { q: "How many GIFs can I merge?", a: "As many as your device's memory allows; a few dozen short GIFs is no problem." },
    { q: "Are my GIFs uploaded?", a: "No. Everything happens in your browser." },
    { q: "Does it work on a phone?", a: "Yes, in a mobile browser." },
    { q: "Is it free?", a: "Yes. No account, no watermark and no limit." },
  ],

  security:
    "Your GIFs are merged entirely in your browser. Nothing is uploaded, stored or tracked.",
};

export default content;
