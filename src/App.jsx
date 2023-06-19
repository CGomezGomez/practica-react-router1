import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import Router from "./router/Router";
import Menu from "./components/Menu/Menu";



const App = () => {
	return (
	<>
		<GlobalStyles/>
		<BrowserRouter>
			<Menu />
			<Router />
		</BrowserRouter>
	</>
	);
};

export default App;