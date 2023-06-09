import React from 'react'
import {createRoot} from 'react-dom/client';
import './index.css'
import App from './App'
import {store} from './app/store'
import {Provider} from 'react-redux'

import {worker} from './api/server'

// Wrap app rendering so we can wait for the mock API to initialize
async function start() {
    // Start our mock API server
    await worker.start({onUnhandledRequest: 'bypass'})

    const container = document.getElementById('root') as HTMLElement;
    const root = createRoot(container); // createRoot(container!) if you use TypeScript

    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>
    )
}

start().then();
