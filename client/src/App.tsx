import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "./components/ThemeProvider"
import { Home } from "./pages/Home"
import { queryClient } from "./lib/queryClient"

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
        <Home />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App