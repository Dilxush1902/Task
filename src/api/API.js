import axios from "axios";

export const getCategory = (text) => {
	return 	axios.get("https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/categories")
}
export const getProducts = () => {
  return axios.get("https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/products")
}