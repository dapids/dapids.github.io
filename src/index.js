import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from 'registerServiceWorker'
import App from 'App'
import createStore from 'model/store'

const store = createStore()

ReactDOM.render(<App store={store} />, document.getElementById('root'))
registerServiceWorker()
