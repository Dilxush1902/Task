import React from 'react';
import {MdDelete} from "react-icons/md";

const JobListItem = ({item,removeJobTypeItem}) => {
	return (
		<tr>
			<th scope="row">{item.id}</th>
			<td>{item.label}</td>
			<td>
				<button onClick={()=>removeJobTypeItem(item.id)} className="btn shadow-none btn-outline-danger"><MdDelete/></button></td>
		</tr>
	);
};

export default JobListItem;