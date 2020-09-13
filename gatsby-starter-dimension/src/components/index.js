import React from 'react'

import '../assets/css/style.css'

const Site = () => (
  <main>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <link
      href="https://fonts.googleapis.com/css?family=Playfair+Display&display=swap"
      rel="stylesheet"
    />
    <div className="diamond-container">
      <div id="cut-diamond"></div>
      {/* <?xml version="1.0" encoding="UTF-8"?> */}
      <svg
        width="360px"
        height="460px"
        viewBox="0 0 360 460"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
      >
        {/* <!-- Generator: Sketch 61 (89581) - https://sketch.com --> */}
        <title>necklace-gem</title>
        <desc>Created with Sketch.</desc>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="Desktop" transform="translate(-320.000000, -540.000000)">
            <g id="necklace-gem" transform="translate(320.000000, 540.000000)">
              <polygon
                id="Path"
                fill="#298F6D"
                points="180 460 360 60 260 60"
              ></polygon>
              <polygon
                id="Path-2"
                fill="#40E0AB"
                points="180 460 100 60 260 60"
              ></polygon>
              <polygon
                id="Path-3"
                fill="#74E8C1"
                points="180 460 0 60 100 60"
              ></polygon>
              <polygon
                id="Path-4"
                fill="#B9F3E0"
                points="0 60 60 0 100 60"
              ></polygon>
              <polygon
                id="Path-5"
                fill="#74E8C1"
                points="100 60 180 0 260 60"
              ></polygon>
              <polygon
                id="Path-7"
                fill="#3BCC9C"
                points="180 0 300 0 260 60"
              ></polygon>
              <polygon
                id="Path-9"
                fill="#35B88C"
                points="300 0 260 60 360 60"
              ></polygon>
              <polygon
                id="Path-10"
                fill="#96EED1"
                points="60 0 100 60 180 0"
              ></polygon>
            </g>
          </g>
        </g>
      </svg>
      <div id="diamond-pulse"></div>
    </div>
    <div className="name-container">
      <div className="first-name">TREVOR</div>
      <div className="pipe"></div>
      <div className="last-name">STOREY</div>
    </div>
  </main>
)

export default Site
