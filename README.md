# React setInterval Memory Leak

This repository demonstrates a common mistake when using `setInterval` within a React component's `useEffect` hook: forgetting to include a cleanup function to prevent memory leaks.

## Bug

The `bug.js` file contains a component that uses `setInterval` to update a counter every second. However, it lacks a cleanup function within the `useEffect` hook. This means that every time the component mounts, a new interval is created, leading to multiple intervals running simultaneously and consuming unnecessary resources, eventually resulting in a memory leak.

## Solution

The `bugSolution.js` file provides a corrected version of the component.  It includes a cleanup function returned from the `useEffect` hook. This function clears the interval when the component unmounts or when the dependencies change, preventing the memory leak.

## How to reproduce

1. Clone this repository.
2. Navigate to the `bug` directory.
3. Run `npm install`.
4. Run `npm start`.
5. Observe the behavior of the component and how it leads to memory leak. Then switch to the solution and observe that the leak is fixed.