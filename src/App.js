import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Keyboard from "./components";

function App() {
	return (
		<ChakraProvider>
			<Keyboard />
		</ChakraProvider>
	);
}

export default App;
