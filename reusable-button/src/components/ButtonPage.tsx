import React from "react";
import Button from "./Button";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const handleClick = () => {
	console.log("Button clicked!");
};

const defaultText = "Isso é um botão";

function ButtonPage() {
	return (
		<div className="font-notoSans">
			<div className="flex flex-col m-auto items-start ml-24">
				<div className="mb-14 text-3xl text-[#4F4F4F] font-medium">Buttons</div>
				<div className=" flex gap-8">
					<div className="flex flex-col gap-3">
						<div>{"<Button />"}</div>
						<Button
							variant="default"
							textButton={defaultText}
							onClick={handleClick}
							color="primary"
						/>
						<div>{"<Button variant='outline' />"}</div>
						<Button
							variant="outline"
							textButton={defaultText}
							onClick={handleClick}
							color="primary"
						/>
						<div>{"<Button variant='text' />"}</div>
						<Button
							variant="text"
							textButton={defaultText}
							onClick={handleClick}
							color="primary"
						/>
					</div>
					<div className="flex flex-col gap-3">
						<div>{"<Button variant='default' color='secondary' />"}</div>
						<Button
							variant="default"
							textButton={defaultText}
							onClick={handleClick}
							color="secondary"
						/>
						<div>{"<Button variant='outline'  color='secondary'/>"}</div>
						<Button
							variant="outline"
							textButton={defaultText}
							onClick={handleClick}
							color="secondary"
						/>
						<div>{"<Button variant='text'  color='secondary'/>"}</div>
						<Button
							variant="text"
							textButton={defaultText}
							onClick={handleClick}
							color="secondary"
						/>
					</div>
					<div className="flex flex-col gap-3">
						<div>{"<Button variant='default'  color='danger'/>"}</div>
						<Button
							variant="default"
							textButton={defaultText}
							onClick={handleClick}
							color="danger"
						/>
						<div>{"<Button variant='outline'  color='danger'/>"}</div>
						<Button
							variant="outline"
							textButton={defaultText}
							onClick={handleClick}
							color="danger"
						/>
						<div>{"<Button variant='text'  color='danger'/>"}</div>
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
						<div>{"<Button variant='default'  disabled />"}</div>
						<Button
							variant="default"
							textButton={defaultText}
							onClick={handleClick}
							disabled
						/>
					</div>
					<div>
						<div>{"<Button variant='outline'  disabled />"}</div>
						<Button
							variant="outline"
							textButton={defaultText}
							onClick={handleClick}
							disabled
						/>
					</div>
					<div>
						<div>{"<Button variant='text' disabled />"}</div>
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
						<div>{"<Button icon={faCode} iconPosition='start'  />"}</div>
						<Button
							variant="default"
							textButton={defaultText}
							onClick={handleClick}
							icon={faCode}
							iconPosition="start"
						/>
					</div>
					<div>
						<div>{"<Button icon={faCode} iconPosition='end'  />"}</div>
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
						<div>{"<Button size='sm' />"}</div>
						<Button
							variant="default"
							textButton={defaultText}
							onClick={handleClick}
							size="sm"
						/>
					</div>
					<div>
						<div>{"<Button size='md' />"}</div>
						<Button
							variant="default"
							textButton={defaultText}
							onClick={handleClick}
							size="md"
						/>
					</div>
					<div>
						<div>{"<Button size='lg' />"}</div>
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
