import React, { createContext } from "react";
export const AppContext = createContext();
export default function AppProvider({ children }) {
	return (
		<AppContext.Provider value={"Hello App Provider"}>
			{children}
		</AppContext.Provider>
	);
}
