/* Props é passar as propriedades dos componentes.
>> Pasta Header.tsx
type Props = {
    title?: string; /*esse acento ? é um required 

}
export const Header = ({ title }: Props) => {
    return (
        <header>
        <h1>{title}</h1>
        <hr />
        </header>
    );
}
*/
import { Header } from './components/Header';

const App = () => {
  return (
    <div>
      <Header title="Este é um texto"/>
    </div>
  );
}

export default App;