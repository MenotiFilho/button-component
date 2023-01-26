import Button from "./components/Button";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const handleClick = () => {
	console.log("Button clicked!");
};

const defaultText = "Isso é um botão";

function App() {
	return (
		<div className=" flex flex-col">
			<div>
				<Button
					variant="default"
					textButton={defaultText}
					onClick={handleClick}
				/>
			</div>
			<div>
				<Button
					variant="outline"
					textButton={defaultText}
					onClick={handleClick}
				/>
			</div>
			<div>
				<Button variant="text" textButton={defaultText} onClick={handleClick} />
			</div>
			<div>
				<Button
					variant="default"
					textButton={defaultText}
					onClick={handleClick}
					disabled
				/>
			</div>
			<div>
				<Button
					variant="outline"
					textButton={defaultText}
					onClick={handleClick}
					disabled
				/>
			</div>
			<div>
				<Button
					variant="text"
					textButton={defaultText}
					onClick={handleClick}
					disabled
				/>
			</div>
			<div>
				<Button
					variant="default"
					textButton={defaultText}
					onClick={handleClick}
					icon={faCode}
					iconPosition="start"
				/>
			</div>
			<div>
				<Button
					variant="default"
					textButton={defaultText}
					onClick={handleClick}
					icon={faCode}
					iconPosition="end"
				/>
			</div>
			<div>
				<Button
					variant="default"
					textButton={defaultText}
					onClick={handleClick}
					size="sm"
				/>
			</div>
			<div>
				<Button
					variant="default"
					textButton={defaultText}
					onClick={handleClick}
					size="md"
				/>
			</div>
			<div>
				<Button
					variant="default"
					textButton={defaultText}
					onClick={handleClick}
					size="lg"
				/>
			</div>
			<div>
				<Button
					variant="default"
					textButton={defaultText}
					onClick={handleClick}
					color="primary"
				/>
			</div>
			<div>
				<Button
					variant="default"
					textButton={defaultText}
					onClick={handleClick}
					color="secondary"
				/>
			</div>
			<div>
				<Button
					variant="default"
					textButton={defaultText}
					onClick={handleClick}
					color="danger"
				/>
			</div>
		</div>
	);
}

export default App;
