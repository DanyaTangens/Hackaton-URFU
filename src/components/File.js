import React, { Component } from 'react';
import '../bootstrap/css/bootstrap.css';

class File extends Component {	
	render() {		
		return (
			<div className="row list-group-flush">
				<div className = "col-sm-11">
					<img 
						alt = "document" 
						src="/pic/doc.png" 
						width = "30" 
						height = "30" />
					<label style = {{margin:5}}>{this.props.item.name}</label>
					<br />
				</div>	
				
			</div>
		);
	}
}
export default File; 
