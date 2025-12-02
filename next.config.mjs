import withPWA from 'next-pwa';
import path from 'path';
import { fileURLToPath } from 'url';

const pwaConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  // Disable PWA in development to avoid caching issues
  disable: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig} */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  // Ensure Next infers the correct workspace root when multiple lockfiles exist.
  // This silences the "inferred your workspace root" warning and prevents
  // incorrect tracing across parent directories.
  outputFileTracingRoot: __dirname,
};

export default pwaConfig(nextConfig);