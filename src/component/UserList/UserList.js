import React from 'react';
import "./userList.css";
import UsersListItem from "./UsersListItem";
import {useSelector} from "react-redux";

const UserList = ({dataRemove}) => {
	const {usersReducer} = useSelector(state=>state)
	return (
		<div className="user_list shadow-lg mb-5 bg-body rounded-3 mt-5">
			<h2 className="header_bold p-4" >User Lists</h2>
			<div className="border_line"> </div>
					<div className="table_box p-4 text-center">
						<table className="table table-bordered">
							<thead 	>
							<tr>
								<th scope="col">№</th>
								<th scope="col">Full name</th>
								<th scope="col">Date of birth</th>
								<th scope="col">Phone</th>
								<th scope="col">Email</th>
								<th scope="col">Company Name</th>
								<th scope="col">Job Type</th>
								<th scope="col">Experience</th>
								<th scope="col"> </th>
							</tr>
							</thead>
							<tbody style={{border:"1px solid #e5e9eb"}}>
							{usersReducer.map((item)=>(
									<UsersListItem key={item.uuid} dataRemove={dataRemove} item={item}/>
							))

							}
							</tbody>
						</table>
					</div>
		</div>
	);
};

export default UserList;