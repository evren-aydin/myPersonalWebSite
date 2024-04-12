import { useContext } from "react"
import { LanguageContext } from "../Context/LanguageContext"
import workintech from "../../public/Workintech.png";
import journey from "../../public/Journey.png";
function Projects() {

const {veri}= useContext(LanguageContext);
  return (
    <>
    
      <section className="flex bg-yesil h-[999px] relative justify-center items-center dark:bg-gri">

     <div className="absolute flex gap-8 flex-col ">
      <h1 className="text-5xl font-bold text-mavi dark:text-yesil sm:text-center">{veri.projects}</h1>

      <div className="h-[360px] w-[960px] flex gap-8 bg-white rounded-xl shadow-xl dark:bg-[#2a2727] md:w-[700px] lm:w-[490px] sm:justify-center ">
        <img className="div2 rounded-lg w-1/3 shadow-lg sm:hidden"  src={workintech} alt="" />
        <div className="div3 w-2/3 flex flex-col gap-5 justify-center sm:items-center">
          <h2 className="text-mavi font-inter text-3xl font-bold dark:text-[#c1baed]">{veri.workintech}</h2>
          <p className="pr-9 dark:text-white sm:text-center">{veri.WJparagraf}</p>
          <div className="flex gap-3">
            <p className="bg-mavi rounded-full text-white w-20 py-1 px-5 dark:bg-[#8173da] ">react</p>
          <p className="bg-mavi rounded-full text-white w-20 py-1 px-5 dark:bg-[#8173da]">redux</p>
          <p className="bg-mavi rounded-full text-white w-20 py-1 px-5 dark:bg-[#8173da]">vercel</p>
          </div>

          <div className="flex flex-row gap-10 sm:justify-center">
            <a href="" className="underline font-bold font-inter dark:text-yesil">{veri.viewsite}</a>
            <a href="" className="underline font-bold font-inter dark:text-yesil">Github</a>
          </div>
          
        </div>
        
      </div>
      <div className="h-[360px] w-[960px] flex gap-8 bg-white rounded-xl shadow-xl dark:bg-[#2a2727] md:w-[700px] lm:w-[490px] sm:justify-center">
        <img className="div2 rounded-lg w-1/3 shadow-lg sm:hidden"  src={journey} alt="" />
        <div className="div3 w-2/3 flex flex-col gap-5 justify-center sm:items-center">
          <h2 className="text-mavi font-inter text-3xl font-bold dark:text-[#c1baed]">{veri.journey}</h2>
          <p className="pr-9 dark:text-white sm:text-center">{veri.WJparagraf}</p>
          <div className="flex gap-3">
            <p className="bg-mavi rounded-full text-white w-20 py-1 px-5 dark:bg-[#8173da] ">react</p>
          <p className="bg-mavi rounded-full text-white w-20 py-1 px-5 dark:bg-[#8173da]">redux</p>
          <p className="bg-mavi rounded-full text-white w-20 py-1 px-5 dark:bg-[#8173da]">vercel</p>
          </div>

          <div className="flex flex-row gap-10">
            <a href="" className="underline font-bold font-inter dark:text-yesil">{veri.viewsite}</a>
            <a href="" className="underline font-bold font-inter dark:text-yesil">Github</a>
          </div>
          
        </div>
        
      </div>
     </div>
      

    
    </section>
    
    </>
  )
}

export default Projects