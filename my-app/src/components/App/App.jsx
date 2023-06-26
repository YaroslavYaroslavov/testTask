import "../App/styled.css";

import BookFinder from "../BookFinder/BookFinder.jsx";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary.jsx";

function App() {
  return (
    <ErrorBoundary>
      <BookFinder />
    </ErrorBoundary>
  );
}

export default App;
