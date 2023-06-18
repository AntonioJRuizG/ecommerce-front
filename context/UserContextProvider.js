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
		localStorage.setItem('ecommerce-user', JSON.stringify({}));
	};

	const addUser = (customerData) => {
		setCurrentUser(customerData);
	};

	const updateUser = (updatedUser) =>{
		setCurrentUser(updatedUser);
	}

	return (
		<UserContext.Provider
			value={{
				currentUser,
				addUser,
				removeUser,
				updateUser,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}
