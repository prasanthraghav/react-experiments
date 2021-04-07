import { QueryClient, QueryClientProvider } from "react-query";
import "./styles.css";
import APITest from "./APITest";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <APITest />
      </div>
    </QueryClientProvider>
  );
}
