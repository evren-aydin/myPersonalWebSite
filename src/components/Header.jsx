import { useContext } from "react"
import "../Header.css"
import { LanguageContext } from "../Context/LanguageContext"
import resim from "../../public/profile-resim.png";
import moon from "../../public/moon.svg";
import github from "../../public/github.png";
import linkedin from "../../public/linkedIn.png";


function Header({changeTheme,theme}) {

const { language,setLanguage,handleSubmit,getTexts,veri } = useContext(LanguageContext);
  
  return (
    <>
    <header className="flex h-[671px] relative justify-center w-full">
      
      <div className="w-[955px] h-[375px] absolute justify-between flex-wrap flex flex-col mt-40 md:w-96 md:mr-96 lm:w-60 lm:ml-36 sm:pl-20 sm:block ">
      <h1 className="text-5xl font-bold pt-20 text-yesil lm:text-3xl sm:font-semibold sm:pb-3">{veri.welcome_message} <br /> {veri.welcome_message2}</h1> 
      <p className="text-xl text-white font-inter lm:text-lg sm:pb-2">{veri.about_me} <br /> {veri.about_me2} </p>

        <div className="flex flex-row gap-2">
      <a href="https://github.com/evren-aydin" target="_blank" className="rounded bg-white sm:pr-8 p-2 px-4 text-[#3730a3] font-inter flex items-center gap-1"><img src={github} alt="linkedIn buton" /> Github</a>
      <a href="https://www.linkedin.com/in/evrennaydinn2535/" target="_blank" className="rounded sm:pr-8 bg-white p-2 px-4 text-[#3730a3] font-inter flex items-center gap-1"><img src={linkedin} alt="linkedIn buton" />LinkedIn</a>
        </div>
      
        <img className="h-[375px] rounded-lg sm:h-[300px] sm:mt-20 sm:w-56 sm:hidden" src={resim} alt=" resim" />
      

      </div>
      

      <div className="w-2/3 bg-mavi dark:bg-[#171043] static">
        <div className="flex justify-between pt-10">
          <h2 className="pl-72 pt-10 font-inter text-4xl font-bold text-yesil md:pl-16 sm:mt-14">evren</h2>
        <a href="" 
        className="font-inter text-yesil pr-6 dark:text-[#bab2e7]"
        onClick={handleSubmit}
        >{language === 'tr' ? 'TÜRKÇE' : 'İNGİLİZCE'}<span className="dark:text-[#777777]">'YE GEÇ</span></a>
        </div>
        
        

      </div>
      <div className="w-1/3 bg-yesil dark:bg-gri static">
  
          <div className="darkmode flex flex-row gap-1 pt-10">

       
          <input
            type="checkbox"
            id="darkmode-toggle"
            onChange={changeTheme}
            ></input>
            <label for="darkmode-toggle"><img src={moon} alt="Label Icon" /></label>
        
          
        
      <p className="font-inter font-bold text-mavi dark:text-[#d9d9d9]">{theme.toUpperCase()} MODE</p>
      </div>
            
          
      </div>
    </header>
    
    </>
  )
}

export default Header