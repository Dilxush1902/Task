import React from 'react';
import "./work.css";
const WorkDetails = () => {
	return (
			<div className="work_main shadow mb-5 bg-body rounded">
				<h2 className="header_bold p-4" >Work Details</h2>
				<div className="border_line"> </div>
				<div className="row needs-validation p-4" >
					<div className="col-12 py-2 ">
						<label htmlFor="validationCustom01" className="form-label label_bold">Company Name</label>
						<input type="text" className="form-control" id="validationCustom01" value="Company Name" required/>
						<div className="valid-feedback">
							Looks good!
						</div>
					</div>
					<div className="col-12 ">
						<div className="row">
							<div className="col-6 py-2 ">
								<label htmlFor="job_type" className="form-label label_bold">Job type</label>
								<select className="form-select shadow-none" id="job_type" required>
									<option selected disabled value="">Choose...</option>
									<option>Developer</option>
								</select>
								<div className="invalid-feedback">
									Please select a valid state.
								</div>
							</div>
							<div className="col-6 py-2 ">
								<label htmlFor="experience" className="form-label label_bold">Experience</label>
								<select className="form-select shadow-none" id="experience" required>
									<option selected disabled value="">Choose...</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</select>
								<div className="invalid-feedback">
									Please select a valid state.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	);
};

export default WorkDetails;