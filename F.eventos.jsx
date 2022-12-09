/* evento de clique igual javascript*/

const App = () => {

    const handleClick = () => {
        alert("Clicou");
    };

  return (
    <div>
       <button onClick={handleClick}>Clique Aqui</button>
    </div>
  );
}

export default App;