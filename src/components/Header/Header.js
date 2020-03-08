import React, {Component} from 'react'

class Header extends Component{
	constructor(props){
		super(props)
		console.log('The header  constructor........')
	}
	componentWillMount(){
		console.log(' the header Component will mount ....')
	}
	componentDidMount(){
		console.log('The header component did mount......')
	}
	render(){
		console.log('The header render method.......')
		return(
			<div>
				<nav>
					<ul>
						<li><a href='#'>Home</a></li>
						<li><a href='#'>About</a></li>
						<li><a href='#'>Contact</a></li>
						<li><a href='#'>Products</a></li>
						<li><a href='#'>FAQ</a></li>
					</ul>
				</nav>
			</div>
		)
	}
}

export default Header