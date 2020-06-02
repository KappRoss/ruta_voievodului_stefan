import React, {useRef} from 'react';
import './routesSelection.css';
import Map from "../routesSelection/googleMaps"
import connect from "react-redux/es/connect/connect";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const RoutesSelection = ({act, loc, places}) => {
    const mapImg = useRef(null)
    const googleMapsApiKey = "js?key=AIzaSyAzICfk_cT_rY6SjI_OHIZBABrGW7B7ars&v=3.exp&";
    const  printDocument = () => {
        console.log(mapImg)
        // const input = mapImg.current;
        const input = document.getElementById('divToPrint');
        const div = document.querySelector('#divToPrint > div:first-of-type')
        html2canvas(input, {
            useCORS: true,
            allowTaint: true,
            async:false, 
        })
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/jpeg');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 15, 40, 180, 180);

                // pdf.output('dataurlnewwindow');
                pdf.save("download.pdf");
            })
        ;
    }
    console.log(mapImg)
	const atr = arr => {
		return(
			<React.Fragment>
				{arr.map((k, i) => (
					k ?
						<React.Fragment key={i}>
							<div className="routes-path">
								<div className="routes-path-round" />
								<div className="routes-path-line">
									<div style={{marginTop: '-25px'}}>20km</div>
								</div>
								<div className="routes-path-round" />
							</div>
							<div key={i} className="routes-row">
								<div className="routes-entity">
									<div className="routes-entity-top">
										<img src={require('../createRout/img/'+i+'.png')} alt="route"/>
										<div className="routes-entity-name">
											<span className="traseni">traseni district</span><br />
											{loc.name2[i]}
										</div>
									</div>
									<div className="routes-entity-desc">Commodo amet aliquip qui est sint sit enim labore occaecat dolore sint ea mollit dolore</div>
								</div>
							</div>
						</React.Fragment>
					:null
				))}
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
			<div className="routes-wrap">
				{act.map((k, i) => (
					k ?
						<div key={i} className="routes-row">
							<div className="routes-entity">
								<div className="routes-entity-top">
									<img src={require('../createRout/img/'+i+'.png')} alt="route"/>
									<div className="routes-entity-name">{loc.name[i]}</div>
								</div>
								<div className="routes-entity-desc">Commodo amet aliquip qui est sint sit enim labore occaecat dolore sint ea mollit dolore</div>
							</div>
							{atr(k)}
						</div>
					:null
				))}
			</div>
            <Map
                // ref={mapImg}
                googleMapURL={
                    'https://maps.googleapis.com/maps/api/' +
                    googleMapsApiKey +
                    '&libraries=geometry,drawing,places'
                }
                markers={places}
                loadingElement={ <div style={{height: `100%`, width: '100%'}}/>}
                containerElement={ <div  style={{height: "50vh", width: '100%'}}/>}
                mapElement={<div id='divToPrint' style={{height: `100%`}}/>}
                // defaultCenter={{lat:places[0].latitude, lng:places[0].longitude }}
                defaultZoom={12}
            />                   
			{/*<img src={require('./img/map.png')} alt="map"/>*/}
		</div>
	)
}
const mapStateToProps = state => ({
    places: state.settings.cordinates
})
export default connect(mapStateToProps, null)(RoutesSelection);