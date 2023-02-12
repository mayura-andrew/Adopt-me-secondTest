import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Details from "./Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from './store';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
    return (
      <div>

        <BrowserRouter>
        <Provider store={store}>
        <QueryClientProvider client={queryClient}>
        <header>
            <h1>Adopt Me!</h1>

        </header>
            <Routes>
                <Route path="/details/:id" element={<Details />} />
                <Route path="/" element={<SearchParams />} />
            </Routes>
        </QueryClientProvider>
        </Provider>
        </BrowserRouter>
      </div>
    
    

    );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);