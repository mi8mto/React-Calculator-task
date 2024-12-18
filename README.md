deploy https://mi8mto.github.io/React-Calculator-task/

# React + Vite

init

1. npm install gh-pages --save-dev
2. в package.json в scripts после "dev" add
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist",
3. в vite.config add
   base: '/папку и именем GitHub',
4. git add .
5. git commit -m "comment"
6. git push
7. npm run deploy
8. settings gh-pages

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
