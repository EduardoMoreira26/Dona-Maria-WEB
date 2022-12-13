import { Route, Routes } from "react-router-dom";
import FormCreate from "./App/Pages/FormCreate/FormCreate.page";
import FormsTable from "./App/Pages/FormsTable/FormsTable.page";
import Home from "./App/Pages/Home/Home.page";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/forms" element={<FormsTable />} />
      <Route path='/form/create' element={<FormCreate />} />
    </Routes>
  )
}

