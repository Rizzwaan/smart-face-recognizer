import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmmit}) => {
  return(
   <div>
     <p className = 'f3'>
     	{'This Magic Brain will detect your face picture, Get a Try:'}
     </p>
      <div className ='center'  >
        <div className='center form pa4 br3 shadow-5'>
     	<input type='text' className = 'f3 pa4 w-70 center' onChange = {onInputChange}/>
     	<button
     	 className = ' w-30 grow f4 link ph3 pv2 dib white bg-blue'
         onClick={onButtonSubmmit}
     	 >Detect</button>
     	</div>
      </div>
   </div>
       

  );
}

export default ImageLinkForm;