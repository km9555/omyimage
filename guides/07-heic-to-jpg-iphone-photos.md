# Publishing fields

| Field | Value |
|---|---|
| Title | HEIC to JPG: Why Your iPhone Photos Won't Open Everywhere (and How to Fix It) |
| Slug | heic-to-jpg-iphone-photos |
| Excerpt | Why iPhone HEIC photos fail on Windows, Chrome, some Android phones and upload forms, and how to convert HEIC to JPG on every device, or stop it happening at all. |
| Tag 1 | HEIC |
| Tag 2 | iPhone |
| Tag 3 | Guides |
| Author | oMyImage Team |
| Read time | 7 min |
| Accent | #D4855A |
| SEO title | HEIC to JPG: Why iPhone Photos Won't Open and the Fix |
| SEO description | iPhone photos save as HEIC, which Windows, Chrome and many upload forms can't open. Here's why, and how to convert HEIC to JPG or stop it for good. |

## Images

| # | File | Insert | Alt text | Prompt |
|---|---|---|---|---|
| Cover | `images/heic-to-jpg-cover.webp` (1600 × 900) | First upload, becomes the cover | An iPhone photo marked HEIC failing to open on a laptop, next to the same photo opening as a JPG | Clean modern editorial illustration, 16:9, 1600 × 900. Keep the left third empty warm cream (#F7F1E8) for a headline. In the right two thirds: a generic smartphone with no brand logo shows a bright beach photo with a small rounded tag reading "HEIC". A dotted terracotta (#D4855A) arrow leads to an open laptop whose screen shows the same photo greyed out behind a broken image icon. In front of the laptop lies the same beach photo as a crisp printed card with a tag reading "JPG" and a small green check mark. Soft studio light, gentle shadows, flat minimal style, muted palette, no other text, no logos, no people. |

Sources checked 2026-11-06: Apple support article 116944, Android supported media formats page, Can I use (HEIF, October 2026 usage data), Microsoft Store listings, Apple Mac User Guide (Finder Quick Actions), MacRumors (Convert Image needs Monterey). Keyword data: OpenSEO, US market (heic to jpg 246,000/mo, KD 41).

---

<!-- BODY: paste everything below this line into "Body (Markdown)" -->

When iPhone photos won't open, the fix is quick: convert them from HEIC to JPG, and everything from a Windows laptop to a job portal will open it. If it keeps happening, set Settings > Camera > Formats to Most Compatible and your iPhone will save new photos as JPG from then on.

Below you'll find why iPhone photos fail in so many places, the fastest fix on each device, and the two settings that stop the problem at the source.

## What a HEIC file is

HEIC is Apple's name for photos saved in HEIF, the High Efficiency Image File Format. Apple made it the camera default with iOS 11 in 2017, on the iPhone 7 and every model since.

The reason is storage. Apple's [support article on HEIF and HEVC](https://support.apple.com/en-us/116944) says the format compresses better than JPEG, so photos take less space on your phone and in iCloud while looking the same. On a phone with 20,000 pictures, that adds up fast.

Inside your own Apple world you never notice, because every Apple app reads HEIC without a hiccup. The trouble starts the moment a photo leaves.

## Why HEIC photos won't open everywhere

HEIC images are compressed with HEVC (also called H.265), the same codec used for 4K video. HEVC is patented, and [Can I use](https://caniuse.com/heif) sums up the browser side bluntly: HEIC is hard to support because it's "complex and expensive to license". So a lot of software makers have simply left it out, and that explains most of the "file not supported" messages you'll see.

Here's where it bites.

Windows is the big one. Many Windows 10 and 11 PCs can't open HEIC out of the box, and the Photos app shows an error until you add Microsoft's codec packs from the Store. More on that in the fix section.

Browsers are next. Can I use lists only Safari 17 and later as able to display HEIC. On Windows, Mac and Android, Chrome, Edge, Firefox, Opera and Samsung Internet don't, in any version. That's why a HEIC you drag into a Chrome tab on a PC just downloads instead of showing up, and why many websites reject it at upload.

Can I use puts browser support at about 15% of global users, almost all of them on Apple devices.

Android is less clear cut. Google's [list of supported media formats](https://developer.android.com/media/platform/supported-formats) shows HEIF decoding from Android 9, but marks it "device optional". So one phone might open your photo fine while another phone on the same Android version shows a blank thumbnail.

Then there are upload forms and older apps. Job portals, school systems, print shops and a long list of desktop editors still expect JPG or PNG. Some accept HEIC now, but plenty still list "JPG, PNG, PDF" and nothing else.

### Why it sometimes works and sometimes doesn't

This part confuses people most. You text a photo to a friend on Android and it arrives fine. You copy the same photo to a Windows laptop over a cable and it won't open.

Your iPhone is quietly converting in some cases and not others. Apple's support page says that when you share by AirDrop, Messages or email, the photo "might automatically be shared in a more compatible format, such as JPEG". iCloud Photos keeps the original HEIC. And a cable transfer depends on a setting most people have never looked at, which we'll get to below.

The photo is fine. It just took a different route.

## How to convert HEIC to JPG on any device

Pick the row that matches what you have in front of you, then jump to its section.

| Device | Fastest fix | Good for a big batch? |
|---|---|---|
| Windows PC | Install HEIF Image Extensions, or convert in the browser | Browser converter |
| Mac | Preview > File > Export, or Finder Quick Actions | Yes, with Quick Actions |
| iPhone | Copy Photo, paste into Files (check it saved as JPG) | No, one at a time |
| Android | Gallery share or export, if the phone opens HEIC | Browser converter |
| Any browser | Upload to an online HEIC to JPG converter | Yes, as one ZIP |

### Open or convert HEIC on a Windows PC

You have two choices: teach Windows to read HEIC, or convert the files.

To read them, install [HEIF Image Extensions](https://apps.microsoft.com/detail/9pmmsr1cgpwg) from the Microsoft Store, which is free. If photos still won't open after that, you also need [HEVC Video Extensions](https://apps.microsoft.com/detail/9nmzlz57r3t7), which Microsoft sells for $0.99. Some PCs already have it from the manufacturer. Once both are in, the Photos app opens HEIC files.

That still leaves you with HEIC files, though. The moment you email one or upload it to a site, the other person hits the same wall. If the photos are going anywhere besides your own screen, converting is the cleaner fix, and the browser method further down needs nothing installed.

### On a Mac

Macs running macOS High Sierra or later read HEIC natively, so this is easy.

For one photo, open it in Preview, choose **File > Export**, pick JPEG as the format and save. For a pile of them, select the files in Finder, right click, then choose **Quick Actions > Convert Image**. That option needs macOS Monterey or later, [according to MacRumors](https://www.macrumors.com/how-to/convert-images-macos-finder/), and Apple's [Mac User Guide](https://support.apple.com/guide/mac-help/mchl97ff9142/mac) uses an iPhone .heic turned into a .jpeg as its own example. Pick JPEG and a size, and Finder writes the copies next to the originals.

### On the iPhone itself

The tidiest trick is the Files app. In Photos, tap Share, then **Copy Photo**. Open Files, long press an empty spot in a folder, and tap **Paste**. The pasted copy is often saved as a JPG, but Apple doesn't document this and it doesn't always happen, so check the file name before you rely on it.

Fine for three photos. For fifty, you'll be tapping Paste until your thumb gives up, and a browser converter is faster.

### On Android

If your phone opens the HEIC, the gallery app may offer an export or "save as JPEG" option when you share. If the phone can't open it at all, upload it to a web converter from the browser, which works the same on a phone as on a desktop.

### In any browser, for a whole batch

This is the right choice when you have a folder of HEIC files and a deadline. Drop them into [oMyImage's HEIC to JPG converter](/heic-to-jpg), choose the quality, and download one ZIP.

One thing worth knowing: unlike our other converters, this one runs on our server. The open-source library that decodes HEIC comes with license conditions we can't meet inside a browser bundle, so we run it on the server instead. Files travel over HTTPS and get deleted within an hour. If you need a lossless copy for editing, use [HEIC to PNG](/heic-to-png), but expect a much bigger file.

## Stop your iPhone saving HEIC in the first place

If you're converting every week, two settings will save you the trouble.

### Shoot JPG from now on

1. Open **Settings** and tap **Camera**.
2. Tap **Formats**.
3. Choose **Most Compatible**.

Apple says all new photos then save as JPEG. Old photos stay HEIC, so you'll still need to convert those once.

You give up some storage, since JPG files are bigger. On a 128 GB phone that rarely matters. On a nearly full 64 GB phone it might, and then keeping HEIC and converting only what you share makes more sense.

### Fix cable transfers to a PC

This setting is a common cause of "my photos copied as .heic" complaints.

1. Open **Settings**, tap **Apps**, then **Photos**. (On iOS 17 or earlier, it's just Settings > Photos.)
2. Scroll down to **Transfer to Mac or PC**.
3. Pick **Automatic** to convert photos to a compatible format as they copy, or **Keep Originals** to send the HEIC files untouched.

If yours says Keep Originals and you use Windows, switch it.

## Does converting HEIC to JPG lose quality?

A little, in theory. The HEIC was already compressed by your phone, and saving it as JPG compresses it a second time. At high quality settings the difference is usually hard to see at normal viewing size, which is why our converter starts at a high default.

Two habits keep it that way. Always convert from the original HEIC, not from a copy that's already been edited or messaged around. And don't convert a JPG back into anything expecting it to look better, because the lost detail doesn't come back. Our [JPG vs PNG vs WebP guide](/blog/jpg-vs-png-vs-webp) explains why repeated compression wears an image down.

The JPG will also be larger than the HEIC, since you're moving to an older, less efficient format. If an upload form has a size cap, run the result through the [image compressor](/compress-image) afterwards.

## Keep your location out of shared photos

Converted files keep their EXIF data by default, and iPhone photos record where they were taken whenever Location Services is on for the Camera, which it usually is. Before you post a photo of your house to a public site, tick "Strip metadata" in the converter, or clean the file with [Remove EXIF](/remove-exif). You can check what's in a photo first with the [image metadata viewer](/image-metadata).

## Quick answers

### Can I just rename .heic to .jpg?

That doesn't work. Renaming only changes the label on the outside, while the data inside is still HEIC, so most apps will refuse the file or show an error. You need a real conversion.

### Is HEIC better than JPG?

For storing photos on an iPhone, yes: same look, smaller files. For sharing, uploading or printing, JPG wins because everything opens it.

### Why did the same photo arrive as HEIC on one device and JPG on another?

Apple doesn't publish the exact rule. It only says AirDrop, Messages and email might convert to a more compatible format, so the same photo can land as HEIC in one place and JPG in another.

## What to do right now

If you have a folder of HEIC files waiting, convert that batch today with the [HEIC to JPG converter](/heic-to-jpg). Then take 30 seconds on your iPhone: set Camera Formats to Most Compatible if you often share photos with people on Windows or Android, and set Transfer to Mac or PC to Automatic either way. You won't have to think about it again.

## Sources

- Apple Support, [Using HEIF or HEVC media on Apple devices](https://support.apple.com/en-us/116944), retrieved 2026-11-06
- Android Developers, [Supported media formats](https://developer.android.com/media/platform/supported-formats), retrieved 2026-11-06
- Can I use, [HEIF/HEIC image format](https://caniuse.com/heif), usage data for October 2026
- Microsoft Store, [HEIF Image Extensions](https://apps.microsoft.com/detail/9pmmsr1cgpwg) and [HEVC Video Extensions](https://apps.microsoft.com/detail/9nmzlz57r3t7)
- Apple, Mac User Guide, [Perform quick actions in the Finder on Mac](https://support.apple.com/guide/mac-help/mchl97ff9142/mac), retrieved 2026-11-06
- MacRumors, [How to convert images in macOS Finder](https://www.macrumors.com/how-to/convert-images-macos-finder/), retrieved 2026-11-06
