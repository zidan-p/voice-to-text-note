/// <reference types="vite-plugin-svgr/client" />

declare module "*.png" {
  const value: unknown;
  export = value;
}
declare module "*.svg"
declare module "*.jpg"
declare module "*.gif";