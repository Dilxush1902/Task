const initialState={
	users:[],
	jobType:[]
}
console.log(initialState)
export const reducer = (state=initialState, action) => {
	switch (action.type) {

		case "ADD_LIST":
			return {...state,users: action.payload};

		case "GET_USERS_DATA":
			return {...state,users:[...action.payload]};

		case "USERS_REMOVE":
			return state.users.filter((item)=>item.uuid !== action.payload);
		case "ADD_JOB_TYPE":
			return []
		default :
			return state;
	}
}