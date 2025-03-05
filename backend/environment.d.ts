declare global {
  namespace NodeJS {
    interface ProcessEnv {
      N0DE_ENV: "development" | "production";
      PORT?: string;
      TEST_ATLAS_URI: string;
      PROD_ATLAS_URI: string;
      PRIVATE_KEY: string;
    }
  }
}
export {};
