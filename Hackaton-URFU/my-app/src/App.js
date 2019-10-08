import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cookies from 'js-cookie';

class App extends Component {

	componentDidMount() {
		let token = Cookies.get( 'token' );
		
		if (token == null) {
			document.location.href = 'https://oauth.yandex.ru/authorize?response_type=token&client_id=ffca513c71054c12839b3d27ebc18b9a';
		} 
	}
	
	render() {
		return (
		  <div className="App">
			<a href = {"/list/"} >мои файлы</a>	
		  </div>
		);
	}
}

export default App;
