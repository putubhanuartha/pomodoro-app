import { useEffect, useState } from "react";

import { VscSettingsGear } from "react-icons/vsc";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

function InputArrow(props) {
	const [isFocus, setIsFocus] = useState(false);
	return (
		<div>
			<label
				className="text-black"
				htmlFor="input-number"
			>
				Pomodoro
			</label>
			<div
				className={`w-fit flex bg-slate-200 py-1 px-2 rounded-md ${
					isFocus ? "shadow-[0px_0px_2px_3px_rgba(112,243,248,0.5)]" : null
				}`}
			>
				<input
					className={`bg-slate-200 w-${props.width} text-black font-semibold  focus:border-0 focus:outline-none`}
					type="text"
					name="input-number"
					id="input-number"
					defaultValue={props.defaultValue}
					onFocus={() => {
						setIsFocus(true);
					}}
					onBlur={() => {
						setIsFocus(false);
					}}
				/>
				<span className="w-[30%] flex flex-col">
					<button
						type="button"
						className="bg-slate-200 hover:bg-slate-300 rounded-t-md hover:bg-slate- px-0.5 transition-colors duration-75"
					>
						<BiUpArrow size={12} />
					</button>
					<button
						type="button"
						className="bg-slate-200 hover:bg-slate-300 rounded-b-md px-0.5 transition-colors duration-75"
					>
						<BiDownArrow size={12} />
					</button>
				</span>
			</div>
		</div>
	);
}
function ModalComponent() {
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
				className="modal cursor-pointer"
			>
				<label
					className="modal-box relative p-5 bg-white overflow-visible"
					htmlFor=""
				>
					<form action="submit">
						<h3 className="text-lg text-black font-bold">Settings</h3>
						<p className="py-4 text-black">TIME (MINUTES)</p>
						<div>
							<InputArrow
								width={20}
								defaultValue={10}
							/>
						</div>
						<div className="w-fit mx-auto -mb-10 z-20">
							<label
								htmlFor="my-modal-4"
								className="btn mx-auto rounded-full px-7 py-0 bg-orange-500 text-white border-none"
							>
								Apply
							</label>
						</div>
					</form>
				</label>
			</label>
		</>
	);
}
function App() {
	const [countDownState, setCountDownstate] = useState(false);
	const [second, setSecond] = useState(60);
	const [timeFormat, setTimeFormat] = useState("00 : 00");
	const [indexNav, setIndexNav] = useState(0);
	const timeFormatConverter = () => {
		let minute = Math.floor(second / 60);
		minute.toString().length < 2
			? (minute = `0${minute}`)
			: (minute = `${minute}`);
		let secondTime = second % 60;
		secondTime.toString().length < 2
			? (secondTime = `0${secondTime}`)
			: (secondTime = `${secondTime}`);
		setTimeFormat(`${minute} : ${secondTime}`);
	};
	useEffect(() => {
		console.log("Arya");
	}, []);
	useEffect(() => {
		if (second <= 0) {
			setCountDownstate(false);
		}
		timeFormatConverter();
		let timer;
		if (countDownState) {
			timer = setInterval(() => {
				setSecond((second) => second - 1);
			}, 1000);
			return () => {
				clearInterval(timer);
			};
		}
	}, [countDownState, second]);
	return (
		<div id="App">
			<div className="container mx-auto p-4 flex flex-col items-center justify-between h-[100vh] min-h-min">
				<div>
					<h1 className="text-cyan-100 text-3xl font-bold text-center">
						pomodoro
					</h1>
					<nav className="w-screen mt-4">
						<ul className="flex max-w-sm w-[75%] justify-between items-center bg-secondary mx-auto px-4 py-2 rounded-full">
							{["pomodoro", "short break", "long break"].map((el, index) => {
								return (
									<li className={`${index === indexNav ? "active" : null}`}>
										<button
											onClick={() => {
												setIndexNav(index);
											}}
										>
											{el}
										</button>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>
				<button
					id="circle"
					onClick={() => {
						setCountDownstate(!countDownState);
					}}
					className="bg-blue-200 w-[250px] h-[250px] text-5xl rounded-full block shrink-0 text-blue-900"
				>
					{timeFormat}
				</button>
				<ModalComponent />
			</div>
		</div>
	);
}

export default App;
