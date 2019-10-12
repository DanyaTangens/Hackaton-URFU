import React, { Component } from 'react';

class TeamHeader extends Component {
	
	render() {

		return (
			<div>
				<h3>Команда: Фунфырики
					{/* Если захочешь карсиво выделить
					то поищи на bootstrap что-нибудь
					https://getbootstrap.com/docs/4.3/components/
					<span className="badge badge-primary">Фунфырики</span>*/}
				</h3>
				<h3>Задание: Yandex.Disk REST API
					{/*/<span className="badge badge-secondary">Yandex.Disk REST API</span>*/}
				</h3>
			</div>
		);
	}
}

export default TeamHeader;
