import React, { Component } from 'react';
const Item = (props) =>{
	const myStyle = {
		backgroundColor:'grey',
		boxSizing:'border-box',
		display:'flex',
		justifyContent:'space-around'
	}
	const item_style = {
		color:'white',
		fontFamily:'san serif'
	}
	const navitems = props.nav_item
	const navitem = navitems.map((item, index)=>
	<li key ={index}>
		{item}
	</li>)
	// console.log(navitem)
	return (<>
		<ul type="none"style={myStyle}>
			{navitem}
		</ul>
	</>)

}

export default Item