/* Pra trabalhar com varios componentes primeiro cria numa pasta dentro:
>> componentes
 > nome do arquivo ex: HEADER
depois vc importa esse arquivo dentro do APP.tsx

PASTA COMPONENTES > HEADER.TSX
export const Header = () => {
    return (
        <header>
        <h1> Titulo da página </h1>
        <hr />
        </header>
    );
}
teste123.
*/
import { Header } from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
          Ola mundo
    </div>
  );
}

export default App;
