
import './App.css'
import Nav from "./components/NavComponent";
import Main from './components/MainComponent';
import About from './components/AboutComponent';
import Skills from './components/SkillsComponent';
import Project from './components/ProjectComponent';
import Contact from './components/ContactComponent';
import UpButton from './components/UpComponent';
function App() {

  return (
    <>
      <Nav></Nav>
      <Main></Main>
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
      <UpButton></UpButton>
    </>
  )
}

export default App
