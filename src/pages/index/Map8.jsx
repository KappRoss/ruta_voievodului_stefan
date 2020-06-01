import React, { Fragment } from 'react';
import MapMarks from './MapMarks';
import GrayZone from './GrayZone';

export default ({ openINFO, openModal, sliderMove }) => (
  <Fragment>
    <g id=" Stejarul lui &#200;&#152;tefan - Chisinau">
    <GrayZone />
      {openINFO &&
      <g id="Vector 3" filter="url(#filter1_d)">
      <path d="M716 746.5C718 744.334 722.002 738.3 722.002 735.5C721.502 730.334 719.202 719.6 714.002 718C713.335 720 710.802 723.4 706.002 721C703.602 719.8 701.335 717.5 700.502 716.5C699.502 715.667 696.602 714.5 693.002 716.5C691.002 717.5 688.002 711.5 693.002 708.5C695.502 706 696 704.5 695.5 701C695 697.5 699.004 701.5 700.502 697.5C701 696 702.117 695.164 702.5 695C703.667 694.5 704.3 693.5 701.5 691.5C698 689 697 683.5 699.5 674C699.9 670.8 703 671.667 704.5 672.5C708.167 674 716.6 675.4 721 671C723.8 668.2 728.833 663 731 660.5C731.167 660.167 732.1 659.5 734.5 659.5C736.9 659.5 737.833 658.5 738 658C738.167 657.167 739.5 655.7 743.5 656.5C744.333 657 747.2 656.9 752 652.5C754 649.7 755.167 648.334 755.5 648C753.833 645.834 751.9 640.1 753.5 634.5C753.333 633.834 752.6 632.7 751 633.5C750.2 633.9 748.667 634.334 748 634.501C746.5 633.501 744.5 631.301 748.5 628.501C749.7 627.701 751.333 627.834 752 628.001C752.667 628.167 754 628 754 626C754 625 753 620 753 619.5C753.167 618.167 754.3 616.1 757.5 618.5C758 619 758.5 620 758.5 621C758.5 621.5 757.5 622.5 757 623C756.5 623.5 754.5 630.001 759 628.001C761.5 626.5 763.5 625 763.5 624.5C763.5 624 764 622.501 763 621C762.5 620 761.5 618.5 765 619C766.5 619 766 614 769.5 609C771 607 773.5 604.5 775 601.5C776 600 776 593.5 771.5 591C769.315 589.786 760 584 757.5 580C756 578.334 751.9 575.2 747.5 576C744.5 576.5 740.5 571.5 740 565.5C739.5 559.5 735.5 558 733.5 558.5C732.3 558.9 731.333 559.334 731 559.5C730.5 559.667 729.3 559.3 728.5 556.5C728.1 555.3 727 555.667 726.5 556C726 556.167 724.9 555.9 724.5 553.5C724.333 552 723.6 549.9 722 553.5C720.5 555.5 718 561.5 711 560C709 559.5 710.5 558 708 557C706.5 556.5 704.5 557 706 559.5C706.4 560.3 707.167 561.167 707.5 561.5C707.5 563.667 706.5 566.5 703 565C701.5 563.5 701.5 560 692.5 558.5C691 558 690 559 689.5 555C689.125 552 686 549 678.5 546L677 545.5C677.333 543.834 677.2 540.1 674 538.5C673.167 538 672 536.5 674 534.5C676 533.167 678.701 530.5 673.501 530.5C672.001 530.5 658.501 531 656.001 529C655.501 528.5 653.001 526 654.501 520.5L656.001 516C656.501 514.667 656.6 511.7 653 510.5C649.4 509.3 642.167 504 639 501.5C638.367 501 639 499.2 639 496C639 492 646.5 493.5 650.5 489.5C653.701 486.3 653.501 480.167 653 477.5C652.001 476 651.202 473.2 656.001 474C660.801 474.8 659 469 658 466" stroke="white" stroke-width="3" stroke-miterlimit="10"/>
      </g>
      }

      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
        <MapMarks
          sliderMove={sliderMove}
          marksNum={i}
          key={`marks-${i}`}
        />
      ))}
      {openINFO &&
      <g id="Group 21">
      <g id="Rectangle 7" filter="url(#filter2_d)">
      <path d="M636 284C636 281.791 637.791 280 640 280H809C811.209 280 813 281.791 813 284V412C813 414.209 811.209 416 809 416H663L659.781 420.024C659.381 420.524 658.619 420.524 658.219 420.024L655 416H640C637.791 416 636 414.209 636 412V284Z" fill="white"/>
      </g>
      <g id="8 Stejarul lui &#200;&#152;tefan cel Mare de la Cob&#195;&#162;lea">
      <path d="M673.041 329.162C672.271 329.162 671.753 328.56 671.753 327.902C671.753 327.174 672.299 326.656 673.139 326.656C673.979 326.656 674.567 327.104 674.567 327.902C674.567 328.56 674.049 329.162 673.307 329.162H673.041ZM673.307 330.772C674.161 330.772 674.833 331.248 674.847 332.158C674.861 332.942 674.315 333.544 673.153 333.544C672.103 333.544 671.487 332.928 671.487 332.158C671.487 331.29 672.243 330.772 673.069 330.772H673.307ZM673.167 335.154C675.071 335.154 676.555 334.132 676.555 332.326C676.555 331.052 675.743 330.17 674.777 329.974V329.932C675.729 329.526 676.289 328.574 676.289 327.622C676.289 326.082 674.889 325.046 673.153 325.046C671.431 325.046 670.045 326.082 670.045 327.622C670.045 328.77 670.689 329.624 671.445 329.946V329.988C670.493 330.31 669.765 331.206 669.765 332.466C669.765 334.132 671.263 335.154 673.167 335.154Z" fill="#E3393B"/>
      <path d="M685.62 332.396C685.62 333.138 685.004 333.544 684.192 333.544C683.436 333.544 682.512 333.18 681.938 332.438L680.958 333.614C681.434 334.608 682.904 335.154 684.164 335.154C685.998 335.154 687.44 334.034 687.44 332.382C687.44 329.12 683.002 329.764 683.002 327.734C683.002 327.09 683.52 326.656 684.374 326.656C685.158 326.656 685.634 326.922 686.11 327.384L687.034 326.096C686.446 325.452 685.438 325.046 684.234 325.046C682.33 325.046 681.182 326.278 681.182 327.748C681.182 330.94 685.62 330.464 685.62 332.396ZM688.822 332.606C688.822 334.216 689.354 335.14 690.782 335.14C691.594 335.14 692.266 334.832 692.644 334.524L692.154 333.278C691.93 333.446 691.622 333.642 691.188 333.642C690.656 333.642 690.432 333.194 690.432 332.508V330.212H692.462V328.7H690.432V326.95H688.822V332.606ZM698.703 333.236C698.339 333.53 697.695 333.81 696.925 333.81C695.931 333.81 695.175 333.292 695.035 332.34H699.585C699.655 332.102 699.683 331.864 699.683 331.472C699.683 329.708 698.325 328.546 696.701 328.546C694.629 328.546 693.369 330.016 693.369 331.85C693.369 333.838 694.727 335.154 696.757 335.154C697.639 335.154 698.535 334.902 699.165 334.37L698.703 333.236ZM696.631 329.89C697.555 329.89 698.087 330.492 698.073 331.262H694.979C695.147 330.436 695.665 329.89 696.631 329.89ZM702.912 328.7H701.302V335.322C701.302 335.98 701.106 336.414 700.546 336.414C700.266 336.414 700.056 336.33 699.832 336.19L699.398 337.464C699.664 337.702 700.266 337.912 700.938 337.912C702.338 337.912 702.912 337.002 702.912 335.462V328.7ZM701.148 326.432C701.148 327.076 701.61 327.44 702.156 327.44C702.618 327.44 703.08 327.076 703.08 326.432C703.08 325.858 702.618 325.494 702.156 325.494C701.61 325.494 701.148 325.858 701.148 326.432ZM705.449 330.324C705.91 330.114 706.373 329.89 707.101 329.89C708.039 329.89 708.319 330.464 708.277 331.514C707.969 331.29 707.409 331.108 706.849 331.108C705.575 331.108 704.553 331.766 704.553 333.152C704.553 334.37 705.379 335.084 706.527 335.084C707.381 335.084 708.053 334.748 708.389 334.272V335H709.789V331.164C709.789 329.498 709.131 328.546 707.269 328.546C706.443 328.546 705.589 328.826 705.043 329.148L705.449 330.324ZM707.059 333.726C706.555 333.726 706.163 333.46 706.163 332.984C706.163 332.452 706.639 332.2 707.171 332.2C707.633 332.2 707.997 332.298 708.277 332.508V333.152C708.081 333.432 707.731 333.726 707.059 333.726ZM711.439 335H713.049V330.772C713.231 330.408 713.525 330.1 714.085 330.1C714.421 330.1 714.589 330.156 714.897 330.338L715.471 328.826C715.261 328.672 715.009 328.588 714.491 328.588C713.735 328.588 713.343 328.91 713.049 329.316V328.7H711.439V335ZM722.086 328.7H720.476V332.886C720.112 333.362 719.594 333.656 719.062 333.656C718.18 333.656 717.858 333.054 717.858 332.214V328.7H716.248V332.55C716.248 334.356 717.228 335.154 718.46 335.154C719.44 335.154 720.098 334.692 720.476 334.23V335H722.086V328.7ZM723.88 333.264C723.88 334.552 724.398 335.14 725.364 335.14C726.12 335.14 726.666 334.902 727.03 334.608L726.694 333.376C726.498 333.516 726.288 333.628 726.036 333.628C725.658 333.628 725.49 333.32 725.49 332.606V325.2H723.88V333.264ZM731.031 333.264C731.031 334.552 731.549 335.14 732.515 335.14C733.271 335.14 733.817 334.902 734.181 334.608L733.845 333.376C733.649 333.516 733.439 333.628 733.187 333.628C732.809 333.628 732.641 333.32 732.641 332.606V325.2H731.031V333.264ZM740.912 328.7H739.302V332.886C738.938 333.362 738.42 333.656 737.888 333.656C737.006 333.656 736.684 333.054 736.684 332.214V328.7H735.074V332.55C735.074 334.356 736.054 335.154 737.286 335.154C738.266 335.154 738.924 334.692 739.302 334.23V335H740.912V328.7ZM742.945 335H744.555V328.7H742.945V335ZM742.777 326.432C742.777 327.076 743.239 327.44 743.785 327.44C744.247 327.44 744.709 327.076 744.709 326.432C744.709 325.858 744.247 325.494 743.785 325.494C743.239 325.494 742.777 325.858 742.777 326.432ZM753.952 332.396C753.952 333.138 753.336 333.544 752.524 333.544C751.768 333.544 750.844 333.18 750.27 332.438L749.29 333.614C749.766 334.608 751.236 335.154 752.496 335.154C754.33 335.154 755.772 334.034 755.772 332.382C755.772 329.12 751.334 329.764 751.334 327.734C751.334 327.09 751.852 326.656 752.706 326.656C753.49 326.656 753.966 326.922 754.442 327.384L755.366 326.096C754.778 325.452 753.77 325.046 752.566 325.046C750.662 325.046 749.514 326.278 749.514 327.748C749.514 330.94 753.952 330.464 753.952 332.396ZM751.754 335.812C751.894 335.91 751.992 336.092 751.992 336.344C751.992 336.708 751.866 336.988 751.39 337.184L751.866 337.884C752.664 337.758 753.602 337.142 753.602 336.148C753.602 335.756 753.462 335.546 753.322 335.462L751.754 335.812ZM757.154 332.606C757.154 334.216 757.686 335.14 759.114 335.14C759.926 335.14 760.598 334.832 760.976 334.524L760.486 333.278C760.262 333.446 759.954 333.642 759.52 333.642C758.988 333.642 758.764 333.194 758.764 332.508V330.212H760.794V328.7H758.764V326.95H757.154V332.606ZM767.035 333.236C766.671 333.53 766.027 333.81 765.257 333.81C764.263 333.81 763.507 333.292 763.367 332.34H767.917C767.987 332.102 768.015 331.864 768.015 331.472C768.015 329.708 766.657 328.546 765.033 328.546C762.961 328.546 761.701 330.016 761.701 331.85C761.701 333.838 763.059 335.154 765.089 335.154C765.971 335.154 766.867 334.902 767.497 334.37L767.035 333.236ZM764.963 329.89C765.887 329.89 766.419 330.492 766.405 331.262H763.311C763.479 330.436 763.997 329.89 764.963 329.89ZM769.382 335H770.992V330.212H772.7V328.7H770.992V327.804C770.992 326.936 771.37 326.558 771.916 326.558C772.28 326.558 772.63 326.656 772.84 326.866L773.386 325.634C773.064 325.298 772.378 325.046 771.622 325.046C770.222 325.046 769.382 325.928 769.382 327.678V335ZM774.355 330.324C774.817 330.114 775.279 329.89 776.007 329.89C776.945 329.89 777.225 330.464 777.183 331.514C776.875 331.29 776.315 331.108 775.755 331.108C774.481 331.108 773.459 331.766 773.459 333.152C773.459 334.37 774.285 335.084 775.433 335.084C776.287 335.084 776.959 334.748 777.295 334.272V335H778.695V331.164C778.695 329.498 778.037 328.546 776.175 328.546C775.349 328.546 774.495 328.826 773.949 329.148L774.355 330.324ZM775.965 333.726C775.461 333.726 775.069 333.46 775.069 332.984C775.069 332.452 775.545 332.2 776.077 332.2C776.539 332.2 776.903 332.298 777.183 332.508V333.152C776.987 333.432 776.637 333.726 775.965 333.726ZM780.345 335H781.955V330.702C782.333 330.324 782.781 330.1 783.327 330.1C784.223 330.1 784.741 330.576 784.741 331.584V335H786.351V331.304C786.351 329.33 785.301 328.588 783.761 328.588C783.005 328.588 782.333 328.924 781.955 329.33V328.7H780.345V335ZM671.67 353.886C671.264 354.334 670.732 354.656 670.046 354.656C669.094 354.656 668.226 353.97 668.226 352.85C668.226 351.744 669.08 351.058 669.976 351.058C670.55 351.058 671.068 351.212 671.544 351.674L672.3 350.4C671.712 349.812 670.802 349.546 669.766 349.546C667.848 349.546 666.504 351.016 666.504 352.85C666.504 354.838 667.876 356.154 669.92 356.154C670.942 356.154 671.894 355.776 672.426 355.062L671.67 353.886ZM678.318 354.236C677.954 354.53 677.31 354.81 676.54 354.81C675.546 354.81 674.79 354.292 674.65 353.34H679.2C679.27 353.102 679.298 352.864 679.298 352.472C679.298 350.708 677.94 349.546 676.316 349.546C674.244 349.546 672.984 351.016 672.984 352.85C672.984 354.838 674.342 356.154 676.372 356.154C677.254 356.154 678.15 355.902 678.78 355.37L678.318 354.236ZM676.246 350.89C677.17 350.89 677.702 351.492 677.688 352.262H674.594C674.762 351.436 675.28 350.89 676.246 350.89ZM680.595 354.264C680.595 355.552 681.113 356.14 682.079 356.14C682.835 356.14 683.381 355.902 683.745 355.608L683.409 354.376C683.213 354.516 683.003 354.628 682.751 354.628C682.373 354.628 682.205 354.32 682.205 353.606V346.2H680.595V354.264ZM688.208 356H689.93V348.958L693.052 353.27H693.304L696.398 348.916V356H698.106V346.2H696.482L693.29 350.778L689.944 346.2H688.208V356ZM700.855 351.324C701.317 351.114 701.779 350.89 702.507 350.89C703.445 350.89 703.725 351.464 703.683 352.514C703.375 352.29 702.815 352.108 702.255 352.108C700.981 352.108 699.959 352.766 699.959 354.152C699.959 355.37 700.785 356.084 701.933 356.084C702.787 356.084 703.459 355.748 703.795 355.272V356H705.195V352.164C705.195 350.498 704.537 349.546 702.675 349.546C701.849 349.546 700.995 349.826 700.449 350.148L700.855 351.324ZM702.465 354.726C701.961 354.726 701.569 354.46 701.569 353.984C701.569 353.452 702.045 353.2 702.577 353.2C703.039 353.2 703.403 353.298 703.683 353.508V354.152C703.487 354.432 703.137 354.726 702.465 354.726ZM706.845 356H708.455V351.772C708.637 351.408 708.931 351.1 709.491 351.1C709.827 351.1 709.995 351.156 710.303 351.338L710.877 349.826C710.667 349.672 710.415 349.588 709.897 349.588C709.141 349.588 708.749 349.91 708.455 350.316V349.7H706.845V356ZM716.736 354.236C716.372 354.53 715.728 354.81 714.958 354.81C713.964 354.81 713.208 354.292 713.068 353.34H717.618C717.688 353.102 717.716 352.864 717.716 352.472C717.716 350.708 716.358 349.546 714.734 349.546C712.662 349.546 711.402 351.016 711.402 352.85C711.402 354.838 712.76 356.154 714.79 356.154C715.672 356.154 716.568 355.902 717.198 355.37L716.736 354.236ZM714.664 350.89C715.588 350.89 716.12 351.492 716.106 352.262H713.012C713.18 351.436 713.698 350.89 714.664 350.89ZM726.362 356H727.972V346.2H726.362V349.854C726.012 349.644 725.606 349.546 725.046 349.546C723.016 349.546 721.588 350.932 721.588 352.92C721.588 354.838 722.75 356.112 724.556 356.112C725.368 356.112 725.942 355.79 726.362 355.342V356ZM724.892 354.614C724.038 354.614 723.31 353.984 723.31 352.864C723.31 351.702 724.164 351.058 725.116 351.058C725.55 351.058 725.956 351.184 726.362 351.436V353.97C725.998 354.334 725.48 354.614 724.892 354.614ZM734.701 354.236C734.337 354.53 733.693 354.81 732.923 354.81C731.929 354.81 731.173 354.292 731.033 353.34H735.583C735.653 353.102 735.681 352.864 735.681 352.472C735.681 350.708 734.323 349.546 732.699 349.546C730.627 349.546 729.367 351.016 729.367 352.85C729.367 354.838 730.725 356.154 732.755 356.154C733.637 356.154 734.533 355.902 735.163 355.37L734.701 354.236ZM732.629 350.89C733.553 350.89 734.085 351.492 734.071 352.262H730.977C731.145 351.436 731.663 350.89 732.629 350.89ZM739.945 354.264C739.945 355.552 740.463 356.14 741.429 356.14C742.185 356.14 742.731 355.902 743.095 355.608L742.759 354.376C742.563 354.516 742.353 354.628 742.101 354.628C741.723 354.628 741.555 354.32 741.555 353.606V346.2H739.945V354.264ZM744.618 351.324C745.08 351.114 745.542 350.89 746.27 350.89C747.208 350.89 747.488 351.464 747.446 352.514C747.138 352.29 746.578 352.108 746.018 352.108C744.744 352.108 743.722 352.766 743.722 354.152C743.722 355.37 744.548 356.084 745.696 356.084C746.55 356.084 747.222 355.748 747.558 355.272V356H748.958V352.164C748.958 350.498 748.3 349.546 746.438 349.546C745.612 349.546 744.758 349.826 744.212 350.148L744.618 351.324ZM746.228 354.726C745.724 354.726 745.332 354.46 745.332 353.984C745.332 353.452 745.808 353.2 746.34 353.2C746.802 353.2 747.166 353.298 747.446 353.508V354.152C747.25 354.432 746.9 354.726 746.228 354.726ZM760.842 353.76C760.17 354.278 759.344 354.544 758.518 354.544C756.516 354.544 755.13 353.144 755.13 351.1C755.13 348.972 756.502 347.656 758.322 347.656C759.302 347.656 759.946 347.922 760.534 348.314L761.304 347.04C760.66 346.452 759.596 346.046 758.322 346.046C755.088 346.046 753.31 348.286 753.31 351.1C753.31 354.152 755.368 356.154 758.364 356.154C759.638 356.154 760.884 355.706 761.5 355.048L760.842 353.76ZM761.947 352.85C761.947 354.74 763.291 356.154 765.377 356.154C767.463 356.154 768.807 354.74 768.807 352.85C768.807 350.96 767.463 349.546 765.377 349.546C763.291 349.546 761.947 350.96 761.947 352.85ZM763.669 352.85C763.669 351.758 764.425 351.058 765.377 351.058C766.357 351.058 767.099 351.786 767.099 352.85C767.099 353.942 766.371 354.656 765.377 354.656C764.397 354.656 763.669 353.9 763.669 352.85ZM770.201 355.454C770.775 355.818 771.839 356.154 772.875 356.154C775.087 356.154 776.473 354.824 776.473 352.752C776.473 350.89 775.353 349.546 773.477 349.546C772.805 349.546 772.203 349.784 771.811 350.092V346.2H770.201V355.454ZM773.099 351.058C774.009 351.058 774.751 351.66 774.751 352.864C774.751 353.998 773.967 354.656 772.959 354.656C772.511 354.656 772.161 354.558 771.811 354.334V351.66C772.077 351.352 772.539 351.058 773.099 351.058ZM778.361 351.324C778.823 351.114 779.285 350.89 780.013 350.89C780.951 350.89 781.231 351.464 781.189 352.514C780.881 352.29 780.321 352.108 779.761 352.108C778.487 352.108 777.465 352.766 777.465 354.152C777.465 355.37 778.291 356.084 779.439 356.084C780.293 356.084 780.965 355.748 781.301 355.272V356H782.701V352.164C782.701 350.498 782.043 349.546 780.181 349.546C779.355 349.546 778.501 349.826 777.955 350.148L778.361 351.324ZM779.971 354.726C779.467 354.726 779.075 354.46 779.075 353.984C779.075 353.452 779.551 353.2 780.083 353.2C780.545 353.2 780.909 353.298 781.189 353.508V354.152C780.993 354.432 780.643 354.726 779.971 354.726ZM780.237 346.116H780.181L778.039 347.978L778.767 348.916L780.195 347.81L781.609 348.944L782.365 347.992L780.237 346.116ZM784.351 354.264C784.351 355.552 784.869 356.14 785.835 356.14C786.591 356.14 787.137 355.902 787.501 355.608L787.165 354.376C786.969 354.516 786.759 354.628 786.507 354.628C786.129 354.628 785.961 354.32 785.961 353.606V346.2H784.351V354.264ZM793.477 354.236C793.113 354.53 792.469 354.81 791.699 354.81C790.705 354.81 789.949 354.292 789.809 353.34H794.359C794.429 353.102 794.457 352.864 794.457 352.472C794.457 350.708 793.099 349.546 791.475 349.546C789.403 349.546 788.143 351.016 788.143 352.85C788.143 354.838 789.501 356.154 791.531 356.154C792.413 356.154 793.309 355.902 793.939 355.37L793.477 354.236ZM791.405 350.89C792.329 350.89 792.861 351.492 792.847 352.262H789.753C789.921 351.436 790.439 350.89 791.405 350.89ZM796.243 351.324C796.705 351.114 797.167 350.89 797.895 350.89C798.833 350.89 799.113 351.464 799.071 352.514C798.763 352.29 798.203 352.108 797.643 352.108C796.369 352.108 795.347 352.766 795.347 354.152C795.347 355.37 796.173 356.084 797.321 356.084C798.175 356.084 798.847 355.748 799.183 355.272V356H800.583V352.164C800.583 350.498 799.925 349.546 798.063 349.546C797.237 349.546 796.383 349.826 795.837 350.148L796.243 351.324ZM797.853 354.726C797.349 354.726 796.957 354.46 796.957 353.984C796.957 353.452 797.433 353.2 797.965 353.2C798.427 353.2 798.791 353.298 799.071 353.508V354.152C798.875 354.432 798.525 354.726 797.853 354.726Z" fill="black"/>
      </g>
      <path id="Chisinau" d="M674.162 384.76C673.49 385.278 672.664 385.544 671.838 385.544C669.836 385.544 668.45 384.144 668.45 382.1C668.45 379.972 669.822 378.656 671.642 378.656C672.622 378.656 673.266 378.922 673.854 379.314L674.624 378.04C673.98 377.452 672.916 377.046 671.642 377.046C668.408 377.046 666.63 379.286 666.63 382.1C666.63 385.152 668.688 387.154 671.684 387.154C672.958 387.154 674.204 386.706 674.82 386.048L674.162 384.76ZM676.07 387H677.68V382.674C678.044 382.31 678.548 382.1 679.066 382.1C679.948 382.1 680.466 382.618 680.466 383.556V387H682.076V383.346C682.076 381.372 681.026 380.588 679.486 380.588C678.758 380.588 678.086 380.882 677.68 381.274V377.2H676.07V387ZM683.95 387H685.56V380.7H683.95V387ZM683.782 378.432C683.782 379.076 684.244 379.44 684.79 379.44C685.252 379.44 685.714 379.076 685.714 378.432C685.714 377.858 685.252 377.494 684.79 377.494C684.244 377.494 683.782 377.858 683.782 378.432ZM690.787 385.222C690.787 385.614 690.423 385.81 689.961 385.81C689.331 385.81 688.379 385.432 688.001 385.026L687.217 386.076C687.511 386.524 688.687 387.154 689.849 387.154C691.389 387.154 692.397 386.384 692.397 385.138C692.397 382.912 688.995 383.486 688.995 382.436C688.995 382.156 689.289 381.89 689.779 381.89C690.451 381.89 691.109 382.198 691.487 382.492L692.089 381.344C691.697 380.98 690.913 380.546 689.695 380.546C688.393 380.546 687.385 381.232 687.385 382.464C687.385 384.76 690.787 384.2 690.787 385.222ZM694.054 387H695.664V380.7H694.054V387ZM693.886 378.432C693.886 379.076 694.348 379.44 694.894 379.44C695.356 379.44 695.818 379.076 695.818 378.432C695.818 377.858 695.356 377.494 694.894 377.494C694.348 377.494 693.886 377.858 693.886 378.432ZM697.699 387H699.309V382.702C699.687 382.324 700.135 382.1 700.681 382.1C701.577 382.1 702.095 382.576 702.095 383.584V387H703.705V383.304C703.705 381.33 702.655 380.588 701.115 380.588C700.359 380.588 699.687 380.924 699.309 381.33V380.7H697.699V387ZM705.831 382.324C706.293 382.114 706.755 381.89 707.483 381.89C708.421 381.89 708.701 382.464 708.659 383.514C708.351 383.29 707.791 383.108 707.231 383.108C705.957 383.108 704.935 383.766 704.935 385.152C704.935 386.37 705.761 387.084 706.909 387.084C707.763 387.084 708.435 386.748 708.771 386.272V387H710.171V383.164C710.171 381.498 709.513 380.546 707.651 380.546C706.825 380.546 705.971 380.826 705.425 381.148L705.831 382.324ZM707.441 385.726C706.937 385.726 706.545 385.46 706.545 384.984C706.545 384.452 707.021 384.2 707.553 384.2C708.015 384.2 708.379 384.298 708.659 384.508V385.152C708.463 385.432 708.113 385.726 707.441 385.726ZM717.52 380.7H715.91V384.886C715.546 385.362 715.028 385.656 714.496 385.656C713.614 385.656 713.292 385.054 713.292 384.214V380.7H711.682V384.55C711.682 386.356 712.662 387.154 713.894 387.154C714.874 387.154 715.532 386.692 715.91 386.23V387H717.52V380.7Z" fill="black"/>
      <line id="Line 1" opacity="0.1" x1="651.5" y1="330" x2="651.5" y2="380" stroke="black"/>
      <circle id="Ellipse 5" cx="651.5" cy="383.5" r="3.5" stroke="#E3393B" stroke-width="2"/>
      <circle id="Ellipse 4" cx="651.5" cy="329.5" r="3.5" fill="#E3393B" stroke="#E3393B" stroke-width="2"/>
      <path id="125 km" d="M761.308 298.048L762.162 299.378L763.366 298.468V306H764.976V296.172H763.814L761.308 298.048ZM766.959 306H773.119V304.502H769.045C769.815 303.872 772.741 301.394 772.741 298.65C772.741 297.348 771.831 296.088 769.969 296.088C768.415 296.088 767.295 296.984 767.029 298.412L768.373 299.014C768.583 298.188 769.087 297.698 769.787 297.698C770.599 297.698 771.033 298.188 771.033 298.972C771.033 300.876 768.555 303.144 766.959 304.712V306ZM774.917 301.408C775.211 301.282 775.897 301.156 776.527 301.156C777.843 301.156 778.613 301.912 778.613 302.892C778.613 303.858 777.941 304.544 777.003 304.544C776.261 304.544 775.435 304.152 775.015 303.536L774.091 304.754C774.693 305.678 775.911 306.154 776.961 306.154C778.823 306.154 780.335 304.936 780.335 302.822C780.335 300.89 778.991 299.7 777.255 299.7C777.059 299.7 776.849 299.728 776.695 299.756L776.975 297.81H780.195V296.2H775.561L774.917 301.408ZM790.759 299.7H788.729L786.475 302.71L788.967 306H791.039L788.393 302.584L790.759 299.7ZM784.837 306H786.447V296.2H784.837V306ZM801.591 301.884C801.591 300.162 800.723 299.588 799.575 299.588C798.595 299.588 797.895 300.008 797.447 300.596C797.223 300.022 796.579 299.588 795.613 299.588C794.829 299.588 794.087 299.896 793.639 300.4V299.7H792.029V306H793.639V301.772C793.919 301.352 794.381 301.1 794.955 301.1C795.641 301.1 796.005 301.534 796.005 302.192V306H797.615V302.29C797.615 302.15 797.601 301.926 797.601 301.828C797.825 301.394 798.301 301.1 798.903 301.1C799.659 301.1 799.981 301.52 799.981 302.304V306H801.591V301.884Z" fill="#2E789E"/>
      <path id="Destinatie" d="M647.47 306H647.624C648.45 306 649.374 306.028 650.032 306.028C653.77 306.028 655.646 303.76 655.646 300.974C655.646 298.412 654.064 296.158 650.144 296.158C649.346 296.158 648.282 296.2 647.638 296.2H647.47V306ZM650.116 297.278C652.958 297.278 654.386 298.846 654.386 300.974C654.386 303.256 652.874 304.908 650.074 304.908C649.906 304.908 649.304 304.894 648.66 304.88V297.32C649.15 297.306 649.528 297.278 650.116 297.278ZM662.205 304.432C661.799 304.81 661.085 305.09 660.273 305.09C659.041 305.09 658.173 304.39 658.075 303.2H662.919C662.961 303.004 662.989 302.752 662.989 302.444C662.989 300.708 661.687 299.56 660.063 299.56C657.991 299.56 656.815 301.016 656.815 302.85C656.815 304.838 658.145 306.14 660.189 306.14C661.029 306.14 661.939 305.874 662.555 305.314L662.205 304.432ZM660.007 300.61C661.099 300.61 661.771 301.254 661.827 302.29H658.005C658.131 301.324 658.859 300.61 660.007 300.61ZM667.7 304.292C667.7 304.866 667.168 305.16 666.58 305.16C665.95 305.16 665.124 304.782 664.76 304.362L664.13 305.16C664.424 305.608 665.432 306.14 666.454 306.14C667.714 306.14 668.89 305.566 668.89 304.236C668.89 302.024 665.488 302.654 665.488 301.324C665.488 300.904 665.866 300.54 666.496 300.54C667.154 300.54 667.7 300.82 668.078 301.156L668.61 300.302C668.232 299.938 667.476 299.56 666.44 299.56C665.194 299.56 664.298 300.232 664.298 301.338C664.298 303.648 667.7 303.018 667.7 304.292ZM670.384 303.606C670.384 305.216 670.944 306.112 672.358 306.112C673.058 306.112 673.632 305.86 673.968 305.58L673.618 304.712C673.394 304.88 673.058 305.062 672.624 305.062C671.826 305.062 671.504 304.488 671.504 303.494V300.75H673.814V299.7H671.504V297.95H670.384V303.606ZM675.767 306H676.887V299.7H675.767V306ZM675.627 297.334C675.627 297.796 675.963 298.062 676.355 298.062C676.705 298.062 677.041 297.796 677.041 297.334C677.041 296.928 676.705 296.662 676.355 296.662C675.963 296.662 675.627 296.928 675.627 297.334ZM679.205 306H680.325V301.45C680.731 300.988 681.389 300.638 682.103 300.638C683.279 300.638 683.881 301.254 683.881 302.57V306H685.001V302.36C685.001 300.386 684.021 299.588 682.383 299.588C681.557 299.588 680.759 299.994 680.325 300.47V299.7H679.205V306ZM687.225 301.03C687.729 300.764 688.191 300.568 688.961 300.568C690.207 300.568 690.389 301.38 690.389 302.556C689.969 302.248 689.311 302.15 688.821 302.15C687.463 302.15 686.441 302.864 686.441 304.152C686.441 305.37 687.225 306.098 688.373 306.098C689.409 306.098 690.011 305.664 690.389 305.188V306H691.453V302.136C691.453 300.498 690.823 299.56 689.031 299.56C688.247 299.56 687.491 299.784 686.931 300.134L687.225 301.03ZM688.765 305.09C688.037 305.09 687.631 304.698 687.631 304.096C687.631 303.368 688.303 303.06 688.975 303.06C689.521 303.06 689.997 303.2 690.389 303.48V304.278C690.067 304.656 689.591 305.09 688.765 305.09ZM693.188 303.606C693.188 305.216 693.748 306.112 695.162 306.112C695.862 306.112 696.436 305.86 696.772 305.58L696.422 304.712C696.198 304.88 695.862 305.062 695.428 305.062C694.63 305.062 694.308 304.488 694.308 303.494V300.75H696.618V299.7H694.308V297.95H693.188V303.606ZM698.572 306H699.692V299.7H698.572V306ZM698.432 297.334C698.432 297.796 698.768 298.062 699.16 298.062C699.51 298.062 699.846 297.796 699.846 297.334C699.846 296.928 699.51 296.662 699.16 296.662C698.768 296.662 698.432 296.928 698.432 297.334ZM706.98 304.432C706.574 304.81 705.86 305.09 705.048 305.09C703.816 305.09 702.948 304.39 702.85 303.2H707.694C707.736 303.004 707.764 302.752 707.764 302.444C707.764 300.708 706.462 299.56 704.838 299.56C702.766 299.56 701.59 301.016 701.59 302.85C701.59 304.838 702.92 306.14 704.964 306.14C705.804 306.14 706.714 305.874 707.33 305.314L706.98 304.432ZM704.782 300.61C705.874 300.61 706.546 301.254 706.602 302.29H702.78C702.906 301.324 703.634 300.61 704.782 300.61Z" fill="#999999"/>
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
      <filter id="filter1_d" x="627.219" y="455.526" width="159.819" height="301.992" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="5"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
      <filter id="filter2_d" x="632" y="280" width="185" height="148.399" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
      </defs>
  </Fragment>
);