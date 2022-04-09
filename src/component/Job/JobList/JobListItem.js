import React from 'react';
import {MdDelete} from "react-icons/md";

const JobListItem = () => {
	return (
		<tr>
			<th scope="row">1</th>
			<td>Mark</td>
			<td>
				<button className="btn shadow-none btn-outline-danger"><MdDelete/></button></td>
		</tr>
	);
};

export default JobListItem;