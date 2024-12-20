```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = async () => {
    // Redirect to a route with query parameters
    const path = { pathname: '/my-route', query: { id: '123' } };
    await router.push(path);
  };

  return (
    <button onClick={handleClick}>Go to My Route</button>
  );
}

export default MyComponent;
```