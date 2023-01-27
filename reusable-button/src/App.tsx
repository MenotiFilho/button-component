import ButtonPage from "./components/ButtonPage";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div className=" flex h-screen w-screen items-center">
			<div className="">
				<Sidebar />
			</div>
			<div className="w-full">
				<ButtonPage />
			</div>
		</div>
	);
}

export default App;
