import { BrowserRouter, Route, Routes } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Home from "./pages/Home"



export const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      {/* Root Routes */}
      <Route path="/" element={<RootLayout />}>
        <Route index={true} element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}
export default App