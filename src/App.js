import Status from './components/Status.js';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback.js';
function App() {
  return (
    <div>
      <h1>Spacetraders</h1>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Status isGreen />
        {/* ... more components go here */}
      </ErrorBoundary>
    </div>
  );
}

export default App;
