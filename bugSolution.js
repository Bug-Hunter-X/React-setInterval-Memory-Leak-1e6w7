```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    setIntervalId(id);
    return () => clearInterval(id); // Cleanup function
  }, [count]); // Add count to the dependency array

  return <div>Count: {count}</div>;
}

export default MyComponent;
```