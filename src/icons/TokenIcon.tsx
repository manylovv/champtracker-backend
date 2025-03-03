const TokenIcon = ({ width = 20, height = 20, className = "" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 80"
      data-name="Layer 1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <defs>
        <style>
          {`.cls-1{
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 4px;
          }`}
        </style>
      </defs>

      <g id="bat">
        <ellipse className="cls-1" cx="40" cy="34.988" rx="35" ry="23" />
        <path
          className="cls-1"
          d="M25.441,20.366a41.623,41.623,0,0,1,6.517-1.685"
        />
        <path className="cls-1" d="M11,34.988c0-4.846,3.673-9.3,9.442-12.428" />
        <path
          className="cls-1"
          d="M5,34.988V47.835a13,13,0,0,0,4.778,10.08c7.637,6.225,18.353,10.1,30.222,10.1s22.585-3.873,30.222-10.1A13,13,0,0,0,75,47.835V34.988"
        />
        <line className="cls-1" x1="40" x2="40" y1="67.874" y2="58.395" />
        <line
          className="cls-1"
          x1="51.667"
          x2="51.667"
          y1="66.375"
          y2="56.896"
        />
        <line
          className="cls-1"
          x1="63.333"
          x2="63.333"
          y1="62.146"
          y2="57.988"
        />
        <line className="cls-1" x1="28.333" x2="28.333" y1="66.375" y2="57" />
        <line
          className="cls-1"
          x1="16.667"
          x2="16.667"
          y1="62.031"
          y2="52.412"
        />
        <path d="M57.1,43.5H22.9c-1.125,0-1.825-.8-1.254-1.44l17.1-19.089a1.905,1.905,0,0,1,2.508,0l17.1,19.089C58.921,42.7,58.222,43.5,57.1,43.5ZM31.555,39.682h16.89c.45,0,.73-.321.5-.576L40.5,29.676a.762.762,0,0,0-1,0l-8.445,9.43C30.825,39.361,31.1,39.682,31.555,39.682Z" />
      </g>
    </svg>
  );
};

export default TokenIcon;
