import styled from "styled-components"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
  return (
<StyledDiv>
  <Navbar />
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Contact />
  <Footer />
</StyledDiv>
  )
};

const StyledDiv = styled.div`
background-color: var(--background-color);
 width: 100%;
 height: 100%;
 overflow: hidden;
`;
