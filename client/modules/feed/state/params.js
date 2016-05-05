import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer'

export const depsMapper = (context, actions) => ({
  buttontext: "Default button text",
  flags: actions.feed.paramsflags(),
  context: () => context,
})

export default (component) => composeAll(
  useDeps(depsMapper)
)(component);
