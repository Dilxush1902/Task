const initialState=[]

export const jobReducer = (state=initialState,{type,payload}) => {
switch (type) {
	case "ADD_JOB":
		return [...state,...payload]
	case "GET_JOB_DATA":
		return [...state,...payload]
	case "JOB_CLICK_ADD":
			return [...state,payload]
	case "JOB_ITEM_REMOVE":
		return state.filter(item=>item.id !== payload)
	default:
		return state;
}
};

