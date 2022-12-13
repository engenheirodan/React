/* renderizando listas 
primeiro foi criado um componente chamado pessoa.tsx
e depois implementado  usando */
/*components/Pessoa
criou um componentes para exibir os dados de uma pessoa
 type Props = {
    data: {
        name: string;
        age: number;
    }
 }

 export const Pessoa = ({ data }: Props) => {
    return (
     <li>
         {data.name} - {data.age} anos.
     </li>
    );
 }
 */
import { Pessoa } from "./components/Pessoa";

 const App = () => {
    let list = [
        {name: 'Bonieky', age: 90},
        {name: 'João',    age: 20},
        {name: 'Pedro',   age: 50},
    ];

    return(
        <div>
            <h2>Lista de presença</h2>
              <ul>
                {list.map((item, index)=>(
                    <Pessoa key={index} data={item} />
                ))}
              </ul>
        </div>
    );
 }
export default App;