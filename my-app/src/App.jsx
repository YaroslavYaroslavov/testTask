import BookFinder from "./components/BookFinder.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

function App() {
  return (
    <ErrorBoundary>
      <BookFinder />
    </ErrorBoundary>
  );
}

export default App;
