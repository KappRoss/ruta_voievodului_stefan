import React from 'react';
import Carousel from 'react-elastic-carousel';
// import Item from 'react-elastic-carousel';
import './scrol20Style.css';
import { NavLink } from 'react-router-dom';
import {changeActiveAttraction} from '../../state/actions/settingsActions';
import {connect} from "react-redux";
import romania from "../../lib/romania";
// import { fromRenderProps } from 'recompose';

const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
      ];

const renderPagination = (startItem) => ({activePage, pages}) => {
  const attrInPage = Math.ceil(romania.ro.titles.length / pages.length);
  const start = startItem + 1;
  console.log(romania.ro.titles, pages);
  const end = startItem + attrInPage;
  return (
    <div className='pagination-wrap'>
      <span className='pagination pagination-start'>
        {start}
      </span>
      <span className='pagination pagination-dash' />
      <span className='pagination pagination-end'> {end}</span>
      <span className='pagination pagination-all'> / {romania.ro.titles.length}</span>
     
    </div>
  );
}

class Scroll20 extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        startItem: 0,
        showUpdateHover: false,
        showedBtn: ''
      }
    }

    slide = (currentItem, nextItem) =>
      this.setState({ startItem: nextItem.index });

    toggleContent = (item) => () => {
      this.props.changeActiveAttraction(item)
    }

    showHideUpdateBtn = (name) => () => {
      this.setState({
        showUpdateHover : !this.state.showUpdateHover,
        showedBtn: name
      });
    }
    render(){
      const { locId } = this.props;
      const isActive = (i) => this.state.showUpdateHover && this.state.showedBtn === `img-${i}`;
      return (
        
        <Carousel 
            className = "ggg"
            breakPoints={breakPoints}
            itemsToShow={4}
			      itemsToScroll={1}
            onNextStart={this.slide}
            onPrevStart={this.slide}
            renderPagination={renderPagination(this.state.startItem)}
        >

        
        {romania[locId].titles.map((k, i) => (
            <div
              key={i}
              className={`ro-slide ${isActive(i) && 'active'}`}
              onClick={this.showHideUpdateBtn(`img-${i}`)}
            >
                <div
                  className="ro-slide-image"
                  style={{
                    backgroundImage: `url(${romania.img[i]})`,
                  }}
                />
                
                
                <div  className="ro-slide-text">{k}</div>

                
            
                    <NavLink to="/detail">
                      <button
                        onClick={this.toggleContent(i)}
                        className= "btnToInfo"
                      >
                        {romania.buttons[locId]}
                      </button>
					          </NavLink>


            </div>
        ))}
        
        
        </Carousel>
        
      )
    }
  }
export default connect(null,{changeActiveAttraction})(Scroll20)