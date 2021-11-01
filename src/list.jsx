import React from "react"

function List({items, deleteFun}){


	return(
		<div className="list">
			{
				items.map((val,i)=>(
					<div className="item" key={val.id}>
						<p>{val.value}</p> <span onClick={ ()=>{ deleteFun(val.id)}}>del</span>
					</div>
				))
			}
		</div>
		)
}

export default List