import React from 'react';
import {MdDelete} from "react-icons/md";

const UsersListItem = ({item,removeItemUserList}) => {
	return (
			<tr>
				<th scope="row">{item.uuid}</th>
				<td>{item.user_infos.firstName}  {item.user_infos.lastName}</td>
				<td>{item.user_infos.dob}</td>
				<td>{item.user_infos.phoneNumber}</td>
				<td>{item.user_infos.email}</td>
				<td>{item.work_area.companyName}</td>
				<td>{item.work_area.jobType}</td>
				<td>{item.work_area.experience}</td>
				<td>
					<button onClick={()=>removeItemUserList(item.uuid)} className="btn shadow-none btn-outline-danger"><MdDelete/></button></td>
			</tr>
	);
};

export default UsersListItem;