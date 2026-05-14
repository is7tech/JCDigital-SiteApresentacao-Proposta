import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Adicione a linha abaixo, substituindo pelo nome EXATO do seu repositório no GitHub
  base: '/JCDigital-SiteApresentacao-Proposta/' 
});
