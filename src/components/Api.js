import axios from 'axios';
import React, { Component } from 'react';
import Cookies from 'js-cookie';

export function yaapi(type, data, params, mname, cb, err, headers=true) {
	/*
		запросы
		type - параметры
		params - параметры get
		mname - путь 
		err - ошибки			
	*/
	
	let head = { Authorization: 'OAuth ' + Cookies.get('token') }
	if (!headers) {
		head = {}
	}	
	axios({
		method: type,
		url: mname,
		data: data,
		params: params,
		headers: head
	})
	.then(function(response) {
		cb(response.data)
	}, (error) => {
		if (error.response.status === 401) {
			document.location.href = '/auth'
		}
		err( error )
	});

}

export default class PreLoader extends Component {

	render() {
		
		return (
			<div>
				{(this.props.on)?
				(<div>
					<img 
						alt = "back" 
						onClick = {this.goBack}
						style = {{cursor:"pointer", marginLeft:5 , position:"fixed", opacity:0.8}} 
						width = "100%" height = "100%" 
						src = "/pic/preloader.gif"	/>
						
				</div>)
				:
				null
				}
			</div>
		);
	}
	
}
