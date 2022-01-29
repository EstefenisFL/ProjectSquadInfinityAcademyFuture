import React from 'react';
import './mainBody.css'
import Header from '../../Shared/Header(fixed)/headerFixed'
import TopMenu from '../../Shared/topMenu/index'
import Footer from '../../Shared/Footer(fixed)/footerFixed';

class MainBody extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<main>
				<Header/>
				<TopMenu/>
				<Footer/>
				<body>
				<div className="Main-Content">
					<div className="Above-Fold">
						<div className="Home-Branch-Box">			
								<div className="Branch-Box-Heading">
									<h2>
										<b className="Text-Box">Pilates para todos os dias</b>
									</h2>
									<br/>
									Exercite-se o quanto quiser com os nossos planos disponíveis 
								</div>
								<div className="sectionMain"> 
									<div className = "month-Plan">
										<h2>
											<b className="Text-Box"><i>Plano Mensal</i></b>
											<div className = "listOne">No plano mensal você aproveita vários dos nossos benefícios
											como: <br/>
												<div className = "bugMil">
													<i>
													<li>Mat Pilates</li>
													<li>Pilates na Gestação</li> 
													<li>Pilates na Hérnia de Disco</li> 
													<li>Pilates Acrobático</li>
													</i>
												</div>
												<div className = "valorOne">
													<strong>R$ 149,00 <br /> <div className = "txtVal">Por mês</div></strong>
												</div><br />
												<div className = "Info">
													<p className = "txtSaiba">Saiba mais e aproveite!</p>
												</div> 
											</div>
										</h2>
									</div>
									<div className = "annual-Plan">
										<h2>
											<b className="Text-Box"><i>Plano Anual</i></b>
											<div className = "listTwo">No plano anual você terá acesso exclusivo a todas as nossas modalidades
											 e studios disponíveis em todo o território nacional. <br />
											 <div className = "promo">
											 		<i >Aproveite já nossos descontos e promoções!</i>
											 </div>
											 <div className = "valorTwo">
													<strong>R$ 189,00 <br /><div className = "txtVal">Por mês</div></strong>
												</div><br />
												<div className = "Info">
													<p className = "txtSaiba">Saiba mais e aproveite!</p>
												</div>									 
											</div>
										</h2>
									</div>
								</div>
								<div>
								<div className = "valorClient">
									<div className = "benef">
										<h2 className = "headBen">Principais Benefícios do Pilates</h2>
											<div className = "description">
												<ol>
												<strong>Aumento da Resistência Física</strong> <br />
												<p>Como dito anteriormente, os exercícios de Pilates trabalham vários músculos do corpo ao mesmo tempo, indo desde músculos que você nunca trabalhou até aqueles que estamos acostumados a fortalecer nas atividades do dia a dia.
												Tonifica a Musculatura
												Bom, com todo esse fortalecimento físico desenvolvido durante as aulas de Pilates, quem se beneficia é o famoso tanquinho.
												Além disso ele está tonificando o abdômen, que é ótimo para a prática de atividades físicas e também esportes, pois a ativação desse músculo é exigida em todos os exercícios.
												Aumento da Flexibilidade
												Antes de mais nada é importante falar que a flexibilidade varia de pessoa para pessoa e também envolve fatores como altura, sexo, atividades diárias, postura, entre outras.
												Os primeiros movimentos que podemos fazer para aumentar a flexibilidade são os famosos alongamentos para que o corpo saia do modo estático de ficar o dia todo sentado na frente de um computador.
												Dessa forma, existe uma maior concentração e em consequência uma maior circulação do sangue, aumentando a quantidade bombeada em cada músculo.
												Esse movimento simples ajuda em muito o seu corpo sendo então um dos ótimos benefícios do Pilates!</p>
											</ol>
											<ol>
												<strong>Corrige Problemas Posturais</strong>  <br />
												<p>CUmas das maiores procuras pelo Pilates são por pessoas que possuem algum tipo de problema postural.
													Por estar sempre em uma péssima condição postural, a coluna vai acumulando vários problemas que podem evoluir para algo mais significativo no futuro.
													O Método é essencial no tratamento desses desconfortos pois ele promove exercícios de reabilitação que atuam nessas áreas, além de exercícios de alongamento e flexibilidade que ensinam à coluna qual a melhor postura a ser aplicada no dia a dia.
													Durante os exercícios, o fortalecimento das musculaturas que mantém a coluna ereta é essencial para que a longo prazo esses problemas possam ser tratados da melhor maneiro possível, evitando que continuem evoluindo no futuro, por isso
													é um dos grandes benefícios do Pilates. É importante lembrar que se não tratado, outros problemas podem surgir ao longo do tempo em decorrência de uma negligência com a postura, sendo assim é importante além de praticar Pilates, você procurar um bom especialista no caso.</p>
											</ol>
											<ol>
												<strong>Ajuda a Melhorar a Respiração</strong>  <br />
												<p>Como dito anteriormente, os exercícios de Pilates trabalham vários músculos do corpo ao mesmo tempo, indo desde músculos que você nunca trabalhou até aqueles que estamos acostumados a fortalecer nas atividades do dia a dia.
												Tonifica a Musculatura
												Bom, com todo esse fortalecimento físico desenvolvido durante as aulas de Pilates, quem se beneficia é o famoso tanquinho.
												Além disso ele está tonificando o abdômen, que é ótimo para a prática de atividades físicas e também esportes, pois a ativação desse músculo é exigida em todos os exercícios.
												Aumento da Flexibilidade
												Antes de mais nada é importante falar que a flexibilidade varia de pessoa para pessoa e também envolve fatores como altura, sexo, atividades diárias, postura, entre outras.
												Os primeiros movimentos que podemos fazer para aumentar a flexibilidade são os famosos alongamentos para que o corpo saia do modo estático de ficar o dia todo sentado na frente de um computador.
												Dessa forma, existe uma maior concentração e em consequência uma maior circulação do sangue, aumentando a quantidade bombeada em cada músculo.
												Esse movimento simples ajuda em muito o seu corpo sendo então um dos ótimos benefícios do Pilates!</p>
											</ol>
											</div>
											
									</div>
								</div>
									
								</div>	
						</div>
					</div>
				</div>
				</body>
			</main>
		);
	}
}

export default MainBody;
