import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './App'

declare const module: any

ReactDOM.render(<App />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
