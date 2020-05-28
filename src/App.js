import React from 'react';
import './App.css';
import {loc} from './lib/content';
import {Route, Switch} from 'react-router-dom';

import MainMenu from './components/mainMenu/mainMenu'
import Footer from './components/footer/footer'

import Index from './pages/index/index';
import About from './pages/about/about';
import MainMoldova from './pages/mainMoldova/mainMoldova';
import Romania from './pages/romania/romania';
import OtherMoldova from './pages/otherMoldova/otherMoldova';
import CreateRout from './pages/createRout/createRout';
import RoutesSelection from './pages/routesSelection/routesSelection';

const scroll = () => {
	// const b = document.getElementsByClassName('b0')[0];
	// window.scrollTo(parseInt(b.style.left)-screen.width/2, parseInt(b.style.top)-100);
}

class App extends React.Component {

	state = {
		loc: 'ro',
		menu: false,
		cur: 0,
		act: [],
		drop: []
	}

	setLoc = loc => this.setState({loc});
	mobMenu = menu => this.setState({menu});
	sliderMove = cur => this.setState({cur});
	addAct = (a, i) => {
		const act = [...this.state.act];
		if(!i && i !== 0) {
			if(act[a]) delete(act[a]);
			else act[a] = [];
		}
		else {
			if(!act[a]) act[a] = [];
			if(!act[a][i]) act[a][i] = true;
			else delete(act[a][i]);
		}
		this.setState({act});
	}
	setDrop = i => {
		const drop = [...this.state.drop];
		if(drop[i]) delete(drop[i]);
		else drop[i] = true;
		this.setState({drop});
	}
	
	render() {
		return (
			<div className="App">
				<MainMenu mobMenu={this.mobMenu} menu={this.state.menu} setLoc={this.setLoc} loc={loc.menu[this.state.loc]} cur={this.state.loc} />
				<Switch>
					<Route path="/" exact render={() => (<Index 
							sliderMove={this.sliderMove} 
							cur={this.state.cur} 
							loc={loc.index[this.state.loc]}
						/>)} 
					/>
					<Route path="/about" exact render={() => <About loc={loc.about[this.state.loc]} />} />
					<Route path="/other-moldova" exact render={() => <MainMoldova loc={loc.moldova[this.state.loc]} />} />
					<Route path="/romania" exact render={() => <Romania loc={loc.romania[this.state.loc]} />} />
					<Route path="/moldova" exact render={() => <OtherMoldova loc={loc.otherMoldova[this.state.loc]} />} />
					<Route path="/create-rout" exact render={() => 
						<CreateRout drop={this.state.drop}
							loc={loc.CreateRout[this.state.loc]}
							addAct={this.addAct}
							act={this.state.act}
							setDrop={this.setDrop}
					/>} />
					<Route path="/routes-selection" exact render={() => <RoutesSelection act={this.state.act} loc={loc.CreateRout[this.state.loc]} />} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;