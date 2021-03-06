import React from 'react';
import './mainMenu.css';
import { NavLink } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import {
  setMobMenu,
  setLocalisation
} from '../../state/actions/settingsActions';

const MainMenu = React.forwardRef((props, ref) => {
  const { setMobMenu, menu, loc, cur, setLocalisation } = props;
  return (
      <div ref={ref} className="mainMenu">
        <img
            onClick={() => setMobMenu(true)}
            className="mobile-menu"
            src={require("./img/menu.png")}
            alt="mobile"
        />
        <div className="locale">
        <span
            onClick={() => setLocalisation("ro")}
            style={{ opacity: cur === "ro" ? 1 : 0.3 }}
        >
          RO
        </span>
          &nbsp;<span style={{ paddingBottom: "3px" }}>/</span>&nbsp;
          <span
              onClick={() => setLocalisation("en")}
              style={{ opacity: cur === "en" ? 1 : 0.3 }}
          >
          EN
        </span>
        </div>
        <NavLink to="/" className="link-to-main" />
        <div className={menu ? "main-menu-wrap open-menu" : "main-menu-wrap"}>
          <img
              onClick={() => setMobMenu(false)}
              className="close-menu"
              src={require("./img/close.png")}
              alt="close"
          />
          <div className="menu-item-block">
            <NavLink to="/about-us" className="menu-item" onClick={() => setMobMenu(false)}>
              {loc[0]}
            </NavLink>
            <NavLink exact to="/?pos=map" className="menu-item menu-item-span" onClick={() => setMobMenu(false)}>
              {loc[1]}
            </NavLink>
          </div>
          <div className="menu-item-block">
            <NavLink exact to="/?pos=rom" className="menu-item" onClick={() => setMobMenu(false)}>
              {loc[2]}
            </NavLink>
            <NavLink to="/other-moldova" className="menu-item menu-item-span" onClick={() => setMobMenu(false)}>
              {loc[3]}
            </NavLink>
          </div>
        </div>
      </div>
  );
});

const mapStateToProps = state => ({
  act: state.settings.act,
  drop: state.settings.drop
});
export default connect(mapStateToProps, { setMobMenu, setLocalisation }, null, {
  forwardRef: true
})(MainMenu);
