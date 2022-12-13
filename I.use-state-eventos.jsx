import { useState } from 'react';

const boniecy = () =>{
   const [show, setShow] = useState(false);
    
   const handleClick = () => {
        setShow( !show);
   }

    return( 
        <div>
            <button onClick={handleClick}>{show ? 'Ocultar' : 'Mostrar'} </button>
            {show &&
             <div>
                Bla Bla Bla...
              
              </div>
            }
        </div>
    );
} 
export default boniecy;