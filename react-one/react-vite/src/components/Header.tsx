
/**Utilizando as props */
type Props = {
  title?: string;
}

export const Header = ({ title }: Props) => {
  return (
    <header>
    <h1>{title}</h1>
     <hr />
   
    </header>
    );

}
/*** como o codigo fica no App.tsx 
 
const App = () => {
return ( 
<div>
  <Header title='Este é um modelo ' />
  Ola mundo
</div>

  );
}


export default App;

*/

/*export const Header = () => {
  return (
    <header>
    <h1>Ola mundo eu sou o index.htl</h1>
     <hr />
   
    </header>
    );

}
/*** como o codigo fica no App.tsx 

const App = () => {
  return ( 
  <div>
    <Header />
    Ola mundo
  </div>
  
    );
  }
  
  
  export default App;
  */