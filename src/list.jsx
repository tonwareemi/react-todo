import React from "react"

function List({items}){

	return(
		<div className="list">
			{
				items.map((val,i)=>(
					<div className="item" key={`n${i}`}>
					<p>{i + 1}</p>	<p>{val}</p> <span>del</span>
					</div>
				))
			}
		</div>
		)
}

export default List