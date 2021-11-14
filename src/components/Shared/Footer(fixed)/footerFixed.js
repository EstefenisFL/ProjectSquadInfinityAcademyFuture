import React from 'react';
import './footer.css';

class Footer extends React.Component {
	render() {
		return (
			<header>
				<div className="Header-Site-Title">
					<img className = "Header-logo" src={logo} alt = ""/>
					
					<div className="Department-Name">
						<h1 >
							<b>Academia Saúde Mais</b>
							<br/>
						</h1>
						<h3>
							Um jeito todo diferente de ajudar a cuidar da sua saúde
						</h3>					
					</div>			
				</div>
			</header>
		);
	}
}

export default Footer;
