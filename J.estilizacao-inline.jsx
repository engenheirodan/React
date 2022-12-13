import { useState } from 'react';

const boniecy = () =>{
   const [show, setShow] = useState(false);
    
   const handleClick = () => {
        setShow( !show);
   }

    return( 
        <div>
            <button style={{ backgroundColor: '#FF0000', color: '#FFF', border: '0' }}> ola mundo </button>
           
        </div>
    );
} 
export default boniecy;