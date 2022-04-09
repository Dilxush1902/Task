import React from 'react';
import {MdDelete} from "react-icons/md";

const UsersListItem = ({item,dataRemove}) => {
	return (
			<tr>
				<th scope="row">{item.uuid}</th>
				<td>{item.name}</td>
				<td>{item.birthDate}</td>
				<td>{item.phoneNumber}</td>
				<td>{item.email}</td>
				<td>{item.companyName}</td>
				<td>{item.jobType}</td>
				<td>{item.experience}</td>
				<td>
					<button onClick={()=>dataRemove(item.uuid)} className="btn shadow-none btn-outline-danger"><MdDelete/></button></td>
			</tr>
	);
};

export default UsersListItem;