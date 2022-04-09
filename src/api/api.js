import axios from 'axios'
const URL_USERS="https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/users";
const URL_TYPES="https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/types";
export const getUsers = () => {
  return axios.get(URL_USERS)
}
export const postData = (postData) => {
 return 	axios.post(URL_USERS,{...postData})
}
export 	const deleteItem = (id) => {
 return 	axios.delete(`${URL_USERS}/${id}`)
}
export const getJobType = () => {
	return axios.get(URL_TYPES)
}
export const addJobType = (item) => {
	return axios.post(URL_TYPES, {...item})
}
export const jobTypeRemove = (id) => {
	return axios.delete(`${URL_TYPES}/${id}`)
}