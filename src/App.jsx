import React from "react"
import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import About from "./pages/about"
import Contact from "./pages/contact"
import Index from "./pages/index"
import Layout from "./components/Layout"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Index />} />
            <Route path="about" element={<About/>} />
            <Route path="contact" element={<Contact/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
