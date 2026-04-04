import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    handlebars({
      // Le decimos a Vite en qué carpeta estarán nuestros archivos repetibles
      partialDirectory: resolve(__dirname, 'partials'),
    }),
  ],
});