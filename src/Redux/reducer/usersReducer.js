const initialState=[]
export const usersReducer = (state=initialState, {type,payload}) => {
	switch (type) {

		case "ADD_LIST":
			return [...state,payload];

		case "GET_USERS_DATA":
			return [...state,...payload];

		case "USERS_REMOVE":
			return state.filter((item)=>item.uuid !== payload);

		default :
			return state;
	}
}