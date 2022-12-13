import { BrowserRouter } from "react-router-dom";
import { FormsProvider } from "./App/context/forms.context";
import { AppRoutes } from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";

export function App() {
  return (
    <BrowserRouter>
      <FormsProvider>
        <AppRoutes />
        <GlobalStyles />
      </FormsProvider>
    </BrowserRouter>
  )
}
