import React, { useState } from "react"

const Select = (props) =>{
    const [active, setActive] = useState('')
    const handleActiveChange = (event) => {
        props.onChange(event.target.value)
        setActive(event.target.value)
    }
    return(
        <div className="selectWrapper">
            <div className="selectLabel">{props.name}</div>
            <select onChange={handleActiveChange}  name="" id="" value={active}>
                {props.list.map((el) => {
                   return(<option key={`${Date.now()}` + `${Math.floor(Math.random()*90000) + 10000}`} value={el}>{el}</option>)
                })}
            </select>
        </div>
    )
}
export default Select