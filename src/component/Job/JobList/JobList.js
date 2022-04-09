import React from 'react';
import "./jobList.css";
import JobListItem from "./JobListItem";
const JobList = () => {
	return (
		<div className="job_list shadow-lg mb-5 bg-body rounded-3 mt-5">
			<h2 className="header_bold p-4" >Job Lists</h2>
			<div className="border_line"> </div>
			<div className="table_box p-4 text-center">
				<table className="table table-bordered">
					<thead 	>
					<tr>
						<th scope="col">№</th>
						<th scope="col">Full name</th>
						<th scope="col"> </th>
					</tr>
					</thead>
					<br/>
					<tbody style={{border:"1px solid #e5e9eb"}}>
							<JobListItem/>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default JobList;