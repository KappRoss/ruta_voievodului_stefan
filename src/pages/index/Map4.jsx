import React, { Fragment } from 'react';
import Cities from './Cities';
import MapMarks from './MapMarks';
import GrayZone from './GrayZone';

export default ({ openINFO, openModal, sliderMove }) => (
  <Fragment>
    <g id="Satul Mereni - Chisinau">
    <GrayZone />
    {openINFO  &&
      <Fragment>
        {[0, 1, 2, 3].map(i => (
          <Cities
            openModal={openModal}
            modalName={`4-${i}`}
            key={`city-4-${i}`}
          />
        ))}

        <g id="Vector 1" filter="url(#filter1_d)">
          <path d="M716 745.327C719.167 745.327 728 745.327 730.5 744.327C732 743.827 734.5 743.527 732.5 746.327C730.5 749.127 728.667 753.494 728 755.327C727.833 756.327 728.1 758.227 730.5 757.827C733.5 757.327 735.5 757.827 739 760.327C739.667 760.827 740.6 762.127 739 763.327C737 764.827 733 763.827 732 767.827C731 771.827 734.5 778 740.5 783C742 782 745 781.7 745 778.5C744.833 777.333 745.2 775.2 748 774C749.5 773.357 749 773 749.5 771C749.9 769.4 752.167 768.667 753 768.5C754.333 768.333 757.3 768.4 758.5 770C760 772 765.5 777 765.5 776.5" stroke="white" strokeWidth="3" strokeMiterlimit="10"/>
        </g>
      </Fragment>
    }

    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
      <MapMarks
        sliderMove={sliderMove}
        marksNum={i}
        key={`marks-${i}`}
      />
    ))}
  {openINFO  &&
    <g id="Group 21">
    <g id="Rectangle 7" filter="url(#filter2_d)">
    <path d="M744 593C744 590.791 745.791 589 748 589H917C919.209 589 921 590.791 921 593V721C921 723.209 919.209 725 917 725H771L767.781 729.024C767.381 729.524 766.619 729.524 766.219 729.024L763 725H748C745.791 725 744 723.209 744 721V593Z" fill="white"/>
    </g>
    <g id="4 Satul Mereni">
    <path d="M778.69 644H780.3V641.732H781.56V640.122H780.3V637.7H778.69V640.122H776.296L779.838 634.2H777.99L774.21 640.542V641.732H778.69V644Z" fill="#E3393B"/>
    <path d="M790.175 641.396C790.175 642.138 789.559 642.544 788.747 642.544C787.991 642.544 787.067 642.18 786.493 641.438L785.513 642.614C785.989 643.608 787.459 644.154 788.719 644.154C790.553 644.154 791.995 643.034 791.995 641.382C791.995 638.12 787.557 638.764 787.557 636.734C787.557 636.09 788.075 635.656 788.929 635.656C789.713 635.656 790.189 635.922 790.665 636.384L791.589 635.096C791.001 634.452 789.993 634.046 788.789 634.046C786.885 634.046 785.737 635.278 785.737 636.748C785.737 639.94 790.175 639.464 790.175 641.396ZM794.007 639.324C794.469 639.114 794.931 638.89 795.659 638.89C796.597 638.89 796.877 639.464 796.835 640.514C796.527 640.29 795.967 640.108 795.407 640.108C794.133 640.108 793.111 640.766 793.111 642.152C793.111 643.37 793.937 644.084 795.085 644.084C795.939 644.084 796.611 643.748 796.947 643.272V644H798.347V640.164C798.347 638.498 797.689 637.546 795.827 637.546C795.001 637.546 794.147 637.826 793.601 638.148L794.007 639.324ZM795.617 642.726C795.113 642.726 794.721 642.46 794.721 641.984C794.721 641.452 795.197 641.2 795.729 641.2C796.191 641.2 796.555 641.298 796.835 641.508V642.152C796.639 642.432 796.289 642.726 795.617 642.726ZM799.858 641.606C799.858 643.216 800.39 644.14 801.818 644.14C802.63 644.14 803.302 643.832 803.68 643.524L803.19 642.278C802.966 642.446 802.658 642.642 802.224 642.642C801.692 642.642 801.468 642.194 801.468 641.508V639.212H803.498V637.7H801.468V635.95H799.858V641.606ZM810.74 637.7H809.13V641.886C808.766 642.362 808.248 642.656 807.716 642.656C806.834 642.656 806.512 642.054 806.512 641.214V637.7H804.902V641.55C804.902 643.356 805.882 644.154 807.114 644.154C808.094 644.154 808.752 643.692 809.13 643.23V644H810.74V637.7ZM812.535 642.264C812.535 643.552 813.053 644.14 814.019 644.14C814.775 644.14 815.321 643.902 815.685 643.608L815.349 642.376C815.153 642.516 814.943 642.628 814.691 642.628C814.313 642.628 814.145 642.32 814.145 641.606V634.2H812.535V642.264ZM820.147 644H821.869V636.958L824.991 641.27H825.243L828.337 636.916V644H830.045V634.2H828.421L825.229 638.778L821.883 634.2H820.147V644ZM837.246 642.236C836.882 642.53 836.238 642.81 835.468 642.81C834.474 642.81 833.718 642.292 833.578 641.34H838.128C838.198 641.102 838.226 640.864 838.226 640.472C838.226 638.708 836.868 637.546 835.244 637.546C833.172 637.546 831.912 639.016 831.912 640.85C831.912 642.838 833.27 644.154 835.3 644.154C836.182 644.154 837.078 643.902 837.708 643.37L837.246 642.236ZM835.174 638.89C836.098 638.89 836.63 639.492 836.616 640.262H833.522C833.69 639.436 834.208 638.89 835.174 638.89ZM839.523 644H841.133V639.772C841.315 639.408 841.609 639.1 842.169 639.1C842.505 639.1 842.673 639.156 842.981 639.338L843.555 637.826C843.345 637.672 843.093 637.588 842.575 637.588C841.819 637.588 841.427 637.91 841.133 638.316V637.7H839.523V644ZM849.414 642.236C849.05 642.53 848.406 642.81 847.636 642.81C846.642 642.81 845.886 642.292 845.746 641.34H850.296C850.366 641.102 850.394 640.864 850.394 640.472C850.394 638.708 849.036 637.546 847.412 637.546C845.34 637.546 844.08 639.016 844.08 640.85C844.08 642.838 845.438 644.154 847.468 644.154C848.35 644.154 849.246 643.902 849.876 643.37L849.414 642.236ZM847.342 638.89C848.266 638.89 848.798 639.492 848.784 640.262H845.69C845.858 639.436 846.376 638.89 847.342 638.89ZM851.691 644H853.301V639.702C853.679 639.324 854.127 639.1 854.673 639.1C855.569 639.1 856.087 639.576 856.087 640.584V644H857.697V640.304C857.697 638.33 856.647 637.588 855.107 637.588C854.351 637.588 853.679 637.924 853.301 638.33V637.7H851.691V644ZM859.572 644H861.182V637.7H859.572V644ZM859.404 635.432C859.404 636.076 859.866 636.44 860.412 636.44C860.874 636.44 861.336 636.076 861.336 635.432C861.336 634.858 860.874 634.494 860.412 634.494C859.866 634.494 859.404 634.858 859.404 635.432Z" fill="black"/>
    </g>
    <path id="Chisinau" d="M782.162 693.76C781.49 694.278 780.664 694.544 779.838 694.544C777.836 694.544 776.45 693.144 776.45 691.1C776.45 688.972 777.822 687.656 779.642 687.656C780.622 687.656 781.266 687.922 781.854 688.314L782.624 687.04C781.98 686.452 780.916 686.046 779.642 686.046C776.408 686.046 774.63 688.286 774.63 691.1C774.63 694.152 776.688 696.154 779.684 696.154C780.958 696.154 782.204 695.706 782.82 695.048L782.162 693.76ZM784.07 696H785.68V691.674C786.044 691.31 786.548 691.1 787.066 691.1C787.948 691.1 788.466 691.618 788.466 692.556V696H790.076V692.346C790.076 690.372 789.026 689.588 787.486 689.588C786.758 689.588 786.086 689.882 785.68 690.274V686.2H784.07V696ZM791.95 696H793.56V689.7H791.95V696ZM791.782 687.432C791.782 688.076 792.244 688.44 792.79 688.44C793.252 688.44 793.714 688.076 793.714 687.432C793.714 686.858 793.252 686.494 792.79 686.494C792.244 686.494 791.782 686.858 791.782 687.432ZM798.787 694.222C798.787 694.614 798.423 694.81 797.961 694.81C797.331 694.81 796.379 694.432 796.001 694.026L795.217 695.076C795.511 695.524 796.687 696.154 797.849 696.154C799.389 696.154 800.397 695.384 800.397 694.138C800.397 691.912 796.995 692.486 796.995 691.436C796.995 691.156 797.289 690.89 797.779 690.89C798.451 690.89 799.109 691.198 799.487 691.492L800.089 690.344C799.697 689.98 798.913 689.546 797.695 689.546C796.393 689.546 795.385 690.232 795.385 691.464C795.385 693.76 798.787 693.2 798.787 694.222ZM802.054 696H803.664V689.7H802.054V696ZM801.886 687.432C801.886 688.076 802.348 688.44 802.894 688.44C803.356 688.44 803.818 688.076 803.818 687.432C803.818 686.858 803.356 686.494 802.894 686.494C802.348 686.494 801.886 686.858 801.886 687.432ZM805.699 696H807.309V691.702C807.687 691.324 808.135 691.1 808.681 691.1C809.577 691.1 810.095 691.576 810.095 692.584V696H811.705V692.304C811.705 690.33 810.655 689.588 809.115 689.588C808.359 689.588 807.687 689.924 807.309 690.33V689.7H805.699V696ZM813.831 691.324C814.293 691.114 814.755 690.89 815.483 690.89C816.421 690.89 816.701 691.464 816.659 692.514C816.351 692.29 815.791 692.108 815.231 692.108C813.957 692.108 812.935 692.766 812.935 694.152C812.935 695.37 813.761 696.084 814.909 696.084C815.763 696.084 816.435 695.748 816.771 695.272V696H818.171V692.164C818.171 690.498 817.513 689.546 815.651 689.546C814.825 689.546 813.971 689.826 813.425 690.148L813.831 691.324ZM815.441 694.726C814.937 694.726 814.545 694.46 814.545 693.984C814.545 693.452 815.021 693.2 815.553 693.2C816.015 693.2 816.379 693.298 816.659 693.508V694.152C816.463 694.432 816.113 694.726 815.441 694.726ZM825.52 689.7H823.91V693.886C823.546 694.362 823.028 694.656 822.496 694.656C821.614 694.656 821.292 694.054 821.292 693.214V689.7H819.682V693.55C819.682 695.356 820.662 696.154 821.894 696.154C822.874 696.154 823.532 695.692 823.91 695.23V696H825.52V689.7Z" fill="black"/>
    <line id="Line 1" opacity="0.1" x1="759.5" y1="639" x2="759.5" y2="689" stroke="black"/>
    <circle id="Ellipse 5" cx="759.5" cy="692.5" r="3.5" stroke="#E3393B" strokeWidth="2"/>
    <circle id="Ellipse 4" cx="759.5" cy="638.5" r="3.5" fill="#E3393B" stroke="#E3393B" strokeWidth="2"/>
    <path id="25 km" d="M875.678 615H869.518V613.712C870.647 612.611 871.427 611.813 871.856 611.318C873.013 609.993 873.592 608.877 873.592 607.972C873.592 607.571 873.485 607.258 873.27 607.034C873.055 606.81 872.747 606.698 872.346 606.698C871.627 606.698 871.156 607.137 870.932 608.014L869.588 607.412C869.719 606.693 870.045 606.129 870.568 605.718C871.1 605.298 871.753 605.088 872.528 605.088C873.405 605.088 874.087 605.34 874.572 605.844C875.057 606.339 875.3 606.941 875.3 607.65C875.3 608.154 875.193 608.691 874.978 609.26C874.763 609.811 874.516 610.291 874.236 610.702C873.947 611.131 873.606 611.551 873.214 611.962C872.878 612.335 872.57 612.653 872.29 612.914C872.15 613.045 871.921 613.241 871.604 613.502H875.678V615ZM877.476 610.408L878.12 605.2H882.754V606.81H879.534L879.254 608.756C879.44 608.719 879.627 608.7 879.814 608.7C880.71 608.7 881.442 608.985 882.012 609.554C882.6 610.123 882.894 610.879 882.894 611.822C882.894 612.839 882.572 613.651 881.928 614.258C881.293 614.855 880.49 615.154 879.52 615.154C878.988 615.154 878.442 615.033 877.882 614.79C877.359 614.547 876.948 614.202 876.65 613.754L877.574 612.536C877.77 612.835 878.054 613.077 878.428 613.264C878.81 613.451 879.188 613.544 879.562 613.544C880.028 613.544 880.411 613.39 880.71 613.082C881.018 612.774 881.172 612.377 881.172 611.892C881.172 611.379 880.98 610.963 880.598 610.646C880.224 610.319 879.72 610.156 879.086 610.156C878.404 610.156 877.868 610.24 877.476 610.408ZM891.288 608.7H893.318L890.952 611.584L893.598 615H891.526L889.034 611.71L891.288 608.7ZM889.006 615H887.396V605.2H889.006V615ZM904.149 610.884V615H902.539V611.304C902.539 610.501 902.18 610.1 901.461 610.1C900.845 610.1 900.411 610.343 900.159 610.828C900.159 610.847 900.159 610.921 900.159 611.052C900.169 611.173 900.173 611.253 900.173 611.29V615H898.563V611.192C898.563 610.856 898.47 610.59 898.283 610.394C898.106 610.198 897.849 610.1 897.513 610.1C896.925 610.1 896.487 610.324 896.197 610.772V615H894.587V608.7H896.197V609.4C896.683 608.859 897.341 608.588 898.171 608.588C898.629 608.588 899.016 608.681 899.333 608.868C899.66 609.045 899.884 609.288 900.005 609.596C900.519 608.924 901.228 608.588 902.133 608.588C903.477 608.588 904.149 609.353 904.149 610.884Z" fill="#2E789E"/>
    <path id="Destinatie" d="M755.47 615H755.624C756.45 615 757.374 615.028 758.032 615.028C761.77 615.028 763.646 612.76 763.646 609.974C763.646 607.412 762.064 605.158 758.144 605.158C757.346 605.158 756.282 605.2 755.638 605.2H755.47V615ZM758.116 606.278C760.958 606.278 762.386 607.846 762.386 609.974C762.386 612.256 760.874 613.908 758.074 613.908C757.906 613.908 757.304 613.894 756.66 613.88V606.32C757.15 606.306 757.528 606.278 758.116 606.278ZM770.205 613.432C769.799 613.81 769.085 614.09 768.273 614.09C767.041 614.09 766.173 613.39 766.075 612.2H770.919C770.961 612.004 770.989 611.752 770.989 611.444C770.989 609.708 769.687 608.56 768.063 608.56C765.991 608.56 764.815 610.016 764.815 611.85C764.815 613.838 766.145 615.14 768.189 615.14C769.029 615.14 769.939 614.874 770.555 614.314L770.205 613.432ZM768.007 609.61C769.099 609.61 769.771 610.254 769.827 611.29H766.005C766.131 610.324 766.859 609.61 768.007 609.61ZM775.7 613.292C775.7 613.866 775.168 614.16 774.58 614.16C773.95 614.16 773.124 613.782 772.76 613.362L772.13 614.16C772.424 614.608 773.432 615.14 774.454 615.14C775.714 615.14 776.89 614.566 776.89 613.236C776.89 611.024 773.488 611.654 773.488 610.324C773.488 609.904 773.866 609.54 774.496 609.54C775.154 609.54 775.7 609.82 776.078 610.156L776.61 609.302C776.232 608.938 775.476 608.56 774.44 608.56C773.194 608.56 772.298 609.232 772.298 610.338C772.298 612.648 775.7 612.018 775.7 613.292ZM778.384 612.606C778.384 614.216 778.944 615.112 780.358 615.112C781.058 615.112 781.632 614.86 781.968 614.58L781.618 613.712C781.394 613.88 781.058 614.062 780.624 614.062C779.826 614.062 779.504 613.488 779.504 612.494V609.75H781.814V608.7H779.504V606.95H778.384V612.606ZM783.767 615H784.887V608.7H783.767V615ZM783.627 606.334C783.627 606.796 783.963 607.062 784.355 607.062C784.705 607.062 785.041 606.796 785.041 606.334C785.041 605.928 784.705 605.662 784.355 605.662C783.963 605.662 783.627 605.928 783.627 606.334ZM787.205 615H788.325V610.45C788.731 609.988 789.389 609.638 790.103 609.638C791.279 609.638 791.881 610.254 791.881 611.57V615H793.001V611.36C793.001 609.386 792.021 608.588 790.383 608.588C789.557 608.588 788.759 608.994 788.325 609.47V608.7H787.205V615ZM795.225 610.03C795.729 609.764 796.191 609.568 796.961 609.568C798.207 609.568 798.389 610.38 798.389 611.556C797.969 611.248 797.311 611.15 796.821 611.15C795.463 611.15 794.441 611.864 794.441 613.152C794.441 614.37 795.225 615.098 796.373 615.098C797.409 615.098 798.011 614.664 798.389 614.188V615H799.453V611.136C799.453 609.498 798.823 608.56 797.031 608.56C796.247 608.56 795.491 608.784 794.931 609.134L795.225 610.03ZM796.765 614.09C796.037 614.09 795.631 613.698 795.631 613.096C795.631 612.368 796.303 612.06 796.975 612.06C797.521 612.06 797.997 612.2 798.389 612.48V613.278C798.067 613.656 797.591 614.09 796.765 614.09ZM801.188 612.606C801.188 614.216 801.748 615.112 803.162 615.112C803.862 615.112 804.436 614.86 804.772 614.58L804.422 613.712C804.198 613.88 803.862 614.062 803.428 614.062C802.63 614.062 802.308 613.488 802.308 612.494V609.75H804.618V608.7H802.308V606.95H801.188V612.606ZM806.572 615H807.692V608.7H806.572V615ZM806.432 606.334C806.432 606.796 806.768 607.062 807.16 607.062C807.51 607.062 807.846 606.796 807.846 606.334C807.846 605.928 807.51 605.662 807.16 605.662C806.768 605.662 806.432 605.928 806.432 606.334ZM814.98 613.432C814.574 613.81 813.86 614.09 813.048 614.09C811.816 614.09 810.948 613.39 810.85 612.2H815.694C815.736 612.004 815.764 611.752 815.764 611.444C815.764 609.708 814.462 608.56 812.838 608.56C810.766 608.56 809.59 610.016 809.59 611.85C809.59 613.838 810.92 615.14 812.964 615.14C813.804 615.14 814.714 614.874 815.33 614.314L814.98 613.432ZM812.782 609.61C813.874 609.61 814.546 610.254 814.602 611.29H810.78C810.906 610.324 811.634 609.61 812.782 609.61Z" fill="#999999"/>
    </g>
  }
    </g>
    <defs>
    <filter id="filter0_d" x="175.75" y="225.75" width="872.5" height="1096.27" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="5"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
    </filter>
    <filter id="filter1_d" x="706" y="732.5" width="71" height="62.3695" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
    <feOffset/>
    <feGaussianBlur stdDeviation="5"/>
    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
    </filter>
    <filter id="filter2_d" x="740" y="589" width="185" height="148.399" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
    </filter>
    <clipPath id="clip0">
    <rect x="771.742" y="755.741" width="10.438" height="10.438" fill="white"/>
    </clipPath>
    <clipPath id="clip1">
    <rect x="830.742" y="731.741" width="10.438" height="10.438" fill="white"/>
    </clipPath>
    <clipPath id="clip2">
    <rect x="767.742" y="800.741" width="10.438" height="10.438" fill="white"/>
    </clipPath>
    <clipPath id="clip3">
    <rect x="826.742" y="782.741" width="10.438" height="10.438" fill="white"/>
    </clipPath>
    </defs>
  </Fragment>
);
