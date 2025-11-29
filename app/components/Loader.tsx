"use client";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/70 backdrop-blur-xl">

      <svg
        id="svg-global"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 94 136"
        height="136"
        width="94"
      >
        {/* MAIN OUTLINE */}
        <path
          stroke="#4B22B5"
          d="M87.3629 108.433L49.1073 85.3765C47.846 84.6163 45.8009 84.6163 44.5395 85.3765L6.28392 108.433C5.02255 109.194 5.02255 110.426 6.28392 111.187L44.5395 134.243C45.8009 135.004 47.846 135.004 49.1073 134.243L87.3629 111.187C88.6243 110.426 88.6243 109.194 87.3629 108.433Z"
          id="line-v1"
        />

        <path
          stroke="#5728CC"
          d="M91.0928 95.699L49.2899 70.5042C47.9116 69.6734 45.6769 69.6734 44.2986 70.5042L2.49568 95.699C1.11735 96.5298 1.11735 97.8767 2.49568 98.7074L44.2986 123.902C45.6769 124.733 47.9116 124.733 49.2899 123.902L91.0928 98.7074C92.4712 97.8767 92.4712 96.5298 91.0928 95.699Z"
          id="line-v2"
        />

        {/* SERVER BLOCK */}
        <g id="node-server">
          <path
            fill="url(#paint0_linear)"
            d="M2.48 72.00L43.86 96.94C45.74 98.07 48.28 97.80 50.92 96.21L91.46 71.78C92.14 71.26 92.42 70.91 92.54 70.12V86.13C92.54 86.96 92.00 87.96 91.31 88.38C84.50 92.47 51.65 112.20 50.03 113.21C48.23 114.34 45.35 114.34 43.55 113.21C41.92 112.19 8.55 91.86 2.08 87.92C1.39 87.50 1.00 86.59 1.00 85.40V70.12C1.11 70.92 1.49 71.32 2.48 72.00Z"
          />

          <path
            stroke="url(#paint2_linear)"
            fill="url(#paint1_linear)"
            d="M91.09 68.73L49.28 43.53C47.91 42.70 45.67 42.70 44.29 43.53L2.49 68.73C1.11 69.56 1.11 70.91 2.49 71.74L44.29 96.93C45.67 97.76 47.91 97.76 49.28 96.93L91.09 71.74C92.47 70.91 92.47 69.56 91.09 68.73Z"
          />
        </g>

        {/* PARTICLES */}
        <g id="particles">
          <path className="particle p1" fill="url(#paint3)" d="M43.54 32.55C44.54 32.55 45.34 31.71 45.34 30.67C45.34 29.63 44.54 28.79 43.54 28.79C42.55 28.79 41.74 29.63 41.74 30.67C41.74 31.71 42.55 32.55 43.54 32.55Z"/>
          <path className="particle p2" fill="url(#paint4)" d="M50.03 48.35C51.02 48.35 51.83 47.51 51.83 46.47C51.83 45.43 51.02 44.59 50.03 44.59C49.03 44.59 48.23 45.43 48.23 46.47C48.23 47.51 49.03 48.35 50.03 48.35Z"/>
          <path className="particle p3" fill="url(#paint5)" d="M40.30 62.64C41.10 62.64 41.74 61.96 41.74 61.13C41.74 60.30 41.10 59.63 40.30 59.63C39.51 59.63 38.86 60.30 38.86 61.13C38.86 61.96 39.51 62.64 40.30 62.64Z"/>
          <path className="particle p4" fill="url(#paint6)" d="M50.75 73.92C52.14 73.92 53.27 72.74 53.27 71.29C53.27 69.83 52.14 68.65 50.75 68.65C49.36 68.65 48.23 69.83 48.23 71.29C48.23 72.74 49.36 73.92 50.75 73.92Z"/>
          <path className="particle p5" fill="url(#paint7)" d="M48.59 76.93C49.18 76.93 49.67 76.42 49.67 75.80C49.67 75.18 49.18 74.67 48.59 74.67C47.99 74.67 47.51 75.18 47.51 75.80C47.51 76.42 47.99 76.93 48.59 76.93Z"/>
        </g>

        {/* GRADIENT DEFINITIONS */}
        <defs>
          <linearGradient id="paint0_linear" x1="1" y1="92" x2="92" y2="92">
            <stop stopColor="#5727CC" />
            <stop stopColor="#4354BF" offset="1" />
          </linearGradient>

          <linearGradient id="paint1_linear" x1="92" y1="70" x2="6" y2="91">
            <stop stopColor="#4559C4" />
            <stop stopColor="#332C94" offset="0.29" />
            <stop stopColor="#5727CB" offset="1" />
          </linearGradient>

          <linearGradient id="paint2_linear" x1="92" y1="70" x2="3" y2="85">
            <stop stopColor="#91DDFB" />
            <stop stopColor="#8841D5" offset="1" />
          </linearGradient>

          <linearGradient id="paint3" x1="43" y1="28" x2="43" y2="33">
            <stop stopColor="#5927CE" />
            <stop stopColor="#91DDFB" offset="1" />
          </linearGradient>

          <linearGradient id="paint4" x1="50" y1="44" x2="50" y2="48">
            <stop stopColor="#5927CE" />
            <stop stopColor="#91DDFB" offset="1" />
          </linearGradient>

          <linearGradient id="paint5" x1="40" y1="59" x2="40" y2="62">
            <stop stopColor="#5927CE" />
            <stop stopColor="#91DDFB" offset="1" />
          </linearGradient>

          <linearGradient id="paint6" x1="50" y1="68" x2="50" y2="73">
            <stop stopColor="#5927CE" />
            <stop stopColor="#91DDFB" offset="1" />
          </linearGradient>

          <linearGradient id="paint7" x1="48" y1="74" x2="48" y2="76">
            <stop stopColor="#5927CE" />
            <stop stopColor="#91DDFB" offset="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
