
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { Invoices } from "./pages/Invoices";
import { Subscriptions } from "./pages/Subscriptions";
import { Home } from "./pages/Home";
import { ApiUsage } from "./pages/ApiUsage";
import { Overview } from "./pages/Overview";
import { Settings } from "./pages/Settings";
import { Webhooks } from "./pages/Webhooks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/subscriptions" element={<Subscriptions />} /> 
          <Route path="/api-usage" element={<ApiUsage />} /> 
          <Route path="/overview" element={<Overview />} /> 
          <Route path="/settings" element={<Settings />} /> 
          <Route path="/webhooks" element={<Webhooks />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
