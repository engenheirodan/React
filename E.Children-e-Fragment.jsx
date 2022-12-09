/*/* Children vem de filho vc usa uma props depois export os componentes abre e fecha em item separado
import { ReactNode } from 'react;
type Props = {
    legend: string;
    children: ReactNode;
}


/* Fragment abre  e fecha componenteserve para burlar os elementos só
            <>


            </>
>> Pasta Photo.tsx
type Props = {
    url: string;
    legend: string;
}

export const Photo = ({ legend, children }: Props) => {
    return (
        <div>
            {children}
            <p>{legend}</p>
        </div>
        ou fragment
        <>
            <img src={url} />
            <p>{legend}</p>
        </>
    );
}
*/
import { Header } from './components/Header';
import { Photo } from './components/Photo';

const App = () => {
  return (
    < >
      <Header title="Este é um exemplo"/>
      <Header title="Este é um texto requirido se não tive o ? poderia usar qualquer coisa"/>

      <Photo legend="Google" >
        <img src="www.google.com.br"  alt=" "/>
      </Photo>
    </ >
  );
}

export default App;