import { useContext } from "react"
import { LanguageContext } from "../Context/LanguageContext"
import profil from "../../public/profile-2.png";
function Profile() {

const {veri} = useContext(LanguageContext);

  return (
    <>
     <section className="flex bg-mavi h-[552px] relative justify-center items-center dark:bg-laci">

     <div className="absolute sm:h-full">
      <h1 className="text-5xl font-bold text-yesil pb-6 sm:hidden">{veri.profile}</h1>

      <div className="h-[290px] w-[960px] flex gap-8 md:w-[700px] md:gap-2 lm:w-[490px] sm:flex-col sm:items-center">
        <div className="div1 w-1/3 flex flex-wrap flex-col gap-5 md:gap-1 ">
          <h2 className="text-white font-inter text-3xl md:text-xl">{veri.title1}</h2>
          <ul class="flex flex-col gap-5 md:gap-2">
  <li className="flex items-start">
    <span className="mr-5 font-inter text-yesil md:mr-1 md:text-sm">{veri.dateofbirth}</span>
    <span className="text-white md:text-sm">29.03.1996</span>
  </li>
  <li className="flex items-start">
    <span className="mr-20 font-inter text-yesil md:mr-1 md:text-sm">{veri.city}</span>
    <span className="text-white md:text-sm">İzmir</span>
  </li>
  <li className="flex items-start">
    <span className="mr-6 font-inter text-yesil md:mr-8 md:text-sm">{veri.edu} <br /> {veri.case}</span>
    <span className="flex items-start text-white md:text-sm">Ege Üniversitesi Bilgisayar ve Öğretim Tek. Eğitimi Lisans,2018</span>
  </li>
  <li className="flex items-start">
    <span className="mr-8 font-inter text-yesil md:mr-2 md:text-sm" >{veri.tercih}<br /> {veri.rol}</span>
    <span className="flex items-start text-white md:text-sm">Frontend, UI</span>
  </li>
</ul>


          
          
          
        </div>
        <img className="div2 rounded-lg w-1/3 shadow-lg md:h-[200px] sm:w-[150px] lm:h-[250px] sm:hidden"  src={profil} alt="" />
        <div className="div3 w-1/3 flex flex-col gap-5 ">
          <h2 className="text-white font-inter text-3xl md:text-xl">{veri.title2}</h2>
          <p className="text-white md:text-sm">{veri.paragraf}</p>
        </div>
        
      </div>
     </div>
      

    
    </section>
    </>
  )
}

export default Profile