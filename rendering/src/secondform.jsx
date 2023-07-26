import React, { Component } from 'react';
import './secondform.css'
const secondFormStyle = {
	border: ".1rem solid red",
  width: "30vw"
}
const SecondForm = (props)=>{
	return (<>

<form style={secondFormStyle}>
  <fieldset >
    <legend>No-Bootstrap Styling</legend>
    <div className="firstInput">
      <label for="disabledTextInput" className="">Enter input</label>
      <input type="text" id="disabledTextInput" className="" placeholder="Enabled input"/>
    </div>
    <div className="firstInput">
      <label for="disabledSelect" className="">Disabled select menu</label>
      <select id="disabledSelect" className="">
        <option>Disabled select</option>
		<option>Enabled select</option>

      </select>
    </div>
    <div className="">
      <div className="">
        <input className="" type="checkbox" id="disabledFieldsetCheck" disabled/>
        <label className="" for="disabledFieldsetCheck">
          Can't check this
        </label>
      </div>
    </div>
    <button type="submit" className="">Submit</button>
  </fieldset>
</form>

	</>)
}
export default SecondForm 