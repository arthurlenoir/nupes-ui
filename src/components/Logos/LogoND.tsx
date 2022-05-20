/* eslint-disable max-len */
import React from "react";
import { Colors } from "../../stylesheet";

export interface LogoNDProps extends React.SVGProps<SVGSVGElement> {
  color?: Colors;
}

const DEFAULT_WIDTH = 1517;
const DEFAULT_HEIGHT = 1567;

export const LogoND: React.FC<LogoNDProps> = ({
  color,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? (height ? undefined : DEFAULT_WIDTH)}
      height={height ?? (width ? undefined : DEFAULT_HEIGHT)}
      viewBox="0 0 1517.000000 1567.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,1567.000000) scale(0.100000,-0.100000)"
        fill={color || "#3B2A82"}
        stroke="none"
      >
        <path
          d="M50 10606 l0 -5056 345 0 345 0 0 4629 c0 3310 3 4637 11 4659 21 61
     106 90 161 54 15 -9 129 -147 254 -307 125 -159 385 -490 578 -735 192 -245
     629 -800 971 -1235 732 -931 1426 -1813 1864 -2370 430 -547 1418 -1803 1620
     -2060 91 -115 257 -327 370 -471 114 -143 361 -459 551 -702 190 -242 348
     -441 353 -441 4 -1 7 1853 7 4119 0 3588 2 4125 15 4149 33 65 -76 61 1624 61
     1499 0 1545 -1 1687 -20 938 -132 1790 -551 2430 -1194 581 -584 961 -1304
     1133 -2141 64 -317 85 -573 78 -975 -6 -327 -14 -413 -63 -690 -209 -1160
     -897 -2200 -1889 -2855 -597 -395 -1220 -619 -1960 -706 -64 -8 -354 -13 -797
     -16 l-698 -5 0 -375 0 -375 658 5 c705 5 836 12 1157 63 513 82 969 225 1435
     451 243 117 374 192 610 349 1167 773 1962 1991 2194 3359 51 298 61 441 61
     835 0 402 -11 541 -65 858 -253 1460 -1116 2711 -2405 3487 -152 91 -512 270
     -675 334 -536 213 -1052 328 -1620 361 -123 7 -756 10 -1890 8 l-1705 -3 -6
     -420 c-3 -231 -7 -1844 -8 -3585 l-2 -3165 -22 30 c-12 16 -99 129 -192 250
     -94 121 -324 418 -511 660 -316 409 -1760 2275 -1864 2410 -26 33 -172 222
     -325 420 -266 344 -819 1059 -1821 2355 -253 327 -478 624 -499 660 -21 36
     -79 106 -129 155 -79 79 -105 98 -196 143 -178 87 -161 85 -697 89 l-473 5 0
     -5056z"
        />
        <path
          d="M7700 10432 c0 -3824 -2 -4240 -16 -4260 -18 -26 -65 -52 -93 -52
     -58 0 102 -199 -2346 2915 -221 281 -1124 1428 -2006 2550 -883 1122 -1752
     2228 -1933 2458 -180 229 -329 417 -332 417 -2 0 -4 -2005 -4 -4455 l0 -4455
     345 0 345 0 2 3538 3 3537 87 -110 c125 -159 942 -1202 1708 -2180 211 -269
     488 -623 615 -785 521 -665 899 -1148 1065 -1360 97 -124 333 -425 525 -670
     808 -1031 1176 -1502 1257 -1610 108 -146 180 -207 319 -276 152 -75 168 -77
     692 -82 l467 -4 0 4247 0 4246 1018 -4 c1090 -4 1079 -4 1351 -57 1420 -282
     2511 -1414 2737 -2839 132 -838 -54 -1694 -522 -2402 -500 -756 -1288 -1296
     -2169 -1487 -333 -72 -470 -82 -1177 -82 l-598 0 0 -320 0 -320 653 0 c663 0
     764 4 1012 41 1415 210 2632 1153 3198 2480 348 816 419 1756 201 2639 -172
     692 -507 1302 -989 1799 -603 621 -1414 1031 -2301 1161 -130 19 -191 20
     -1625 20 l-1489 0 0 -4238z"
        />
        <path
          d="M2056 1569 c-25 -72 -46 -135 -46 -140 0 -6 34 -9 81 -7 l81 3 89
     130 c49 71 89 133 89 137 0 5 -56 8 -124 8 l-124 0 -46 -131z"
        />
        <path
          d="M5523 1351 c-158 -25 -280 -88 -395 -203 -62 -63 -86 -96 -122 -170
     -56 -116 -70 -194 -63 -347 8 -186 62 -306 198 -436 130 -124 264 -182 444
     -191 142 -8 242 12 362 72 162 80 279 215 339 389 24 70 27 96 28 205 1 104
     -3 137 -22 200 -36 116 -85 195 -177 286 -89 88 -195 150 -309 179 -73 18
     -215 26 -283 16z m301 -250 c295 -145 352 -548 110 -769 -43 -40 -88 -70 -132
     -88 -60 -25 -79 -28 -177 -28 -97 0 -118 4 -177 28 -97 40 -187 125 -235 224
     -36 72 -38 82 -41 186 -3 88 0 123 16 172 45 143 174 270 309 304 21 5 88 8
     148 7 103 -2 115 -4 179 -36z"
        />
        <path
          d="M7355 1350 c-93 -15 -184 -46 -255 -87 -91 -53 -206 -172 -252 -259
     -72 -136 -96 -321 -63 -479 38 -183 176 -359 345 -443 129 -63 188 -75 354
     -70 130 4 148 7 222 36 85 34 197 107 249 162 l30 31 -32 27 c-17 15 -54 46
     -81 69 l-49 42 -38 -39 c-43 -44 -128 -92 -195 -110 -70 -19 -204 -15 -282 10
     -170 52 -290 210 -305 399 -15 205 84 378 264 464 66 31 72 32 198 32 125 0
     132 -1 197 -32 37 -17 87 -50 112 -73 52 -48 39 -52 144 39 l63 54 -33 34
     c-142 148 -381 225 -593 193z"
        />
        <path
          d="M14450 1349 c-84 -14 -171 -62 -228 -124 -62 -67 -82 -124 -82 -226
     0 -108 25 -172 93 -236 66 -63 132 -99 285 -158 199 -76 257 -126 257 -219 -1
     -70 -31 -117 -93 -148 -38 -19 -62 -23 -132 -22 -132 1 -222 46 -291 146 -17
     27 -34 48 -35 48 -2 0 -42 -25 -89 -55 -97 -63 -96 -55 -23 -153 56 -75 139
     -133 238 -166 73 -24 98 -27 206 -27 133 1 207 17 287 64 99 58 158 163 165
     293 11 211 -76 309 -390 439 -89 37 -175 76 -190 87 -37 26 -58 68 -58 115 0
     84 69 137 175 137 88 -1 139 -19 191 -68 l45 -44 80 55 c43 30 79 58 79 63 0
     19 -102 118 -149 143 -99 54 -229 76 -341 56z"
        />
        <path
          d="M10 682 c0 -357 2 -651 4 -653 2 -2 148 -1 323 2 256 4 330 9 378 22
     213 60 361 205 423 410 31 105 36 296 9 397 -55 210 -194 362 -397 434 l-85
     31 -327 3 -328 3 0 -649z m665 410 c81 -30 153 -87 193 -152 43 -73 53 -107
     59 -222 12 -217 -57 -360 -212 -432 -73 -35 -150 -46 -317 -46 l-148 0 0 441
     0 441 183 -4 c154 -4 191 -8 242 -26z"
        />
        <path
          d="M1692 680 l3 -650 418 -1 419 0 0 103 0 103 -306 3 -306 2 0 180 0
     180 280 0 280 0 0 105 0 105 -280 0 -280 0 0 155 0 155 300 0 300 0 0 105 0
     105 -415 0 -415 0 2 -650z"
        />
        <path
          d="M3080 678 l0 -653 107 1 108 2 2 432 c1 238 4 434 5 436 2 1 53 -74
     113 -167 61 -93 160 -246 221 -339 l111 -170 33 52 c18 29 116 183 219 342
     l186 289 5 -438 5 -437 105 0 105 0 3 652 2 651 -101 -3 -101 -3 -227 -357
     c-124 -196 -230 -356 -236 -354 -5 1 -112 162 -237 357 l-226 354 -101 3 -101
     3 0 -653z"
        />
        <path
          d="M8480 678 l0 -653 112 2 113 2 3 231 2 230 118 0 117 0 129 -215 c71
     -119 134 -222 140 -231 9 -12 37 -16 139 -17 70 -1 127 1 127 5 0 6 -81 140
     -262 437 l-46 74 59 38 c66 43 119 109 151 189 31 79 30 222 -1 303 -32 81
     -123 177 -209 219 l-67 33 -312 3 -313 3 0 -653z m595 419 c154 -87 127 -328
     -44 -386 -19 -6 -97 -11 -177 -11 l-144 0 0 210 0 210 163 0 c149 0 165 -2
     202 -23z"
        />
        <path
          d="M10354 1293 c-9 -21 -101 -240 -204 -488 -103 -247 -218 -521 -254
     -607 -36 -87 -66 -161 -66 -165 0 -5 55 -7 122 -6 l121 1 53 129 53 128 292 0
     292 0 52 -128 52 -129 121 -1 c76 -1 122 2 121 8 0 6 -121 298 -268 650 l-267
     640 -102 3 -101 3 -17 -38z m224 -542 c56 -137 102 -254 102 -260 0 -8 -65
     -11 -210 -11 -117 0 -210 4 -210 9 0 5 27 76 60 157 34 82 80 195 102 252 23
     56 44 102 48 102 3 0 52 -112 108 -249z"
        />
        <path
          d="M11332 1228 l3 -103 177 -3 178 -2 2 -546 3 -546 110 0 110 0 3 546
     2 546 178 2 177 3 3 103 3 102 -476 0 -476 0 3 -102z"
        />
        <path
          d="M12762 680 l3 -650 420 0 420 0 0 102 0 103 -302 3 -303 2 0 180 0
     180 280 0 280 0 0 105 0 105 -280 0 -280 0 0 155 0 155 295 0 295 0 0 105 0
     105 -415 0 -415 0 2 -650z"
        />
      </g>
      <g
        transform="translate(0.000000,1567.000000) scale(0.100000,-0.100000)"
        fill={color || "#CA1569"}
        stroke="none"
      >
        <path
          d="M2601 3459 c-93 -18 -178 -92 -201 -175 -8 -26 -11 -75 -8 -119 8
     -129 62 -180 319 -302 188 -90 239 -148 239 -273 -1 -79 -50 -159 -121 -196
     -49 -25 -172 -30 -242 -10 -87 25 -147 79 -213 192 -9 16 -14 17 -42 5 -38
     -16 -37 -29 10 -103 89 -141 246 -206 432 -177 171 27 265 148 254 328 -9 142
     -61 197 -295 312 -225 110 -263 147 -263 254 0 118 80 195 202 195 80 0 128
     -19 181 -72 48 -48 48 -48 77 -33 17 9 30 19 30 23 0 5 -16 27 -36 50 -77 90
     -194 127 -323 101z"
        />
        <path
          d="M6378 3460 c-194 -35 -345 -145 -430 -313 -80 -160 -77 -386 8 -548
     115 -219 352 -334 613 -298 211 30 391 180 463 387 33 96 33 286 0 384 -60
     175 -221 327 -397 374 -65 18 -198 25 -257 14z m233 -88 c249 -69 394 -301
     359 -574 -25 -203 -191 -380 -389 -418 -222 -42 -442 55 -549 242 -56 98 -77
     255 -51 380 36 169 187 326 360 372 76 21 192 20 270 -2z"
        />
        <path
          d="M140 2880 l0 -570 285 0 285 0 0 40 0 40 -245 0 -245 0 0 530 0 530
     -40 0 -40 0 0 -570z"
        />
        <path
          d="M1220 2880 l0 -570 315 0 315 0 0 40 0 40 -275 0 -275 0 0 245 0 245
     250 0 250 0 0 35 0 35 -250 0 -250 0 0 210 0 210 265 0 265 0 0 40 0 40 -305
     0 -305 0 0 -570z"
        />
        <path
          d="M4490 2880 l0 -570 40 0 40 0 0 492 c0 432 2 490 15 478 8 -8 171
     -229 363 -490 342 -466 349 -475 383 -475 l34 0 3 568 2 567 -40 0 -40 0 0
     -490 c0 -269 -3 -490 -7 -490 -5 0 -28 29 -53 64 -25 35 -187 255 -360 490
     -304 412 -315 426 -347 426 l-33 0 0 -570z"
        />
        <path
          d="M7570 3053 c0 -423 6 -486 50 -572 65 -128 210 -195 398 -185 162 10
     279 88 335 226 21 51 22 68 25 491 l3 437 -40 0 -40 0 -3 -427 c-3 -425 -3
     -428 -27 -480 -26 -58 -93 -126 -149 -151 -27 -12 -67 -16 -147 -17 -94 0
     -116 3 -151 22 -95 51 -143 117 -163 228 -7 36 -11 208 -11 442 l0 383 -40 0
     -40 0 0 -397z"
        />
        <path
          d="M8860 3445 c0 -4 365 -920 447 -1123 3 -8 18 -12 36 -10 30 3 31 3
     249 548 120 300 221 555 224 568 6 20 3 22 -40 22 -33 0 -46 -4 -46 -14 0 -8
     -11 -41 -25 -73 -13 -32 -85 -213 -160 -403 -203 -514 -199 -504 -209 -488 -4
     8 -94 230 -200 493 l-191 480 -42 3 c-24 2 -43 0 -43 -3z"
        />
        <path
          d="M10330 2880 l0 -570 315 0 315 0 0 40 0 40 -275 0 -275 0 2 243 3
     242 253 3 252 2 0 35 0 35 -255 0 -255 0 0 210 0 210 265 0 265 0 0 40 0 40
     -305 0 -305 0 0 -570z"
        />
        <path
          d="M11728 3142 c-304 -737 -338 -820 -338 -826 0 -3 19 -6 43 -6 l42 0
     60 153 61 152 289 0 289 0 61 -150 61 -150 42 -3 c23 -2 42 1 42 6 0 4 -23 64
     -51 133 -69 168 -161 392 -214 519 -37 91 -135 329 -182 443 -13 32 -20 37
     -47 37 l-31 0 -127 -308z m178 131 c59 -142 224 -555 224 -563 0 -6 -89 -10
     -245 -10 -135 0 -245 4 -245 9 0 8 17 52 157 396 36 88 69 170 74 183 12 30
     16 28 35 -15z"
        />
        <path
          d="M12810 3068 c0 -409 6 -487 43 -570 29 -64 107 -140 173 -169 100
     -42 257 -46 360 -7 109 40 180 114 214 226 19 60 20 93 20 483 l0 419 -40 0
     -39 0 -3 -427 c-3 -425 -3 -428 -27 -480 -26 -59 -93 -126 -149 -151 -26 -11
     -67 -16 -142 -17 -95 0 -110 3 -162 28 -67 33 -110 81 -140 157 -21 53 -22 71
     -26 473 l-4 417 -39 0 -39 0 0 -382z"
        />
        <path
          d="M14120 3444 c0 -3 82 -127 182 -275 l181 -269 -196 -295 -197 -295
     47 0 48 0 173 260 c95 143 176 260 181 260 4 0 86 -117 181 -260 l173 -260 44
     0 c23 0 43 3 43 6 0 3 -84 132 -187 287 -103 155 -187 289 -187 297 0 8 79
     133 177 277 97 145 177 265 177 268 0 3 -20 5 -44 5 l-45 0 -162 -240 c-90
     -132 -166 -240 -169 -240 -4 0 -34 39 -66 88 -33 48 -106 156 -163 240 l-103
     152 -44 0 c-24 0 -44 -3 -44 -6z"
        />
      </g>
    </svg>
  );
};