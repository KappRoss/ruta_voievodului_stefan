import React from 'react';
import Tooltip from "./Tooltip";
import ActiveCircle from "./ActiveCircle";
import Mark from "./Mark";

export default ({ setActive, active, activeElement, setSvg, svg, locId }) => (
<svg ref={setSvg} width="400" height="450" viewBox="0 0 400 450" fill="none" xmlns="http://www.w3.org/2000/svg">
{activeElement && <ActiveCircle svg={svg} activeElement={activeElement} />}

{/* Line  */}
<path opacity="0.3" d="M120.427 355.23C126.711 353.781 135.643 350.624 140.702 355.046C142.197 356.348 141.731 356.9 143.153 358.251C145.774 360.708 150.185 361.617 167.153 358.251C177.677 356.164 181.854 354.641 186.363 357.183C188.886 358.608 188.813 359.799 191.165 360.573C192.537 361.027 197.009 362.084 207.876 353.977C218.105 346.338 219.294 341.548 223.165 342.039C228.482 342.702 228.323 351.975 235.086 353.621C240.488 354.935 244.066 349.826 248.415 352.012C251.943 353.793 250.608 357.637 253.573 359.86C260.274 364.859 273.175 349.752 283.98 353.977C292.029 357.109 294.026 368.986 297.138 368.053C299.306 367.414 297.8 361.764 302.467 355.586C304.538 352.847 305.775 352.7 306.02 350.944C306.78 345.736 296.599 341.363 297.444 339.177C298.143 337.482 304.268 340.283 311.668 338.109C315.809 336.88 317.23 335.038 321.984 331.697C333.01 323.874 335.803 326.563 341.181 321.712C351.656 312.267 348.409 295.674 353.984 294.974C356.373 294.666 357.206 297.7 361.812 299.248C368.207 301.409 374.823 298.02 375.288 297.823C379.797 295.637 381.573 292.554 383.999 293.365C385.42 293.844 385.334 295.084 387.025 296.583C389.745 298.978 394.572 299.825 397.157 298.179C400.943 295.723 400.832 287.309 397.512 281.782C393.837 275.74 389.341 277.987 377.236 270.372C368.477 264.858 366.737 261.075 358.749 258.962C355.418 258.233 352.026 257.822 348.618 257.734C343.582 257.378 339.147 257.316 335.435 257.365C332.806 259.998 330.706 263.113 329.248 266.54C323.282 281.5 334.81 296.3 331.196 298.363C328.513 299.886 321.604 292.136 315 284.718C303.815 272.19 296.329 263.543 298.155 254.197C299.025 249.714 301.058 250.131 302.688 244.457C305.138 235.859 303.913 222.693 296.207 218.48C288.501 214.267 277.695 221.108 276.777 221.722C266.032 228.834 268.482 238.647 258.632 243.83C251.919 247.355 242.216 247.269 238.553 242.529C235.22 238.23 237.72 231.229 238.553 228.895C244.887 211.074 263.055 212.462 268.348 197.072C269.718 192.906 270.021 188.462 269.229 184.147C268.437 179.833 266.575 175.788 263.815 172.385C259.962 168.055 254.664 165.285 248.917 164.598C240.243 163.75 235.723 168.798 217.174 180.184C195.563 193.437 189.83 193.854 186.081 191.877C182.332 189.899 180.531 185.306 179.6 182.776C176.059 173.22 181.548 168.037 178.301 161.994C175.263 156.295 166.05 152.709 159.52 154.846C150.234 157.867 151.41 170.506 140.727 174.338C140.065 174.571 132.151 177.285 128.476 173.687C121.566 167.103 138.705 149.392 133.658 128.243C133.45 127.334 129.983 113.627 118.111 105.52C100.959 93.8032 87.4831 108.235 63.6913 99.0231C62.2579 98.4582 48.8795 93.0786 39.1888 82C29.8657 86.483 25.7983 91.8258 23.8748 96.2719C20.861 103.285 22.5884 109.451 18.0065 112.325C12.0524 116.009 2.93749 109.5 0.536253 112.853C-0.5051 114.314 0.033985 117.225 1.60214 118.871C6.26985 123.784 18.2515 115.715 23.0785 120.873C24.7079 122.617 23.544 123.772 25.2102 125.418C29.7799 129.962 39.5564 122.286 44.9469 126.486C48.3895 129.188 45.6452 133.315 49.8474 137.454C53.5228 141.139 57.3696 139.505 59.8444 143.067C61.731 145.782 62.1109 150.436 60.1139 153.225C56.4386 158.334 47.8627 153.556 36.6406 157.106C27.2439 160.066 28.9958 164.708 19.0356 169.806L18.8396 169.904C20.245 175.32 21.9589 180.651 23.9728 185.871C28.6283 197.944 32.1322 206.75 38.6743 207.807C47.5197 209.317 54.2088 195.463 61.3512 198.177C66.9378 200.29 66.166 210.042 72.5489 211.54C76.653 212.511 79.1155 208.998 82.4233 210.742C85.4984 212.363 84.5306 216.036 87.7526 219.831C90.9747 223.626 93.8782 222.423 98.1539 224.916C106.57 229.829 102.883 238.881 112.561 251.114C117.29 257.107 119.042 256.027 121.897 261.283C124.617 266.307 124.347 269.66 125.572 281.328C127.545 298.695 129.064 298.707 127.716 301.115C122.093 311.112 99.183 305.192 95.7037 314.49C94.2458 318.383 97.3821 321.798 94.9073 324.647C91.5505 328.516 83.3299 325.053 82.3744 327.325C81.1492 330.211 94.356 336.217 93.8415 344.434C93.7435 345.969 93.2167 346.952 93.572 348.978C94.2335 352.663 96.843 353.977 98.5949 356.348C105.882 357.243 113.269 356.865 120.427 355.23V355.23Z" stroke="white" strokeWidth="2.5" strokeMiterlimit="10"/>

{/* Mark  */}
<path d="M253.099 164C246.377 164 239.878 166.41 234.781 170.793C229.683 175.176 226.326 181.24 225.318 187.886C224.31 194.532 225.717 201.32 229.285 207.017C232.854 212.714 238.346 216.943 244.765 218.937L250.628 229.139C250.852 229.529 251.175 229.852 251.564 230.078C251.953 230.303 252.394 230.421 252.844 230.421C253.293 230.421 253.735 230.303 254.124 230.078C254.513 229.852 254.835 229.529 255.059 229.139L260.864 219.088C267.357 217.203 272.953 213.04 276.626 207.363C280.298 201.685 281.8 194.874 280.856 188.179C279.912 181.484 276.586 175.353 271.488 170.912C266.39 166.471 259.861 164.017 253.099 164V164ZM253.099 213.551C248.854 213.553 244.704 212.296 241.174 209.938C237.644 207.581 234.892 204.23 233.267 200.308C231.642 196.387 231.216 192.072 232.044 187.908C232.872 183.745 234.916 179.92 237.917 176.919C240.919 173.917 244.743 171.873 248.907 171.046C253.07 170.218 257.385 170.644 261.307 172.269C265.228 173.894 268.58 176.646 270.937 180.176C273.294 183.706 274.551 187.856 274.55 192.101C274.548 197.789 272.287 203.244 268.265 207.266C264.242 211.288 258.788 213.549 253.099 213.551ZM255.905 237.054C255.907 237.611 255.743 238.157 255.434 238.621C255.126 239.085 254.686 239.447 254.172 239.661C253.657 239.875 253.091 239.931 252.544 239.823C251.997 239.715 251.495 239.446 251.101 239.052C250.707 238.658 250.439 238.156 250.33 237.609C250.222 237.063 250.278 236.496 250.493 235.981C250.707 235.467 251.069 235.027 251.533 234.719C251.997 234.41 252.542 234.246 253.099 234.248C253.843 234.25 254.555 234.547 255.081 235.072C255.607 235.598 255.903 236.31 255.905 237.054Z" fill="#E3393B"/>
<path d="M253.099 213.56C264.951 213.56 274.558 203.952 274.558 192.101C274.558 180.25 264.951 170.642 253.099 170.642C241.248 170.642 231.641 180.25 231.641 192.101C231.641 203.952 241.248 213.56 253.099 213.56Z" fill="#E3393B"/>
<path d="M253.197 202.483C256.809 202.483 259.609 200.271 259.609 196.659C259.609 194.335 258.293 192.403 255.857 191.983V191.899C257.845 191.031 258.853 189.463 258.853 187.251C258.853 184.171 256.585 182.267 253.225 182.267C250.537 182.267 248.493 183.331 247.429 185.319L249.221 187.587C250.201 186.159 251.349 185.487 252.917 185.487C254.597 185.487 255.409 186.467 255.409 187.867C255.409 189.547 253.981 190.555 252.385 190.555H251.125V193.775H252.525C254.793 193.775 256.165 194.755 256.165 196.547C256.165 198.031 255.101 199.263 253.001 199.263C251.293 199.263 249.781 198.283 248.801 196.827L246.981 199.179C248.017 201.167 250.201 202.483 253.197 202.483Z" fill="white"/>

<Mark setActive={setActive} id="3-0">
<path d="M246.287 226C241.195 226 236.271 227.826 232.41 231.146C228.548 234.466 226.005 239.061 225.241 244.096C224.477 249.131 225.543 254.273 228.247 258.588C230.95 262.904 235.11 266.108 239.974 267.619L244.416 275.348C244.585 275.643 244.83 275.888 245.124 276.059C245.419 276.229 245.753 276.319 246.094 276.319C246.434 276.319 246.769 276.229 247.064 276.059C247.358 275.888 247.603 275.643 247.772 275.348L252.169 267.733C257.089 266.305 261.328 263.152 264.11 258.85C266.892 254.549 268.03 249.39 267.315 244.317C266.6 239.245 264.081 234.601 260.218 231.236C256.356 227.872 251.41 226.013 246.287 226V226ZM246.287 263.539C243.072 263.54 239.928 262.588 237.253 260.802C234.579 259.016 232.494 256.477 231.263 253.506C230.032 250.536 229.709 247.266 230.336 244.112C230.963 240.958 232.512 238.061 234.786 235.787C237.06 233.513 239.957 231.965 243.111 231.338C246.265 230.71 249.534 231.033 252.505 232.264C255.476 233.495 258.015 235.58 259.801 238.254C261.586 240.929 262.539 244.073 262.538 247.289C262.536 251.598 260.823 255.73 257.776 258.777C254.729 261.825 250.597 263.537 246.287 263.539ZM248.413 281.344C248.414 281.766 248.29 282.179 248.056 282.531C247.823 282.882 247.49 283.157 247.1 283.319C246.71 283.481 246.281 283.524 245.867 283.442C245.452 283.36 245.072 283.156 244.773 282.858C244.475 282.559 244.272 282.179 244.19 281.765C244.108 281.35 244.15 280.921 244.313 280.531C244.475 280.142 244.749 279.809 245.101 279.575C245.452 279.341 245.865 279.217 246.287 279.218C246.851 279.22 247.39 279.444 247.789 279.843C248.187 280.241 248.411 280.781 248.413 281.344Z" fill="#03799C"/>
<path d="M246.288 263.545C255.266 263.545 262.545 256.267 262.545 247.289C262.545 238.31 255.266 231.032 246.288 231.032C237.31 231.032 230.031 238.31 230.031 247.289C230.031 256.267 237.31 263.545 246.288 263.545Z" fill="white"/>
<g clipPath="url(#clip30)">
<path d="M251.484 248.482H253.828V254.094H251.484V248.482Z" fill="black"/>
<path d="M247.047 248.482H249.391V254.094H247.047V248.482Z" fill="black"/>
<path d="M242.609 248.482H244.953V254.094H242.609V248.482Z" fill="black"/>
<path d="M238.172 248.482H240.515V254.094H238.172V248.482Z" fill="black"/>
<path d="M254.611 246.724V246.138H237.391V246.724C237.391 247.048 237.653 247.31 237.977 247.31H254.025C254.349 247.31 254.611 247.048 254.611 246.724Z" fill="black"/>
<path d="M255.413 255.266H236.586C236.262 255.266 236 255.528 236 255.852V257.414C236 257.738 236.262 258 236.586 258H255.413C255.737 258 255.999 257.738 255.999 257.414V255.852C255.999 255.528 255.737 255.266 255.413 255.266Z" fill="black"/>
<path d="M236.586 244.967H255.414C255.676 244.967 255.906 244.792 255.978 244.54C256.049 244.288 255.944 244.019 255.721 243.882L246.307 238.087C246.119 237.971 245.881 237.971 245.693 238.087L236.279 243.882C236.055 244.019 235.951 244.288 236.022 244.54C236.094 244.792 236.324 244.967 236.586 244.967ZM245.602 241.446H246.398C246.722 241.446 246.984 241.709 246.984 242.032C246.984 242.356 246.722 242.618 246.398 242.618H245.602C245.278 242.618 245.016 242.356 245.016 242.032C245.016 241.709 245.278 241.446 245.602 241.446Z" fill="black"/>
</g>
</Mark>

<Mark setActive={setActive} id="3-1">
<path d="M294.287 231C289.195 231 284.271 232.826 280.41 236.146C276.548 239.466 274.005 244.061 273.241 249.096C272.477 254.131 273.543 259.273 276.247 263.588C278.95 267.904 283.11 271.108 287.974 272.619L292.416 280.348C292.585 280.643 292.83 280.888 293.124 281.059C293.419 281.229 293.753 281.319 294.094 281.319C294.434 281.319 294.769 281.229 295.064 281.059C295.358 280.888 295.603 280.643 295.772 280.348L300.169 272.733C305.089 271.305 309.328 268.152 312.11 263.85C314.892 259.549 316.03 254.39 315.315 249.317C314.6 244.245 312.081 239.601 308.218 236.236C304.356 232.872 299.41 231.013 294.287 231V231ZM294.287 268.539C291.072 268.54 287.928 267.588 285.253 265.802C282.579 264.016 280.494 261.477 279.263 258.506C278.032 255.536 277.709 252.266 278.336 249.112C278.963 245.958 280.512 243.061 282.786 240.787C285.06 238.513 287.957 236.965 291.111 236.338C294.265 235.71 297.534 236.033 300.505 237.264C303.476 238.495 306.015 240.58 307.801 243.254C309.586 245.929 310.539 249.073 310.538 252.289C310.536 256.598 308.823 260.73 305.776 263.777C302.729 266.825 298.597 268.537 294.287 268.539ZM296.413 286.344C296.414 286.766 296.29 287.179 296.056 287.531C295.823 287.882 295.49 288.157 295.1 288.319C294.71 288.481 294.281 288.524 293.867 288.442C293.452 288.36 293.072 288.156 292.773 287.858C292.475 287.559 292.272 287.179 292.19 286.765C292.108 286.35 292.15 285.921 292.313 285.531C292.475 285.142 292.749 284.809 293.101 284.575C293.452 284.341 293.865 284.217 294.287 284.218C294.851 284.22 295.39 284.444 295.789 284.843C296.187 285.241 296.411 285.781 296.413 286.344Z" fill="#03799C"/>
<path d="M294.288 268.545C303.266 268.545 310.545 261.267 310.545 252.289C310.545 243.31 303.266 236.032 294.288 236.032C285.31 236.032 278.031 243.31 278.031 252.289C278.031 261.267 285.31 268.545 294.288 268.545Z" fill="white"/>
<g clipPath="url(#clip31)">
<path d="M299.484 251.482H301.828V257.094H299.484V251.482Z" fill="black"/>
<path d="M295.047 251.482H297.391V257.094H295.047V251.482Z" fill="black"/>
<path d="M290.609 251.482H292.953V257.094H290.609V251.482Z" fill="black"/>
<path d="M286.172 251.482H288.515V257.094H286.172V251.482Z" fill="black"/>
<path d="M302.611 249.724V249.138H285.391V249.724C285.391 250.048 285.653 250.31 285.977 250.31H302.025C302.349 250.31 302.611 250.048 302.611 249.724Z" fill="black"/>
<path d="M303.413 258.266H284.586C284.262 258.266 284 258.528 284 258.852V260.414C284 260.738 284.262 261 284.586 261H303.413C303.737 261 303.999 260.738 303.999 260.414V258.852C303.999 258.528 303.737 258.266 303.413 258.266Z" fill="black"/>
<path d="M284.586 247.967H303.414C303.676 247.967 303.906 247.792 303.978 247.54C304.049 247.288 303.944 247.019 303.721 246.882L294.307 241.087C294.119 240.971 293.881 240.971 293.693 241.087L284.279 246.882C284.055 247.019 283.951 247.288 284.022 247.54C284.094 247.792 284.324 247.967 284.586 247.967ZM293.602 244.446H294.398C294.722 244.446 294.984 244.709 294.984 245.032C294.984 245.356 294.722 245.618 294.398 245.618H293.602C293.278 245.618 293.016 245.356 293.016 245.032C293.016 244.709 293.278 244.446 293.602 244.446Z" fill="black"/>
</g>
</Mark>

<Mark setActive={setActive} id="3-2">
<path d="M203.287 179C198.195 179 193.271 180.826 189.41 184.146C185.548 187.466 183.005 192.061 182.241 197.096C181.477 202.131 182.543 207.273 185.247 211.588C187.95 215.904 192.11 219.108 196.974 220.619L201.416 228.348C201.585 228.643 201.83 228.888 202.124 229.059C202.419 229.229 202.753 229.319 203.094 229.319C203.434 229.319 203.769 229.229 204.064 229.059C204.358 228.888 204.603 228.643 204.772 228.348L209.169 220.733C214.089 219.305 218.328 216.152 221.11 211.85C223.892 207.549 225.03 202.39 224.315 197.317C223.6 192.245 221.081 187.601 217.218 184.236C213.356 180.872 208.41 179.013 203.287 179V179ZM203.287 216.539C200.072 216.54 196.928 215.588 194.253 213.802C191.579 212.016 189.494 209.477 188.263 206.506C187.032 203.536 186.709 200.266 187.336 197.112C187.963 193.958 189.512 191.061 191.786 188.787C194.06 186.513 196.957 184.965 200.111 184.338C203.265 183.71 206.534 184.033 209.505 185.264C212.476 186.495 215.015 188.58 216.801 191.254C218.586 193.929 219.539 197.073 219.538 200.289C219.536 204.598 217.823 208.73 214.776 211.777C211.729 214.825 207.597 216.537 203.287 216.539ZM205.413 234.344C205.414 234.766 205.29 235.179 205.056 235.531C204.823 235.882 204.49 236.157 204.1 236.319C203.71 236.481 203.281 236.524 202.867 236.442C202.452 236.36 202.072 236.156 201.773 235.858C201.475 235.559 201.272 235.179 201.19 234.765C201.108 234.35 201.15 233.921 201.313 233.531C201.475 233.142 201.749 232.809 202.101 232.575C202.452 232.341 202.865 232.217 203.287 232.218C203.851 232.22 204.39 232.444 204.789 232.843C205.187 233.241 205.411 233.781 205.413 234.344Z" fill="#03799C"/>
<path d="M203.288 216.545C212.266 216.545 219.545 209.267 219.545 200.289C219.545 191.31 212.266 184.032 203.288 184.032C194.31 184.032 187.031 191.31 187.031 200.289C187.031 209.267 194.31 216.545 203.288 216.545Z" fill="white"/>
<g clipPath="url(#clip32)">
<path d="M208.484 200.482H210.828V206.094H208.484V200.482Z" fill="black"/>
<path d="M204.047 200.482H206.391V206.094H204.047V200.482Z" fill="black"/>
<path d="M199.609 200.482H201.953V206.094H199.609V200.482Z" fill="black"/>
<path d="M195.172 200.482H197.515V206.094H195.172V200.482Z" fill="black"/>
<path d="M211.611 198.724V198.138H194.391V198.724C194.391 199.048 194.653 199.31 194.977 199.31H211.025C211.349 199.31 211.611 199.048 211.611 198.724Z" fill="black"/>
<path d="M212.413 207.266H193.586C193.262 207.266 193 207.528 193 207.852V209.414C193 209.738 193.262 210 193.586 210H212.413C212.737 210 212.999 209.738 212.999 209.414V207.852C212.999 207.528 212.737 207.266 212.413 207.266Z" fill="black"/>
<path d="M193.586 196.967H212.414C212.676 196.967 212.906 196.792 212.978 196.54C213.049 196.288 212.944 196.019 212.721 195.882L203.307 190.087C203.119 189.971 202.881 189.971 202.693 190.087L193.279 195.882C193.055 196.019 192.951 196.288 193.022 196.54C193.094 196.792 193.324 196.967 193.586 196.967ZM202.602 193.446H203.398C203.722 193.446 203.984 193.709 203.984 194.032C203.984 194.356 203.722 194.618 203.398 194.618H202.602C202.278 194.618 202.016 194.356 202.016 194.032C202.016 193.709 202.278 193.446 202.602 193.446Z" fill="black"/>
</g>
</Mark>

<defs>
<clipPath id="clip30">
<rect x="236" y="238" width="20" height="20" fill="white"/>
</clipPath>
<clipPath id="clip31">
<rect x="284" y="241" width="20" height="20" fill="white"/>
</clipPath>
<clipPath id="clip32">
<rect x="193" y="190" width="20" height="20" fill="white"/>
</clipPath>
</defs>

 {activeElement &&
    <Tooltip
      svg={svg}
      activeElement={activeElement}
      active={active}
      locId={locId}
    />
  }
</svg>

);