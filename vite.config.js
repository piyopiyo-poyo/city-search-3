import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import inject from '@rollup/plugin-inject';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    inject({
      process: 'process/browser',
    }),
    // 他のプラグインがあればここに追加
  ],
  resolve: {
    alias: {
      os: 'os-browserify/browser',
      path: 'path-browserify'
    }
  },
  // その他の設定があればここに追記
});
