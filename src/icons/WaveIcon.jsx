import { motion } from "motion/react";
function WaveIcon() {
  return (
    <svg
      viewBox="0 0 800 160"
      xmlns="http://www.w3.org/2000/svg"
      className="hidden lg:block"
    >
      <defs>
        <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#1d4ed8" stop-opacity="0.7" />
          <stop offset="50%" stop-color="#3b82f6" stop-opacity="1" />
          <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.7" />
        </linearGradient>

        <filter id="glow" x="-20%" y="-80%" width="140%" height="260%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="dotGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <motion.path
        d="M 60 160 C 160 160, 260 70, 400 70 C 540 70, 640 160, 740 160"
        fill="none"
        stroke="#3b82f6"
        stroke-width="2"
        stroke-opacity="0.15"
        stroke-linecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />

      <motion.path
        d="M 60 160 C 160 160, 260 70, 400 70 C 540 70, 640 160, 740 160"
        fill="none"
        stroke="url(#waveGrad)"
        stroke-width="2"
        stroke-linecap="round"
        filter="url(#glow)"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />

      <text
        x="65"
        y="135"
        font-family="sans-serif"
        font-size="72"
        font-weight="800"
        fill="#1d4ed8"
        fill-opacity="0.5"
        text-anchor="middle"
      >
        1
      </text>
      <text
        x="400"
        y="55"
        font-family="sans-serif"
        font-size="72"
        font-weight="800"
        fill="#1d4ed8"
        fill-opacity="0.5"
        text-anchor="middle"
      >
        2
      </text>
      <text
        x="740"
        y="140"
        font-family="sans-serif"
        font-size="72"
        font-weight="800"
        fill="#1d4ed8"
        fill-opacity="0.5"
        text-anchor="middle"
      >
        3
      </text>

      <motion.circle
        cx="70"
        cy="156"
        r="7"
        fill="#1e3a8a"
        stroke="#3b82f6"
        stroke-width="2.5"
        filter="url(#dotGlow)"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.4 }}
      />
      <circle cx="70" cy="156" r="3" fill="#93c5fd" />

      <motion.circle
        cx="400"
        cy="70"
        r="7"
        fill="#1e3a8a"
        stroke="#60a5fa"
        strokeWidth="2.5"
        filter="url(#dotGlow)"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.8 }}
      />
      <circle cx="400" cy="70" r="3" fill="#bfdbfe" />

      <motion.circle
        cx="740"
        cy="156"
        r="7"
        fill="#1e3a8a"
        stroke="#3b82f6"
        strokeWidth="2.5"
        filter="url(#dotGlow)"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 1.2 }}
      />
      <circle cx="740" cy="156" r="3" fill="#93c5fd" />
    </svg>
  );
}

export default WaveIcon;
