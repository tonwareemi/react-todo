import React from "react"

function List({items,deleteFunction}){

	return(
		<div className="list">
			{
				items.map((val,i)=>(
					<div className="item" key={val.key}>
						<p>{val.value}</p> <span onClick={deleteFunction}>del</span>
					</div>
				))
			}
		</div>
		)
}

export default List