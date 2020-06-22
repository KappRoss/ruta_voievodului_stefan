import React from 'react';
import './routesSelection.css';
import Map from "../routesSelection/googleMaps"
import connect from "react-redux/es/connect/connect";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import styled from "styled-components/macro";
import { allAttractions } from "../../lib/attractions";

const Chisinau = {latitude: 47.025563, longitude: 28.830966}

const RoutesSelection = ({act, loc, places, locId}) => {
  let f = -1;
  if (!act[4]) {
    act[4] = [];
  }
  const googleMapsApiKey = "js?key=AIzaSyAzICfk_cT_rY6SjI_OHIZBABrGW7B7ars&v=3.exp&";

  const  printDocument = () => {
    let imgY = -20;
    const width = document.querySelector('.gm-style').clientWidth ;
    if(width === 1100){
      imgY = 0;
    }
    else if (width === 320){
      imgY = -40;
    }
    else{
      imgY=-20
    }
    html2canvas(document.querySelector('.gm-style'), {
      useCORS: true,
      allowTaint: true,
      async:false,
      // scale: 10,
      scrollY: -window.scrollY,
      ignoreElements: (node) => {
        return node.nodeName === 'IFRAME';
      }
    })
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/jpeg');
          const pdf = new jsPDF({
            orientation: 'landscape',
          });
          const imgProps= pdf.getImageProperties(imgData);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
          pdf.addImage(imgData, 'PNG', 0, imgY, pdfWidth, pdfHeight);
          pdf.save("download.pdf");
        })
    ;
  }
  const atr = (subAttr, arr) => {
    return(
        <React.Fragment>
          {arr.map((k, i) => {
            if (!k) return null;
            f += 1;
            const item = subAttr[i];
            const { id, [locId]: {title, desc, district} } = item;
            return (
                  <React.Fragment key={i}>
                    <div className={`routes-path routes-path-${f}`}>
                      <div className="routes-path-round" />
                      <div className="routes-path-line">
                        {/*<div style={{marginTop: '-25px'}}>20km</div>*/}
                      </div>
                      <div className="routes-path-round" />
                    </div>
                    <div key={i} className="routes-item">
                      <div className="routes-entity">
                        <div className="routes-entity-top">
                          <img src={require('../createRout/dropDown/img/'+id+'.png')} alt="route"/>
                          <div className="routes-entity-name">
                            <span className="traseni">{district}</span><br />
                            {title}
                          </div>
                        </div>
                        <div className="routes-entity-desc">{desc}</div>
                      </div>
                    </div>
                  </React.Fragment>
            );
          })}
        </React.Fragment>
    )
  }

  return(
      <div className="routes-selection">
        <div className="routes-selection-title">
          <span style={{width: '120px'}} />
          <span>{loc.title[2]}</span>
          <div className="routes-selection-pdf" onClick={()=>printDocument()}>{loc.title[3]}</div>
        </div>
        <div className="routes-selection-desc">{loc.desc[1]}</div>
        <div className="routes-wrap routes-row">
          {act.map((k, i) => {
            if (!k) return null;
            f += 1;
            const item = allAttractions.find(b => b.id === i);
            const { img: { img3 }, subAttr, [locId]: { middleDesc } } = item;
            return (
                <React.Fragment  key={middleDesc}>
                  {f !== 0 && <div className={`routes-path routes-path-${f}`}>
                      <div className="routes-path-round" />
                      <div className="routes-path-line">
                        {/*<div style={{marginTop: '-25px'}}>20km</div>*/}
                      </div>
                      <div className="routes-path-round" />
                    </div>
                  }
                  <div className="routes-item">
                    <div className="routes-entity">
                      <div className="routes-entity-top">
                        <img src={img3} alt="route"/>
                        <div className="routes-entity-name">{loc.name[i]}</div>
                      </div>
                      <div className="routes-entity-desc">{middleDesc}</div>
                    </div>
                  </div>
                  {atr(subAttr, k)}
                </React.Fragment>
              );
          })}
        </div>
        {<Map
            googleMapURL={
              'https://maps.googleapis.com/maps/api/' +
              googleMapsApiKey +
              '&libraries=geometry,drawing,places'
            }
            markers={[
              Chisinau,
              ...places.filter(Boolean)
            ]}
            loadingElement={ <LoadingElement  />  }
            containerElement={ <ContainerElement    id={'divToPrint'}/>}
            mapElement={<div   style={{height: `100%`}}/>}
            defaultCenter={Chisinau}
            defaultZoom={12}
        />}
      </div>
  )
}

const LoadingElement = styled.div`
   height: 100%;
   width: 100%;
`;

const ContainerElement = styled.div`

  @media (min-width: 320px) and (max-width: 767px) {
    width: 320px;
    height: 320px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
  width: 768px;
  height: 768px;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
  width: 1025px;
   height: 768px;
  
}
@media (min-width: 1281px) {
    width: 1100px;
   height: 800px;
  
}
`;
const mapStateToProps = state => ({
  places: state.settings.cordinates
})
export default connect(mapStateToProps, null)(RoutesSelection);
