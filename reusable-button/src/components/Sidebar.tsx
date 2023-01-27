import React from "react";

const handleClick = () => {
	console.log("Button clicked!");
};

function Sidebar() {
	return (
		<div className="flex bg-[#FAFBFD] px-16 h-screen">
			<div
				className=" mt-16 h-fit text-[#090F31] font-poppins font-semibold cursor-pointer select-none"
				onClick={handleClick}
			>
				<span className=" text-[#F7542E]">Dev</span>challenges.io
			</div>
			<div></div>
		</div>
	);
}

export default Sidebar;
