import { Hero, Navbar } from "./sub"

const Header = () => {
  return (
    <header className="lg:h-screen">
      <Navbar />
      <Hero />
    </header>
  )
}

export default Header