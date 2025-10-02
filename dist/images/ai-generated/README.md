# AI-Generated Images Directory

This directory contains the OpenAI DALL·E outputs that power the visual system for the PGS FM Ltd website. Every asset is generated with the `gpt-image-1` model using curated prompts that match the site's security- and facilities-management brand identity.

> 📘 The same prompt catalogue is codified in `src/lib/dallePrompts.ts` and documented for designers in `branding/dalle-rules.md`.

## Folder Structure

```
/ai-generated/
├── hero/           # Hero section images (target 1920x800)
├── card/           # Service card images (target 1200x900)
├── team/           # Team member photos (target 1200x1500)
├── banner/         # Banner images (target 2400x900)
└── blog/           # Blog post covers (target 1600x900)
```

## Workflow Overview

1. **Prepare credentials** – add your API key to `.env.local`:
   ```bash
   echo "OPENAI_API_KEY=sk-..." >> .env.local
   ```
2. **Generate images** – use the CLI helper or call the `/api/dalle` endpoint (details below).
3. **Post-process** – crop or resize the output to the target dimensions, compress, and export as high quality JPEG.
4. **Integrate** – place the files in the correct subfolder and confirm the UI renders via `/demo-ai-images`.

Because DALL·E currently produces `1024` and `1792` sized images, you will usually crop the long edge to reach the exact aspect ratios listed above.

## CLI Helper (`npm run generate-dalle`)

Run the generator from the project root:

```bash
npm run generate-dalle -- --category=hero
```

Key flags:

- `--category=<hero|card|team|banner|blog>` – generate every prompt in a single category.
- `--file=hero-security-team.jpg` – generate one or more specific files (comma-separated).
- `--dry-run` – preview the prompts that would be sent without calling OpenAI.

Outputs are written to `public/images/ai-generated/<category>/<fileName>`. Review each image, crop to the target size, and optimise with a lightweight compressor (TinyPNG, Squoosh, or similar).

If `OPENAI_API_KEY` is missing, the script aborts with guidance. The prompts and recommended output sizes come directly from `src/lib/dallePrompts.ts` to keep tooling and documentation aligned.

## API Endpoint (`/api/dalle`)

The Next.js route provides two capabilities:

- `GET /api/dalle` – returns the full prompt catalogue.
- `GET /api/dalle?category=hero&fileName=hero-security-team.jpg` – returns a single preset.
- `POST /api/dalle` – generates an image.

Example request using a preset:

```bash
curl -X POST http://localhost:3000/api/dalle \
  -H "Content-Type: application/json" \
  -d '{
    "category": "hero",
    "fileName": "hero-security-team.jpg"
  }'
```

Example request with a custom prompt:

```bash
curl -X POST http://localhost:3000/api/dalle \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Professional UK security control room, high-vis jackets, modern London skyline outside",
    "size": "1792x1024"
  }'
```

Responses include `imageBase64` (PNG), the `revisedPrompt` supplied by OpenAI, and metadata showing which preset was used. Decode the base64 payload and export a JPEG once you have cropped the asset to the correct dimensions.

## Prompt Catalogue (19 Images)

The prompts below mirror the structure used by the CLI.

### Hero Images (generate at `1792x1024`, crop to 1920x800)
- **hero-security-team.jpg** – Professional UK security team in London, wearing high-visibility jackets, company logo shirts, cargo trousers, and sturdy boots, standing in front of modern London office building, wide cinematic composition, professional lighting, confident poses, authentic UK security officer attire
- **hero-security-services.jpg** – UK security officer patrolling modern London commercial building at night, wearing high-vis jacket, company polo shirt, cargo trousers, sturdy boots, carrying torch, surveillance cameras visible, dramatic lighting, authentic UK security atmosphere, professional London setting
- **hero-default.jpg** – Professional UK security and facilities management team in modern London office lobby, security officers in high-vis jackets and company uniforms, facilities staff in professional attire, wide cinematic composition, authentic UK business environment, clean contemporary architecture

### Service Card Images (generate at `1024x1024`, crop to 1200x900)
- **card-security-services.jpg** – UK security officer monitoring surveillance cameras in modern London control room, wearing high-vis jacket, company shirt, cargo trousers, multiple screens showing camera feeds, authentic UK security control room, professional atmosphere
- **card-facilities-management.jpg** – UK facilities management team cleaning modern London office space, professional cleaning uniforms, modern cleaning equipment, sanitisation supplies, authentic UK facilities management, professional maintenance setting
- **card-cleaning-services.jpg** – Professional UK cleaning staff in London healthcare facility, wearing clean uniforms, sanitisation equipment, medical-grade cleaning supplies, authentic UK healthcare cleaning standards, professional environment
- **card-default.jpg** – Professional UK security and facilities management services overview, modern London office building with security presence, UK security officers in high-vis uniforms, authentic UK corporate style

### Team Photos (generate at `1024x1792`, crop to 1200x1500)
- **team-john-smith.jpg** – Professional UK business headshot of middle-aged man, security industry executive, wearing dark suit with company badge, confident expression, clean neutral background, authentic UK professional lighting, high quality portrait photography
- **team-sarah-johnson.jpg** – Professional UK business headshot of woman, facilities management director, wearing smart business suit with company lanyard, professional makeup, clean background, authentic UK professional style, high quality portrait photography
- **team-michael-brown.jpg** – Professional UK business headshot of man, operations manager, wearing high-vis security jacket over smart shirt, company badge visible, confident professional expression, clean background, authentic UK security professional style
- **team-emma-wilson.jpg** – Professional UK business headshot of woman, quality assurance manager, wearing smart corporate attire with company ID badge, professional appearance, clean background, authentic UK business style
- **team-default.jpg** – Professional UK business headshot, security industry professional, wearing smart corporate attire with company lanyard, neutral expression, clean background, authentic UK professional style

### Banner Images (generate at `1792x1024`, crop to 2400x900)
- **banner-healthcare.jpg** – Modern UK healthcare facility with security presence, London hospital building, professional medical environment, UK security officers in high-vis jackets and company uniforms, wide cinematic composition, authentic UK healthcare security atmosphere
- **banner-retail.jpg** – UK retail store with security presence, London shopping centre environment, security officer patrolling in high-vis jacket and company uniform, modern retail setting, wide cinematic composition, authentic UK retail security
- **banner-corporate.jpg** – Corporate office building in London business district, Canary Wharf or City of London skyline, security and facilities management presence, modern skyscraper architecture, UK security officers in professional uniforms, wide cinematic composition, authentic UK corporate style
- **banner-contact.jpg** – Professional UK contact centre or office reception in London, modern business environment, customer service atmosphere, security officer in high-vis uniform at reception, wide cinematic composition, welcoming UK business environment
- **banner-default.jpg** – Professional UK security and facilities management overview, modern London office complex, business district skyline, UK security officers in high-vis uniforms, wide cinematic composition, authentic UK professional business style

### Blog Cover Images (generate at `1792x1024`, crop to 1600x900)
- **blog-default.jpg** – Professional UK security and facilities management blog cover, modern London office environment, business professional setting with security officer in high-vis uniform, cinematic composition, authentic UK professional corporate style, clean editorial layout

## File Naming & Status

- ✔ Directory structure and prompt registry implemented
- ⏳ Images need to be generated, cropped, and compressed
- ⏳ Integration testing pending after assets are available

When exporting, retain the exact filenames listed above so that `getImageUrl` resolves assets automatically.
