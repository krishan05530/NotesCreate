# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Why localStorage + key naming 

Localstorage is a simple,that store the data and  persists data even after a page refresh.
Perfect for this note-taking app because it doesn't require a backend server.
have to store in the localstorage by using .setItem method , passing key and JSON.stringfy(value)
Example:
localStorage.setItem("key",JSON.stringify(notes));

Key is important to , As key is unique and use to retrive the data from LocalStorage 
example:
 const notes=localStorage.getItem("key") ? JSON.parse(localStorage.getItem("notes_key"));

## Styling Approach

using Tailwind to style the component rapidly

## Setup & run steps

