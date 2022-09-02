import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { HookApp } from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { Layout } from './components/05-useLayoutEffect/Layout';
// import { Memorize } from './components/06-memos/Memorize';
// import { MemoHook } from './components/06-memos/MemoHook';
// import { CallbackHook } from './components/06-memos/CallbackHook';
// import { Father } from './components/07-tarea-memo/Father';
import { TodoApp } from './components/08-useReducer/TodoApp'
// import { MainApp } from './components/09-useContext/MainApp';
// "test": "jest --watchAll"ç
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<TodoApp />)
