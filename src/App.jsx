
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { Invoices } from "./pages/Invoices";
import { Subscriptions } from "./pages/Subscriptions";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="subscriptions" element={<Subscriptions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
