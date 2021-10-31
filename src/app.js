import React ,{useState} from "react"
import List from "./list"


function App(){

    //state with items and list
    const [item,setItem] = useState("")
    const [list ,setList] = useState([]);

    //item saver
    const saver = event =>{
        setItem(event.target.value)
    }

    //items adding into array
    const adding = ()=>{
        var l = list;
        l.push({value:item,id:`n${list.length}`})
        setList(l)
        console.log(list)
        setItem("")
        //console.log(list)
    }

    const itemRemover =()=>{
        
    }

    return(
        <div className="home">
            <div className="input">
                <div className="inputField">
                    <input
                    type="text"
                    value={item}
                    onChange={saver} 
                    required
                    />
                <label></label>
                </div>
                <div className="addBtn" onClick={adding}>Add</div>
            </div>
            <List items={list} deleteFunction={itemRemover}/>
        </div>
        
    )
}

export default App