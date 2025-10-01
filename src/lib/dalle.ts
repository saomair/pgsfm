import { type FlatDallePrompt } from './dallePrompts';

export type DalleModel = 'gpt-image-1';

export interface GenerateDalleImageOptions {
  prompt: string;
  size?: '1024x1024' | '1792x1024' | '1024x1792';
  quality?: 'standard' | 'hd';
  user?: string;
  model?: DalleModel;
}

export interface GenerateDalleImageResult {
  /** Base64 encoded PNG image returned by OpenAI. */
  imageBase64: string;
  /** Prompt rewritten by the model, if provided. */
  revisedPrompt?: string;
  /** Size value echoed back from the API. */
  size: string;
}

const OPENAI_IMAGE_ENDPOINT = 'https://api.openai.com/v1/images/generations';

export class MissingOpenAiKeyError extends Error {
  constructor() {
    super('OPENAI_API_KEY environment variable is not set.');
    this.name = 'MissingOpenAiKeyError';
  }
}

export class OpenAiImageError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'OpenAiImageError';
  }
}

/**
 * Calls the OpenAI Images API (DALL·E/gpt-image-1) and returns the base64 image payload.
 * Consumers are responsible for decoding and persisting the image.
 */
export async function generateDalleImage({
  prompt,
  size = '1024x1024',
  quality = 'standard',
  user,
  model = 'gpt-image-1'
}: GenerateDalleImageOptions): Promise<GenerateDalleImageResult> {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new MissingOpenAiKeyError();
  }

  const response = await fetch(OPENAI_IMAGE_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model,
      prompt,
      size,
      quality,
      user,
      response_format: 'b64_json'
    })
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new OpenAiImageError(
      `OpenAI image generation failed with status ${response.status}: ${errorBody}`
    );
  }

  const json = (await response.json()) as {
    data: Array<{ b64_json: string; revised_prompt?: string }>;
  };

  if (!json.data?.length) {
    throw new OpenAiImageError('OpenAI image generation succeeded but returned no image data.');
  }

  const [{ b64_json: b64Json, revised_prompt: revisedPrompt }] = json.data;

  return {
    imageBase64: b64Json,
    revisedPrompt,
    size
  };
}

export function resolvePresetFromFileName(
  prompt: FlatDallePrompt
): {
  categoryFolder: string;
  relativePath: string;
} {
  const categoryFolder = prompt.category;
  const relativePath = `images/ai-generated/${categoryFolder}/${prompt.fileName}`;

  return {
    categoryFolder,
    relativePath
  };
}
