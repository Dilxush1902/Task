import React, {useState} from 'react';
import "./jobType.css"
const JobType = () => {
	const [jobType,setJobType]=useState("")
	const handleSubmit = (e) => {
	  e.target.preventDefault()
	}
	return (
		<div className="job_main shadow mb-5 bg-body rounded mt-5">
			<h2 className="header_bold p-4" >Job Type</h2>
			<div className="border_line"> </div>
			<form className="row needs-validation p-4" onSubmit={handleSubmit} >
				<div className="col-12 py-2 ">
					<label htmlFor="validationCustom01" className="form-label label_bold">Label</label>
					<input
						type="text"
						className="form-control"
						id="validationCustom01"
						value={jobType}
						onChange={(e) =>setJobType(e.target.value) }
						required/>
					<div className="valid-feedback">
						Looks good!
					</div>
				</div>
				<div className="col-12 text-end py-2 ">
					<button  className="btn btn-outline-secondary col-12 col-sm-3 my-1 m-sm-2 text-primary  btn_style">Отменить</button>
					<button type="submit" className="btn btn-primary col-12 col-sm-3 my-1 m-sm-2  btn_style" >Сохранить</button>
				</div>
			</form>
		</div>
	);
};

export default JobType;