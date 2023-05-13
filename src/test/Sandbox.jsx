import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup
	.object({
		pomo: yup.string().required(),
	})
	.required();
const Input = (props) => {
	const [val, setVal] = useState(0);

	return (
		<>
			<input
				type="text"
				onChange={props.onChange}
				onBlur={props.onBlur}
				value={props.value}
			/>
		</>
	);
};
export default function Sandbox() {
	const {
		handleSubmit,
		formState: { errors },
		register,
		control,
	} = useForm({ resolver: yupResolver(schema) });
	const onSubmit = (data) => {
		console.log(data);
	};
	console.log(errors);
	return (
		<div>
			<form
				action="submit"
				onSubmit={handleSubmit(onSubmit)}
			>
				<Controller
					defaultValue={""}
					control={control}
					name="pomo"
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							onChange={(e) => onChange({ target: { value: e.target.value } })}
							onBlur={onBlur}
							value={value}
						/>
					)}
				/>

				<button type="submit">Plus</button>
			</form>
		</div>
	);
}
