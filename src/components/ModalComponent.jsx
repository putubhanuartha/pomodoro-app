import React, { useEffect, useState } from "react";
import { VscSettingsGear } from "react-icons/vsc";
import { AiOutlineCheck } from "react-icons/ai";
import InputArrow from "./InputArrow";
import { fontObj } from "../App";
import { colorObj } from "../App";
function ModalComponent({ activeState, setActiveState }) {
	const [fontActive, setFontActive] = useState(activeState.fontActive);
	const [colorActive, setColorActive] = useState(activeState.colorActive);
	const [pomodoro, setPomodoro] = useState(activeState.pomodoroSeconds);
	const [shortBreak, setShortBreak] = useState(activeState.shortBreakSeconds);
	const [longBreak, setLongBreak] = useState(activeState.longBreakSeconds);
	return (
		<>
			<label
				htmlFor="my-modal-4"
				className="btn"
			>
				<VscSettingsGear size={30} />
			</label>
			<input
				type="checkbox"
				id="my-modal-4"
				className="modal-toggle"
			/>
			<label
				htmlFor="my-modal-4"
				className="modal"
			>
				<label className="modal-box relative p-5 bg-white max-w-md overflow-visible">
					<h3 className="text-lg text-black font-bold">Settings</h3>
					<p className="py-4 text-black">TIME (MINUTES)</p>
					<div className="flex gap-x-3 mb-4">
						<InputArrow
							min={15}
							max={60}
							title={"pomodoro"}
							id={"pomodoro"}
							defaultValue={pomodoro}
							setValue={setPomodoro}
						/>
						<InputArrow
							min={1}
							max={5}
							title={"short break"}
							id={"short"}
							setValue={setShortBreak}
							defaultValue={shortBreak}
						/>
						<InputArrow
							min={5}
							max={15}
							title={"long break"}
							id={"long"}
							setValue={setLongBreak}
							defaultValue={longBreak}
						/>
					</div>
					<div className="flex items-center justify-between my-9">
						<p className="font-semibold">FONT</p>
						<div className="flex items-center gap-x-2">
							<FontCircle
								id={fontObj.PoppinsFont}
								fontActive={fontActive}
								setFontActive={setFontActive}
							/>
							<FontCircle
								id={fontObj.RobotoSlabFont}
								fontActive={fontActive}
								setFontActive={setFontActive}
							/>
							<FontCircle
								id={fontObj.UbuntuFont}
								fontActive={fontActive}
								setFontActive={setFontActive}
							/>
						</div>
					</div>
					<div className="flex item-center justify-between my-9">
						<p className="font-semibold">COLOR</p>
						<div className="flex items-center gap-x-2">
							<ColorCircle
								id={colorObj.red}
								colorActive={colorActive}
								setColorActive={setColorActive}
							/>
							<ColorCircle
								id={colorObj.green}
								colorActive={colorActive}
								setColorActive={setColorActive}
							/>
							<ColorCircle
								id={colorObj.purple}
								colorActive={colorActive}
								setColorActive={setColorActive}
							/>
						</div>
					</div>
					<div className="w-fit mx-auto -mb-10 z-20">
						<label
							onClick={() => {
								setActiveState({
									fontActive: fontActive,
									colorActive: colorActive,
									pomodoroSeconds: pomodoro,
									shortBreakSeconds: shortBreak,
									longBreakSeconds: longBreak,
								});
							}}
							htmlFor="my-modal-4"
							className="btn bg-orange-600 text-white border-0"
						>
							Apply
						</label>
					</div>
				</label>
			</label>
		</>
	);
}
function FontCircle({ id, setFontActive, fontActive }) {
	return (
		<span
			onClick={() => {
				setFontActive(id.index);
			}}
			className={`w-7 h-7 align-middle ${
				fontActive == id.index
					? "bg-black text-white"
					: "bg-slate-200 text-black"
			} text-center rounded-full  cursor-pointer border-[2px] border-transparent hover:border-black ${
				id.font
			}`}
		>
			Aa
		</span>
	);
}
function ColorCircle({ id, colorActive, setColorActive }) {
	return (
		<span
			onClick={() => {
				setColorActive(id.index);
			}}
			style={{ backgroundColor: id.color }}
			className="w-7 h-7  rounded-full bg-slate-200 cursor-pointer flex items-center justify-center"
		>
			{colorActive == id.index && <AiOutlineCheck color="black" />}
		</span>
	);
}

export default ModalComponent;
