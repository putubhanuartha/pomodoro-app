import React from "react";

function InputArrow({ min, max, title, id, defaultValue, setValue }) {
	return (
		<div className="flex-1">
			<label
				className="text-black"
				htmlFor={id}
			>
				{title}
			</label>
			<input
				defaultValue={defaultValue / 60}
				onChange={(e) => {
					setValue(Number(e.target.value) * 60);
				}}
				min={min}
				max={max}
				className={`text-black font-semibold focus:border-0 focus:shadow-[0px_0px_0px_3.5px_rgba(79,70,229,0.2)] focus:outline-none w-full bg-slate-200 py-1.5 px-2 rounded-lg mt-1`}
				type="number"
				name={id}
				id={id}
			/>
		</div>
	);
}
export default InputArrow;
