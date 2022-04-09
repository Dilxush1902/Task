
export const getUsersApi = (getData) => {
	return {
		type:"GET_USERS_DATA",
		payload: getData
	};
};

