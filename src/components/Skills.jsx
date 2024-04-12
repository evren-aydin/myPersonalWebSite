import { useContext } from "react"
import { LanguageContext } from "../Context/LanguageContext"

function Skills() {
const { veri } = useContext(LanguageContext);

  return (
    <>
     <section className="skills flex h-[600px] bg-white relative justify-center items-center dark:bg-[#252128]">

      <div className="absolute h-[430px] w-[960px] flex gap-36 md:w-[750px] lm:w-[400px] lm:gap-24">
        <h1 className="text-5xl lm:text-3xl font-bold text-[#4832d3] ">{veri.skills}</h1>
        <div className=" flex flex-wrap w-[500px] justify-between lm:gap-2">
          <div className="flex gap-4 sm:gap-1">
          <img className="h-[100px] w-[100px] lm:w-[70px] lm:h-[70px] rounded " src="../../public/Skills/JS.png" alt=" resim" />
          <h2 className="py-10 font-inter text-[#777777] dark:text-white lm:text-sm lm:py-5">JAVASCRIPT</h2>
          </div>

          <div className="flex gap-4 sm:gap-1">
          <img className="h-[100px] w-[100px] lm:w-[70px] lm:h-[70px] rounded " src="../../public/Skills/REACT.png" alt=" resim" />
          <h2 className="py-10 font-inter text-[#777777] dark:text-white lm:text-sm lm:py-5">REACT</h2>
          </div>

          <div className="flex gap-4 sm:gap-1">
          <img className="h-[100px] w-[100px] lm:w-[70px] lm:h-[70px] rounded " src="../../public/Skills/REDUX.png" alt=" resim" />
          <h2 className="py-10 font-inter text-[#777777] dark:text-white lm:text-sm lm:py-5">REDUX</h2>
          </div>

          <div className="flex gap-4 sm:gap-0">
          <img className="h-[100px] w-[100px] lm:w-[70px] lm:h-[70px] rounded mr-2 " src="../../public/Skills/NODE.png" alt=" resim" />
          <h2 className="py-10 font-inter text-[#777777] dark:text-white lm:text-sm lm:py-5">NODE</h2>
          </div>

          <div className="flex gap-4 sm:gap-1">
          <img className="h-[100px] w-[100px] lm:w-[70px] lm:h-[70px] rounded " src="../../public/Skills/VS CODE.png" alt=" resim" />
          <h2 className="py-10 font-inter text-[#777777] dark:text-white lm:text-sm lm:py-5">VS CODE</h2>
          </div>
          
          <div className="flex gap-4 sm:gap-1">
          <img className="h-[100px] w-[100px] lm:w-[70px] lm:h-[70px] rounded mr-1 " src="../../public/Skills/FIGMA.png" alt=" resim" />
          <h2 className="py-10 font-inter text-[#777777] dark:text-white lm:text-sm lm:py-5">FIGMA</h2>
          </div>
        </div>
      </div>
      

    </section>
    </>
  )
}

export default Skills