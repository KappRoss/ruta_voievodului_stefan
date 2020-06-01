import React from 'react';
import Tooltip from "./Tooltip";
import ActiveCircle from "./ActiveCircle";

export default ({ setActive, active, activeElement, setSvg, svg }) => (
<svg ref={setSvg} width="428" height="378" viewBox="0 0 428 378" fill="none" xmlns="http://www.w3.org/2000/svg">
{activeElement && <ActiveCircle svg={svg} activeElement={activeElement} />}

<path d="M51.0993 108C44.3772 108 37.8778 110.41 32.7806 114.793C27.6834 119.176 24.3262 125.24 23.3179 131.886C22.3097 138.532 23.7174 145.32 27.2855 151.017C30.8536 156.714 36.3458 160.943 42.7654 162.937L48.6285 173.139C48.8523 173.529 49.175 173.852 49.5639 174.078C49.9529 174.303 50.3944 174.421 50.8439 174.421C51.2933 174.421 51.7348 174.303 52.1238 174.078C52.5128 173.852 52.8355 173.529 53.0593 173.139L58.8637 163.088C65.3572 161.203 70.9534 157.04 74.6256 151.363C78.2978 145.685 79.7999 138.874 78.8562 132.179C77.9125 125.484 74.5864 119.353 69.488 114.912C64.3896 110.471 57.8608 108.017 51.0993 108V108ZM51.0993 157.551C46.8545 157.553 42.7045 156.296 39.1743 153.938C35.6441 151.581 32.8924 148.23 31.2672 144.308C29.642 140.387 29.2163 136.072 30.044 131.908C30.8718 127.745 32.9157 123.92 35.9173 120.919C38.9188 117.917 42.7432 115.873 46.9066 115.046C51.07 114.218 55.3854 114.644 59.3068 116.269C63.2282 117.894 66.5796 120.646 68.9369 124.176C71.2941 127.706 72.5515 131.856 72.5498 136.101C72.5476 141.789 70.2869 147.244 66.2647 151.266C62.2424 155.288 56.7877 157.549 51.0993 157.551ZM53.9052 181.054C53.9069 181.611 53.743 182.157 53.4344 182.621C53.1258 183.085 52.6864 183.447 52.1718 183.661C51.6572 183.875 51.0907 183.931 50.544 183.823C49.9973 183.715 49.4951 183.446 49.101 183.052C48.7069 182.658 48.4387 182.156 48.3304 181.609C48.222 181.063 48.2785 180.496 48.4925 179.981C48.7066 179.467 49.0686 179.027 49.5327 178.719C49.9968 178.41 50.542 178.246 51.0993 178.248C51.8428 178.25 52.5552 178.547 53.081 179.072C53.6067 179.598 53.903 180.31 53.9052 181.054Z" fill="#E3393B"/>
<path d="M51.0995 157.56C62.9509 157.56 72.5583 147.952 72.5583 136.101C72.5583 124.25 62.9509 114.642 51.0995 114.642C39.2481 114.642 29.6406 124.25 29.6406 136.101C29.6406 147.952 39.2481 157.56 51.0995 157.56Z" fill="#E3393B"/>
<path d="M53.2528 146.175H56.4728V141.639H58.9928V138.419H56.4728V133.575H53.2528V138.419H48.4648L55.5488 126.575H51.8528L44.2928 139.259V141.639H53.2528V146.175Z" fill="white"/>

<g onClick={setActive("4-0")}>
<path d="M226.287 74C221.195 74.0003 216.271 75.8261 212.41 79.1462C208.548 82.4663 206.005 87.0607 205.241 92.0956C204.477 97.1306 205.543 102.273 208.247 106.588C210.95 110.904 215.11 114.108 219.974 115.619L224.416 123.348C224.585 123.643 224.83 123.888 225.124 124.059C225.419 124.229 225.753 124.319 226.094 124.319C226.434 124.319 226.769 124.229 227.064 124.059C227.358 123.888 227.603 123.643 227.772 123.348L232.169 115.733C237.089 114.305 241.328 111.152 244.11 106.85C246.892 102.549 248.03 97.3895 247.315 92.3173C246.6 87.2451 244.081 82.6007 240.218 79.2362C236.356 75.8717 231.41 74.0126 226.287 74V74ZM226.287 111.539C223.072 111.54 219.928 110.588 217.253 108.802C214.579 107.016 212.494 104.477 211.263 101.506C210.032 98.5355 209.709 95.2663 210.336 92.1122C210.963 88.9582 212.512 86.0609 214.786 83.787C217.06 81.5131 219.957 79.9646 223.111 79.3376C226.265 78.7105 229.534 79.033 232.505 80.2642C235.476 81.4954 238.015 83.58 239.801 86.2544C241.586 88.9288 242.539 92.0727 242.538 95.2886C242.536 99.5979 240.823 103.73 237.776 106.777C234.729 109.825 230.597 111.537 226.287 111.539ZM228.413 129.344C228.414 129.766 228.29 130.179 228.056 130.531C227.823 130.882 227.49 131.157 227.1 131.319C226.71 131.481 226.281 131.524 225.867 131.442C225.452 131.36 225.072 131.156 224.773 130.858C224.475 130.559 224.272 130.179 224.19 129.765C224.108 129.35 224.15 128.921 224.313 128.531C224.475 128.142 224.749 127.809 225.101 127.575C225.452 127.341 225.865 127.217 226.287 127.218C226.851 127.22 227.39 127.444 227.789 127.843C228.187 128.241 228.411 128.781 228.413 129.344Z" fill="#03799C"/>
<path d="M226.288 111.545C235.266 111.545 242.545 104.267 242.545 95.2887C242.545 86.3104 235.266 79.032 226.288 79.032C217.31 79.032 210.031 86.3104 210.031 95.2887C210.031 104.267 217.31 111.545 226.288 111.545Z" fill="white"/>
<g clip-path="url(#clip40)">
<path d="M231.484 95.4822H233.828V101.094H231.484V95.4822Z" fill="black"/>
<path d="M227.047 95.4822H229.391V101.094H227.047V95.4822Z" fill="black"/>
<path d="M222.609 95.4822H224.953V101.094H222.609V95.4822Z" fill="black"/>
<path d="M218.172 95.4822H220.515V101.094H218.172V95.4822Z" fill="black"/>
<path d="M234.611 93.7244V93.1384H217.391V93.7244C217.391 94.048 217.653 94.3103 217.977 94.3103H234.025C234.349 94.3103 234.611 94.048 234.611 93.7244Z" fill="black"/>
<path d="M235.413 102.266H216.586C216.262 102.266 216 102.528 216 102.852V104.414C216 104.738 216.262 105 216.586 105H235.413C235.737 105 235.999 104.738 235.999 104.414V102.852C235.999 102.528 235.737 102.266 235.413 102.266Z" fill="black"/>
<path d="M216.586 91.9666H235.414C235.676 91.9666 235.906 91.7924 235.978 91.5402C236.049 91.288 235.944 91.019 235.721 90.8817L226.307 85.087C226.119 84.971 225.881 84.971 225.693 85.087L216.279 90.8817C216.055 91.0191 215.951 91.288 216.022 91.5402C216.094 91.7924 216.324 91.9666 216.586 91.9666ZM225.602 88.4464H226.398C226.722 88.4464 226.984 88.7086 226.984 89.0323C226.984 89.3559 226.722 89.6182 226.398 89.6182H225.602C225.278 89.6182 225.016 89.3559 225.016 89.0323C225.016 88.7086 225.278 88.4464 225.602 88.4464Z" fill="black"/>
</g>
</g>

<g onClick={setActive("4-2")}>
<path d="M57.2874 215C52.1948 215 47.2711 216.826 43.4096 220.146C39.5481 223.466 37.0047 228.061 36.2409 233.096C35.4771 238.131 36.5435 243.273 39.2466 247.588C41.9497 251.904 46.1104 255.108 50.9738 256.619L55.4155 264.348C55.5851 264.643 55.8295 264.888 56.1242 265.059C56.4189 265.229 56.7533 265.319 57.0938 265.319C57.4344 265.319 57.7688 265.229 58.0635 265.059C58.3582 264.888 58.6026 264.643 58.7722 264.348L63.1695 256.733C68.0888 255.305 72.3283 252.152 75.1103 247.85C77.8923 243.549 79.0302 238.39 78.3153 233.317C77.6004 228.245 75.0806 223.601 71.2182 220.236C67.3558 216.872 62.4097 215.013 57.2874 215V215ZM57.2874 252.539C54.0716 252.54 50.9276 251.588 48.2532 249.802C45.5789 248.016 43.4942 245.477 42.263 242.506C41.0318 239.536 40.7093 236.266 41.3364 233.112C41.9634 229.958 43.5119 227.061 45.7858 224.787C48.0597 222.513 50.957 220.965 54.1111 220.338C57.2652 219.71 60.5344 220.033 63.5051 221.264C66.4759 222.495 69.0148 224.58 70.8006 227.254C72.5865 229.929 73.539 233.073 73.5378 236.289C73.5361 240.598 71.8234 244.73 68.7763 247.777C65.7291 250.825 61.5967 252.537 57.2874 252.539ZM59.4131 270.344C59.4143 270.766 59.2902 271.179 59.0564 271.531C58.8226 271.882 58.4897 272.157 58.0999 272.319C57.71 272.481 57.2808 272.524 56.8667 272.442C56.4525 272.36 56.072 272.156 55.7735 271.858C55.4749 271.559 55.2717 271.179 55.1897 270.765C55.1076 270.35 55.1504 269.921 55.3125 269.531C55.4747 269.142 55.7489 268.809 56.1005 268.575C56.4521 268.341 56.8652 268.217 57.2874 268.218C57.8506 268.22 58.3903 268.444 58.7886 268.843C59.1869 269.241 59.4114 269.781 59.4131 270.344Z" fill="#03799C"/>
<path d="M57.288 252.545C66.2663 252.545 73.5447 245.267 73.5447 236.289C73.5447 227.31 66.2663 220.032 57.288 220.032C48.3096 220.032 41.0312 227.31 41.0312 236.289C41.0312 245.267 48.3096 252.545 57.288 252.545Z" fill="white"/>
<g clip-path="url(#clip41)">
<path d="M62.4844 236.482H64.828V242.094H62.4844V236.482Z" fill="black"/>
<path d="M58.0469 236.482H60.3906V242.094H58.0469V236.482Z" fill="black"/>
<path d="M53.6094 236.482H55.9531V242.094H53.6094V236.482Z" fill="black"/>
<path d="M49.1719 236.482H51.5155V242.094H49.1719V236.482Z" fill="black"/>
<path d="M65.6112 234.724V234.138H48.3906V234.724C48.3906 235.048 48.6529 235.31 48.9766 235.31H65.0253C65.3488 235.31 65.6112 235.048 65.6112 234.724Z" fill="black"/>
<path d="M66.4131 243.266H47.5859C47.2623 243.266 47 243.528 47 243.852V245.414C47 245.738 47.2623 246 47.5859 246H66.4131C66.7368 246 66.9991 245.738 66.9991 245.414V243.852C66.9991 243.528 66.7368 243.266 66.4131 243.266Z" fill="black"/>
<path d="M47.5859 232.967H66.414C66.6762 232.967 66.9064 232.792 66.9778 232.54C67.0491 232.288 66.9444 232.019 66.7212 231.882L57.3071 226.087C57.1188 225.971 56.8812 225.971 56.6928 226.087L47.2787 231.882C47.0555 232.019 46.9508 232.288 47.0222 232.54C47.0936 232.792 47.3239 232.967 47.5859 232.967ZM56.6017 229.446H57.3984C57.722 229.446 57.9843 229.709 57.9843 230.032C57.9843 230.356 57.722 230.618 57.3984 230.618H56.6017C56.2781 230.618 56.0158 230.356 56.0158 230.032C56.0158 229.709 56.2781 229.446 56.6017 229.446Z" fill="black"/>
</g>
</g>

<g onClick={setActive("4-1")}>
<path d="M94.2874 135C89.1948 135 84.2711 136.826 80.4096 140.146C76.5481 143.466 74.0047 148.061 73.2409 153.096C72.4771 158.131 73.5435 163.273 76.2466 167.588C78.9497 171.904 83.1104 175.108 87.9738 176.619L92.4155 184.348C92.5851 184.643 92.8295 184.888 93.1242 185.059C93.4189 185.229 93.7533 185.319 94.0938 185.319C94.4344 185.319 94.7688 185.229 95.0635 185.059C95.3582 184.888 95.6026 184.643 95.7722 184.348L100.169 176.733C105.089 175.305 109.328 172.152 112.11 167.85C114.892 163.549 116.03 158.39 115.315 153.317C114.6 148.245 112.081 143.601 108.218 140.236C104.356 136.872 99.4097 135.013 94.2874 135V135ZM94.2874 172.539C91.0716 172.54 87.9276 171.588 85.2532 169.802C82.5789 168.016 80.4942 165.477 79.263 162.506C78.0318 159.536 77.7093 156.266 78.3364 153.112C78.9634 149.958 80.5119 147.061 82.7858 144.787C85.0597 142.513 87.957 140.965 91.1111 140.338C94.2652 139.71 97.5344 140.033 100.505 141.264C103.476 142.495 106.015 144.58 107.801 147.254C109.586 149.929 110.539 153.073 110.538 156.289C110.536 160.598 108.823 164.73 105.776 167.777C102.729 170.825 98.5967 172.537 94.2874 172.539ZM96.4131 190.344C96.4143 190.766 96.2902 191.179 96.0564 191.531C95.8226 191.882 95.4897 192.157 95.0999 192.319C94.71 192.481 94.2808 192.524 93.8667 192.442C93.4525 192.36 93.072 192.156 92.7735 191.858C92.4749 191.559 92.2717 191.179 92.1897 190.765C92.1076 190.35 92.1504 189.921 92.3125 189.531C92.4747 189.142 92.7489 188.809 93.1005 188.575C93.4521 188.341 93.8652 188.217 94.2874 188.218C94.8506 188.22 95.3903 188.444 95.7886 188.843C96.1869 189.241 96.4114 189.781 96.4131 190.344Z" fill="#03799C"/>
<path d="M94.288 172.545C103.266 172.545 110.545 165.267 110.545 156.289C110.545 147.31 103.266 140.032 94.288 140.032C85.3096 140.032 78.0312 147.31 78.0312 156.289C78.0312 165.267 85.3096 172.545 94.288 172.545Z" fill="white"/>
<g clip-path="url(#clip42)">
<path d="M99.4844 156.482H101.828V162.094H99.4844V156.482Z" fill="black"/>
<path d="M95.0469 156.482H97.3906V162.094H95.0469V156.482Z" fill="black"/>
<path d="M90.6094 156.482H92.9531V162.094H90.6094V156.482Z" fill="black"/>
<path d="M86.1719 156.482H88.5155V162.094H86.1719V156.482Z" fill="black"/>
<path d="M102.611 154.724V154.138H85.3906V154.724C85.3906 155.048 85.6529 155.31 85.9766 155.31H102.025C102.349 155.31 102.611 155.048 102.611 154.724Z" fill="black"/>
<path d="M103.413 163.266H84.5859C84.2623 163.266 84 163.528 84 163.852V165.414C84 165.738 84.2623 166 84.5859 166H103.413C103.737 166 103.999 165.738 103.999 165.414V163.852C103.999 163.528 103.737 163.266 103.413 163.266Z" fill="black"/>
<path d="M84.5859 152.967H103.414C103.676 152.967 103.906 152.792 103.978 152.54C104.049 152.288 103.944 152.019 103.721 151.882L94.3071 146.087C94.1188 145.971 93.8812 145.971 93.6928 146.087L84.2787 151.882C84.0555 152.019 83.9508 152.288 84.0222 152.54C84.0936 152.792 84.3239 152.967 84.5859 152.967ZM93.6017 149.446H94.3984C94.722 149.446 94.9843 149.709 94.9843 150.032C94.9843 150.356 94.722 150.618 94.3984 150.618H93.6017C93.2781 150.618 93.0158 150.356 93.0158 150.032C93.0158 149.709 93.2781 149.446 93.6017 149.446Z" fill="black"/>
</g>
</g>

<g onClick={setActive("4-3")}>
<path d="M199.287 182C194.195 182 189.271 183.826 185.41 187.146C181.548 190.466 179.005 195.061 178.241 200.096C177.477 205.131 178.543 210.273 181.247 214.588C183.95 218.904 188.11 222.108 192.974 223.619L197.416 231.348C197.585 231.643 197.83 231.888 198.124 232.059C198.419 232.229 198.753 232.319 199.094 232.319C199.434 232.319 199.769 232.229 200.064 232.059C200.358 231.888 200.603 231.643 200.772 231.348L205.169 223.733C210.089 222.305 214.328 219.152 217.11 214.85C219.892 210.549 221.03 205.39 220.315 200.317C219.6 195.245 217.081 190.601 213.218 187.236C209.356 183.872 204.41 182.013 199.287 182V182ZM199.287 219.539C196.072 219.54 192.928 218.588 190.253 216.802C187.579 215.016 185.494 212.477 184.263 209.506C183.032 206.536 182.709 203.266 183.336 200.112C183.963 196.958 185.512 194.061 187.786 191.787C190.06 189.513 192.957 187.965 196.111 187.338C199.265 186.71 202.534 187.033 205.505 188.264C208.476 189.495 211.015 191.58 212.801 194.254C214.586 196.929 215.539 200.073 215.538 203.289C215.536 207.598 213.823 211.73 210.776 214.777C207.729 217.825 203.597 219.537 199.287 219.539ZM201.413 237.344C201.414 237.766 201.29 238.179 201.056 238.531C200.823 238.882 200.49 239.157 200.1 239.319C199.71 239.481 199.281 239.524 198.867 239.442C198.452 239.36 198.072 239.156 197.773 238.858C197.475 238.559 197.272 238.179 197.19 237.765C197.108 237.35 197.15 236.921 197.313 236.531C197.475 236.142 197.749 235.809 198.101 235.575C198.452 235.341 198.865 235.217 199.287 235.218C199.851 235.22 200.39 235.444 200.789 235.843C201.187 236.241 201.411 236.781 201.413 237.344Z" fill="#03799C"/>
<path d="M199.288 219.545C208.266 219.545 215.545 212.267 215.545 203.289C215.545 194.31 208.266 187.032 199.288 187.032C190.31 187.032 183.031 194.31 183.031 203.289C183.031 212.267 190.31 219.545 199.288 219.545Z" fill="white"/>
<g clip-path="url(#clip43)">
<path d="M204.484 203.482H206.828V209.094H204.484V203.482Z" fill="black"/>
<path d="M200.047 203.482H202.391V209.094H200.047V203.482Z" fill="black"/>
<path d="M195.609 203.482H197.953V209.094H195.609V203.482Z" fill="black"/>
<path d="M191.172 203.482H193.515V209.094H191.172V203.482Z" fill="black"/>
<path d="M207.611 201.724V201.138H190.391V201.724C190.391 202.048 190.653 202.31 190.977 202.31H207.025C207.349 202.31 207.611 202.048 207.611 201.724Z" fill="black"/>
<path d="M208.413 210.266H189.586C189.262 210.266 189 210.528 189 210.852V212.414C189 212.738 189.262 213 189.586 213H208.413C208.737 213 208.999 212.738 208.999 212.414V210.852C208.999 210.528 208.737 210.266 208.413 210.266Z" fill="black"/>
<path d="M189.586 199.967H208.414C208.676 199.967 208.906 199.792 208.978 199.54C209.049 199.288 208.944 199.019 208.721 198.882L199.307 193.087C199.119 192.971 198.881 192.971 198.693 193.087L189.279 198.882C189.055 199.019 188.951 199.288 189.022 199.54C189.094 199.792 189.324 199.967 189.586 199.967ZM198.602 196.446H199.398C199.722 196.446 199.984 196.709 199.984 197.032C199.984 197.356 199.722 197.618 199.398 197.618H198.602C198.278 197.618 198.016 197.356 198.016 197.032C198.016 196.709 198.278 196.446 198.602 196.446Z" fill="black"/>
</g>
</g>

<path opacity="0.3" d="M281.945 286.628C279.813 281.406 275.855 280.402 275.977 277.129C276.205 273.475 281.503 270.537 285.263 269.396C293.301 266.975 298.964 271.359 301.384 268.513C303.805 265.666 299.558 258.861 301.384 257.689C302.633 256.897 305.084 259.744 308.463 261.662C314.857 265.316 325.209 266.062 330.339 261.449C336.885 255.512 335.012 240.426 328.116 232.723C323.96 228.08 319.089 227.38 317.962 222.341C317.095 218.474 319.226 215.688 321.007 211.517C324.503 203.357 325.354 194.307 323.443 185.638C320.231 173.718 306.103 161.814 294.717 163.762C278.656 166.518 277.043 195.274 262.459 196.02C260.282 196.127 258.394 195.594 244.556 184.527C216.805 162.316 215.206 157.125 214.947 153.152C214.597 147.352 216.881 139.375 222.681 135.478C235.103 127.15 256.172 143.911 260.739 136.36C263.144 132.281 260.739 125.034 258.973 119.615C256.156 111.06 251.437 104.392 252.122 103.935C252.807 103.479 254.908 108.274 258.744 108.502C262.581 108.73 267.315 104.681 268.031 100.114C268.853 94.8318 263.646 93.0049 263.601 86.6417C263.601 80.7046 268.091 79.7913 268.168 74.9199C268.426 67.3845 257.74 66.2426 249.397 54.3838C241.055 42.525 244.313 33.6804 237.462 30.9555C230.871 28.3371 226.167 36.0247 218.464 33.1628C211.583 30.6205 208.493 21.9738 207.199 18.3659C203.895 9.23204 205.798 2.38164 204.154 2.01629C202.51 1.65093 199.983 7.4205 194.655 20.5733C188.901 34.7917 186.023 41.8857 185.156 44.9303C180.33 61.5692 177.849 70.1398 180.589 80.4915C182.994 89.7929 188.048 94.786 185.156 99.49C184.242 101.012 183.466 100.891 173.891 105.244C164.939 109.309 162.747 110.74 159.535 109.811C156.323 108.883 156.491 106.934 153.126 105.61C147.357 103.387 139.197 106.158 135.665 111.349C132.803 115.566 135.574 117.59 133.23 122.401C128.906 131.291 116.317 130.743 115.784 136.543C115.479 139.892 119.605 141.232 119.102 145.814C118.813 148.402 117.093 151.462 114.901 151.782C111.582 152.284 109.268 146.24 106.939 146.925C104.61 147.61 106.285 153.639 102.525 156.638C100.5 158.267 97.0442 158.891 95.0196 157.521C91.503 155.176 94.8825 148.63 93.2536 140.775C91.503 132.357 84.5156 124.73 77.3455 121.564C63.9187 115.627 51.2378 125.811 45.3769 118.915C42.4541 115.505 43.7023 110.862 38.7548 107.193C37.065 105.945 33.5333 103.981 31.9044 105.214C28.8598 107.482 36.0756 117.925 31.6761 123.329C29.8341 125.598 27.4745 125.111 26.5915 127.531C25.4802 130.576 28.7837 132.859 28.8141 136.589C28.7718 138.243 28.2069 139.842 27.2005 141.156L29.9102 142.769C34.3858 145.403 38.1763 147.001 37.8718 148.295C37.3999 150.244 28.5249 147.656 24.8257 152.269C22.4813 155.207 24.6734 158.008 21.9637 161.555C19.254 165.102 16.59 163.336 13.7889 166.411C9.73955 170.841 13.4844 176.352 9.35892 180.995C6.3143 184.42 2.64555 183.248 2.06707 185.409C1.10802 189.078 10.5768 196.294 21.2939 199.552C32.011 202.809 34.6142 199.445 39.8509 203.083C47.1885 208.168 50.5071 220.727 47.8126 230.257C45.6661 237.868 40.3228 241.385 42.0582 246.835C43.4739 251.265 47.9344 251.858 48.0257 254.568C48.0257 256.821 45.1485 259.972 32.1175 264.128C32.1175 265.27 31.9196 266.381 32.6808 267.051C36.0451 270.096 49.4262 255.527 57.8598 259.44C60.5239 260.673 62.031 263.413 64.1622 262.758C66.6436 261.982 66.6588 257.567 68.4704 257.461C69.7948 257.369 71.515 259.698 71.7738 262.027C72.2914 266.716 67.1003 270.05 68.1354 271.648C69.1706 273.247 73.3722 270.842 74.4378 272.303C75.6709 274.008 70.1754 277.54 70.4494 282.244C70.693 286.278 86.251 300.846 86.6924 303.785C87.6211 310.026 82.3083 311.822 82.3844 317.714C82.4909 326.3 93.8778 329.557 92.66 335.601C91.6857 340.411 84.1502 340.168 83.0542 345.557C82.0342 350.565 87.8494 353.595 86.3576 358.481C85.3529 361.77 82.2169 361.922 80.0704 364.768C78.4263 366.93 77.3912 370.629 79.2332 377.434C81.745 376.125 85.0788 375.44 90.346 371.238C94.1366 368.194 95.2935 366.215 97.6379 366.428C101.246 366.747 101.444 371.71 105.082 373.05C111.704 375.501 119.209 362.241 124.476 364.281C127.795 365.56 126.623 371.512 130.566 386.142C132.91 394.773 134.143 399.127 137.355 401.06C140.841 403.161 143.262 401.38 157.571 399.234C169.034 397.513 171.836 398.001 173.038 395.702C175.139 391.668 167.832 387.649 166.629 376.703C166.431 374.953 165.457 366.047 170.602 361.48C173.206 359.197 174.971 360.125 181.426 358.618C189.57 356.715 194.822 353.351 204.185 347.353C212.177 342.238 212.557 340.716 212.588 339.833C212.816 333.942 198.643 330.699 199.329 326.574C199.937 322.935 211.614 321.657 213.243 321.504C221.417 320.667 226.319 322.555 228.055 319.982C229.79 317.409 226.532 313.649 228.055 312.249C230.11 310.422 236.138 316.587 241.314 314.243C243.08 313.436 242.973 312.431 244.617 311.366C249.184 308.321 255.274 312.675 260.967 314.014C269.309 315.993 273.83 310.833 281.594 306.905C281.746 303.282 282.051 300.192 282.401 297.665C282.873 294.179 283.589 290.662 281.945 286.628Z" stroke="white" stroke-width="2.5" stroke-miterlimit="10"/>
<defs>
<clipPath id="clip40">
<rect x="216" y="85" width="20" height="20" fill="white"/>
</clipPath>
<clipPath id="clip41">
<rect x="47" y="226" width="20" height="20" fill="white"/>
</clipPath>
<clipPath id="clip42">
<rect x="84" y="146" width="20" height="20" fill="white"/>
</clipPath>
<clipPath id="clip43">
<rect x="189" y="193" width="20" height="20" fill="white"/>
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
