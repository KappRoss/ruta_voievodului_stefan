import React, { Fragment } from 'react';

export default () => (
  <Fragment>
    <defs>

    {/*Main Field*/}
      <filter id="filter2000_d" x="676" y="282" width="185" height="148.399" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>

  {/*3 Soroka*/}
    {/*Road*/}
    <filter id="filter0000_d" x="175.75" y="225.75" width="872.502" height="1096.27" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="5"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
    </filter>

    {/*3-0*/}
      <clipPath id="clip300">
        <rect x="562.74" y="365.741" width="10.438" height="10.438" fill="white"/>
      </clipPath>

    {/*3-1*/}
      <clipPath id="clip301">
        <rect x="547.74" y="349.741" width="10.438" height="10.438" fill="white"/>
      </clipPath>

    {/*3-2*/}
      <clipPath id="clip302">
        <rect x="582.74" y="364.741" width="10.438" height="10.438" fill="white"/>
      </clipPath>
    </defs>
  </Fragment>
);
