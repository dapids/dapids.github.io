import { LIGHT_TOGGLED } from 'model/actions/light/names'

export default (state = false, { type }) => {
  switch (type) {
  case LIGHT_TOGGLED:
    return !state

  default:
    return state
  }
}
