import React, {useRef, useState} from 'react';
import "./users.css";

const UsersInfo = ({handleSubmit}) => {
	const formRef= useRef(null);
	const initialState= {
		name: "",
		surName: "",
		phoneNumber: "",
		email: "",
		dateBirth: ""
	}
	const [usersInfo, setUsersInfo] = useState(initialState)
	// const handleSubmit = (e) => {
	//   e.preventDefault();
	// 	formRef.current.reset()
	// 	console.log(usersInfo)
	// }
	const handleChange = (e) => {
		setUsersInfo({
			...usersInfo,[e.target.name]:e.target.value
		})
	}


	return (
		<div className="users_main shadow mb-5 bg-body rounded-2" >
			<h2 className="header_bold p-4">User’s Info</h2>
			<div className="border_line"></div>
			<form className="row needs-validation p-4" ref={formRef} onSubmit={()=>{handleSubmit()}}>
				<div className="col-12 py-2 ">
					<label htmlFor="validationCustom01" className="form-label label_bold">Name</label>
					<input
						type="text"
						className="form-control"
						name="name"
						id="validationCustom01"
						onChange={handleChange}
						required
					/>
					<div className="valid-feedback">
						Looks good!
					</div>
				</div>
				<div className="col-12 py-2 ">
					<label htmlFor="surname" className="form-label label_bold">Surname</label>
					<input
						type="text"
						className="form-control"
						id="surname"
						name="surName"
						onChange={handleChange}
						required
					/>
					<div className="valid-feedback">
						Looks good!
					</div>
				</div>
				<div className="col-12 py-2 ">
					<label htmlFor="phoneNumber" className="form-label label_bold">Phone Number</label>
					<input
						type="number"
						className="form-control"
						id="phoneNumber"
						name="phoneNumber"
						onChange={handleChange}
						required
					/>
					<div className="valid-feedback">
						Looks good!
					</div>
				</div>
				<div className="col-12 py-2 ">
					<label htmlFor="validationCustom03" className="form-label label_bold">Email</label>
					<input
						type="text"
						className="form-control"
						id="validationCustom03"
						name="email"
						onChange={handleChange}
						required
					/>
					<div className="invalid-feedback">
						Please provide a valid city.
					</div>
				</div>
				<div className="col-12 py-2 pb-5 mb-5">
					<label htmlFor="validationCustom04" className="form-label label_bold">Date of birth</label>
					<select onChange={handleChange} name="dateBirth" className="form-select shadow-none" id="validationCustom04" required>
						<option selected value="" >Choose...</option>
						<option value="1996" >1996</option>
						<option value="1997" >1997</option>
						<option value="1998" >1998</option>
						<option value="1999" >1999</option>
						<option value="2000" >2000</option>
						<option value="2001" >2001</option>
						<option value="2002" >2002</option>
					</select>
					<div className="invalid-feedback">
						Please select a valid state.
					</div>
				</div>
				<button  	>Submit</button>
			</form>
		</div>
	);
};

export default UsersInfo;