import React from 'react';
import './footer.css';

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div className="Footer-Site-Title">
					<div className="Department-Footer-Name">
                        <h1 >
							<b>Iniciativa Atlântico - Academy Future</b>
							<br/>
						</h1>
						<h3>
						  © Academia Saúde Mais 2021. Design Development by <a href="https://github.com/EstefenisFL/ProjectSquadInfinityAcademyFuture" target="_blank">Squad Infinity</a>
						</h3>
                    </div>			
				</div>
			</footer>
		);
	}
}

export default Footer;
