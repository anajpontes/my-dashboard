import Footer from "./components/Footer"
import Header from "./components/Header"
import Menu from "./components/Menu"
import { Routes, Route } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage.jsx'
import ListPage from './pages/ListPage.jsx'
import NewItemPage from "./pages/NewItemPage"
import NotFoundPage from "./pages/NotFoundPage"



function App() {
 
  return  (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
    <Header/>
    <main className="grid flex-1 grid-cols-1 content-start gap-4 p-4
    md:grid-cols-2 md:gap-6 md:p-6
    xl:grid-cols-[15rem_1fr_1fr] xl:p-8"
    >
      <Menu/>
      <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/lista" element={<ListPage />} />
          <Route path="/novo" element={<NewItemPage />}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    </main>
    <Footer />
    </div>
  )
}

export default App
