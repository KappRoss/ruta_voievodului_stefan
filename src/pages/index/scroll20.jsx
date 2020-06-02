import React from 'react';
import Carousel from 'react-elastic-carousel';
// import Item from 'react-elastic-carousel';
import './scrol20Style.css';
import { NavLink } from 'react-router-dom';
import {changeActiveAttraction} from '../../state/actions/settingsActions';
import {connect} from "react-redux";
// import { fromRenderProps } from 'recompose';

class Scroll20 extends React.Component {
    constructor(props) {
      super(props)
      this.state = { 
        showUpdateHover: false,
        showedBtn: '',  
        roname: [
            'Cetatea Sucevei, județul Suceava', 
            'Mănăstirea Putna – Biserica “Adormirea Maicii Domnului”, județul Suceava', 
            'Biserica “Sfânta Cruce din Pătrăuți”, județul Suceava', 
            'Biserica “Sfântul Gheorghe” a fostei Mănăstiri Voroneț, județul Suceava',
            'Biserica “Tăierea capului Sfântului Ioan Botezătorul” din Reuseni, județul Suceava',
            'Biserica cu hramul “Înălțarea Sfintei Cruci” din Volovăț, județul Suceava',
            'Biserica cu hramul “Sfântul Ilie” din Comuna Scheia, județul Suceava',
            'Mănăstirea Sfântul Nicolae Popăuți, județul Botoșani',
            'Biserica “Sfântul Gheorghe” din Hârlău, județul Iași',
            'Biserica “Cuvioasa Parascheva” și ruinele Beciului Domnesc din Cotnari',
            'Palatul Culturii Iași',
            'Biserica cu hramul “Sfântul Nicolae”, județul Iași',
            'Biserica Mănăstirii Dobrovăţ, cu hramul “Pogorârea Sfântului Duh”, județul Iași',
            'Cetatea Neamț - “cuibul de vulturi al Moldovei medievale”, județul Neamț',
            'Curtea Domnească și Biserica cu hramul “Sfântul Ioan Botezătoul”–din Piatra Neamț, județul Neamț',
            'Mănăstirea Neamț, județul Neamț',
            'Mănăstirea Războieni, județul Neamț',
            'Ansamblul monumental Podul Înalt-Vaslui (legat de lupta de la Vaslui-10.01.1475, sat Băcăoani, comuna Munteni de Jos)',
            'Ansamblul Curților Domnești de la Vaslui și a Bisericii Domnești“Tăierea Capului Sf. Ioan Botezătorul” din Vaslui',
            'Biserica “Adormirea Maicii Domnului din Borzești-Bacău, județul Bacău'
            ],

            

      }
      

      this.breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
      ]

      
    }

    toggleContent = (item) => () => {
      this.props.changeActiveAttraction(item)
    }

    showHideUpdateBtn =  ({target:{name}}) => {
      console.log(name)
      this.setState({
        showUpdateHover : !this.state.showUpdateHover,
        showedBtn: name
      });
    }
    render(){
      return (
        
        <Carousel 
            className = "ggg"
            breakPoints={this.breakPoints}
            itemsToShow={4}
			itemsToScroll={1}    
        >

        
        {this.state.roname.map((k, i) => (
            <div key={i} className="ro-slide">
                <img
                  
                  name = {`img-${i}`} 
                  onClick={this.showHideUpdateBtn} 
                  src={require('../../img/Romania/'+(i+1)+'.jpg')} alt={k} 
                >
                  
                   
                </img>
                {this.state.showUpdateHover  && this.state.showedBtn === `img-${i}` &&
            
                    <NavLink to="/about">
                      <button onClick={this.toggleContent(i)} className= "btnToInfo">VEZI MAI MULT</button>
					          </NavLink>

                  }
                
                <div>{k}</div>
            </div>
        ))}
        
        
        </Carousel>
        
      )
    }
  }
export default connect(null,{changeActiveAttraction})(Scroll20)