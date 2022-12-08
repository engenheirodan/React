type Props = {
	text: string;
	clickFn: (txt: string) => void;
}

export const Botao = ({ text, clickFn }: Props) => {

	const handleClick = () => {
	clickFn("Frase");
	}

	return (
        <button onClick={handleClick}>{text}</button>
	);
}

/* Codigos para aplicar o  botao usando herança e aplicando mais componentes
Primeiro foi construido um arquivo Botao.tsx e depois aplicado Props

const App = () => {
  let texto = "Clicar no botao";

const botaoEventAction = (txt: string) => {
alert("Frase do App: " + txt);

}
return (
<div>
<Botao text={texto} clickFn={botaoEventAction} />
</div>

  );

}

*/
