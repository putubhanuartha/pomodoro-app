import { useEffect, useRef, useState } from "react";

import ModalComponent from "./components/ModalComponent";
export const fontObj = {
	PoppinsFont: { index: "PoppinsFont", font: "font-poppins" },
	RobotoSlabFont: { index: "RobotoSlabFont", font: "font-robotoslab" },
	UbuntuFont: { index: "UbuntuFont", font: "font-ubuntu" },
};
export const colorObj = {
	red: { index: "red", colorFormat: "bg-[#FCA5A5]", color: "#FCA5A5" },
	green: { index: "green", colorFormat: "bg-[#A7F3D0]", color: "#A7F3D0" },
	purple: { index: "purple", colorFormat: "bg-[#F0ABFC]", color: "#F0ABFC" },
};
const activeStateConfigObj = {
	fontActive: "PoppinsFont",
	colorActive: "red",
	pomodoroSeconds: 25 * 60,
	shortBreakSeconds: 5 * 60,
	longBreakSeconds: 10 * 60,
};
function App() {
	const audioRef = useRef(null);
	const musicRef = useRef(null);
	const [countDownState, setCountDownstate] = useState(false);
	const [activeState, setActiveState] = useState(activeStateConfigObj);
	const [second, setSecond] = useState();
	const [activeFont, setActiveFont] = useState();
	const [activeColor, setActiveColor] = useState();
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
		setActiveFont(fontObj[activeState.fontActive].font);
		setActiveColor(colorObj[activeState.colorActive].colorFormat);
	}, [activeState]);

	useEffect(() => {
		if (second <= 0) {
			setCountDownstate(false);
			musicRef.current.pause();
			setTimeout(() => {
				audioRef.current.play();
			}, 700);
		}
		timeFormatConverter();
		let timer;
		if (countDownState && indexNav === 0) {
			musicRef.current.play();
		}
		if (countDownState) {
			timer = setInterval(() => {
				setSecond((second) => second - 1);
			}, 1000);
			return () => {
				clearInterval(timer);
			};
		}
		
		
	}, [countDownState, second]);

	useEffect(() => {
		if (countDownState == false) {
			musicRef.current.pause();
			if (indexNav == 0) {
				setIndexNav(1);
			} else {
				setIndexNav(0);
			}
		}
	}, [countDownState]);

	useEffect(() => {
		setSecondTimeReset(indexNav);
	}, [indexNav, activeState]);

	function setSecondTimeReset(indexNav) {
		setCountDownstate(false);
		switch (indexNav) {
			case 0:
				setSecond(activeState.pomodoroSeconds);
				break;
			case 1:
				setSecond(activeState.shortBreakSeconds);
				break;
			case 2:
				setSecond(activeState.longBreakSeconds);
				break;
		}
	}

	function changeVolume(e) {
		const vol = e.currentTarget.value;
		musicRef.current.volume = vol / 100;
	}

	return (
		<div
			id="App"
			className={activeFont}
		>
			<audio
				src="/assets/bell.mp3"
				ref={audioRef}
			></audio>
			<div className="container mx-auto p-4 flex flex-col items-center justify-between h-[100vh] min-h-min">
				<div>
					<h1 className="text-cyan-100 text-3xl font-bold text-center">
						pomodoro
					</h1>
					<nav className="w-screen mt-4">
						<ul className="flex max-w-sm w-[75%] justify-between items-center bg-secondary mx-auto px-4 py-2 rounded-full">
							{["pomodoro", "short break", "long break"].map((el, index) => {
								return (
									<li
										key={index}
										className={`${
											index === indexNav ? `active ${activeColor}` : null
										}`}
									>
										<button
											onClick={() => {
												setIndexNav(index);
												setSecondTimeReset(indexNav);
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
					className={`w-[350px] h-[350px] transition-all active:shadow-[0px_0px_10px_12px_rgba(255,255,255,0.5)] duration-300 hover:shadow-[0px_0px_10px_7px_rgba(255,255,255,0.3)]  rounded-full block shrink-0 text-blue-900 ${activeColor}`}
				>
					<p className="text-7xl">{timeFormat}</p>
					<p className="text-4xl tracking-[10px] mt-3">
						{countDownState ? "PAUSE" : "START"}
					</p>
				</button>
				<div className="max-w-xs w-full">
					<input
						onChange={changeVolume}
						type="range"
						min={0}
						defaultValue={100}
						max={100}
						className="range"
					/>
				</div>
				<audio
					ref={musicRef}
					loop
				>
					<source
						src="soul.mp3"
						type="audio/mp3"
					/>
				</audio>
				<ModalComponent
					activeState={activeState}
					setActiveState={setActiveState}
				/>
			</div>
		</div>
	);
}

export default App;
