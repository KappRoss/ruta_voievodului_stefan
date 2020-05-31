import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from 'react-elastic-carousel';
import './scrol20Style.css';

export default class Scroll20 extends React.Component {
    constructor(props) {
      super(props)
      this.state = { 
        roname: [
            'Cetatea Sucevei, județul Suceava', 
            'Mănăstirea Putna – Biserica “Adormirea Maicii Domnului”, județul Suceava', 
            'Biserica “Sfânta Cruce din Pătrăuți”, județul Suceava', 
            'Biserica “Sfântul Gheorghe” a fostei Mănăstiri Voroneț, județul Suceava',
    
            ]
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
    render() {
      return (
        
        <Carousel 
            className = "ggg"
            breakPoints={this.breakPoints}
            itemsToShow={4}
			itemsToScroll={1}    
        >

        
        {this.state.roname.map((k, i) => (
            <div key={i} className="ro-slide">
                <img src={require('../../img/Romania/'+(i+1)+'.png')} alt={k} />
                <div>{k}</div>
            </div>
        ))}
        
        
        </Carousel>
        
      )
    }
  }