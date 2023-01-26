import React from "react";
import Button from "./Button";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const handleClick = () => {
	console.log("Button clicked!");
};

const defaultText = "Isso é um botão";

function ButtonPage() {
	return (
		<div className="flex w-full font-notoSans">
			<div className="flex flex-col gap-3 m-auto items-start">
				<div className=" flex  gap-3">
					<div className="flex flex-col gap-3">
						<Button
							variant="default"
							textButton={defaultText}
							onClick={handleClick}
							color="primary"
						/>
						<Button
							variant="outline"
							textButton={defaultText}
							onClick={handleClick}
							color="primary"
						/>
						<Button
							variant="text"
							textButton={defaultText}
							onClick={handleClick}
							color="primary"
						/>
					</div>
					<div className="flex flex-col gap-3">
						<Button
							variant="default"
							textButton={defaultText}
							onClick={handleClick}
							color="secondary"
						/>
						<Button
							variant="outline"
							textButton={defaultText}
							onClick={handleClick}
							color="secondary"
						/>
						<Button
							variant="text"
							textButton={defaultText}
							onClick={handleClick}
							color="secondary"
						/>
					</div>
					<div className="flex flex-col gap-3">
						<Button
							variant="default"
							textButton={defaultText}
							onClick={handleClick}
							color="danger"
						/>
						<Button
							variant="outline"
							textButton={defaultText}
							onClick={handleClick}
							color="danger"
						/>
						<Button
							variant="text"
							textButton={defaultText}
							onClick={handleClick}
							color="danger"
						/>
					</div>
				</div>
				<div className="flex gap-3">
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
				</div>
				<div className=" flex gap-3">
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
				</div>
				<div className="flex gap-3">
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
				</div>
			</div>
		</div>
	);
}

export default ButtonPage;
