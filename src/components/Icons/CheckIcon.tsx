import React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

export const CheckIcon: React.FC<Props> = ({ color = "#34ad6c", ...props }) => (
  <svg
    version="1.1"
    viewBox="0 0 70.077193 70.077194"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs id="defs43"></defs>
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
      clipPath="none"
      fill="#ffffff"
      strokeWidth={1.23141}
      d="M 55.134635,26.357031 32.996408,51.886789 c -0.939113,1.084592 -2.213125,1.692865 -3.541558,1.692865 -1.328433,0 -2.602445,-0.609882 -3.541558,-1.692865 L 14.941159,39.233748 c -1.954973,-2.25608 -1.954973,-5.912154 0.0014,-8.169844 0.939112,-1.082983 2.21173,-1.691256 3.540164,-1.691256 1.328433,0 2.60105,0.608273 3.540163,1.691256 l 6.538905,7.542261 c 0.23722,0.273562 0.559561,0.428044 0.89446,0.428044 0.334899,0 0.657239,-0.154482 0.894459,-0.428044 l 17.702209,-20.41576 c 0.940508,-1.082983 2.213125,-1.692865 3.542954,-1.692865 1.327037,0.0016 2.601049,0.609882 3.540162,1.692865 1.954974,2.256081 1.954974,5.912155 -0.0014,8.166626 z"
    />
  </svg>
);
