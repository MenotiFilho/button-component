import ButtonPage from "./components/ButtonPage";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div className=" flex h-screen w-screen items-center justify-start">
			<div>
				<Sidebar />
			</div>
			<div className="">
				<ButtonPage />
			</div>
		</div>
	);
}

export default App;
