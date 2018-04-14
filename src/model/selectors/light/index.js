import { createSelector } from 'reselect'

export const lightSelector = () => createSelector(
  state => state.get('light'),
  light => light,
)

export default undefined
