import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export function UserContextProvider({ children }) {
	const [currentUser, setCurrentUser] = useState({});

	useEffect(() => {
		setCurrentUser(JSON.parse(localStorage.getItem('ecommerce-user')) || {});
	}, []);

	useEffect(() => {
		if (currentUser.name) {
			localStorage.setItem('ecommerce-user', JSON.stringify(currentUser));
		}
	}, [currentUser]);

	const removeUser = () => {
		setCurrentUser({});
	};

	const addUser = (customerData) => {
		setCurrentUser(customerData);
	};

	return (
		<UserContext.Provider
			value={{
				currentUser,
				addUser,
				removeUser,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}
