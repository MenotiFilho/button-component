import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
	variant: "default" | "outline" | "text";
	textButton: string;
	onClick: () => void;
	icon?: any;
	iconPosition?: "start" | "end";
	disabled?: boolean;
	size?: "lg" | "md" | "sm";
	disabledShadow?: boolean;
	color?: "primary" | "secondary" | "danger";
}

const Button: React.FunctionComponent<Props> = ({
	variant,
	textButton,
	onClick,
	disabled = false,
	icon,
	iconPosition,
	size,
	disabledShadow,
	color,
}) => {
	const className =
		variant === "default"
			? "bg-[#2962FF] hover:bg-[#0039CB] focus:bg-[#0039CB] text-white font-medium py-2 px-4 rounded-md text-sm drop-shadow-md"
			: variant === "outline"
			? "bg-transparent hover:bg-[#2962FF]/10 focus:bg-[#2962FF]/10 text-[#3D5AFE] font-medium   py-2 px-4 border border-[#3D5AFE] rounded-md text-sm drop-shadow-md"
			: "text-[#3D5AFE] font-medium  focus:bg-[#2962FF]/10 hover:bg-[#2962FF]/10 rounded-md px-4 py-2 text-sm drop-shadow-md border border-transparent";

	const disabledClass = disabled
		? "opacity-50 saturate-0 cursor-not-allowed"
		: "";

	const disabledShadowClass = disabledShadow ? "filter-none" : "";

	const sizeClass =
		size === "lg" ? "py-4 px-6" : size === "md" ? "py-3 px-5" : "py-2 px-4";

	const colorClass =
		color === "primary" && variant !== "outline" && variant !== "text"
			? "bg-[#2962FF] hover:bg-[#0039CB] focus:bg-[#0039CB]"
			: color === "secondary" && variant !== "outline" && variant !== "text"
			? "bg-[#455A64] hover:bg-[#1C313A] focus:bg-[#1C313A]"
			: color === "danger" && variant !== "outline" && variant !== "text"
			? "bg-[#D32F2F] hover:bg-[#9A0007] focus:bg-[#9A0007]"
			: color === "primary" && variant === "outline"
			? "hover:bg-[#2962FF]/10 focus:bg-[#2962FF]/10 text-[#3D5AFE]  border-[#3D5AFE] "
			: color === "primary" && variant === "text"
			? "hover:bg-[#2962FF]/10 focus:bg-[#2962FF]/10 text-[#3D5AFE] "
			: color === "secondary" && variant === "outline"
			? "hover:bg-[#455A64]/30 focus:bg-[#1C313A]/30 text-[#1C313A]  border-[#1C313A] "
			: color === "danger" && variant === "outline"
			? "hover:bg-[#D32F2F]/50 focus:bg-[#D32F2F]/50 text-[#9A0007] border-[#9A0007]"
			: color === "secondary" && variant === "text"
			? "hover:bg-[#455A64]/30 focus:bg-[#1C313A]/30 text-[#1C313A]"
			: color === "danger" && variant === "text"
			? "hover:bg-[#D32F2F]/50 focus:bg-[#D32F2F]/50 text-[#9A0007]"
			: "";

	return (
		<button
			className={`${className} ${disabledClass} ${sizeClass} ${disabledShadowClass} ${colorClass}`}
			onClick={onClick}
		>
			{icon && iconPosition === "start" && (
				<span className="mr-2">
					<FontAwesomeIcon icon={icon} />
				</span>
			)}
			{textButton}
			{icon && iconPosition === "end" && (
				<span className="ml-2">
					<FontAwesomeIcon icon={icon} />
				</span>
			)}
		</button>
	);
};

export default Button;
