import React from 'react'
import "./IIIustration.css";
import illustration from "../Assets/Illustration/Rectangle 2.3.png"
import pageflow5 from "./../Assets/pageflow5.png";
import instagramhidden from "./../Assets/Social/instagram (hidden).png";
import instagramuse from "./../Assets/Social/instagram (in use).png";
import twitterhidden from "./../Assets/Social/twitter (hidden).png";
import animation from "../Assets/art/animation1.png"
const IIIustration = () => {
  
  return (
<div className="div-container-body-iustration">
  <div className='container-illus'>
      <input className='input-illu' type='radio' name='slider' id='s1' checked/>
      <input className='input-illu' type='radio' name='slider' id='s2'  />
      <input className='input-illu' type='radio' name='slider' id='s3' />
      <input className='input-illu' type='radio' name='slider' id='s4' />
      <input className='input-illu' type='radio' name='slider' id='s5' />

     <div className='cards-illus'>
      <label htmlFor="s1" id='slide1'>test 
        <div className='card'>
          <div className='image'> 
          <img src={animation} alt='DENEME' />
            {/* <div className='dots'>
              <div></div>
              <div></div>
              <div></div>            
            </div> */}
          </div>
        </div>
      </label>
      <label for="s2" id='slide2'>test
        <div className='card'>
          <div className='image'> 
          <img src={animation} alt='DENEME' />
            {/* <div className='dots'>
              <div></div>
              <div></div>
              <div></div>            
            </div> */}
          </div>
        </div>
      </label>
      <label for="s3" id='slide3'>test
        <div className='card'>
          <div className='image'> 
          <img src={animation} alt='DENEME' />
            {/* <div className='dots'>
              <div></div>
              <div></div>
              <div></div>            
            </div> */}
          </div>
        </div>
      </label>
      <label for="s4" id='slide4'>test
        <div className='card'>
          <div className='image'> 
          <img src={animation} alt='DENEME' />
            {/* <div className='dots'>
              <div></div>
              <div></div>
              <div></div>            
            </div> */}
          </div>
        </div>
      </label>
      <label for="s5" id='slide5'>test
        <div className='card'>
          <div className='image'> 
          <img src={animation} alt='DENEME' />
            {/* <div className='dots'>
              <div></div>
              <div></div>
              <div></div>            
            </div> */}
          </div>
        </div>
      </label>
    </div>
 </div>  
</div>
  )
}

export default IIIustration
