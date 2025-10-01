# DALL·E Brand Rules

These guidelines keep OpenAI DALL·E outputs consistent with the PGS FM Ltd brand and the wider UK security & facilities sector. Follow them whenever you generate or edit imagery for the website.

## 1. Brand Positioning
- **Audience** – UK corporate, retail, healthcare, and public-sector decision makers.
- **Tone** – Professional, trustworthy, service-led. Avoid overly futuristic or dystopian styles.
- **Colour language** – Subtle greens, deep blues, and neutral greys. Steer clear of neon palettes or saturated reds.
- **Lighting** – Clean, well-lit environments. Prefer natural daylight or balanced artificial lighting; avoid dramatic shadows.

## 2. People & Uniforms
- Use diverse, realistic UK talent across age, gender, and ethnicity.
- Uniforms should feature **high-visibility jackets**, navy tactical trousers, boots, and discrete company branding (no real third-party logos).
- Include ID badges, radios, or professional equipment sparingly to reinforce authenticity.
- Ensure faces feel approachable with confident but friendly expressions.

## 3. Environments & Context
- Situate scenes in **recognisable UK settings**: London skylines, Canary Wharf, modern shopping centers, NHS-style facilities, etc.
- Interiors should be tidy, contemporary, and believable for corporate or public-sector clients.
- Exterior shots should avoid US-style architecture, palm trees, or overly futuristic skylines.
- Keep props and signage generic unless official approval exists.

## 4. Prompt Crafting Checklist
- Start with the base prompts in `src/lib/dallePrompts.ts` or `public/images/ai-generated/README.md`.
- Add brand modifiers such as “professional”, “modern London”, “authentic UK”, “clean composition”.
- Specify shot type and composition (e.g. “wide cinematic composition”, “portrait orientation”).
- State wardrobe details ("high-vis jacket", "company logo shirt").
- Mention post-processing intent if needed (“suitable for cropping to 16:9 hero banner”).
- Never reference real-world brands, law-enforcement insignia, or copyrighted logos.

## 5. Generation Workflow
1. Set `OPENAI_API_KEY` in `.env.local`.
2. Use `npm run generate-dalle -- --category=<category>` or target individual files with `--file=<name.jpg>`.
3. For ad-hoc concepts, POST to `/api/dalle` with a custom prompt.
4. Export the returned base64 payload as PNG, crop/resize to the target dimensions, and save as high-quality JPEG.
5. Optimise each asset (TinyPNG, Squoosh) before committing.

## 6. Post-Processing Rules
- **Cropping** – Maintain the subject’s focus when trimming from 1792×1024 or 1024×1792 to site-specific sizes.
- **Colour grading** – Ensure skin tones stay natural; keep any green/blue overlays subtle.
- **Retouching** – Remove artefacts (extra limbs, distorted props) and fix uniform inconsistencies.
- **Compression** – Target 150–250 KB per hero/banner image, sub-120 KB for cards where possible.

## 7. Compliance & Ethics
- Do not depict vulnerable groups (children, identifiable patients) without explicit approval.
- Avoid realistic depictions of weapons or aggressive postures.
- Represent security staff as supportive partners, not confrontational figures.
- Ensure all imagery meets UK Equality Act guidance for representation and accessibility.

## 8. Approval Checklist
Before publishing an image:
- [ ] Matches the correct filename and target dimensions.
- [ ] Aligns with the relevant prompt and sector context.
- [ ] Uniforms, equipment, and backgrounds feel authentically UK.
- [ ] Passed colour and compression checks.
- [ ] Logged in the asset tracker (if applicable) with generation date and prompt revisions.

Keep this document updated if brand direction or regulatory considerations evolve. For new scenarios, add draft prompts here before updating the codebase.
