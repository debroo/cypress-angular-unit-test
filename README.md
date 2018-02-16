## NOT WORKING YET

[![Greenkeeper badge](https://badges.greenkeeper.io/bahmutov/cypress-angular-unit-test.svg)](https://greenkeeper.io/)

If you run `$(npm bin)/cypress open` and click on "spec.ts" it does not show any errors, meaning a component has been bootstrapped. Not the HTML looks very weird and nothing is running. I assume the Angular code is running in the spec iframe and cannot cross into the app iframe where the component has been mounted.

![Some HTML but no action](images/html-but-no-action.png)

See [cypress/integration/spec.ts](cypress/integration/spec.ts) for mounting code.

## Working

I have successfully used this mounting approach to test components in other frameworks.

- https://github.com/bahmutov/cypress-vue-unit-test
- https://github.com/bahmutov/cypress-hyperapp-unit-test
- https://github.com/bahmutov/cypress-svelte-unit-test
- https://github.com/bahmutov/cypress-react-unit-test
