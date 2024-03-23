# Responsive-Header-Section
## UseState Hook
The useState hook is a built-in hook that allows functional components to manage state. It's commonly used when you need to add state to a component without converting it into a class.

Here's a basic overview of how to use useState:

import React, { useState } from 'react';

function ExampleComponent() {<br>
  // Here, we declare a state variable called "count" and a function to update it, "setCount".<br>
  // We initialize the state with a value of 0.<br>
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* When the button is clicked, we call setCount to update the state */}<br>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default ExampleComponent;
