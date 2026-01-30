import './style.css'
//---requerir un modulo
//import './topic/01-basic-types'
//import './topic/02-object-interface'
//import './topic/04-tarea-types.ts'
//import './topic/05-basic-destruturing.ts'
//import "./topic/06-function-destructuring.ts"
//import "./topic/07-import-export"
//import './topic/08-classes'
//import './topic/09-generics'
//import "./topic/10-decoradores"
import "./topic/11-optional-chaining"

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Hello Vite + TypeScript!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
console.log('Hello Vite + TypeScript! AJAJA');