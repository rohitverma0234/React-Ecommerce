# React-Router-dom
## 1. Installation
npm install react-router-dom

## 2. Router Component:
react-router-dom provides several components, but the most important one is <BrowserRouter>, which you'll wrap around your application. This component uses HTML5 history API to keep your UI in sync with the URL.

## 3. Route Component:
You define routes using the <Route> component. Each <Route> component checks the current location’s pathname and renders the corresponding component if the path matches. You can specify paths using path prop and the component to render using component prop.

## 4. Link Component:
Instead of traditional anchor tags (<a>), you'll use <Link> component from react-router-dom to navigate between different routes in your application. It prevents full page reloads and provides a smoother user experience.
