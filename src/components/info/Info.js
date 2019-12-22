import React from 'react';


const Info = ({name, entries}) => {
	return(
		<div>
		 <div className='white f3 center'>
		  {`${name}, your current entry count ...`}
		 </div>
		 <div className='white f1 center'>
		  {entries}
		 </div>
		</div>	
	)
}
export default Info; 