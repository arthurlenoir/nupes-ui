import React from "react";
import styled from "styled-components";
import { Colors } from "../../stylesheet";
import { LogoNupes } from "./LogoNupes";
import { NupesText } from "./NupesText";

interface Props extends React.SVGProps<SVGSVGElement> {
  color?: Colors;
}

const DEFAULT_WIDTH = 4096;
const DEFAULT_HEIGHT = 1374;

export const LogoNupesWithText: React.FC<Props> = ({
  className,
  width,
  height,
  ...props
}) => (
  <svg
    version="1.1"
    width={width ?? (height ? undefined : DEFAULT_WIDTH)}
    height={height ?? (width ? undefined : DEFAULT_HEIGHT)}
    viewBox="0 0 4096 1374"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs id="defs828">
      <linearGradient id="linearGradient58875">
        <stop
          stopColor="#434b82"
          stopOpacity={0.98039216}
          offset="0"
          id="stop58871"
        />
        <stop
          stopColor="#3c8e50"
          stopOpacity={0.98039216}
          offset="0.47385558"
          id="stop63470"
        />
        <stop
          stopColor="#e6b92a"
          stopOpacity={0.98039216}
          offset="1"
          id="stop58873"
        />
      </linearGradient>
      <linearGradient id="linearGradient54530">
        <stop
          stopColor="#ebaf2c"
          stopOpacity={0.98039216}
          offset="0"
          id="stop54526"
        />
        <stop
          stopColor="#d02d4a"
          stopOpacity={0.98039216}
          offset="0.38242045"
          id="stop57445"
        />
        <stop
          stopColor="#c838a1"
          stopOpacity={0.98039216}
          offset="0.65576315"
          id="stop56505"
        />
        <stop
          stopColor="#563b88"
          stopOpacity={0.98039216}
          offset="1"
          id="stop54528"
        />
      </linearGradient>
      <linearGradient id="linearGradient48494">
        <stop
          stopColor="#dd3bb3"
          stopOpacity={0.98039216}
          offset="0"
          id="stop48490"
        />
        <stop
          stopColor="#5c428c"
          stopOpacity={0.98039216}
          offset="1"
          id="stop48492"
        />
      </linearGradient>
      <linearGradient id="linearGradient40374">
        <stop
          stopColor="#009565"
          stopOpacity={0.98039216}
          offset="0"
          id="stop40370"
        />
        <stop
          stopColor="#e89024"
          stopOpacity={0.98039216}
          offset="0.34429038"
          id="stop44878"
        />
        <stop
          stopColor="#b91b3e"
          stopOpacity={0.98039216}
          offset="1"
          id="stop40372"
        />
      </linearGradient>
      <linearGradient id="linearGradient23803">
        <stop stopColor="#368e52" stopOpacity={1} offset="0" id="stop23801" />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient40374"
        id="linearGradient40376"
        x1="2502.7393"
        y1="1240.9995"
        x2="3281.6711"
        y2="441.1073"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient48494"
        id="linearGradient48496"
        x1="1817"
        y1="514"
        x2="1933.5"
        y2="137.49997"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient54530"
        id="linearGradient54532"
        x1="646.875"
        y1="1121.875"
        x2="950"
        y2="100"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient58875"
        id="linearGradient58877"
        x1="226.58911"
        y1="384.02487"
        x2="428.17517"
        y2="1175.7708"
        gradientUnits="userSpaceOnUse"
      />
    </defs>
    <g id="g830">
      <path
        fill="url(#linearGradient58877)"
        fillOpacity={1}
        d="m 528,1257.0749 c -12.95208,-2.7834 -21.68563,-5.6226 -30.66598,-9.9692 -27.84433,-13.4771 -52.59948,-39.0111 -69.15885,-71.335 C 344.67143,981.05812 319.23068,716.0174 237.35919,491.22213 c -6.62946,-18.20258 -17.93041,-36.0139 -29.28439,-47.15471 -14.8068,-14.5288 -38.76484,-27.70087 -67.37837,-37.04446 -11.32736,-3.69889 -22.29965,-13.51363 -27.69965,-24.77742 -1.71763,-3.58278 -3.68772,-10.20382 -4.61202,-15.5 -5.41417,-31.02283 9.04527,-63.45771 38.11524,-85.4987 18.52406,-14.04503 50.51426,-22.92847 72.66004,-20.17716 15.07676,1.87309 36.11124,10.17806 51.96788,20.5183 17.6018,11.47827 38.46773,30.59211 52.30392,47.91202 3.07562,3.85 6.01826,7.52382 6.53922,8.16403 0.52095,0.64022 4.07028,5.81522 7.88739,11.5 15.61456,23.2546 39.41969,68.12176 51.51493,112.63172 71.922,264.66986 122.99382,500.81391 181.1897,744.88805 4.09031,17.1512 7.42704,32.6762 7.41496,34.5 -0.0121,1.8239 -0.57464,5.2487 -1.89523,7.4414 -1.79319,2.9774 -4.59665,5.4918 -7.72804,7 -5.73722,2.7633 -12.4927,2.8012 -18.85477,3.0756 -7.18045,0.3097 -15.31513,-0.2967 -21.5,-1.6259 z"
        id="path1364"
      />
      <path
        fill="url(#linearGradient54532)"
        fillOpacity={1}
        d="m 529.42895,962.8848 c 78.58576,-288.0403 137.84346,-493.33935 210.54882,-753.885 9.46429,-33.9205 12.81284,-43.6422 19.21408,-55.7828 15.2738,-28.9686 41.8943,-50.7243 79.0511,-64.605 41.9311,-15.6641 73.5518,-11.846 87.6883,10.5882 6.4134,10.178 7.5246,20.0958 3.5068,31.2996 L 596.48899,1240.348 c 0,0 -46.53173,-195.4938 -67.06004,-277.4632 z"
        id="path1364-3"
      />
      <path
        fill="url(#linearGradient48496)"
        fillOpacity={1}
        d="m 1933.5,137.49997 58.8309,-0.5307 0.2573,265.42619 L 2063,403 v 52.97114 L 1934.242,456.5 Z M 2225.2403,455.95161 2224.5,137.49997 h 129 l 0.5316,55.5 h -71.0548 l 0.5232,78.5 50.5326,0.5344 -0.5326,53.46563 -50.5237,0.53439 0.5237,76.46561 70,0.1537 v 53.34174 z m -1169.5954,-314.95164 -0.1429,-3.5 32.5817,-0.2796 c 17.9199,-0.1539 33.6695,0.1224 34.999,0.6139 1.3646,0.5045 2.5262,1.8238 2.6673,3.0297 4.2132,21.3799 9.9503,44.3328 14.2545,62.136 5.5257,22.825 10.2833,42.625 10.5724,44 0.289,1.375 2.7342,11.95 5.4337,23.5 6.289,26.9082 10.3579,46.95596 17.9619,88.50003 6.9117,37.7623 6.6773,36.75019 8.1667,35.26077 0.7649,-0.76489 0.6081,-8.64989 -0.5451,-27.41722 -3.001,-48.83845 -3.4875,-68.07648 -3.7638,-148.84358 l -0.2754,-80.5 h 24.4726 24.4725 l -0.012,19.25 c -0.01,10.5875 -0.1192,82.25 -0.25,159.25003 L 1226,456 h -73.9229 L 1100.5542,224.91227 1104.2291,456 H 1056 c 0,0 0.4807,-197.29593 -0.3551,-315.00003 z M 1286.5,454.37734 c -18.3527,-4.02117 -29.5165,-15.63259 -35.2228,-36.63484 -1.5397,-5.66698 -1.7226,-16.70657 -1.9839,-119.74253 -0.1583,-62.425 0.013,-114.175 0.381,-115 0.3679,-0.825 0.7713,-2.4 0.8965,-3.5 0.3148,-2.767 1.0461,-5.4765 2.4292,-9 0.6477,-1.65 1.3361,-3.7837 1.5298,-4.7416 0.533,-2.6358 6.918,-11.8728 11.093,-16.0478 3.8462,-3.8463 14.5739,-9.6547 18.6299,-10.0872 1.2825,-0.1367 2.8436,-0.5649 3.4691,-0.9514 0.6254,-0.3865 17.9313,-0.7633 38.4576,-0.8371 37.9405,-0.1366 46.388,0.4825 51.5706,3.7798 1.2375,0.7873 2.25,1.1869 2.25,0.8881 0,-1.5091 8.5108,4.1032 12.9421,8.5346 4.2078,4.2078 8.22,9.8205 8.5514,11.9626 0.043,0.275 0.6398,1.5125 1.3271,2.75 0.6874,1.2375 0.9538,2.25 0.5921,2.25 -0.3617,0 -0.097,0.675 0.5873,1.5 0.6847,0.825 0.9097,1.5 0.5,1.5 -0.4097,0 -0.2652,0.578 0.321,1.2843 2.9055,3.5009 3.1886,15.93 2.8755,126.2157 -0.2948,103.85924 -0.4484,112.50883 -2.1134,119.00003 -5.0073,19.52226 -14.2414,30.23678 -30.8689,35.8178 -5.7962,1.94548 -8.7368,2.10287 -43.7142,2.33954 -30.697,0.2077 -38.7699,-0.0245 -44.5,-1.28 z m 62,-261.44407 -41,-0.4333 c -0.053,3.8432 -0.037,209.26482 -0.037,209.26482 L 1348.5,402.5 Z m 121.8412,261.97117 c -11.2102,-1.87259 -22.1222,-7.91507 -27.5245,-15.24161 -4.6004,-6.23906 -8.69,-15.51358 -10.2551,-23.25689 -1.1435,-5.65724 -1.4561,-31.49678 -1.7288,-142.90597 l -0.3328,-136 59.4787,-0.5297 L 1489.5,402.5 h 40 V 137.49997 l 59.0513,0.7732 c 0,0 0.108,62.9363 -0.3713,138.2652 -0.9627,151.27446 -0.4892,141.29045 -7.3712,155.42885 -6.0397,12.40802 -16.4736,19.89315 -31.4511,22.56254 -8.9257,1.59081 -70.0025,1.88042 -79.0165,0.37468 z m 129.6971,-317.90447 60.4977,1.0583 23.4299,253.27996 6.4189,-0.15184 23.1152,-253.68642 60.4658,-0.5293 -40.9486,317.77933 -92.9266,1.25 z m 186.4617,0.5 129.5,-0.5146 v 56.0146 h -70 l -0.25,77.75 51.4309,1.2842 -0.7202,53.01022 L 1845.5,325.5 v 77 l 70.5,0.52559 V 456 h -129 z m 291.4829,-0.5 h 60.1549 c -0.1493,88.5 -0.2985,177.00003 -0.4477,265.50003 23.9366,0.15692 71.8099,0.47077 71.8099,0.47077 L 2209,456 h -129.8833 z"
        id="path1364-9"
      />
      <path
        fill="url(#linearGradient40376)"
        fillOpacity={1}
        d="m 2203.5171,1265.75 c -0.4414,-1.3137 -3.5171,-22.1087 -3.5171,-23.7803 0,-0.5483 -3.6025,-0.9697 -8.2899,-0.9697 -24.4912,0 -40.8848,-12.5817 -48.5115,-37.2317 -1.4564,-4.7072 -1.666,-17.144 -1.9679,-116.7683 -0.2409,-79.4629 -0.012,-113.7774 0.7961,-119.4262 3.5288,-24.6622 17.286,-40.5739 38.4732,-44.4987 7.3792,-1.367 67.1123,-1.3897 76.7747,-0.029 19.3142,2.7195 32.6777,12.6194 38.7562,28.7111 4.9909,13.2127 5.0594,15.1634 4.7091,134.0304 -0.2985,101.2612 -0.4743,111.26 -2.0593,117.1244 -4.3596,16.13 -12.3262,26.9191 -24.0344,32.5493 -3.9305,1.8901 -8.9967,3.7321 -11.2584,4.0935 -2.2617,0.3613 -4.5768,0.9468 -5.1447,1.3012 -1.0187,8.6683 2.4429,14.8525 2.7479,24.3942 -9.5323,-0.3587 -50.288,12.1458 -57.474,0.5 z M 2241,977 h -40 v 209 h 40 z M 1055.5,922.5 h 129 c 0.1774,18.1667 0.3548,36.3334 0.5321,54.5 h -69.847 c -0.9869,27.8466 -0.3203,56.6506 -0.1338,79 h 49.9485 v 54 h -50 v 76 c 23.8237,0.3243 45.9957,0.407 69.5,0.4999 0.1774,18.1667 0.3548,36.3333 0.5321,54.5 h -130.0382 c 0.1686,-106.167 0.3376,-212.3329 0.5063,-318.4999 z m 178.0607,316.8969 c -19.2844,-4.6642 -31.5641,-19.7482 -34.5384,-42.4256 -0.7748,-5.9079 -1.0219,-43.4212 -0.8167,-123.9713 l 0.2944,-115.5 2.3177,-6.5 c 4.2801,-12.0039 9.8536,-18.3289 20.6823,-23.4709 3.85,-1.8281 9.9619,-3.8201 13.5819,-4.4265 9.9023,-1.6588 70.4105,-1.3907 80.2051,0.3554 20.9044,3.7266 32.2172,14.9972 36.2607,36.1254 1.9684,24.1234 1.2728,72.4166 1.2728,72.4166 H 1294 v -55 h -36 v 209 h 35.9741 l 0.5259,-69.5 h 59 l 0.3003,25 c 0.3404,28.3403 -1.0661,56.4197 -3.2242,64.3686 -4.9091,18.0808 -17.5569,30.2406 -35.3753,34.0103 -8.2463,1.7446 -74.0402,1.3561 -81.6401,-0.482 z m 174.4393,0.03 c -8.9596,-2.4492 -14.1431,-5.4478 -20.514,-11.8674 -6.85,-6.9022 -10.7229,-14.1614 -13.5771,-25.4482 -1.896,-7.4977 -1.9491,-11.3852 -1.6833,-123.1769 L 1372.5,963.5 l 2.8177,-8 c 6.3688,-18.0819 16.8637,-27.9722 33.9597,-32.0032 8.5264,-2.0105 71.6048,-2.0725 82.7644,-0.081 7.8005,1.3917 17.5102,5.6538 22.5595,9.9026 4.5888,3.8612 10.3443,12.9494 12.955,20.4563 4.2436,12.2024 4.5825,23.1874 4.1879,135.7257 -0.3276,93.4198 -0.5506,105.7538 -2.0217,111.8348 -4.5765,18.917 -14.4885,31.0041 -30.2225,36.8545 -5.7888,2.1525 -7.4082,2.24 -46,2.4862 -33.0767,0.2111 -40.9519,-0.01 -45.5,-1.2482 z M 1471.5,977.5 1431,976.9586 V 1186 h 41.0093 z m 81.9618,262.25 0.038,-317.25 h 59 l 0.5074,263.4747 71.4926,0.5253 0.5321,54.5 z M 1734,1239.1857 c -16.5077,-4.3148 -27.5384,-16.1851 -33.1941,-35.7208 L 1698.5,1195.5 v -113 c 0,-105.7438 0.1168,-113.4979 1.819,-120.7536 4.9152,-20.951 17.1414,-33.867 36.254,-38.2996 5.8059,-1.3464 12.6662,-1.5348 44.397,-1.2188 35.4872,0.3534 37.892,0.494 44.1799,2.5821 15.7966,5.246 25.2407,15.3887 30.4786,32.7331 1.6781,5.5567 1.8201,13.6103 2.114,119.8934 0.3494,126.4004 0.4913,123.2216 -6.126,137.1556 -6.3501,13.3717 -18.2808,22.6891 -32.5073,25.3871 -3.0857,0.5852 -21.0049,0.9961 -41.9957,0.9631 -31.1047,-0.049 -37.5915,-0.3133 -43.1135,-1.7567 z M 1798,977 h -40 v 209 h 40 z m 116,262.1857 c -16.9371,-4.4271 -28.5981,-17.2356 -32.489,-35.6857 -1.253,-5.9416 -1.4789,-24.7971 -1.4935,-124.7008 -0.012,-82.7603 0.3134,-119.2739 1.0971,-123 2.6497,-12.5972 10.9101,-23.632 21.2257,-28.3547 11.1958,-5.1256 16.6772,-5.6111 59.1597,-5.2394 37.6118,0.329 39.2314,0.4226 45.5,2.628 13.5257,4.7587 21.0157,12.4919 25.7004,26.5351 2.6779,8.0276 2.7174,8.5323 3.0816,39.397 l 0.3689,31.2652 L 1977.5,1021.5 1976.9618,977 H 1939 v 209 h 39 v -76 h -18 v -48 h 76.0775 l -0.2888,69.25 -0.2887,69.25 -2.79,7.8901 c -3.6487,10.3191 -6.7123,15.4031 -12.6008,20.911 -11.5389,10.7934 -16.4916,11.7133 -62.6731,11.6413 -31.4085,-0.049 -37.9089,-0.312 -43.4361,-1.7567 z M 2059.5,922.5 2118,921.9698 V 1241 h -59.0061 z m 299.5,316.9085 c -18.2761,-4.851 -29.8568,-17.5917 -34.681,-38.1549 -1.7116,-7.2957 -1.819,-15.7558 -1.819,-143.2445 v -135.491 l 58.1875,0.8361 L 2382,1186 h 39 l 1,-263 h 59 l 0.25,86.75 c 0.4716,163.6081 0.3244,180.7134 -1.6365,190.25 -4.4983,21.8783 -17.3701,35.9858 -36.4126,39.9084 -8.4761,1.746 -77.2785,1.3375 -84.2009,-0.4999 z M 2504.0732,923.6053 2633,923 v 53 l -70.5,0.4995 0.6632,78.996 49.8373,0.2773 0.9367,54.2267 h -50.9367 v 76 h 70 v 55 h -130.2612 z m 222.9272,158.6681 62.9957,-0.2734 v 25.9528 l -34.5,0.5472 v 40 l 25.5,0.5598 v 25.8804 l -25.5,0.5598 0.4061,39 33.5939,0.3234 -0.048,25.2295 -62.4815,0.8077 z m 94.014,157.6703 L 2820.5,1108.5 2796,1107.9384 V 1082 h 79 v 25.9384 l -24.5,0.5616 -1.2573,131.4573 z m 750.0836,0.024 34.5009,-317.1281 c 0,0 106.0225,-4.5571 106.4011,1.0661 16.4292,164.7843 32.238,316.7026 32.238,316.7026 l -58.738,-0.6539 -7.4141,-61.0322 c -0.029,-0.1716 -41.5859,-0.2673 -41.5859,-0.2673 l -8.8299,61.4932 z m 90.6717,-261.968 -7.3799,-0.1054 -12.9641,148.2468 33.4325,-0.2401 z M 3757.5,922.5 l 58.5,-0.5302 0.01,2.7651 c 0,92.2068 -0.025,261.2651 -0.025,261.2651 h 72.0147 v 55 l -129.8796,-0.3906 z m 144.9618,317.2498 0.038,-317.25 129.5,-0.5146 v 55.0146 h -70 v 79 h 51 v 54 h -51 v 76 h 70 v 55 l -129.5381,-1.25 z m -897.3495,-1.3022 c -13.5331,-3.7095 -22.7153,-11.3651 -28.7567,-23.9757 C 2970.9067,1203.098 2970,1195.7421 2970,1162.912 V 1134 h 56.9669 l -0.019,52.5 H 3063.5 l 0.5296,-58.0667 -36.2648,-26.8863 c -42.8559,-31.7729 -46.052,-34.3804 -50.2442,-40.9909 -6.9027,-10.8846 -6.8959,-10.8334 -7.2875,-55.0797 -0.3844,-43.434 0.086,-48.9398 5.1146,-59.9247 5.0444,-11.0185 14.7109,-17.9953 29.1523,-21.0408 10.4433,-2.2023 70.5197,-2.1434 81.2922,0.08 10.828,2.2346 17.2171,5.5449 23.0774,11.957 10.0002,10.9419 12.1304,21.4854 12.1304,60.0403 V 1025 h -55.8951 l -0.3714,-47.8 h -38.467 l 0.7335,49.5442 34.75,25.4536 c 19.1125,13.9994 36.775,26.8415 39.25,28.538 10.1556,6.9612 16.6292,16.2345 18.8924,27.0634 1.7329,8.2912 1.4866,83.0549 -0.3042,92.3628 -3.772,19.6046 -12.6252,31.2292 -28.2894,37.1451 -5.5475,2.0952 -7.4237,2.1993 -43.2988,2.4036 -30.4747,0.1734 -38.5093,-0.063 -42.8877,-1.2634 z m 172.1178,0 c -20.2369,-5.4483 -31.4529,-20.8627 -34.2783,-47.1094 -0.7002,-6.5048 -0.9474,-46.108 -0.7293,-116.8402 0.3271,-106.0844 0.3484,-107.0655 2.4883,-114.6541 5.5962,-19.8456 15.1745,-30.2981 32.0764,-35.0042 6.0498,-1.6844 10.466,-1.8589 44.7128,-1.7668 41.4104,0.1115 43.6553,0.3544 55.1848,5.9725 3.7246,1.8149 7.9053,4.9274 10.51,7.8244 3.9677,4.413 9.593,14.229 10.3419,18.0464 0.1706,0.87 0.3822,1.5818 0.4701,1.5818 0.2031,0 0.6834,2.4719 1.9431,10 0.6406,3.8285 0.9161,46.3535 0.7613,117.5 l -0.2426,111.5 -2.2292,7.89 c -5.7785,20.4523 -15.7677,30.9286 -33.4702,35.1024 -8.8972,2.0976 -79.7171,2.0631 -87.5391,-0.043 z m 63.6521,-261.0915 -39.6822,-0.1581 -0.5132,209.1534 40.8132,0.1466 z m 116.2301,261.0614 c -12.9918,-3.494 -21.7767,-10.5571 -27.2091,-21.8762 -6.6442,-13.8442 -6.4032,-8.6493 -6.4032,-138.0433 0,-64.35 0.3098,-118.8903 0.6884,-121.2007 0.3787,-2.3104 1.182,-5.1229 1.7852,-6.25 0.6032,-1.1271 0.8542,-2.0493 0.5576,-2.0493 -1.6059,0 5.6518,-10.8606 9.6888,-14.4983 3.7538,-3.3827 11.7877,-8.2795 14.78,-9.0089 0.275,-0.067 2.3,-0.7004 4.5,-1.4074 5.2609,-1.6908 56.6989,-2.5698 73,-1.2474 12.2525,0.994 21.2507,2.6671 22.95,4.2674 0.5225,0.492 1.5543,0.8946 2.2929,0.8946 3.0024,0 12.533,8.5189 15.6046,13.9481 1.7275,3.0536 3.1812,5.7769 3.2305,6.0519 0.049,0.275 0.5598,1.625 1.1344,3 0.9526,2.2792 2.9334,11.3458 3.2771,15 0.8229,8.7483 0.1849,64.2911 0.1849,64.2911 l -58.1744,0.6489 -1.25,-53.7212 -35.1065,-0.7188 -1.143,210 h 37 l 0.5259,-69.5 h 58.4741 l -0.5925,41.251 c -0.6453,44.9337 -0.8691,46.8377 -6.8975,58.6879 -5.8914,11.581 -14.7692,18.3802 -28.1031,21.5232 -9.1075,2.1468 -76.7813,2.1143 -84.7946,-0.041 z M 3498.5,922.5 h 58 l 0.2906,317.5 h -57.546 z M 1095,896.7774 c 0,-1.7525 13.0427,-42.1262 13.9035,-43.0381 30.726,-0.9711 54.1558,-0.4383 87.1443,-0.2393 -13.4489,16.3784 -25.6461,30.074 -37.2887,44.5 -8.0005,-2.3326 -61.7213,5.0753 -63.7591,-1.2226 z"
        id="path1364-2"
      />
      <path
        fill="#503b86"
        fillOpacity={0.98039216}
        d="m 1095.3412,831.94153 c -16.2015,-2.82282 -27.0686,-11.20313 -34.3723,-26.50676 C 1054.7887,792.48547 1055,798.00698 1055,649.43462 V 514 h 60 v 264 h 39 V 514 h 60.0544 l -0.2927,137.25 c -0.2714,127.2273 -0.4205,137.68815 -2.0422,143.25 -4.4307,15.19516 -12.9051,27.02666 -23.0345,32.1596 -11.0805,5.61494 -11.4054,5.65255 -51.185,5.92622 -20.35,0.13999 -39.3215,-0.14994 -42.1588,-0.64429 z M 1235,514 h 70.6256 L 1362.7348,773.59854 1357.8518,514 H 1407 V 833.02405 L 1331.7813,832.5 1281.8977,604.5304 1285.2287,833 H 1235 Z m 195,0 h 60 v 319 h -60 z m 125.5,318.33932 c -10.5687,-1.53166 -19.9265,-5.92002 -25.8741,-12.13371 -8.0883,-8.45017 -11.2287,-13.99821 -14.3864,-25.41594 C 1513.6332,788.98158 1513.5,779.65644 1513.5,673 c 0,-108.70926 0.1071,-115.87746 1.8214,-121.92004 3.8647,-13.62188 11.9722,-25.23753 21.5214,-30.8337 9.8444,-5.76924 14.0774,-6.24765 55.1356,-6.23148 29.2395,0.0115 38.8786,0.33479 43.6694,1.46455 18.8352,4.44171 29.8683,15.80162 35.0819,36.12112 1.6433,6.40439 1.7703,15.11688 1.7703,121.39955 0,106.17181 -0.128,114.97278 -1.7602,121 -4.1719,15.40569 -12.644,27.34493 -23.2398,32.75031 -10.5204,5.36694 -12.2414,5.55888 -52,5.79968 -20.35,0.12325 -38.35,0.0285 -40,-0.21067 z M 1613,569 h -40.9145 l -0.126,209 h 41.0411 z m 82,-55 70,0.47872 56.8133,258.0413 L 1817,514 h 49 v 319 h -74.9229 L 1741.0542,603.46448 1744.227,833 H 1695 Z m 277,-0.0698 64.25,0.28488 64.25,0.28488 5.5,2.59593 c 9.0822,4.28668 14.0197,10.46841 17.3596,21.73423 3.1992,10.79114 3.7941,28.83633 3.4174,103.66984 -0.3294,65.46154 -0.5456,73.6196 -2.0938,79 -5.8063,20.17881 -16.2158,29.7043 -35.5111,32.49528 -3.6696,0.53081 -18.2596,0.97402 -32.4221,0.98491 l -25.75,0.0198 v 78 h -59 z M 2067,569 h -36 v 132 h 36 z m 116.5283,262.97064 c -21.6582,-3.78245 -35.6401,-19.3537 -39.4828,-43.97064 -0.8588,-5.50172 -1.0776,-37.34101 -0.8213,-119.5 0.3251,-104.22622 0.4738,-112.41208 2.1426,-117.93705 5.8486,-19.36353 18.4222,-32.09375 35.1231,-35.56085 3.6787,-0.7637 18.2565,-1.0132 45.2195,-0.77395 38.1625,0.33862 40.0328,0.44365 45.7099,2.56684 12.0789,4.51743 18.8846,10.59567 24.6723,22.03508 6.623,13.09037 6.4084,8.58066 6.4084,134.66993 0,106.12025 -0.1228,114.44928 -1.7768,120.5 -4.3603,15.95163 -12.2857,27.2036 -22.9924,32.6434 -10.7923,5.4833 -12.3698,5.66267 -52.2308,5.93901 -20.35,0.14108 -39.2373,-0.13422 -41.9717,-0.61177 z M 2243,569 h -40 v 209 h 40 z m 82,-55.05683 63.75,0.27843 63.75,0.27842 6.2618,2.89186 c 7.0119,3.23826 12.1093,8.26757 14.9977,14.79738 4.7735,10.79128 4.7405,10.08932 4.7405,100.81076 0,76.93945 -0.166,86.00062 -1.6578,90.5 -4.1838,12.61879 -8.5226,19.04104 -16.168,23.93169 -9.9644,6.37417 -12.8755,6.83335 -46.4242,7.32263 L 2384,755.1955 v 77.80452 h -59 z M 2420,569 h -36 v 132 h 36 z m 117.5,262.92713 c -19.9968,-3.35572 -32.9949,-15.63366 -39.0932,-36.92713 -1.7679,-6.17292 -1.8766,-13.40639 -2.1614,-143.75 L 2495.9456,514 H 2556 v 264 h 39 V 514 h 60 v 135.04216 c 0,150.8391 0.3256,143.49337 -7.0297,158.60535 -6.7302,13.82763 -17.7085,21.64381 -34.1466,24.31124 -7.4705,1.21224 -69.0636,1.18673 -76.3237,-0.0316 z M 2677,514 h 60 v 263.97474 l 71.5,0.52526 v 54 l -131.5,0.51438 z m 170,0.70091 106.4866,-0.20091 33.736,318.5 H 2926 L 2921,771.79141 2878.2786,771 c 0,0 -3.8806,41.32509 -5.6967,62 h -60.7577 z M 2914.8281,718.3566 2904,570.65245 l -8.0008,0.0975 -13.1869,147.25 z M 3000,514 h 59 v 319 h -59 z m 83,-0.0702 63.75,0.28512 63.75,0.28513 4.8835,2.27167 c 7.4731,3.47635 11.9882,7.57021 15.3664,13.93279 6.775,12.76062 6.5916,10.45887 6.9904,87.71599 0.2305,44.66676 -0.01,72.29683 -0.6646,76.5 -2.3246,14.91642 -6.7997,23.72114 -14.7243,28.97015 -2.4943,1.65219 -5.0244,3.16706 -5.6224,3.36639 l 26.8956,104.008 L 3184.584,832.5 3159.0366,734.20956 3142.5,734.5 3141.9812,833 H 3083 Z m 97.0169,55.07025 H 3142 l 0.6885,110.35516 L 3179.5,679.5 Z M 3258,514 h 130 v 55 h -70 v 79 h 51 v 54 h -51 v 76 h 70 v 55 h -130 z"
        id="path1364-5"
      />
    </g>
  </svg>
);