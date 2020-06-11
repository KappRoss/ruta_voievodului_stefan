import React from 'react';
import Popup from "reactjs-popup";
import styled from 'styled-components';

const StyledPopup = styled(Popup)`
  &-overlay {
   
  }
  
  &-content {
    border: none!important;
    background: transparent!important;
    padding: 25px!important;
    text-align: center;
    justify-content: center;
    display: flex;
  }

  &-close {
    background: white!important;
  }
`

// const getGoogleLink = (googleLoc, locLink, locId) => {
//   const coordinates = googleLoc.replace(" ", "");
//   return (
//     <a
//       href={`https://maps.google.com?saddr=Current+Location&daddr=${coordinates}`}
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       {locLink}
//     </a>
//   );
// }

export const Modal = ({
  visible,
  onClose,
  url,
  desc,
  district,
  title,
  googleLoc,
  namePlace,
  seeMore,
  locLink,
  locId
}) => (
  <div className="mapsModal">
    <StyledPopup
      open={visible}
      closeOnDocumentClick={true}
      onClose={onClose}
    >
      <div className="modal">
        <div className="close" onClick={onClose} >
          <div 
              style={{
                background: 'white',
                width: '20px',
                display: 'flex',
                justifyContent: 'center',
                float: 'right',
                borderRadius: '0% 40%',
                height: '20px',
                cursor: 'pointer'
              }}
          >
            &times;
          </div>
        </div>
        <div className='modalPoPuP'>
          <div>
            <h2>{title}</h2>
          </div>
          <div className="ShortDSCR">
            <p>{desc}</p>
            {/*<p>{district}</p>*/}
          </div>
          <div>
            <p><a href={url} target="_blank"  rel="noopener noreferrer">{seeMore}</a></p>
            <p>{/*getGoogleLink(googleLoc, locLink, locId)*/}</p>
          </div>
        </div>
          {/* content */}
      </div>
    </StyledPopup>
  </div>  
);