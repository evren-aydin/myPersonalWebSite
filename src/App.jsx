import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import LanguageContextProvider from "./Context/LanguageContext";
function App() {

const [theme,setTheme]= useState(
  localStorage.getItem("theme")==="light"?"dark":"light"
);

useEffect(()=>{
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
},[])

const changeTheme=()=>{

setTheme(theme==="light"? "dark":"light");

if(theme==="dark"){
  document.documentElement.classList.add("dark")
  localStorage.setItem("theme","dark");
}else{
  document.documentElement.classList.remove("dark")
  localStorage.setItem("theme","light");
}

}

  return (
    <div className="overflow-x-hidden">
    <LanguageContextProvider>
     <Header changeTheme={changeTheme} theme={theme}/>
      <Skills/>
     <Profile/>
     <Projects/>
     <Footer/>
     </LanguageContextProvider>
    </div>
  )
}
 
export default App
