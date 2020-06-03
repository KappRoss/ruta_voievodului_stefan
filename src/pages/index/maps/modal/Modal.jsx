import React from 'react';
import Popup from "reactjs-popup";
import styled from 'styled-components';

const StyledPopup = styled(Popup)`
  &-overlay {
   
  }
  
  &-content {
    border: none!important;
    background: #000000!important;
    padding: 25px!important;
    text-align: center;
    justify-content: center;
    display: flex;
  }

  &-close {
    background: white!important;
  }
`

export const Modal = ({visible,onClose,href,namePlace}) => {
    
    const closeModal = () => {
        onClose()
    }
       return(
        <div>
           <StyledPopup
             open = {visible}
             closeOnDocumentClick
             onClose={closeModal}
            >
            <div className="modal">
            <div className="close" onClick={closeModal} >
              <div 
              style={{
                background: 'white',
                width: '20px',
                display: 'flex',
                justifyContent: 'center',
                float: 'right',
                borderRadius: '0% 40%',
                height: '20px'
              }}>
              &times;
              </div>
              
            </div>
            
            <div className='modalPoPuP'>
            <div>
            <h2>{namePlace}</h2>
            </div>
            <div className="ShortDSCR">
               <p>Short description</p>
            </div>
            <div>
               <a href={href} target="_blank"  rel="noopener noreferrer">Detaliile</a>
            </div>
         </div>
            {/* content */}
            </div>
            </StyledPopup>
        </div>  
       )  
}