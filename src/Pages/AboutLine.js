import React from 'react'
import "./AboutLine.css";
const AboutLine = () => {
  return (
    <div className='container-Aline'>
        <div className='right-line'>
            <p class="indented-paragraph"> ARTMOC CONDUCTS A METUCULOUS WORKİNG PROCESS THAT IS NECESSARY TO BRING YOUR DREAM PROJECT TO LUFE, MAKİNG İTS CREATIONS ACCESİBLE TO EVERYONE. ALL YOU HAVE TO DO IS ALLOW THE ARTIST TOCREATE!</p>
        </div>
        <div className= 'right-line-none'></div>
    </div>
  )
}

export default AboutLine

// import React, { useState, useEffect } from 'react';
// import "./AboutLine.css";
// import "./AboutLine.css";
// const AboutLine = () => {
//     const [isVisible, setIsVisible] = useState(false);
  
//     useEffect(() => {
//       const handleScroll = () => {
//         const windowHeight = window.innerHeight;
//         const scrollPosition = window.scrollY;
  
//         // Bu sayfanın görüntülenmesini istediğiniz aralığı belirleyin
//         const startScroll = windowHeight * 1; /* sayfa aralığının başlangıcı */
//         const endScroll = windowHeight * 2;/* sayfa aralığının sonu */
  
//         if (scrollPosition >= startScroll && scrollPosition <= endScroll) {
//           setIsVisible(true);
//         } else {
//           setIsVisible(false);
//         }
//       };
  
//       window.addEventListener('scroll', handleScroll);
//       return () => {
//         window.removeEventListener('scroll', handleScroll);
//       };
//     }, []);
  
//     return (
//       <div className='container-Aline'>
//         <div className={isVisible ? 'right-line' : 'right-line-none'}>
//           <p className="indented-paragraph">
//             ARTMOC CONDUCTS A METICULOUS WORKING PROCESS THAT IS NECESSARY TO BRING YOUR DREAM PROJECT TO LIFE, MAKING ITS CREATIONS ACCESSIBLE TO EVERYONE. ALL YOU HAVE TO DO IS ALLOW THE ARTIST TO CREATE!
//           </p>
//         </div>
//         <div className={isVisible ? 'right-line-none' : 'right-line'}></div>
//       </div>
//     );
//   }
//   export default AboutLine