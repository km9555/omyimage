# oMyImage AI workers — setup

All AI features use **free, open-source, commercially-licensed** tools. The
Node API shells out to them; if a tool isn't installed the matching route
returns HTTP 501 (everything else keeps working).

| Feature | Tool | License | Endpoint |
|---|---|---|---|
| Remove background | [rembg](https://github.com/danielgatis/rembg) + U²-Net | MIT / Apache-2.0 | `POST /api/remove-background` |
| Upscale 2×/4× | [Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN) (`realesrgan-ncnn-vulkan`) | BSD-3 / MIT | `POST /api/upscale` |
| Enhance | Real-ESRGAN | BSD-3 / MIT | `POST /api/enhance` |
| HTML → image | [Puppeteer](https://github.com/puppeteer/puppeteer) + Chromium | Apache-2.0 / BSD | `POST /api/html-to-image` |

## Install

### Background removal (rembg)

```bash
pip install "rembg[cli]"        # downloads the U²-Net model on first run
rembg --help                    # the API calls: rembg i <in> <out>
```
Override the binary path with `REMBG_BIN` in `.env`.

### Upscale / enhance (Real-ESRGAN)

Download the prebuilt `realesrgan-ncnn-vulkan` release (Windows/Linux/macOS) and
put it on your PATH (or set `REALESRGAN_BIN`). It ships the `realesrgan-x4plus`
model, used by `/api/upscale` and `/api/enhance`.

```bash
# example (Linux)
wget https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.5.0/realesrgan-ncnn-vulkan-20220424-ubuntu.zip
unzip realesrgan-ncnn-vulkan-*.zip -d realesrgan && chmod +x realesrgan/realesrgan-ncnn-vulkan
export REALESRGAN_BIN=$PWD/realesrgan/realesrgan-ncnn-vulkan
```
Env: `REALESRGAN_BIN`, `REALESRGAN_MODEL` (default `realesrgan-x4plus`).

### HTML to image (Puppeteer)

```bash
cd backimg && npm i puppeteer    # downloads a pinned Chromium
```
Kept out of the base install to keep it light; the route returns 501 until added.

## Notes

- These run on CPU/GPU and are heavier than the in-browser tools, so they're the
  natural "premium / large-file" tier.
- For production scale, move them behind a BullMQ queue (Phase 2) so requests
  don't block the API event loop.
