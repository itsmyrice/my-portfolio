import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import styled from "styled-components"


export default function App() {
  return (
<StyledDiv>
  <Navbar />
  <Hero />
  <About />
  <Skills />
</StyledDiv>
  )
};

const StyledDiv = styled.div`
  background-color: var(--background-color);
width: 100%;
 height: 100%;
`;
