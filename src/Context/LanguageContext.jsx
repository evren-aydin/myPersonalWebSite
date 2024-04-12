import { createContext, useEffect, useState } from 'react';
import tr from './tr.json';
import en from './en.json';
import axios  from 'axios';

export const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {

  const getDataFromLocalStorage = () => {
  const data = localStorage.getItem('myData');
  return data ? JSON.parse(data) : null;
};
    
    const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || "tr"; // Eğer localStorage'da dil değeri yoksa, varsayılan olarak 'tr' kullan
  });

    const [veri, setVeri] = useState(() => {
    const savedData = getDataFromLocalStorage();
    return savedData || en; // Eğer localStorage'da veri yoksa, varsayılan olarak 'en' kullan
  });

    const getTexts = () => {
    return language === 'tr' ? tr : en;
  }
  //localStorage kaydetme
const saveDataToLocalStorage = (data) => {
  localStorage.setItem('myData', JSON.stringify(data));
};

  const handleSubmit = (e) => {
    e.preventDefault();
    setLanguage(prevLanguage => prevLanguage === 'tr' ? 'en' : 'tr');

    axios.post('https://6616d250ed6b8fa4348172a0.mockapi.io/api/language', getTexts()).
    then((response)=>{
      
      setVeri(response.data);
      console.log("veriler",veri);

    }).
    
    catch((error)=>{console.log(error)})
 
  }

  useEffect(() => {
  saveDataToLocalStorage(veri);
}, [veri]);

useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);


  return (
    <LanguageContext.Provider value={{language,setLanguage,handleSubmit,getTexts,veri}}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;