import React from 'react';
import Tooltip from "./Tooltip";
import ActiveCircle from "./ActiveCircle";
import Mark from "./Mark";

export default ({ setActive, active, activeElement, setSvg, svg }) => (
<svg ref={setSvg} width="400" height="450" viewBox="0 0 400 450" fill="none" xmlns="http://www.w3.org/2000/svg">
{activeElement && <ActiveCircle svg={svg} activeElement={activeElement} />}

{/* Line  */}
<path opacity="0.3" d="M313.945 308.628C311.813 303.406 307.855 302.402 307.977 299.129C308.205 295.475 313.503 292.537 317.263 291.396C325.301 288.975 330.964 293.359 333.384 290.513C335.805 287.666 331.558 280.861 333.384 279.689C334.633 278.897 337.084 281.744 340.463 283.662C346.857 287.316 357.209 288.062 362.339 283.449C368.885 277.512 367.012 262.426 360.116 254.723C355.96 250.08 351.089 249.38 349.962 244.341C349.095 240.474 351.226 237.688 353.007 233.517C356.503 225.357 357.354 216.307 355.443 207.638C352.231 195.718 338.103 183.814 326.717 185.762C310.656 188.518 309.043 217.274 294.459 218.02C292.282 218.127 290.394 217.594 276.556 206.527C248.805 184.316 247.206 179.125 246.947 175.152C246.597 169.352 248.881 161.375 254.681 157.478C267.103 149.15 288.172 165.911 292.739 158.36C295.144 154.281 292.739 147.034 290.973 141.615C288.156 133.06 283.437 126.392 284.122 125.935C284.807 125.479 286.908 130.274 290.744 130.502C294.581 130.73 299.315 126.681 300.031 122.114C300.853 116.832 295.646 115.005 295.601 108.642C295.601 102.705 300.091 101.791 300.168 96.9199C300.426 89.3845 289.74 88.2426 281.397 76.3838C273.055 64.525 276.313 55.6804 269.462 52.9555C262.871 50.3371 258.167 58.0247 250.464 55.1628C243.583 52.6205 240.493 43.9738 239.199 40.3659C235.895 31.232 237.798 24.3816 236.154 24.0163C234.51 23.6509 231.983 29.4205 226.655 42.5733C220.901 56.7917 218.023 63.8857 217.156 66.9303C212.33 83.5692 209.849 92.1398 212.589 102.492C214.994 111.793 220.048 116.786 217.156 121.49C216.242 123.012 215.466 122.891 205.891 127.244C196.939 131.309 194.747 132.74 191.535 131.811C188.323 130.883 188.491 128.934 185.126 127.61C179.357 125.387 171.197 128.158 167.665 133.349C164.803 137.566 167.574 139.59 165.23 144.401C160.906 153.291 148.317 152.743 147.784 158.543C147.479 161.892 151.605 163.232 151.102 167.814C150.813 170.402 149.093 173.462 146.901 173.782C143.582 174.284 141.268 168.24 138.939 168.925C136.61 169.61 138.285 175.639 134.525 178.638C132.5 180.267 129.044 180.891 127.02 179.521C123.503 177.176 126.882 170.63 125.254 162.775C123.503 154.357 116.516 146.73 109.346 143.564C95.9187 137.627 83.2378 147.811 77.3769 140.915C74.4541 137.505 75.7023 132.862 70.7548 129.193C69.065 127.945 65.5333 125.981 63.9044 127.214C60.8598 129.482 68.0756 139.925 63.6761 145.329C61.8341 147.598 59.4745 147.111 58.5915 149.531C57.4802 152.576 60.7837 154.859 60.8141 158.589C60.7718 160.243 60.2069 161.842 59.2005 163.156L61.9102 164.769C66.3858 167.403 70.1763 169.001 69.8718 170.295C69.3999 172.244 60.5249 169.656 56.8257 174.269C54.4813 177.207 56.6734 180.008 53.9637 183.555C51.254 187.102 48.59 185.336 45.7889 188.411C41.7396 192.841 45.4844 198.352 41.3589 202.995C38.3143 206.42 34.6456 205.248 34.0671 207.409C33.108 211.078 42.5768 218.294 53.2939 221.552C64.011 224.809 66.6142 221.445 71.8509 225.083C79.1885 230.168 82.5071 242.727 79.8126 252.257C77.6661 259.868 72.3228 263.385 74.0582 268.835C75.4739 273.265 79.9344 273.858 80.0257 276.568C80.0257 278.821 77.1485 281.972 64.1175 286.128C64.1175 287.27 63.9196 288.381 64.6808 289.051C68.0451 292.096 81.4262 277.527 89.8598 281.44C92.5239 282.673 94.031 285.413 96.1622 284.758C98.6436 283.982 98.6588 279.567 100.47 279.461C101.795 279.369 103.515 281.698 103.774 284.027C104.291 288.716 99.1003 292.05 100.135 293.648C101.171 295.247 105.372 292.842 106.438 294.303C107.671 296.008 102.175 299.54 102.449 304.244C102.693 308.278 118.251 322.846 118.692 325.785C119.621 332.026 114.308 333.822 114.384 339.714C114.491 348.3 125.878 351.557 124.66 357.601C123.686 362.411 116.15 362.168 115.054 367.557C114.034 372.565 119.849 375.595 118.358 380.481C117.353 383.77 114.217 383.922 112.07 386.768C110.426 388.93 109.391 392.629 111.233 399.434C113.745 398.125 117.079 397.44 122.346 393.238C126.137 390.194 127.294 388.215 129.638 388.428C133.246 388.747 133.444 393.71 137.082 395.05C143.704 397.501 151.209 384.241 156.476 386.281C159.795 387.56 158.623 393.512 162.566 408.142C164.91 416.773 166.143 421.127 169.355 423.06C172.841 425.161 175.262 423.38 189.571 421.234C201.034 419.513 203.836 420.001 205.038 417.702C207.139 413.668 199.832 409.649 198.629 398.703C198.431 396.953 197.457 388.047 202.602 383.48C205.206 381.197 206.971 382.125 213.426 380.618C221.57 378.715 226.822 375.351 236.185 369.353C244.177 364.238 244.557 362.716 244.588 361.833C244.816 355.942 230.643 352.699 231.329 348.574C231.937 344.935 243.614 343.657 245.243 343.504C253.417 342.667 258.319 344.555 260.055 341.982C261.79 339.409 258.532 335.649 260.055 334.249C262.11 332.422 268.138 338.587 273.314 336.243C275.08 335.436 274.973 334.431 276.617 333.366C281.184 330.321 287.274 334.675 292.967 336.014C301.309 337.993 305.83 332.833 313.594 328.905C313.746 325.282 314.051 322.192 314.401 319.665C314.873 316.179 315.589 312.662 313.945 308.628Z" stroke="white" strokeWidth="2.5" strokeMiterlimit="10"/>

{/* Mark  */}
<path d="M83.0993 130C76.3772 130 69.8778 132.41 64.7806 136.793C59.6834 141.176 56.3262 147.24 55.3179 153.886C54.3097 160.532 55.7174 167.32 59.2855 173.017C62.8536 178.714 68.3458 182.943 74.7654 184.937L80.6285 195.139C80.8523 195.529 81.175 195.852 81.5639 196.078C81.9529 196.303 82.3944 196.421 82.8439 196.421C83.2933 196.421 83.7348 196.303 84.1238 196.078C84.5128 195.852 84.8355 195.529 85.0593 195.139L90.8637 185.088C97.3572 183.203 102.953 179.04 106.626 173.363C110.298 167.685 111.8 160.874 110.856 154.179C109.912 147.484 106.586 141.353 101.488 136.912C96.3896 132.471 89.8608 130.017 83.0993 130V130ZM83.0993 179.551C78.8545 179.553 74.7045 178.296 71.1743 175.938C67.6441 173.581 64.8924 170.23 63.2672 166.308C61.642 162.387 61.2163 158.072 62.044 153.908C62.8718 149.745 64.9157 145.92 67.9173 142.919C70.9188 139.917 74.7432 137.873 78.9066 137.046C83.07 136.218 87.3854 136.644 91.3068 138.269C95.2282 139.894 98.5796 142.646 100.937 146.176C103.294 149.706 104.551 153.856 104.55 158.101C104.548 163.789 102.287 169.244 98.2647 173.266C94.2424 177.288 88.7877 179.549 83.0993 179.551ZM85.9052 203.054C85.9069 203.611 85.743 204.157 85.4344 204.621C85.1258 205.085 84.6864 205.447 84.1718 205.661C83.6572 205.875 83.0907 205.931 82.544 205.823C81.9973 205.715 81.4951 205.446 81.101 205.052C80.7069 204.658 80.4387 204.156 80.3304 203.609C80.222 203.063 80.2785 202.496 80.4925 201.981C80.7066 201.467 81.0686 201.027 81.5327 200.719C81.9968 200.41 82.542 200.246 83.0993 200.248C83.8428 200.25 84.5552 200.547 85.081 201.072C85.6067 201.598 85.903 202.31 85.9052 203.054Z" fill="#E3393B"/>
<path d="M83.0995 179.56C94.9509 179.56 104.558 169.952 104.558 158.101C104.558 146.25 94.9509 136.642 83.0995 136.642C71.2481 136.642 61.6406 146.25 61.6406 158.101C61.6406 169.952 71.2481 179.56 83.0995 179.56Z" fill="#E3393B"/>
<path d="M85.2528 168.175H88.4728V163.639H90.9928V160.419H88.4728V155.575H85.2528V160.419H80.4648L87.5488 148.575H83.8528L76.2928 161.259V163.639H85.2528V168.175Z" fill="white"/>

<Mark setActive={setActive} id="4-0">
<path d="M258.287 96C253.195 96.0003 248.271 97.8261 244.41 101.146C240.548 104.466 238.005 109.061 237.241 114.096C236.477 119.131 237.543 124.273 240.247 128.588C242.95 132.904 247.11 136.108 251.974 137.619L256.416 145.348C256.585 145.643 256.83 145.888 257.124 146.059C257.419 146.229 257.753 146.319 258.094 146.319C258.434 146.319 258.769 146.229 259.064 146.059C259.358 145.888 259.603 145.643 259.772 145.348L264.169 137.733C269.089 136.305 273.328 133.152 276.11 128.85C278.892 124.549 280.03 119.39 279.315 114.317C278.6 109.245 276.081 104.601 272.218 101.236C268.356 97.8717 263.41 96.0126 258.287 96V96ZM258.287 133.539C255.072 133.54 251.928 132.588 249.253 130.802C246.579 129.016 244.494 126.477 243.263 123.506C242.032 120.536 241.709 117.266 242.336 114.112C242.963 110.958 244.512 108.061 246.786 105.787C249.06 103.513 251.957 101.965 255.111 101.338C258.265 100.71 261.534 101.033 264.505 102.264C267.476 103.495 270.015 105.58 271.801 108.254C273.586 110.929 274.539 114.073 274.538 117.289C274.536 121.598 272.823 125.73 269.776 128.777C266.729 131.825 262.597 133.537 258.287 133.539ZM260.413 151.344C260.414 151.766 260.29 152.179 260.056 152.531C259.823 152.882 259.49 153.157 259.1 153.319C258.71 153.481 258.281 153.524 257.867 153.442C257.452 153.36 257.072 153.156 256.773 152.858C256.475 152.559 256.272 152.179 256.19 151.765C256.108 151.35 256.15 150.921 256.313 150.531C256.475 150.142 256.749 149.809 257.101 149.575C257.452 149.341 257.865 149.217 258.287 149.218C258.851 149.22 259.39 149.444 259.789 149.843C260.187 150.241 260.411 150.781 260.413 151.344Z" fill="#03799C"/>
<path d="M258.288 133.545C267.266 133.545 274.545 126.267 274.545 117.289C274.545 108.31 267.266 101.032 258.288 101.032C249.31 101.032 242.031 108.31 242.031 117.289C242.031 126.267 249.31 133.545 258.288 133.545Z" fill="white"/>
<g clipPath="url(#clip40)">
<path d="M263.484 117.482H265.828V123.094H263.484V117.482Z" fill="black"/>
<path d="M259.047 117.482H261.391V123.094H259.047V117.482Z" fill="black"/>
<path d="M254.609 117.482H256.953V123.094H254.609V117.482Z" fill="black"/>
<path d="M250.172 117.482H252.515V123.094H250.172V117.482Z" fill="black"/>
<path d="M266.611 115.724V115.138H249.391V115.724C249.391 116.048 249.653 116.31 249.977 116.31H266.025C266.349 116.31 266.611 116.048 266.611 115.724Z" fill="black"/>
<path d="M267.413 124.266H248.586C248.262 124.266 248 124.528 248 124.852V126.414C248 126.738 248.262 127 248.586 127H267.413C267.737 127 267.999 126.738 267.999 126.414V124.852C267.999 124.528 267.737 124.266 267.413 124.266Z" fill="black"/>
<path d="M248.586 113.967H267.414C267.676 113.967 267.906 113.792 267.978 113.54C268.049 113.288 267.944 113.019 267.721 112.882L258.307 107.087C258.119 106.971 257.881 106.971 257.693 107.087L248.279 112.882C248.055 113.019 247.951 113.288 248.022 113.54C248.094 113.792 248.324 113.967 248.586 113.967ZM257.602 110.446H258.398C258.722 110.446 258.984 110.709 258.984 111.032C258.984 111.356 258.722 111.618 258.398 111.618H257.602C257.278 111.618 257.016 111.356 257.016 111.032C257.016 110.709 257.278 110.446 257.602 110.446Z" fill="black"/>
</g>
</Mark>

<Mark setActive={setActive} id="4-1">
<path d="M89.2874 237C84.1948 237 79.2711 238.826 75.4096 242.146C71.5481 245.466 69.0047 250.061 68.2409 255.096C67.4771 260.131 68.5435 265.273 71.2466 269.588C73.9497 273.904 78.1104 277.108 82.9738 278.619L87.4155 286.348C87.5851 286.643 87.8295 286.888 88.1242 287.059C88.4189 287.229 88.7533 287.319 89.0938 287.319C89.4344 287.319 89.7688 287.229 90.0635 287.059C90.3582 286.888 90.6026 286.643 90.7722 286.348L95.1695 278.733C100.089 277.305 104.328 274.152 107.11 269.85C109.892 265.549 111.03 260.39 110.315 255.317C109.6 250.245 107.081 245.601 103.218 242.236C99.3558 238.872 94.4097 237.013 89.2874 237V237ZM89.2874 274.539C86.0716 274.54 82.9276 273.588 80.2532 271.802C77.5789 270.016 75.4942 267.477 74.263 264.506C73.0318 261.536 72.7093 258.266 73.3364 255.112C73.9634 251.958 75.5119 249.061 77.7858 246.787C80.0597 244.513 82.957 242.965 86.1111 242.338C89.2652 241.71 92.5344 242.033 95.5051 243.264C98.4759 244.495 101.015 246.58 102.801 249.254C104.586 251.929 105.539 255.073 105.538 258.289C105.536 262.598 103.823 266.73 100.776 269.777C97.7291 272.825 93.5967 274.537 89.2874 274.539ZM91.4131 292.344C91.4143 292.766 91.2902 293.179 91.0564 293.531C90.8226 293.882 90.4897 294.157 90.0999 294.319C89.71 294.481 89.2808 294.524 88.8667 294.442C88.4525 294.36 88.072 294.156 87.7735 293.858C87.4749 293.559 87.2717 293.179 87.1897 292.765C87.1076 292.35 87.1504 291.921 87.3125 291.531C87.4747 291.142 87.7489 290.809 88.1005 290.575C88.4521 290.341 88.8652 290.217 89.2874 290.218C89.8506 290.22 90.3903 290.444 90.7886 290.843C91.1869 291.241 91.4114 291.781 91.4131 292.344Z" fill="#03799C"/>
<path d="M89.288 274.545C98.2663 274.545 105.545 267.267 105.545 258.289C105.545 249.31 98.2663 242.032 89.288 242.032C80.3096 242.032 73.0312 249.31 73.0312 258.289C73.0312 267.267 80.3096 274.545 89.288 274.545Z" fill="white"/>
<g clipPath="url(#clip41)">
<path d="M94.4844 258.482H96.828V264.094H94.4844V258.482Z" fill="black"/>
<path d="M90.0469 258.482H92.3906V264.094H90.0469V258.482Z" fill="black"/>
<path d="M85.6094 258.482H87.9531V264.094H85.6094V258.482Z" fill="black"/>
<path d="M81.1719 258.482H83.5155V264.094H81.1719V258.482Z" fill="black"/>
<path d="M97.6112 256.724V256.138H80.3906V256.724C80.3906 257.048 80.6529 257.31 80.9766 257.31H97.0253C97.3488 257.31 97.6112 257.048 97.6112 256.724Z" fill="black"/>
<path d="M98.4131 265.266H79.5859C79.2623 265.266 79 265.528 79 265.852V267.414C79 267.738 79.2623 268 79.5859 268H98.4131C98.7368 268 98.9991 267.738 98.9991 267.414V265.852C98.9991 265.528 98.7368 265.266 98.4131 265.266Z" fill="black"/>
<path d="M79.5859 254.967H98.414C98.6762 254.967 98.9064 254.792 98.9778 254.54C99.0491 254.288 98.9444 254.019 98.7212 253.882L89.3071 248.087C89.1188 247.971 88.8812 247.971 88.6928 248.087L79.2787 253.882C79.0555 254.019 78.9508 254.288 79.0222 254.54C79.0936 254.792 79.3239 254.967 79.5859 254.967ZM88.6017 251.446H89.3984C89.722 251.446 89.9843 251.709 89.9843 252.032C89.9843 252.356 89.722 252.618 89.3984 252.618H88.6017C88.2781 252.618 88.0158 252.356 88.0158 252.032C88.0158 251.709 88.2781 251.446 88.6017 251.446Z" fill="black"/>
</g>
</Mark>

<Mark setActive={setActive} id="4-2">
<path d="M126.287 157C121.195 157 116.271 158.826 112.41 162.146C108.548 165.466 106.005 170.061 105.241 175.096C104.477 180.131 105.543 185.273 108.247 189.588C110.95 193.904 115.11 197.108 119.974 198.619L124.416 206.348C124.585 206.643 124.83 206.888 125.124 207.059C125.419 207.229 125.753 207.319 126.094 207.319C126.434 207.319 126.769 207.229 127.064 207.059C127.358 206.888 127.603 206.643 127.772 206.348L132.169 198.733C137.089 197.305 141.328 194.152 144.11 189.85C146.892 185.549 148.03 180.39 147.315 175.317C146.6 170.245 144.081 165.601 140.218 162.236C136.356 158.872 131.41 157.013 126.287 157V157ZM126.287 194.539C123.072 194.54 119.928 193.588 117.253 191.802C114.579 190.016 112.494 187.477 111.263 184.506C110.032 181.536 109.709 178.266 110.336 175.112C110.963 171.958 112.512 169.061 114.786 166.787C117.06 164.513 119.957 162.965 123.111 162.338C126.265 161.71 129.534 162.033 132.505 163.264C135.476 164.495 138.015 166.58 139.801 169.254C141.586 171.929 142.539 175.073 142.538 178.289C142.536 182.598 140.823 186.73 137.776 189.777C134.729 192.825 130.597 194.537 126.287 194.539ZM128.413 212.344C128.414 212.766 128.29 213.179 128.056 213.531C127.823 213.882 127.49 214.157 127.1 214.319C126.71 214.481 126.281 214.524 125.867 214.442C125.452 214.36 125.072 214.156 124.773 213.858C124.475 213.559 124.272 213.179 124.19 212.765C124.108 212.35 124.15 211.921 124.313 211.531C124.475 211.142 124.749 210.809 125.101 210.575C125.452 210.341 125.865 210.217 126.287 210.218C126.851 210.22 127.39 210.444 127.789 210.843C128.187 211.241 128.411 211.781 128.413 212.344Z" fill="#03799C"/>
<path d="M126.288 194.545C135.266 194.545 142.545 187.267 142.545 178.289C142.545 169.31 135.266 162.032 126.288 162.032C117.31 162.032 110.031 169.31 110.031 178.289C110.031 187.267 117.31 194.545 126.288 194.545Z" fill="white"/>
<g clipPath="url(#clip42)">
<path d="M131.484 178.482H133.828V184.094H131.484V178.482Z" fill="black"/>
<path d="M127.047 178.482H129.391V184.094H127.047V178.482Z" fill="black"/>
<path d="M122.609 178.482H124.953V184.094H122.609V178.482Z" fill="black"/>
<path d="M118.172 178.482H120.515V184.094H118.172V178.482Z" fill="black"/>
<path d="M134.611 176.724V176.138H117.391V176.724C117.391 177.048 117.653 177.31 117.977 177.31H134.025C134.349 177.31 134.611 177.048 134.611 176.724Z" fill="black"/>
<path d="M135.413 185.266H116.586C116.262 185.266 116 185.528 116 185.852V187.414C116 187.738 116.262 188 116.586 188H135.413C135.737 188 135.999 187.738 135.999 187.414V185.852C135.999 185.528 135.737 185.266 135.413 185.266Z" fill="black"/>
<path d="M116.586 174.967H135.414C135.676 174.967 135.906 174.792 135.978 174.54C136.049 174.288 135.944 174.019 135.721 173.882L126.307 168.087C126.119 167.971 125.881 167.971 125.693 168.087L116.279 173.882C116.055 174.019 115.951 174.288 116.022 174.54C116.094 174.792 116.324 174.967 116.586 174.967ZM125.602 171.446H126.398C126.722 171.446 126.984 171.709 126.984 172.032C126.984 172.356 126.722 172.618 126.398 172.618H125.602C125.278 172.618 125.016 172.356 125.016 172.032C125.016 171.709 125.278 171.446 125.602 171.446Z" fill="black"/>
</g>
</Mark>

<Mark setActive={setActive} id="4-3">
<path d="M231.287 204C226.195 204 221.271 205.826 217.41 209.146C213.548 212.466 211.005 217.061 210.241 222.096C209.477 227.131 210.543 232.273 213.247 236.588C215.95 240.904 220.11 244.108 224.974 245.619L229.416 253.348C229.585 253.643 229.83 253.888 230.124 254.059C230.419 254.229 230.753 254.319 231.094 254.319C231.434 254.319 231.769 254.229 232.064 254.059C232.358 253.888 232.603 253.643 232.772 253.348L237.169 245.733C242.089 244.305 246.328 241.152 249.11 236.85C251.892 232.549 253.03 227.39 252.315 222.317C251.6 217.245 249.081 212.601 245.218 209.236C241.356 205.872 236.41 204.013 231.287 204V204ZM231.287 241.539C228.072 241.54 224.928 240.588 222.253 238.802C219.579 237.016 217.494 234.477 216.263 231.506C215.032 228.536 214.709 225.266 215.336 222.112C215.963 218.958 217.512 216.061 219.786 213.787C222.06 211.513 224.957 209.965 228.111 209.338C231.265 208.71 234.534 209.033 237.505 210.264C240.476 211.495 243.015 213.58 244.801 216.254C246.586 218.929 247.539 222.073 247.538 225.289C247.536 229.598 245.823 233.73 242.776 236.777C239.729 239.825 235.597 241.537 231.287 241.539ZM233.413 259.344C233.414 259.766 233.29 260.179 233.056 260.531C232.823 260.882 232.49 261.157 232.1 261.319C231.71 261.481 231.281 261.524 230.867 261.442C230.452 261.36 230.072 261.156 229.773 260.858C229.475 260.559 229.272 260.179 229.19 259.765C229.108 259.35 229.15 258.921 229.313 258.531C229.475 258.142 229.749 257.809 230.101 257.575C230.452 257.341 230.865 257.217 231.287 257.218C231.851 257.22 232.39 257.444 232.789 257.843C233.187 258.241 233.411 258.781 233.413 259.344Z" fill="#03799C"/>
<path d="M231.288 241.545C240.266 241.545 247.545 234.267 247.545 225.289C247.545 216.31 240.266 209.032 231.288 209.032C222.31 209.032 215.031 216.31 215.031 225.289C215.031 234.267 222.31 241.545 231.288 241.545Z" fill="white"/>
<g clipPath="url(#clip43)">
<path d="M236.484 225.482H238.828V231.094H236.484V225.482Z" fill="black"/>
<path d="M232.047 225.482H234.391V231.094H232.047V225.482Z" fill="black"/>
<path d="M227.609 225.482H229.953V231.094H227.609V225.482Z" fill="black"/>
<path d="M223.172 225.482H225.515V231.094H223.172V225.482Z" fill="black"/>
<path d="M239.611 223.724V223.138H222.391V223.724C222.391 224.048 222.653 224.31 222.977 224.31H239.025C239.349 224.31 239.611 224.048 239.611 223.724Z" fill="black"/>
<path d="M240.413 232.266H221.586C221.262 232.266 221 232.528 221 232.852V234.414C221 234.738 221.262 235 221.586 235H240.413C240.737 235 240.999 234.738 240.999 234.414V232.852C240.999 232.528 240.737 232.266 240.413 232.266Z" fill="black"/>
<path d="M221.586 221.967H240.414C240.676 221.967 240.906 221.792 240.978 221.54C241.049 221.288 240.944 221.019 240.721 220.882L231.307 215.087C231.119 214.971 230.881 214.971 230.693 215.087L221.279 220.882C221.055 221.019 220.951 221.288 221.022 221.54C221.094 221.792 221.324 221.967 221.586 221.967ZM230.602 218.446H231.398C231.722 218.446 231.984 218.709 231.984 219.032C231.984 219.356 231.722 219.618 231.398 219.618H230.602C230.278 219.618 230.016 219.356 230.016 219.032C230.016 218.709 230.278 218.446 230.602 218.446Z" fill="black"/>
</g>
</Mark>

<defs>
<clipPath id="clip40">
<rect x="248" y="107" width="20" height="20" fill="white"/>
</clipPath>
<clipPath id="clip41">
<rect x="79" y="248" width="20" height="20" fill="white"/>
</clipPath>
<clipPath id="clip42">
<rect x="116" y="168" width="20" height="20" fill="white"/>
</clipPath>
<clipPath id="clip43">
<rect x="221" y="215" width="20" height="20" fill="white"/>
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
