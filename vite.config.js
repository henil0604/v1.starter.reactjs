import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

const DEFINE_PATH = () => {
  const ROOT = path.resolve(__dirname);

  const RESOLVE = {
    resolve: {
      alias: [
        { find: '~', replacement: path.resolve(ROOT) },
        { find: '@', replacement: path.resolve(ROOT, 'src') },
        { find: '@assets', replacement: path.resolve(ROOT, 'src', 'assets') },
        { find: '@css', replacement: path.resolve(ROOT, 'src', 'assets', 'css') },
        { find: '@modules', replacement: path.resolve(ROOT, 'src', 'modules') },
        { find: '@components', replacement: path.resolve(ROOT, 'src', 'components') },
        { find: '@pages', replacement: path.resolve(ROOT, 'src', 'pages') },
      ],
    }
  }

  return RESOLVE;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  ...DEFINE_PATH(),
})
