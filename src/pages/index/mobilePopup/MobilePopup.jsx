import React from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
import attr, { popUpTitles, mainAttractions } from "../../../lib/attractions";

const img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPCSURBVHgB1VZNaBNBFH4zm2oExS1eGgVNRKGo0CiCYpEm9CK20gbvtrGt4KE/OQixYJueWhDbpB6E/pBWPAqtB29KtoLeqinYk9AmF+uldIsF+5PNOG+SXXc3abOgFz9I9s3bmfc3874dAgchOhmglDYQxgJ85Oc/GdUMIE0AMsDybzTQFBh5mNnPBCmr7Z/wS4yOcSkADkCAxHNsN1HOUYkD2j/VSxjE7foz1cdAdh8ScnbjJ6jbu/YpGY3tBe1OiNX49CAvR0wfVx85pHbfuCj31F8yjOtY+r4O45+WYfbzN7Napbl8cO/pg3SJA7vxnvqLMNB4pcRwSdgbW3D31TtYWls3nPBMLuuZUKGKvvCajQ80XobRpusVjSO81UdhsbsV2q6c11UyJVVzRuD4J5GqMbNxjNwORVEgFApBIpEo6+hZ83Wo85wQMi+LX4pOtBcc8Oj5s1WPxm5cVVWIRCIQDAZhfn4e+vr6wOfzQSaTsczDbEebrhljQmivcEChqk9XPrEZn5mZEcbi8cKhwqcsy8I46sPhsMVRw1kPNPg8QmbYN48m/JQQqNMnBM56jMlYDjSAGejA6M1jDAAzMztpuXDakKmLBFxQ6FCR4hn5qPEymUxCS0sLVILf7wev12vK4qQhE0br0IFo/7qTJywLsRTmhfvBPue47eS5dCHDu9OO2dlZ8WxraxOlWF1dFWVDo7qOMQYHgTIkLY7NX7vwL5BV/wTKgG1SfmZFWyO3LKyswd/CbINAPi2Rm3c8nA1voaLm2BG18dwpN8rpdBpqamqgtrYW3G63KAcCN9Wsw1OF+4VjxP3XH2CzSIQa5CIEYklZ2tFWAfeVb9BiT0icJqxzNpt1FHUqlYJAICCIr4M7KELRhjuDguxodDJGCBlEGRvlfddtQQ1OgVmpzAVXn88ZNM65LZgb6VIKbMqzoDvaFz7w4vAeJ67RZmdkh0BGbZx8yzd4q6BgZEYb6QiL4AsOwqpE8iEuiTZ9yVPFaIwFB2D847JlLp5KbZtG9PeWD470eApJLwnF5kMgv2BGSIT40yNeWPnBjX+1fNnQeN72VSv9JnN25Xye0svlFPwzm8htSzGIh1WLfr8FUnS6nRE26MCRwjd0CDe0rOMKi8EVnYozAr12fblylAOFCsi5pZhOJ5bIWH6oknExDxzAxS9gjJCUPhbRD3f6nKytmAGiWF9FH0s5caQdwZEDMZHkIxg5nhbzvec/A9+L4i3EMVxOJxa7nF+oqlSN3yqdrnPsQDssKZwQM6TMkT0IvwGVj3S1ku3vWwAAAABJRU5ErkJggg==';

const StyledPopup = styled(Popup)`
  &-overlay {
  background-color: rgba(255,255,255,0.4)!important;
  }
  &-content {
  border: none!important;
  background: #000000!important;
  width: 90%!important;
  max-height: 100%;
    overflow: auto;
    padding-bottom: 300px;
  }
`;

const getSubAttr = cur => attr.filter(item => item.id.includes(`${cur + 1}-`));

const renderSubAttr = (cur, locId) => {
  const subAttr = getSubAttr(cur);
  return (subAttr.map(item => {
    const { title, url } = item[locId];
    return (
      <div className = "add-item" key={`${item.id} - ${item.googleLoc}`}>
        <div className = "img-default">
          <img src={img} alt="attr"/>
        </div>
        <div className = "link-to-url">
          <a
            href={url}
            target = '_blank'
            rel="noopener noreferrer"
          >
            {title}
            <br/>
          </a>
        </div>
      </div>
    );
  }));
};

export default ({ loc, cur }) => (
  <StyledPopup
    trigger={
      <button className = 'btn-popup'>
        {loc.buttons[3]}
      </button>
    }
    position={'center center'}
    modal={true}
    closeOnDocumentClick={true}
  >
      {close => (
        <div className="modal-info-mobile">
          <span className="close" onClick={close}>
            &times;
          </span>
          <div>
            <div className="info-block-title">{loc.name[cur]}</div>
            <div className="info-block-desc">{loc.info[cur]}</div>
            <img className="info-block-img" style={{width: '90%'}} src={mainAttractions[cur].img.img1} alt="map" />
            <div style={{marginBottom: '50px'}} className="info-block-text">{loc.text[cur]}</div>
            <div className='add-title'>{popUpTitles[loc.id]}</div>
            <div className = "add-district">
              {renderSubAttr(cur, loc.id)}
            </div>  
            
          </div>
        </div>
      )}
  </StyledPopup>
);
