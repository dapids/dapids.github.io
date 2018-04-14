import { fromJS } from 'immutable'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from 'model/reducers'

const middlewares = applyMiddleware()

const composeEnhancers = composeWithDevTools({})

export default (initialState = {}) => createStore(
  reducers,
  fromJS(initialState),
  composeEnhancers(middlewares),
)
