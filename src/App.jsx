import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginP from "./pages/login/LoginP"
import CategoriesP from "./pages/categories/CategoriesP"
import ProductsP from "./pages/products/ProductsP"

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/">
            <Route index element={<LoginP />} />
            <Route path="categories" element={<CategoriesP />} />
            <Route path="categories/:id/product" element={<ProductsP />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
