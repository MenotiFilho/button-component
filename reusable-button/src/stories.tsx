import React from "react";
import { storiesOf } from "@storybook/react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Button from "./components/Button";

const onClick = () => {
	console.log("Button clicked!");
};

storiesOf("Button", module)
	.add("Default", () => (
		<Button variant="default" textButton="Default" onClick={onClick} />
	))
	.add("Outline", () => (
		<Button variant="outline" textButton="Outline" onClick={onClick} />
	))
	.add("Text", () => (
		<Button variant="text" textButton="Text" onClick={onClick} />
	))
	.add("With Icon", () => (
		<Button
			variant="default"
			textButton="With Icon"
			onClick={onClick}
			icon={faCoffee}
			iconPosition="end"
		/>
	))
	.add("Disabled", () => (
		<Button
			variant="default"
			textButton="Disabled"
			onClick={onClick}
			disabled={true}
		/>
	))
	.add("With Disabled Shadow", () => (
		<Button
			variant="default"
			textButton="With Disabled Shadow"
			onClick={onClick}
			disabledShadow={true}
		/>
	))
	.add("Large Size", () => (
		<Button
			variant="default"
			textButton="Large Size"
			onClick={onClick}
			size="lg"
		/>
	))
	.add("Medium Size", () => (
		<Button
			variant="default"
			textButton="Medium Size"
			onClick={onClick}
			size="md"
		/>
	))
	.add("Small Size", () => (
		<Button
			variant="default"
			textButton="Small Size"
			onClick={onClick}
			size="sm"
		/>
	))
	.add("Primary Color", () => (
		<Button
			variant="default"
			textButton="Primary Color"
			onClick={onClick}
			color="primary"
		/>
	))
	.add("Secondary Color", () => (
		<Button
			variant="default"
			textButton="Secondary Color"
			onClick={onClick}
			color="secondary"
		/>
	))
	.add("Danger Color", () => (
		<Button
			variant="default"
			textButton="Danger Color"
			onClick={onClick}
			color="danger"
		/>
	))
	.add("Primary Outline", () => (
		<Button
			variant="outline"
			textButton="Primary Outline"
			onClick={onClick}
			color="primary"
		/>
	))
	.add("Secondary Outline", () => (
		<Button
			variant="outline"
			textButton="Secondary Outline"
			onClick={onClick}
			color="secondary"
		/>
	))
	.add("Danger Outline", () => (
		<Button
			variant="outline"
			textButton="Danger Outline"
			onClick={onClick}
			color="danger"
		/>
	))
	.add("Icon Start", () => (
		<Button
			variant="default"
			textButton="Icon Start"
			onClick={onClick}
			icon={faCoffee}
			iconPosition="start"
		/>
	))
	.add("Icon End", () => (
		<Button
			variant="default"
			textButton="Icon End"
			onClick={onClick}
			icon={faCoffee}
			iconPosition="end"
		/>
	))
	.add("Disabled", () => (
		<Button
			variant="default"
			textButton="Disabled"
			onClick={onClick}
			disabled={true}
		/>
	))
	.add("Disabled with Shadow", () => (
		<Button
			variant="default"
			textButton="Disabled with Shadow"
			onClick={onClick}
			disabled={true}
			disabledShadow={false}
		/>
	));
