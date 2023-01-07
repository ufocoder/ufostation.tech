/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly API_GITHUB_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
