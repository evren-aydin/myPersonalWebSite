import { useContext } from "react"
import { LanguageContext } from "../Context/LanguageContext"
import twitter from "../../public/icons/twitter-icon.png";
import icom from "../../public/icons/icon-2.png";
import mail from "../../public/icons/mail-icon.png";
import insta from "../../public/icons/insta-icon.png";

function Footer() {
const {veri}= useContext(LanguageContext);

  return (
    <>
     <footer className="flex h-[454px] bg-white justify-center items-center dark:bg-[#252128]">
      <div className="w-[483px] h-[290px] flex flex-col items-center justify-between p-10">

        <h1 className="text-4xl font-bold text-mavi dark:text-[#8f88ff] sm:text-center">{veri.baslik}</h1>

        <p className="text-center text-lg dark:text-white">{veri.message}</p>

        <a className="underline text-mavi dark:text-[#8f88ff]" href="">evrennaydinn@outlook.com.tr</a>

        <div className="icons flex flex-row gap-3">
        
        <a href="https://twitter.com/" target="_blank">
  <img src={twitter}alt="twitter Icon"/>
</a>
<a href="https://www.google.com/" target="_blank">
  <img src={icom} alt=" Icon"/>
</a>
<a href="https://outlook.live.com/mail" target="_blank">
  <img src={mail} alt="mail Icon"/>
</a>
<a href="https://www.instagram.com/" target="_blank">
  <img src={insta} alt="insta Icon"/>
</a>

        </div>


      </div>

    </footer>
    </>
  )
}

export default Footer