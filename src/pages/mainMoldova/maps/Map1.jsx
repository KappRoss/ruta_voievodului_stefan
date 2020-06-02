import React from 'react';
import Tooltip from "./Tooltip";
import ActiveCircle from "./ActiveCircle";

export default ({ setActive, active, activeElement, setSvg, svg }) => (
<svg ref={setSvg} width="400" height="450" viewBox="0 0 400 450" fill="none" xmlns="http://www.w3.org/2000/svg">
{activeElement && <ActiveCircle svg={svg} activeElement={activeElement} />}

{/* Line  */}
<path opacity="0.3" d="M305.628 346.805C299.914 339.684 294.77 333.08 295.82 325.444C296.251 322.543 297.398 319.796 299.157 317.45C300.916 315.103 303.232 313.232 305.895 312.005C310.274 310.225 313.585 311.47 319.317 312.254C321.097 312.503 338.666 314.781 350.574 308.391C354.793 306.13 354.135 305.027 366.862 288.241C380.337 270.44 384.663 266.88 383.648 260.846C382.331 253.245 374.463 253.441 373.84 246.605C372.825 235.711 392.513 230.104 391.925 216.629C391.729 212.321 389.576 210.078 391.142 205.949C393.314 200.377 399.17 200.252 399.936 195.873C400.452 192.919 397.853 190.124 392.691 184.517C386.478 177.77 383.381 174.406 378.735 173.836C373.591 173.284 371.17 176.613 367.894 174.869C365.936 173.819 365.011 171.7 363.765 166.075C360.756 152.547 362.697 149.521 359.884 145.16C358.202 142.783 355.945 140.872 353.324 139.605C350.703 138.338 347.803 137.756 344.896 137.915C333.468 138.876 328.003 154.487 323.98 152.903C320.723 151.639 325.582 141.956 320.616 131.542C316.006 121.787 308.013 122.054 306.376 113.742C304.969 106.497 310.594 104.254 308.957 96.9557C307.728 91.6155 303.617 88.1621 296.033 81.9675C286.777 74.3844 283.787 75.0965 282.078 70.8599C279.034 63.2769 287.418 58.0969 284.926 50.1935C282.558 42.6816 271.664 36.8608 263.565 38.8189C252.618 41.4534 247.883 57.7409 245.231 56.6195C242.988 55.6938 247.367 44.5151 242.649 40.8482C240.567 39.2461 237.861 39.9937 234.888 40.3319C229.251 40.8979 223.561 40.098 218.298 38C218.575 40.1307 219.119 42.2181 219.918 44.2125C222.161 50.0333 225.08 52.9169 225.258 59.7167C225.454 64.8255 224.155 72.551 220.363 73.6546C214.774 75.3101 206.586 61.8707 204.343 63.3303C203.132 64.1135 205.695 67.9406 204.076 70.0411C200.978 74.1174 187.45 65.1459 182.715 69.5249C179.03 72.8714 185.154 79.7068 182.199 86.8448C177.143 98.9848 151.938 97.187 151.457 103.115C151.208 106.675 159.912 106.675 165.146 114.738C170.379 122.802 165.146 128.552 170.059 137.221C175.506 146.708 185.385 145.925 185.812 151.692C186.346 158.813 171.091 161.127 169.792 171.273C168.759 179.337 177.553 183.983 174.954 189.608C173.174 193.559 166.944 195.286 162.298 194.521C158.221 193.844 156.067 191.37 149.125 183.929C135.561 169.386 133.425 167.749 131.04 168.158C126.234 169.012 122.62 177.753 124.845 180.832C126.625 183.431 131.823 180.654 134.404 183.662C136.985 186.671 133.461 189.786 135.169 196.123C136.647 201.552 140.065 202.727 139.299 204.898C138.107 208.334 129.811 205.005 121.499 209.295C112.26 214.066 111.477 223.838 106.261 223.536C101.046 223.233 99.3013 213.745 95.581 214.244C91.4156 214.813 91.558 227.559 87.5707 228.199C82.9781 228.911 79.4358 212.624 73.3302 212.695C67.2246 212.766 67.3492 228.983 56.5443 233.095C51.3643 235.07 48.8544 232.293 36.394 232.062C33.6705 232.062 31.0538 232.062 28.8466 232.258C30.057 242.778 24.8414 255.755 18.0594 257.392C10.6188 259.172 3.00013 246.997 0.490244 248.866C-2.01964 250.735 5.83042 265.723 7.71728 269.265C16.6176 285.856 21.9578 295.788 30.4487 296.66C40.4882 297.693 44.8671 284.77 51.8094 286.835C57.9506 288.615 61.8133 300.701 61.0301 313.535C63.7358 319.677 66.5126 321.635 68.8623 321.955C74.2024 322.703 77.6024 314.835 85.3991 315.76C89.2974 316.188 90.579 318.395 94.958 317.825C98.0375 317.416 98.8385 316.152 102.434 316.045C106.03 315.938 106.778 317.185 108.896 316.562C112.794 315.422 112.456 310.545 115.108 309.851C117.761 309.156 121.748 313.731 131.378 327.651C139.157 338.919 140.706 341.749 143.269 341.607C149.268 341.286 149.98 325.213 157.99 324.038C159.803 323.947 161.606 324.357 163.201 325.224C164.797 326.09 166.122 327.38 167.033 328.951C167.404 329.587 167.674 330.278 167.834 330.998C170.094 330.241 172.548 330.291 174.776 331.14C177.517 332.315 178.532 334.593 180.597 337.726C186.898 347.374 195.389 353.747 196.475 352.839C197.561 351.931 188.963 343.547 191.437 335.039C192.559 331.229 195.62 328.31 200.337 323.806C203.381 320.905 204.307 320.691 204.983 320.691C209.024 320.691 213.35 328.221 213.884 335.43C214.382 341.999 211.463 344.33 212.727 348.994C214.115 354.192 219.277 357.307 223.193 359.069L274.726 411.759L288.29 399.299C286.368 397.875 273.925 388.618 275.509 385.343C275.804 384.851 276.156 384.397 276.56 383.99C278.927 381.338 280.422 381.302 280.832 380.305C281.775 377.938 274.459 375.268 273.569 370.515C272.43 364.552 281.508 355.634 287.507 356.951C292.046 357.948 291.209 363.964 297.297 367.222C302.869 370.212 306.838 366.937 313.959 368.201C316.18 368.57 318.298 369.408 320.171 370.657C319.829 366.991 318.784 363.425 317.092 360.155C314.226 354.566 311.538 354.263 305.628 346.805Z" stroke="white" strokeWidth="2.5" strokeMiterlimit="10"/>

{/* Mark  */}
<path d="M244.099 168C237.377 168 230.878 170.41 225.781 174.793C220.683 179.176 217.326 185.24 216.318 191.886C215.31 198.532 216.717 205.32 220.285 211.017C223.854 216.714 229.346 220.943 235.765 222.937L241.628 233.139C241.852 233.529 242.175 233.852 242.564 234.078C242.953 234.303 243.394 234.421 243.844 234.421C244.293 234.421 244.735 234.303 245.124 234.078C245.513 233.852 245.835 233.529 246.059 233.139L251.864 223.088C258.357 221.203 263.953 217.04 267.626 211.363C271.298 205.685 272.8 198.874 271.856 192.179C270.912 185.484 267.586 179.353 262.488 174.912C257.39 170.471 250.861 168.017 244.099 168V168ZM244.099 217.551C239.854 217.553 235.704 216.296 232.174 213.938C228.644 211.581 225.892 208.23 224.267 204.308C222.642 200.387 222.216 196.072 223.044 191.908C223.872 187.745 225.916 183.92 228.917 180.919C231.919 177.917 235.743 175.873 239.907 175.046C244.07 174.218 248.385 174.644 252.307 176.269C256.228 177.894 259.58 180.646 261.937 184.176C264.294 187.706 265.551 191.856 265.55 196.101C265.548 201.789 263.287 207.244 259.265 211.266C255.242 215.288 249.788 217.549 244.099 217.551ZM246.905 241.054C246.907 241.611 246.743 242.157 246.434 242.621C246.126 243.085 245.686 243.447 245.172 243.661C244.657 243.875 244.091 243.931 243.544 243.823C242.997 243.715 242.495 243.446 242.101 243.052C241.707 242.658 241.439 242.156 241.33 241.609C241.222 241.063 241.278 240.496 241.493 239.981C241.707 239.467 242.069 239.027 242.533 238.719C242.997 238.41 243.542 238.246 244.099 238.248C244.843 238.25 245.555 238.547 246.081 239.072C246.607 239.598 246.903 240.31 246.905 241.054Z" fill="#E3393B"/>
<path d="M244.099 217.56C255.951 217.56 265.558 207.952 265.558 196.101C265.558 184.25 255.951 174.642 244.099 174.642C232.248 174.642 222.641 184.25 222.641 196.101C222.641 207.952 232.248 217.56 244.099 217.56Z" fill="#E3393B"/>
<path d="M239.963 190.271L241.671 192.931L244.079 191.111V206.175H247.299V186.519H244.975L239.963 190.271Z" fill="white"/>

<g onClick={setActive("1-0")}>
<path d="M122.287 184C117.195 184 112.271 185.826 108.41 189.146C104.548 192.466 102.005 197.061 101.241 202.096C100.477 207.131 101.543 212.273 104.247 216.588C106.95 220.904 111.11 224.108 115.974 225.619L120.416 233.348C120.585 233.643 120.83 233.888 121.124 234.059C121.419 234.229 121.753 234.319 122.094 234.319C122.434 234.319 122.769 234.229 123.064 234.059C123.358 233.888 123.603 233.643 123.772 233.348L128.169 225.733C133.089 224.305 137.328 221.152 140.11 216.85C142.892 212.549 144.03 207.39 143.315 202.317C142.6 197.245 140.081 192.601 136.218 189.236C132.356 185.872 127.41 184.013 122.287 184V184ZM122.287 221.539C119.072 221.54 115.928 220.588 113.253 218.802C110.579 217.016 108.494 214.477 107.263 211.506C106.032 208.536 105.709 205.266 106.336 202.112C106.963 198.958 108.512 196.061 110.786 193.787C113.06 191.513 115.957 189.965 119.111 189.338C122.265 188.71 125.534 189.033 128.505 190.264C131.476 191.495 134.015 193.58 135.801 196.254C137.586 198.929 138.539 202.073 138.538 205.289C138.536 209.598 136.823 213.73 133.776 216.777C130.729 219.825 126.597 221.537 122.287 221.539ZM124.413 239.344C124.414 239.766 124.29 240.179 124.056 240.531C123.823 240.882 123.49 241.157 123.1 241.319C122.71 241.481 122.281 241.524 121.867 241.442C121.452 241.36 121.072 241.156 120.773 240.858C120.475 240.559 120.272 240.179 120.19 239.765C120.108 239.35 120.15 238.921 120.313 238.531C120.475 238.142 120.749 237.809 121.101 237.575C121.452 237.341 121.865 237.217 122.287 237.218C122.851 237.22 123.39 237.444 123.789 237.843C124.187 238.241 124.411 238.781 124.413 239.344Z" fill="#03799C"/>
<path d="M122.288 221.545C131.266 221.545 138.545 214.267 138.545 205.289C138.545 196.31 131.266 189.032 122.288 189.032C113.31 189.032 106.031 196.31 106.031 205.289C106.031 214.267 113.31 221.545 122.288 221.545Z" fill="white"/>
<g clipPath="url(#clip10)">
<path d="M127.484 203.482H129.828V209.094H127.484V203.482Z" fill="black"/>
<path d="M123.047 203.482H125.391V209.094H123.047V203.482Z" fill="black"/>
<path d="M118.609 203.482H120.953V209.094H118.609V203.482Z" fill="black"/>
<path d="M114.172 203.482H116.515V209.094H114.172V203.482Z" fill="black"/>
<path d="M130.611 201.724V201.138H113.391V201.724C113.391 202.048 113.653 202.31 113.977 202.31H130.025C130.349 202.31 130.611 202.048 130.611 201.724Z" fill="black"/>
<path d="M131.413 210.266H112.586C112.262 210.266 112 210.528 112 210.852V212.414C112 212.738 112.262 213 112.586 213H131.413C131.737 213 131.999 212.738 131.999 212.414V210.852C131.999 210.528 131.737 210.266 131.413 210.266Z" fill="black"/>
<path d="M112.586 199.967H131.414C131.676 199.967 131.906 199.792 131.978 199.54C132.049 199.288 131.944 199.019 131.721 198.882L122.307 193.087C122.119 192.971 121.881 192.971 121.693 193.087L112.279 198.882C112.055 199.019 111.951 199.288 112.022 199.54C112.094 199.792 112.324 199.967 112.586 199.967ZM121.602 196.446H122.398C122.722 196.446 122.984 196.709 122.984 197.032C122.984 197.356 122.722 197.618 122.398 197.618H121.602C121.278 197.618 121.016 197.356 121.016 197.032C121.016 196.709 121.278 196.446 121.602 196.446Z" fill="black"/>
</g>
</g>

<g onClick={setActive("1-1")}>
<path d="M348.287 181C343.195 181 338.271 182.826 334.41 186.146C330.548 189.466 328.005 194.061 327.241 199.096C326.477 204.131 327.543 209.273 330.247 213.588C332.95 217.904 337.11 221.108 341.974 222.619L346.416 230.348C346.585 230.643 346.83 230.888 347.124 231.059C347.419 231.229 347.753 231.319 348.094 231.319C348.434 231.319 348.769 231.229 349.064 231.059C349.358 230.888 349.603 230.643 349.772 230.348L354.169 222.733C359.089 221.305 363.328 218.152 366.11 213.85C368.892 209.549 370.03 204.39 369.315 199.317C368.6 194.245 366.081 189.601 362.218 186.236C358.356 182.872 353.41 181.013 348.287 181V181ZM348.287 218.539C345.072 218.54 341.928 217.588 339.253 215.802C336.579 214.016 334.494 211.477 333.263 208.506C332.032 205.536 331.709 202.266 332.336 199.112C332.963 195.958 334.512 193.061 336.786 190.787C339.06 188.513 341.957 186.965 345.111 186.338C348.265 185.71 351.534 186.033 354.505 187.264C357.476 188.495 360.015 190.58 361.801 193.254C363.586 195.929 364.539 199.073 364.538 202.289C364.536 206.598 362.823 210.73 359.776 213.777C356.729 216.825 352.597 218.537 348.287 218.539ZM350.413 236.344C350.414 236.766 350.29 237.179 350.056 237.531C349.823 237.882 349.49 238.157 349.1 238.319C348.71 238.481 348.281 238.524 347.867 238.442C347.452 238.36 347.072 238.156 346.773 237.858C346.475 237.559 346.272 237.179 346.19 236.765C346.108 236.35 346.15 235.921 346.313 235.531C346.475 235.142 346.749 234.809 347.101 234.575C347.452 234.341 347.865 234.217 348.287 234.218C348.851 234.22 349.39 234.444 349.789 234.843C350.187 235.241 350.411 235.781 350.413 236.344Z" fill="#03799C"/>
<path d="M348.288 218.545C357.266 218.545 364.545 211.267 364.545 202.289C364.545 193.31 357.266 186.032 348.288 186.032C339.31 186.032 332.031 193.31 332.031 202.289C332.031 211.267 339.31 218.545 348.288 218.545Z" fill="white"/>
<g clipPath="url(#clip11)">
<path d="M353.484 202.482H355.828V208.094H353.484V202.482Z" fill="black"/>
<path d="M349.047 202.482H351.391V208.094H349.047V202.482Z" fill="black"/>
<path d="M344.609 202.482H346.953V208.094H344.609V202.482Z" fill="black"/>
<path d="M340.172 202.482H342.515V208.094H340.172V202.482Z" fill="black"/>
<path d="M356.611 200.724V200.138H339.391V200.724C339.391 201.048 339.653 201.31 339.977 201.31H356.025C356.349 201.31 356.611 201.048 356.611 200.724Z" fill="black"/>
<path d="M357.413 209.266H338.586C338.262 209.266 338 209.528 338 209.852V211.414C338 211.738 338.262 212 338.586 212H357.413C357.737 212 357.999 211.738 357.999 211.414V209.852C357.999 209.528 357.737 209.266 357.413 209.266Z" fill="black"/>
<path d="M338.586 198.967H357.414C357.676 198.967 357.906 198.792 357.978 198.54C358.049 198.288 357.944 198.019 357.721 197.882L348.307 192.087C348.119 191.971 347.881 191.971 347.693 192.087L338.279 197.882C338.055 198.019 337.951 198.288 338.022 198.54C338.094 198.792 338.324 198.967 338.586 198.967ZM347.602 195.446H348.398C348.722 195.446 348.984 195.709 348.984 196.032C348.984 196.356 348.722 196.618 348.398 196.618H347.602C347.278 196.618 347.016 196.356 347.016 196.032C347.016 195.709 347.278 195.446 347.602 195.446Z" fill="black"/>
</g>
</g>

<g onClick={setActive("1-2")}>
<path d="M244.287 261C239.195 261 234.271 262.826 230.41 266.146C226.548 269.466 224.005 274.061 223.241 279.096C222.477 284.131 223.543 289.273 226.247 293.588C228.95 297.904 233.11 301.108 237.974 302.619L242.416 310.348C242.585 310.643 242.83 310.888 243.124 311.059C243.419 311.229 243.753 311.319 244.094 311.319C244.434 311.319 244.769 311.229 245.064 311.059C245.358 310.888 245.603 310.643 245.772 310.348L250.169 302.733C255.089 301.305 259.328 298.152 262.11 293.85C264.892 289.549 266.03 284.39 265.315 279.317C264.6 274.245 262.081 269.601 258.218 266.236C254.356 262.872 249.41 261.013 244.287 261V261ZM244.287 298.539C241.072 298.54 237.928 297.588 235.253 295.802C232.579 294.016 230.494 291.477 229.263 288.506C228.032 285.536 227.709 282.266 228.336 279.112C228.963 275.958 230.512 273.061 232.786 270.787C235.06 268.513 237.957 266.965 241.111 266.338C244.265 265.71 247.534 266.033 250.505 267.264C253.476 268.495 256.015 270.58 257.801 273.254C259.586 275.929 260.539 279.073 260.538 282.289C260.536 286.598 258.823 290.73 255.776 293.777C252.729 296.825 248.597 298.537 244.287 298.539ZM246.413 316.344C246.414 316.766 246.29 317.179 246.056 317.531C245.823 317.882 245.49 318.157 245.1 318.319C244.71 318.481 244.281 318.524 243.867 318.442C243.452 318.36 243.072 318.156 242.773 317.858C242.475 317.559 242.272 317.179 242.19 316.765C242.108 316.35 242.15 315.921 242.313 315.531C242.475 315.142 242.749 314.809 243.101 314.575C243.452 314.341 243.865 314.217 244.287 314.218C244.851 314.22 245.39 314.444 245.789 314.843C246.187 315.241 246.411 315.781 246.413 316.344Z" fill="#03799C"/>
<path d="M244.288 298.545C253.266 298.545 260.545 291.267 260.545 282.289C260.545 273.31 253.266 266.032 244.288 266.032C235.31 266.032 228.031 273.31 228.031 282.289C228.031 291.267 235.31 298.545 244.288 298.545Z" fill="white"/>
<g clipPath="url(#clip12)">
<path d="M249.484 282.482H251.828V288.094H249.484V282.482Z" fill="black"/>
<path d="M245.047 282.482H247.391V288.094H245.047V282.482Z" fill="black"/>
<path d="M240.609 282.482H242.953V288.094H240.609V282.482Z" fill="black"/>
<path d="M236.172 282.482H238.515V288.094H236.172V282.482Z" fill="black"/>
<path d="M252.611 280.724V280.138H235.391V280.724C235.391 281.048 235.653 281.31 235.977 281.31H252.025C252.349 281.31 252.611 281.048 252.611 280.724Z" fill="black"/>
<path d="M253.413 289.266H234.586C234.262 289.266 234 289.528 234 289.852V291.414C234 291.738 234.262 292 234.586 292H253.413C253.737 292 253.999 291.738 253.999 291.414V289.852C253.999 289.528 253.737 289.266 253.413 289.266Z" fill="black"/>
<path d="M234.586 278.967H253.414C253.676 278.967 253.906 278.792 253.978 278.54C254.049 278.288 253.944 278.019 253.721 277.882L244.307 272.087C244.119 271.971 243.881 271.971 243.693 272.087L234.279 277.882C234.055 278.019 233.951 278.288 234.022 278.54C234.094 278.792 234.324 278.967 234.586 278.967ZM243.602 275.446H244.398C244.722 275.446 244.984 275.709 244.984 276.032C244.984 276.356 244.722 276.618 244.398 276.618H243.602C243.278 276.618 243.016 276.356 243.016 276.032C243.016 275.709 243.278 275.446 243.602 275.446Z" fill="black"/>
</g>
</g>

<g onClick={setActive("1-3")}>
<path d="M282.287 116C277.195 116 272.271 117.826 268.41 121.146C264.548 124.466 262.005 129.061 261.241 134.096C260.477 139.131 261.543 144.273 264.247 148.588C266.95 152.904 271.11 156.108 275.974 157.619L280.416 165.348C280.585 165.643 280.83 165.888 281.124 166.059C281.419 166.229 281.753 166.319 282.094 166.319C282.434 166.319 282.769 166.229 283.064 166.059C283.358 165.888 283.603 165.643 283.772 165.348L288.169 157.733C293.089 156.305 297.328 153.152 300.11 148.85C302.892 144.549 304.03 139.39 303.315 134.317C302.6 129.245 300.081 124.601 296.218 121.236C292.356 117.872 287.41 116.013 282.287 116V116ZM282.287 153.539C279.072 153.54 275.928 152.588 273.253 150.802C270.579 149.016 268.494 146.477 267.263 143.506C266.032 140.536 265.709 137.266 266.336 134.112C266.963 130.958 268.512 128.061 270.786 125.787C273.06 123.513 275.957 121.965 279.111 121.338C282.265 120.71 285.534 121.033 288.505 122.264C291.476 123.495 294.015 125.58 295.801 128.254C297.586 130.929 298.539 134.073 298.538 137.289C298.536 141.598 296.823 145.73 293.776 148.777C290.729 151.825 286.597 153.537 282.287 153.539ZM284.413 171.344C284.414 171.766 284.29 172.179 284.056 172.531C283.823 172.882 283.49 173.157 283.1 173.319C282.71 173.481 282.281 173.524 281.867 173.442C281.452 173.36 281.072 173.156 280.773 172.858C280.475 172.559 280.272 172.179 280.19 171.765C280.108 171.35 280.15 170.921 280.313 170.531C280.475 170.142 280.749 169.809 281.101 169.575C281.452 169.341 281.865 169.217 282.287 169.218C282.851 169.22 283.39 169.444 283.789 169.843C284.187 170.241 284.411 170.781 284.413 171.344Z" fill="#03799C"/>
<path d="M282.288 153.545C291.266 153.545 298.545 146.267 298.545 137.289C298.545 128.31 291.266 121.032 282.288 121.032C273.31 121.032 266.031 128.31 266.031 137.289C266.031 146.267 273.31 153.545 282.288 153.545Z" fill="white"/>
<g clipPath="url(#clip13)">
<path d="M287.484 137.482H289.828V143.094H287.484V137.482Z" fill="black"/>
<path d="M283.047 137.482H285.391V143.094H283.047V137.482Z" fill="black"/>
<path d="M278.609 137.482H280.953V143.094H278.609V137.482Z" fill="black"/>
<path d="M274.172 137.482H276.515V143.094H274.172V137.482Z" fill="black"/>
<path d="M290.611 135.724V135.138H273.391V135.724C273.391 136.048 273.653 136.31 273.977 136.31H290.025C290.349 136.31 290.611 136.048 290.611 135.724Z" fill="black"/>
<path d="M291.413 144.266H272.586C272.262 144.266 272 144.528 272 144.852V146.414C272 146.738 272.262 147 272.586 147H291.413C291.737 147 291.999 146.738 291.999 146.414V144.852C291.999 144.528 291.737 144.266 291.413 144.266Z" fill="black"/>
<path d="M272.586 133.967H291.414C291.676 133.967 291.906 133.792 291.978 133.54C292.049 133.288 291.944 133.019 291.721 132.882L282.307 127.087C282.119 126.971 281.881 126.971 281.693 127.087L272.279 132.882C272.055 133.019 271.951 133.288 272.022 133.54C272.094 133.792 272.324 133.967 272.586 133.967ZM281.602 130.446H282.398C282.722 130.446 282.984 130.709 282.984 131.032C282.984 131.356 282.722 131.618 282.398 131.618H281.602C281.278 131.618 281.016 131.356 281.016 131.032C281.016 130.709 281.278 130.446 281.602 130.446Z" fill="black"/>
</g>
</g>

<defs>
<clipPath id="clip10">
<rect x="112" y="193" width="20" height="20" fill="white"/>
</clipPath>
<clipPath id="clip11">
<rect x="338" y="192" width="20" height="20" fill="white"/>
</clipPath>
<clipPath id="clip12">
<rect x="234" y="272" width="20" height="20" fill="white"/>
</clipPath>
<clipPath id="clip13">
<rect x="272" y="127" width="20" height="20" fill="white"/>
</clipPath>
</defs>

  {activeElement &&
    <Tooltip
      svg={svg}
      activeElement={activeElement}
      active={active}
    />
  }
</svg>

);
