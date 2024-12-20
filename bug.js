```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // Redirect to a route with query parameters
    router.push({ pathname: '/my-route', query: { id: '123' } });
  };

  return (
    <button onClick={handleClick}>Go to My Route</button>
  );
}

export default MyComponent;
```