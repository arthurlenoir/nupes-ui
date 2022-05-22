import React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

export const CrossIcon: React.FC<Props> = ({ color = "#f53b3b", ...props }) => (
  <svg
    version="1.1"
    id="Capa_1"
    viewBox="0 0 70.077193 70.077194"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      id="g4"
      transform="translate(14.642212,86.975198)"
      fill="#1a1a1a"
      clipPath="none"
    ></g>
    <g id="g10" transform="translate(10.340372,75.708691)"></g>
    <g id="g12" transform="translate(10.340372,75.708691)"></g>
    <g id="g14" transform="translate(10.340372,75.708691)"></g>
    <g id="g16" transform="translate(10.340372,75.708691)"></g>
    <g id="g18" transform="translate(10.340372,75.708691)"></g>
    <g id="g20" transform="translate(10.340372,75.708691)"></g>
    <g id="g22" transform="translate(10.340372,75.708691)"></g>
    <g id="g24" transform="translate(10.340372,75.708691)"></g>
    <g id="g26" transform="translate(10.340372,75.708691)"></g>
    <g id="g28" transform="translate(10.340372,75.708691)"></g>
    <g id="g30" transform="translate(10.340372,75.708691)"></g>
    <g id="g32" transform="translate(10.340372,75.708691)"></g>
    <g id="g34" transform="translate(10.340372,75.708691)"></g>
    <g id="g36" transform="translate(10.340372,75.708691)"></g>
    <g id="g38" transform="translate(10.340372,75.708691)"></g>
    <circle fill={color} cx="35.038597" cy="35.038597" r="35.038597" />
    <path
      d="m 53.185354,55.273994 a 5.0077286,5.0077286 0 0 1 -7.081763,0 L 35.040684,42.629479 23.977777,55.269821 A 5.0077286,5.0077286 0 1 1 16.896014,48.188058 L 28.405443,35.04277 16.891841,21.889137 a 5.0077286,5.0077286 0 1 1 7.081763,-7.081763 l 11.06708,12.648688 11.062907,-12.648688 a 5.0077286,5.0077286 0 1 1 7.081763,7.081763 l -11.50943,13.153633 11.50943,13.145288 a 5.0077286,5.0077286 0 0 1 0,7.085936 z"
      id="path2"
      fill="#ffffff"
      strokeWidth={4.17311}
    />
  </svg>
);
