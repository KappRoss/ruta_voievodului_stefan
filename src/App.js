import React, {useRef} from 'react';
import './App.css';
import {locData} from './lib/content';
import {Route, Switch} from 'react-router-dom';
import { connect } from "react-redux";
import MainMenu from './components/mainMenu/mainMenu';
import Footer from './components/footer/footer';
import Anchor from './components/anchor/Anchor';

import Index from './pages/index/index';
import About from './pages/about/about';
import AboutUs from './pages/about/AboutUs';
import MainMoldova from './pages/mainMoldova/mainMoldova';
import Romania from './pages/romania/romania';
// import OtherMoldova from './pages/otherMoldova/otherMoldova';
import CreateRout from './pages/createRout/createRout';
import RoutesSelection from './pages/routesSelection/routesSelection';
import {setDrop, addAct, setLocalisation, setMobMenu, sliderMove}   from './state/actions/settingsActions'
// const scroll = () => {
	// const b = document.getElementsByClassName('b0')[0];
	// window.scrollTo(parseInt(b.style.left)-screen.width/2, parseInt(b.style.top)-100);
// }
const App = (props) => {
  const { loc, menu, cur, act, sliderMove } = props;
  const header = useRef(null);
    return (
        <div className={`App ${loc} region-${cur + 1}`}>
            <Anchor id="top-anchor" />
            <MainMenu ref={header} menu={menu} setLoc={setLocalisation} loc={locData.menu[loc]} cur={loc} />
            <Switch>
                <Route path="/" exact render={() => (<Index
                    sliderMove={sliderMove}
                    cur={cur}
                    loc={locData.index[loc]}
                />)}
                />
                <Route path="/about-us" render={() => <AboutUs loc={loc} />} />

                <Route path="/detail" render={() => <About locId={loc} />} />

                <Route path="/other-moldova" render={() => <MainMoldova loc={locData.moldova[loc]} />} />
                <Route path="/romania" render={() => <Romania loc={locData.romania[loc]} />} />
                <Route path="/moldova" render={() => <MainMoldova loc={locData.moldova[loc]} />} />
                <Route path="/create-rout" render={() =>
                    <CreateRout
                                loc={locData.CreateRout.ro}
                                locId={loc}
                                header={header}

                    />} />
                <Route path="/routes-selection" exact render={() => <RoutesSelection act={act} loc={locData.CreateRout[loc]} locId={loc} />} />
            </Switch>
            <Footer />
        </div>
    );
}


const mapStateToProps = state => ({
    loc:state.settings.loc,
    menu: state.settings.menu,
    cur: state.settings.cur,
    act: state.settings.act,
    drop: state.settings.drop,
})
export default connect(mapStateToProps, {setDrop, addAct, setMobMenu, sliderMove})(App);
