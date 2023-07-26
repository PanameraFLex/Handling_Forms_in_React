import React, { Component } from 'react';
import Item from './list';
import Button from './button';
const under={
	// backgroundColor: 'green',
	color: 'white',
	// border: ".05rem solid green",
	textDecoration: 'none'
}
const nav_item = ["HOME", "ABOUT", "SERVICE", "CONTACT", <a style={under} href="https://carbonblack.com"><button>Login</button></a>]
const Items = ()=>{
	return (
		<>
		
		<Item nav_item={nav_item}/>
		
	
		
		</>
	)
}

export default Items;