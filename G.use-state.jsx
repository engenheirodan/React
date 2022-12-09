
/* O gancho useState permite que você tenha variáveis 
é uma função especial
 que assume o estado inicial como um argumento
  e retorna uma matriz de duas entradas. */

import { useState } from "react";

const App = () => {
    const [name, setName] = useState("Boniecy");

    const handleClick = () => {
        setName('Pedro');
    };

    return (
        <div>
            Meu none é {name}.
            <button onClick={handleClick}>Clique Aqui</button>

        </div>
    );
}

export default App;