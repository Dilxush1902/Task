import React, {useEffect, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css";
import { useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {usersSubmit} from "./Redux/action/users/usersSubmit";
import UserList from "./component/UserList/UserList";
import {addJobType, getJobType, getUsers, postData} from "./api/api";
import {getUsersApi} from "./Redux/action/users/getUsersApi";
import {usersRemove} from "./Redux/action/users/usersRemove";
import {deleteItem} from "./api/api";
import {getJobData} from "./Redux/action/jobType/getJobData";
import {jobClickAdd} from "./Redux/action/jobType/jobClickAdd";
import JobList from "./component/Job/JobList/JobList";
import {toast, ToastContainer} from "react-toastify";
import FormInput from "./components/FormInput/FormInput";


const App = () => {
	const initialState= {
		user_infos:{
			firstName: "",
			lastName: "",
			phone_number: "",
			email: "",
			dob: ""
		},
		work_area:{
			jobType:"",
			companyName:"",
			experience:"",
		}
	}
	const [mainData,setMainData]=useState(initialState);
	const [userInfos, setUserInfos] = useState(initialState.user_infos);
	const [workArea,setWorkArea]=useState(initialState.work_area);
	const formRef= useRef(null);
	const inputRef=useRef(null);
	const dispatch = useDispatch();
	const {jobReducer} =useSelector(state => state)
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(mainData)
			postData(mainData)
				.then(res =>dispatch(usersSubmit(res.data)))
			formRef.current.reset()
		toast.success("Add User Lists !")
	}
	const removeItemUserList = (id) => {
		deleteItem(id);
		dispatch(usersRemove(id));
		toast.error("Deleted User !");
	}
	const handleChange = (e) => {
		setUserInfos({
			...userInfos,[e.target.name]:e.target.value
		})
		setWorkArea({
			...workArea,[e.target.name]:e.target.value
		})
		setMainData({user_infos:{...userInfos},work_area:{...workArea}})
	}
	const jobHandleClick = () => {
			const addType={label:inputRef.current.value}
			if (addType.label.length>2){
				addJobType(addType)
				.then(res=>dispatch(jobClickAdd(res.data)))
				.catch((e)=>console.log("Job Type:",e))
		}
		inputRef.current.focus()
		inputRef.current.value=""
		toast.success("Add Job Type !")
	}
	useEffect(()=>{
		getUsers()
			.then(res=>dispatch(getUsersApi(res.data)))
		getJobType()
			.then(res =>dispatch(getJobData(res.data)))
	},[])

	return (
		<main>
			<ToastContainer/>
			<div className="shadow-lg mb-5 bg-body rounded-3 ">
				<form id="hand" onSubmit={handleSubmit} ref={formRef}>
					<div className="section">

						{/* // Users Content Start ////////////////////////  */}

						<div className="left_content p-3">
							<div className="users_main shadow mb-5 bg-body rounded-2">
								<h2 className="header_bold p-4">User’s Info</h2>
								<div className="border_line"></div>
								<div className="row needs-validation p-4">
									<div className="col-12 py-2 ">
										<label htmlFor="firstName" className="form-label label_bold">First Name</label>
										<FormInput
											id="firstName"
											type="text"
											name="firstName"
											className="form-control"
											handleChange={handleChange}
											pattern="^[a-zA-Z0-9]{3,11}$"
											errorMessage="First Name is required, must be at least 3 characters"
											required
										/>
										<div className="valid-feedback">
											Looks good!
										</div>
									</div>
									<div className="col-12 py-2 ">
										<label htmlFor="lastName" className="form-label label_bold">Last Name</label>
										<FormInput
											required
											id="lastName"
											name="lastName"
											className="form-control"
											handleChange={handleChange}
											pattern="^[a-zA-Z0-9]{3,11}$"
											errorMessage="Last Name is required, must be at least 3 characters"
										/>
										<div className="valid-feedback">
											Looks good!
										</div>
									</div>
									<div className="col-12 py-2 ">
										<label htmlFor="phoneNumber" className="form-label label_bold">Phone Number</label>
										<FormInput
											type="number"
											required
											id="lastName"
											name="phoneNumber"
											className="form-control"
											handleChange={handleChange}
											pattern="[0-9]{5}[-][0-9]{7}[-][0-9]{1}"
											errorMessage="Phone Number is required, must be at least 7 characters"
										/>
										<div className="valid-feedback">
											Looks good!
										</div>
									</div>
									<div className="col-12 py-2 ">
										<label htmlFor="validationCustom03" className="form-label label_bold">Email</label>
										<FormInput
											type="email"
											name="email"
											id="validationCustom03"
											handleChange={handleChange}
											pattern={"^[a-zA-Z0-9.!#$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"}
											errorMessage="Email is required"
											required
										/>
										<div className="invalid-feedback">
											Please provide a valid city.
										</div>
									</div>
									<div className="col-12 py-2 pb-5 mb-5">
										<label htmlFor="validationCustom04" className="form-label label_bold">Date of birth</label>
										<input
											type="date"
											onChange={handleChange}
											name="dob"
											className="form-control shadow-none"
											id="validationCustom04" required/>
										<div className="invalid-feedback">
											Please select a valid state.
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* // Users Content End //////////////////////// */}

						<div className="right_content p-3">
							{/* // Work Content Start ////////////////////  */}
							<div className="work_main shadow mb-5 bg-body rounded">
								<h2 className="header_bold p-4">Work Details</h2>
								<div className="border_line"></div>
								<div className="row needs-validation p-4">
									<div className="col-12 py-2 ">
										<label htmlFor="companyName" className="form-label label_bold">Company Name</label>
										<FormInput
											type="text"
											required
											id="companyName"
											name="companyName"
											className="form-control"
											handleChange={handleChange}
											pattern="^[a-zA-Z0-9]{3,11}$"
											errorMessage="Company Name is required, must be at least 3 characters"
										/>
										<div className="valid-feedback">
											Looks good!
										</div>
									</div>
									<div className="col-12 ">
										<div className="row">
											<div className="col-6 py-2 ">
												<label htmlFor="job_type" className="form-label label_bold">Job type</label>
												<select name="jobType" onChange={handleChange} className="form-select shadow-none" id="job_type" required>
													<option>Choose...</option>
													{jobReducer.map(job => (
														<option key={job.id} value={job.label.toLowerCase()}>{job.label}</option>
													))}

												</select>
												<div className="invalid-feedback">
													Please select a valid state.
												</div>
											</div>
											<div className="col-6 py-2 ">
												<label htmlFor="experience" className="form-label label_bold">Experience</label>
												<select
													onChange={handleChange}
													name="experience"
													className="form-select shadow-none"
													id="experience"
													required>
													<option>Choose...</option>
													<option value="1">1</option>
													<option value="2">2</option>
													<option value="3">3</option>
													<option value="4">4</option>
													<option value="5">5</option>
												</select>
												<div className="invalid-feedback">
													Please select a valid state.
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* // Work Content End ////////////////////  */}

							{/* // Job Content Start ////////////////////  */}
							<div className="job_main shadow mb-5 bg-body rounded mt-5">
								<h2 className="header_bold p-4">Job Type</h2>
								<div className="border_line"></div>
								<div className="row needs-validation p-4">
									<div className="col-12 py-2 ">
										<label htmlFor="validationCustom01" className="form-label label_bold">Label</label>
										<FormInput
											type="text"
											name="label"
											id="validationCustom01"
											className="form-control"
											inputRef={inputRef}
											handleChange={handleChange}
											errorMessage="Job Type is required, must be at least 4 characters"
										/>
										<div className="valid-feedback">
											Looks good!
										</div>
									</div>
									<div className="col-12 text-end py-2 ">
										<button onClick={() => {
											inputRef.current.value = ""
										}} type="button"
																		className="btn btn-outline-secondary col-12 col-sm-3 my-1 m-sm-2 text-primary btn_style">Отменить
										</button>
										<button onClick={jobHandleClick} type="button"
																		className="btn btn-primary col-12 col-sm-3 my-1 m-sm-2  btn_style">Сохранить
										</button>
									</div>
								</div>
							</div>
							{/* // Job Content End ////////////////////  */}
						</div>
					</div>
					<div className="col-12 text-end py-2 ">
						<div className="border_line mb-1"></div>
						<button onClick={() => {
							formRef.current.reset()
						}} className="col-4 col-sm-2 m-1 m-sm-2 text-primary btn btn-outline-secondary btn_style" type="button">
							Отменить
						</button>
						<button type="submit" className="col-4  col-sm-2 m-1 m-sm-2 btn btn-primary btn_style">Сохранить</button>
					</div>
				</form>
			</div>
			<UserList removeItemUserList={removeItemUserList}/>
			<JobList/>
		</main>
	);
};

export default App;