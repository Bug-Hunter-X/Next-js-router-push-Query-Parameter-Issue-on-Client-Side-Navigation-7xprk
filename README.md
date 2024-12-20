# Next.js router.push Query Parameter Issue

This repository demonstrates a bug encountered when using the `router.push` method in Next.js to navigate to a route with query parameters. The problem is specifically observed during client-side navigation, where the redirect might fail or the query parameters may be lost.

## Bug Description

The `bug.js` file contains a simple component that attempts to redirect to a route with query parameters using `router.push`. In certain scenarios, this redirection either doesn't occur at all, or the query parameters are omitted from the URL after navigation.

## Solution

The solution, demonstrated in `bugSolution.js`, addresses the issue by correctly handling the asynchronous nature of `router.push` and ensuring proper query parameter handling. The updated code provides a reliable and consistent way to manage redirects with query parameters, resolving the bug observed in `bug.js`.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the Next.js development server.
4. Observe the behavior of the component's redirect functionality in `bug.js` and `bugSolution.js` to see the difference in behavior.
