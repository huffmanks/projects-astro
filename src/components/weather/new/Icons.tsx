type IconProps = React.HTMLAttributes<SVGElement>;

export interface IconsMap {
  [key: string]: (props: IconProps) => React.ReactElement;
}

export const Icons: IconsMap = {
  clear_day: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 257 257" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M161.935 24.5565C146.551 19.5376 128.412 0.200073 128.412 0.200073C128.412 0.200073 110.272 19.5376 94.8879 24.5565C79.3905 29.6123 53.1461 24.5565 53.1461 24.5565C53.1461 24.5565 49.8384 51.0744 40.2471 64.2553C30.6991 77.3769 6.62939 88.68 6.62939 88.68C6.62939 88.68 19.4702 111.972 19.4702 128.2C19.4702 144.428 6.62939 167.72 6.62939 167.72C6.62939 167.72 30.6991 179.023 40.2471 192.145C49.8384 205.326 53.1461 231.844 53.1461 231.844C53.1461 231.844 79.3905 226.788 94.8879 231.844C110.272 236.863 128.412 256.2 128.412 256.2C128.412 256.2 146.551 236.863 161.935 231.844C177.433 226.788 203.677 231.844 203.677 231.844C203.677 231.844 206.985 205.326 216.576 192.145C226.124 179.023 250.194 167.72 250.194 167.72C250.194 167.72 237.353 144.428 237.353 128.2C237.353 111.972 250.194 88.68 250.194 88.68C250.194 88.68 226.124 77.3769 216.576 64.2553C206.985 51.0744 203.677 24.5565 203.677 24.5565C203.677 24.5565 177.433 29.6123 161.935 24.5565Z"
        fill="url(#paint0_linear_38_90)"
      />
      <defs>
        <linearGradient id="paint0_linear_38_90" x1="0.400047" y1="0.20005" x2="256.4" y2="256.2" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC400" />
          <stop offset="1" stopColor="#FF6F00" />
        </linearGradient>
      </defs>
    </svg>
  ),
  clear_night: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 257 257" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M215.497 122.965L230.101 117.205L235.861 102.6L241.62 117.205L256.224 122.965L241.62 128.725L235.861 143.329L230.101 128.725L215.497 122.965Z" fill="url(#paint0_linear_40_15)" />
      <path d="M153.8 27.3529L173.272 19.6729L180.952 0.200012L188.632 19.6729L208.105 27.3529L188.632 35.0329L180.952 54.5059L173.272 35.0329L153.8 27.3529Z" fill="url(#paint1_linear_40_15)" />
      <path
        d="M243.803 183.301C234.319 183.372 224.679 182.384 215.026 180.243C146.009 164.943 102.463 96.5901 117.764 27.5733C119.904 17.9202 123.082 8.76528 127.154 0.200012C68.8321 0.636712 16.4221 41.1559 3.26148 100.52C-12.0392 169.536 31.5063 237.889 100.523 253.19C159.887 266.35 218.759 235.975 243.803 183.301Z"
        fill="url(#paint2_linear_40_15)"
      />
      <defs>
        <linearGradient id="paint0_linear_40_15" x1="235.861" y1="102.6" x2="235.861" y2="143.329" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EFF1F5" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
        <linearGradient id="paint1_linear_40_15" x1="180.952" y1="0.200012" x2="180.952" y2="54.5059" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ECEFF1" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
        <linearGradient id="paint2_linear_40_15" x1="0.200012" y1="0.200012" x2="256.2" y2="256.2" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B388FF" />
          <stop offset="1" stopColor="#7C4DFF" />
        </linearGradient>
      </defs>
    </svg>
  ),
  cloudy_day_night: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 257 257" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M207.639 207.716C234.568 207.715 256.399 185.884 256.399 158.954C256.399 132.024 234.567 110.192 207.637 110.192C207.299 110.192 206.962 110.196 206.626 110.203C200.827 75.6046 170.739 49.2401 134.493 49.2401C107.125 49.2401 83.2678 64.2709 70.7262 86.5278C67.6706 86.0562 64.54 85.8115 61.3523 85.8115C27.6893 85.8115 0.399963 113.101 0.399963 146.764C0.399963 180.427 27.6893 207.716 61.3523 207.716C61.3526 207.716 61.3521 207.716 61.3523 207.716L207.639 207.716Z"
        fill="url(#paint0_linear_14_32)"
      />
      <defs>
        <linearGradient id="paint0_linear_14_32" x1="0.400003" y1="51.8" x2="256.4" y2="205.4" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ECEFF1" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
      </defs>
    </svg>
  ),
  drizzle_day_night: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 257 257" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M184.422 210.554L192.6 200.331L200.778 210.554C202.383 212.432 203.352 214.87 203.352 217.535C203.352 223.473 198.538 228.287 192.6 228.287C186.662 228.287 181.848 223.473 181.848 217.535C181.848 214.87 182.817 212.432 184.422 210.554Z"
        fill="url(#paint0_linear_110_2)"
      />
      <path
        d="M120.422 210.554L128.6 200.331L136.778 210.554C138.383 212.432 139.352 214.87 139.352 217.535C139.352 223.473 134.538 228.287 128.6 228.287C122.662 228.287 117.848 223.473 117.848 217.535C117.848 214.87 118.817 212.432 120.422 210.554Z"
        fill="url(#paint1_linear_110_2)"
      />
      <path
        d="M56.422 210.554L64.6 200.331L72.7779 210.554C74.3829 212.432 75.3519 214.87 75.3519 217.535C75.3519 223.473 70.5381 228.287 64.6 228.287C58.6618 228.287 53.848 223.473 53.848 217.535C53.848 214.87 54.8171 212.432 56.422 210.554Z"
        fill="url(#paint2_linear_110_2)"
      />
      <path
        d="M207.839 186.212C234.768 186.211 256.599 164.38 256.599 137.45C256.599 110.52 234.767 88.6883 207.837 88.6883C207.499 88.6883 207.162 88.6918 206.826 88.6987C201.027 54.1005 170.939 27.736 134.693 27.736C107.325 27.736 83.4679 42.7669 70.9262 65.0238C67.8706 64.5521 64.7401 64.3074 61.5524 64.3074C27.8893 64.3074 0.600006 91.5967 0.600006 125.26C0.600006 158.923 27.8893 186.212 61.5524 186.212C61.5526 186.212 61.5521 186.212 61.5524 186.212L207.839 186.212Z"
        fill="url(#paint3_linear_110_2)"
      />
      <defs>
        <linearGradient id="paint0_linear_110_2" x1="192.6" y1="200.331" x2="192.6" y2="228.287" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1976D2" />
          <stop offset="1" stopColor="#0D47A1" />
        </linearGradient>
        <linearGradient id="paint1_linear_110_2" x1="128.6" y1="200.331" x2="128.6" y2="228.287" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1976D2" />
          <stop offset="1" stopColor="#0D47A1" />
        </linearGradient>
        <linearGradient id="paint2_linear_110_2" x1="64.6" y1="200.331" x2="64.6" y2="228.287" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1976D2" />
          <stop offset="1" stopColor="#0D47A1" />
        </linearGradient>
        <linearGradient id="paint3_linear_110_2" x1="0.600046" y1="30.296" x2="256.6" y2="183.896" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ECEFF1" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
      </defs>
    </svg>
  ),
  fog_day_night: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 257 257" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.0799 197.72C31.2522 197.72 28.9599 200.012 28.9599 202.84C28.9599 205.668 31.2522 207.96 34.0799 207.96H251.68C254.508 207.96 256.8 205.668 256.8 202.84C256.8 200.012 254.508 197.72 251.68 197.72H34.0799ZM5.91999 218.2C3.09229 218.2 0.799988 220.492 0.799988 223.32C0.799988 226.148 3.09229 228.44 5.91999 228.44H223.52C226.348 228.44 228.64 226.148 228.64 223.32C228.64 220.492 226.348 218.2 223.52 218.2H5.91999Z"
        fill="url(#paint0_linear_41_9)"
      />
      <path
        d="M208.039 187.492C234.968 187.491 256.799 165.66 256.799 138.73C256.799 111.8 234.967 89.9684 208.037 89.9684C207.699 89.9684 207.362 89.9719 207.026 89.9787C201.227 55.3806 171.139 29.016 134.893 29.016C107.525 29.016 83.6678 44.0469 71.1262 66.3038C68.0706 65.8322 64.9401 65.5875 61.7524 65.5875C28.0893 65.5875 0.799988 92.8768 0.799988 126.54C0.799988 160.203 28.0893 187.492 61.7524 187.492C61.7526 187.492 61.7521 187.492 61.7524 187.492L208.039 187.492Z"
        fill="url(#paint1_linear_41_9)"
      />
      <defs>
        <linearGradient id="paint0_linear_41_9" x1="0.799988" y1="197.72" x2="256.8" y2="227.16" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ECEFF1" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
        <linearGradient id="paint1_linear_41_9" x1="0.800028" y1="31.576" x2="256.8" y2="185.176" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ECEFF1" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
      </defs>
    </svg>
  ),
  hail_day_night: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 257 259" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M221.628 240.896L206.28 235.909V219.771L221.628 214.784L231.114 227.84L221.628 240.896Z" fill="url(#paint0_linear_26_29)" />
      <path d="M107.053 229.136L117.534 216.864L132.444 223.04L131.178 239.128L115.486 242.896L107.053 229.136Z" fill="url(#paint1_linear_26_29)" />
      <path d="M28.7661 208.86L44.8544 210.126L51.0302 195.216L38.7587 184.736L24.9987 193.168L28.7661 208.86Z" fill="url(#paint2_linear_26_29)" />
      <path d="M179.025 188.672L159.432 235.975C159.432 235.975 168.341 224.872 188.312 226.831" stroke="url(#paint3_linear_26_29)" strokeWidth="7.68" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M138.184 188.672L130.836 206.41" stroke="url(#paint4_linear_26_29)" strokeWidth="7.68" strokeLinecap="round" />
      <path d="M96.9808 188.672L77.3875 235.975C77.3875 235.975 78.9384 221.824 63.432 209.088" stroke="url(#paint5_linear_26_29)" strokeWidth="7.68" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M207.439 170.764C234.368 170.763 256.199 148.932 256.199 122.002C256.199 95.0718 234.367 73.2403 207.437 73.2403C207.099 73.2403 206.762 73.2438 206.426 73.2507C200.627 38.6525 170.539 12.288 134.293 12.288C106.925 12.288 83.0679 27.3189 70.5262 49.5758C67.4706 49.1041 64.3401 48.8594 61.1524 48.8594C27.4893 48.8594 0.199997 76.1488 0.199997 109.812C0.199997 143.475 27.4893 170.764 61.1524 170.764C61.1526 170.764 61.1521 170.764 61.1524 170.764L207.439 170.764Z"
        fill="url(#paint6_linear_26_29)"
      />
      <defs>
        <linearGradient id="paint0_linear_26_29" x1="218.697" y1="214.784" x2="218.697" y2="240.896" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CFD8DC" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
        <linearGradient id="paint1_linear_26_29" x1="124.989" y1="219.952" x2="115.486" y2="242.896" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CFD8DC" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
        <linearGradient id="paint2_linear_26_29" x1="41.4668" y1="185.857" x2="31.4742" y2="209.982" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CFD8DC" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
        <linearGradient id="paint3_linear_26_29" x1="173.872" y1="188.672" x2="173.872" y2="235.975" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CFD8DC" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
        <linearGradient id="paint4_linear_26_29" x1="138.646" y1="188.863" x2="131.298" y2="206.602" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CFD8DC" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
        <linearGradient id="paint5_linear_26_29" x1="80.2064" y1="188.672" x2="80.2064" y2="235.975" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CFD8DC" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
        <linearGradient id="paint6_linear_26_29" x1="0.200037" y1="14.848" x2="256.2" y2="168.448" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B0BEC5" />
          <stop offset="1" stopColor="#616161" />
        </linearGradient>
      </defs>
    </svg>
  ),
  haze_day: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 257 257" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.68 172.688C30.8523 172.688 28.56 174.98 28.56 177.808C28.56 180.636 30.8523 182.928 33.68 182.928H251.28C254.108 182.928 256.4 180.636 256.4 177.808C256.4 174.98 254.108 172.688 251.28 172.688H33.68ZM5.52002 193.168C2.69233 193.168 0.400024 195.46 0.400024 198.288C0.400024 201.116 2.69233 203.408 5.52002 203.408H223.12C225.948 203.408 228.24 201.116 228.24 198.288C228.24 195.46 225.948 193.168 223.12 193.168H5.52002Z"
        fill="url(#paint0_linear_35_2)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M128.412 53.648C128.412 53.648 142.016 68.1512 153.554 71.9154C165.177 75.7072 184.861 71.9154 184.861 71.9154C184.861 71.9154 187.341 91.8038 194.535 101.689C201.696 111.531 219.748 120.008 219.748 120.008C219.748 120.008 210.118 137.477 210.118 149.648C210.118 153.615 211.141 158.144 212.52 162.448H44.3035C45.6826 158.144 46.7055 153.615 46.7055 149.648C46.7055 137.477 37.0749 120.008 37.0749 120.008C37.0749 120.008 55.1271 111.531 62.2882 101.689C69.4816 91.8038 71.9624 71.9154 71.9624 71.9154C71.9624 71.9154 91.6457 75.7072 103.269 71.9154C114.807 68.1512 128.412 53.648 128.412 53.648Z"
        fill="url(#paint1_linear_35_2)"
      />
      <defs>
        <linearGradient id="paint0_linear_35_2" x1="0.400024" y1="172.688" x2="256.4" y2="202.128" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ECEFF1" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
        <linearGradient id="paint1_linear_35_2" x1="23.4684" y1="50.32" x2="223.754" y2="297.884" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC400" />
          <stop offset="1" stopColor="#FF6F00" />
        </linearGradient>
      </defs>
    </svg>
  ),
  haze_night: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 257 257" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.0799 185.488C31.2522 185.488 28.9599 187.78 28.9599 190.608C28.9599 193.436 31.2522 195.728 34.0799 195.728H251.68C254.508 195.728 256.8 193.436 256.8 190.608C256.8 187.78 254.508 185.488 251.68 185.488H34.0799ZM5.91999 205.968C3.09229 205.968 0.799988 208.26 0.799988 211.088C0.799988 213.916 3.09229 216.208 5.91999 216.208H223.52C226.348 216.208 228.64 213.916 228.64 211.088C228.64 208.26 226.348 205.968 223.52 205.968H5.91999Z"
        fill="url(#paint0_linear_35_3)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M195.852 175.248C145.646 162.627 114.305 112.243 125.581 61.378C127.186 54.1382 129.57 47.272 132.624 40.8481C88.8821 41.1756 49.5746 71.565 39.7042 116.088C35.131 136.716 37.567 157.265 45.4281 175.248H195.852Z"
        fill="url(#paint1_linear_35_3)"
      />
      <defs>
        <linearGradient id="paint0_linear_35_3" x1="0.799988" y1="185.488" x2="256.8" y2="214.928" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ECEFF1" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
        <linearGradient id="paint1_linear_35_3" x1="-223.478" y1="-106.67" x2="-136.832" y2="716.599" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B388FF" />
          <stop offset="1" stopColor="#7C4DFF" />
        </linearGradient>
      </defs>
    </svg>
  ),
  partly_cloudy_day: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 257 257" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M164.329 25.2881C164.329 25.2881 177.933 39.7912 189.471 43.5554C201.094 47.3472 220.778 43.5554 220.778 43.5554C220.778 43.5554 223.259 63.4438 230.452 73.3295C237.613 83.1707 255.665 91.6481 255.665 91.6481C255.665 91.6481 246.035 109.117 246.035 121.288C246.035 133.459 255.665 150.928 255.665 150.928C255.665 150.928 237.613 159.405 230.452 169.247C223.259 179.132 220.778 199.021 220.778 199.021C220.778 199.021 212.789 197.482 203.985 197.345C204.037 196.441 204.063 195.531 204.063 194.614C204.063 171.308 187.032 151.98 164.736 148.397C156.67 121.603 131.819 102.088 102.394 102.088C94.3215 102.088 86.594 103.558 79.4635 106.242C76.6555 98.2934 72.992 91.6481 72.992 91.6481C72.992 91.6481 91.0442 83.1707 98.2053 73.3295C105.399 63.4438 107.879 43.5554 107.879 43.5554C107.879 43.5554 127.563 47.3472 139.186 43.5554C150.724 39.7912 164.329 25.2881 164.329 25.2881ZM193.667 198.012C192.193 198.263 190.781 198.594 189.471 199.021C177.933 202.785 164.329 217.288 164.329 217.288C164.329 217.288 150.724 202.785 139.186 199.021C127.563 195.229 107.879 199.021 107.879 199.021C107.879 199.021 105.399 179.132 98.2053 169.247C91.0442 159.405 72.992 150.928 72.992 150.928C72.992 150.928 82.6226 133.459 82.6226 121.288C82.6226 119.663 82.4509 117.943 82.1532 116.183C88.4158 113.695 95.2451 112.328 102.394 112.328C129.578 112.328 152.144 132.101 156.494 158.05C156.746 158.045 156.998 158.042 157.252 158.042C177.45 158.042 193.823 174.416 193.823 194.614C193.823 195.759 193.77 196.893 193.667 198.012Z"
        fill="url(#paint0_linear_6_173)"
      />
      <path
        d="M157.253 231.185C177.45 231.184 193.823 214.811 193.823 194.614C193.823 174.416 177.45 158.042 157.252 158.042C156.998 158.042 156.746 158.045 156.494 158.05C152.144 132.102 129.578 112.328 102.394 112.328C81.8678 112.328 63.9749 123.601 54.5687 140.294C52.277 139.94 49.9291 139.757 47.5383 139.757C22.291 139.757 1.82404 160.224 1.82404 185.471C1.82404 210.718 22.291 231.185 47.5383 231.185C47.5385 231.185 47.5381 231.185 47.5383 231.185L157.253 231.185Z"
        fill="url(#paint1_linear_6_173)"
      />
      <defs>
        <linearGradient id="paint0_linear_6_173" x1="77.6" y1="32.974" x2="326.888" y2="197.899" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC400" />
          <stop offset="1" stopColor="#FF6F00" />
        </linearGradient>
        <linearGradient id="paint1_linear_6_173" x1="1.82407" y1="114.248" x2="193.824" y2="229.448" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ECEFF1" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
      </defs>
    </svg>
  ),
  partly_cloudy_night: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 257 257" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M234.935 160.321C242.175 161.926 249.405 162.667 256.518 162.614C245.016 186.806 223.999 204.727 199.21 212.718C201.547 207.149 202.839 201.032 202.839 194.614C202.839 171.308 185.808 151.98 163.512 148.397C155.446 121.603 130.595 102.088 101.17 102.088C91.7845 102.088 82.8653 104.075 74.8085 107.648C75.1517 105.278 75.5854 102.903 76.1121 100.528C85.9825 56.0049 125.29 25.6155 169.032 25.288C165.978 31.7119 163.594 38.5781 161.989 45.8179C150.514 97.5805 183.173 148.845 234.935 160.321ZM185.687 216.014C173.868 217.996 161.478 217.783 149.058 215.03C103.69 204.972 72.9972 164.349 73.8326 119.614C81.8807 114.979 91.2155 112.328 101.17 112.328C128.354 112.328 150.92 132.101 155.27 158.05C155.522 158.045 155.774 158.042 156.028 158.042C176.226 158.042 192.599 174.416 192.599 194.614C192.599 202.605 190.036 209.997 185.687 216.014Z"
        fill="url(#paint0_linear_6_145)"
      />
      <path
        d="M156.029 231.185C176.226 231.184 192.599 214.811 192.599 194.614C192.599 174.416 176.226 158.042 156.028 158.042C155.774 158.042 155.522 158.045 155.27 158.05C150.92 132.101 128.354 112.328 101.17 112.328C80.6438 112.328 62.7509 123.601 53.3447 140.294C51.053 139.94 48.7051 139.757 46.3143 139.757C21.067 139.757 0.600006 160.224 0.600006 185.471C0.600006 210.718 21.067 231.185 46.3143 231.185C46.3145 231.185 46.3141 231.185 46.3143 231.185L156.029 231.185Z"
        fill="url(#paint1_linear_6_145)"
      />
      <defs>
        <linearGradient id="paint0_linear_6_145" x1="77.4" y1="32.8883" x2="306.576" y2="204.978" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B388FF" />
          <stop offset="1" stopColor="#7C4DFF" />
        </linearGradient>
        <linearGradient id="paint1_linear_6_145" x1="0.600036" y1="114.248" x2="192.6" y2="229.448" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ECEFF1" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
      </defs>
    </svg>
  ),
  rain_day_night: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 257 257" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M215.766 195.706L223.944 185.483L232.122 195.706C233.727 197.584 234.696 200.022 234.696 202.687C234.696 208.625 229.882 213.439 223.944 213.439C218.006 213.439 213.192 208.625 213.192 202.687C213.192 200.022 214.161 197.584 215.766 195.706Z"
        fill="url(#paint0_linear_33_21)"
      />
      <path
        d="M165.168 219.542L176.072 205.912L186.976 219.542C189.116 222.047 190.408 225.297 190.408 228.85C190.408 236.767 183.989 243.186 176.072 243.186C168.154 243.186 161.736 236.767 161.736 228.85C161.736 225.297 163.028 222.047 165.168 219.542Z"
        fill="url(#paint1_linear_33_21)"
      />
      <path
        d="M120.022 195.706L128.2 185.483L136.378 195.706C137.983 197.584 138.952 200.022 138.952 202.687C138.952 208.625 134.138 213.439 128.2 213.439C122.262 213.439 117.448 208.625 117.448 202.687C117.448 200.022 118.417 197.584 120.022 195.706Z"
        fill="url(#paint2_linear_33_21)"
      />
      <path
        d="M69.424 219.542L80.3279 205.912L91.2319 219.542C93.3718 222.047 94.6639 225.297 94.6639 228.85C94.6639 236.767 88.2455 243.186 80.3279 243.186C72.4103 243.186 65.9919 236.767 65.9919 228.85C65.9919 225.297 67.2841 222.047 69.424 219.542Z"
        fill="url(#paint3_linear_33_21)"
      />
      <path
        d="M24.278 195.706L32.4559 185.483L40.6339 195.706C42.2389 197.584 43.2079 200.022 43.2079 202.687C43.2079 208.625 38.3941 213.439 32.4559 213.439C26.5178 213.439 21.704 208.625 21.704 202.687C21.704 200.022 22.6731 197.584 24.278 195.706Z"
        fill="url(#paint4_linear_33_21)"
      />
      <path
        d="M207.439 171.364C234.368 171.363 256.199 149.532 256.199 122.602C256.199 95.6718 234.367 73.8403 207.437 73.8403C207.099 73.8403 206.762 73.8438 206.426 73.8507C200.627 39.2525 170.539 12.888 134.293 12.888C106.925 12.888 83.0679 27.9189 70.5262 50.1758C67.4706 49.7041 64.3401 49.4594 61.1524 49.4594C27.4893 49.4594 0.199997 76.7487 0.199997 110.412C0.199997 144.075 27.4893 171.364 61.1524 171.364C61.1526 171.364 61.1521 171.364 61.1524 171.364L207.439 171.364Z"
        fill="url(#paint5_linear_33_21)"
      />
      <defs>
        <linearGradient id="paint0_linear_33_21" x1="223.944" y1="185.483" x2="223.944" y2="213.439" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1976D2" />
          <stop offset="1" stopColor="#0D47A1" />
        </linearGradient>
        <linearGradient id="paint1_linear_33_21" x1="176.072" y1="205.912" x2="176.072" y2="243.186" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1976D2" />
          <stop offset="1" stopColor="#0D47A1" />
        </linearGradient>
        <linearGradient id="paint2_linear_33_21" x1="128.2" y1="185.483" x2="128.2" y2="213.439" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1976D2" />
          <stop offset="1" stopColor="#0D47A1" />
        </linearGradient>
        <linearGradient id="paint3_linear_33_21" x1="80.3279" y1="205.912" x2="80.3279" y2="243.186" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1976D2" />
          <stop offset="1" stopColor="#0D47A1" />
        </linearGradient>
        <linearGradient id="paint4_linear_33_21" x1="32.4559" y1="185.483" x2="32.4559" y2="213.439" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1976D2" />
          <stop offset="1" stopColor="#0D47A1" />
        </linearGradient>
        <linearGradient id="paint5_linear_33_21" x1="0.200037" y1="15.448" x2="256.2" y2="169.048" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ECEFF1" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
      </defs>
    </svg>
  ),
  sleet_day_night: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 257 256" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M165.768 218.942L176.672 205.312L187.576 218.942C189.716 221.447 191.008 224.697 191.008 228.25C191.008 236.167 184.589 242.586 176.672 242.586C168.754 242.586 162.336 236.167 162.336 228.25C162.336 224.697 163.628 221.447 165.768 218.942Z"
        fill="url(#paint0_linear_33_69)"
      />
      <path
        d="M24.878 195.106L33.0559 184.883L41.2339 195.106C42.8389 196.984 43.8079 199.422 43.8079 202.087C43.8079 208.025 38.9941 212.839 33.0559 212.839C27.1178 212.839 22.304 208.025 22.304 202.087C22.304 199.422 23.2731 196.984 24.878 195.106Z"
        fill="url(#paint1_linear_33_69)"
      />
      <path
        d="M236.089 196.032L237.149 192.074L233.192 191.014L227.502 194.299V187.729L224.605 184.832L221.708 187.729V194.299L216.018 191.014L212.061 192.074L213.121 196.032L218.811 199.317L213.121 202.602L212.061 206.559L216.018 207.619L221.708 204.334V210.904L224.605 213.801L227.502 210.904V204.334L233.192 207.619L237.149 206.559L236.089 202.602L230.399 199.317L236.089 196.032Z"
        fill="url(#paint2_linear_33_69)"
      />
      <path
        d="M140.345 196.032L141.405 192.074L137.448 191.014L131.758 194.299V187.729L128.861 184.832L125.964 187.729V194.299L120.274 191.014L116.317 192.074L117.377 196.032L123.067 199.317L117.377 202.602L116.317 206.559L120.274 207.619L125.964 204.334V210.904L128.861 213.801L131.758 210.904V204.334L137.448 207.619L141.405 206.559L140.345 202.602L134.655 199.317L140.345 196.032Z"
        fill="url(#paint3_linear_33_69)"
      />
      <path
        d="M96.1379 220.158L97.5434 214.912L92.2979 213.506L84.7557 217.861V209.152L80.9157 205.312L77.0757 209.152V217.861L69.5336 213.506L64.288 214.912L65.6936 220.158L73.2357 224.512L65.6936 228.866L64.288 234.112L69.5336 235.518L77.0757 231.163V239.872L80.9157 243.712L84.7557 239.872V231.163L92.2979 235.518L97.5434 234.112L96.1379 228.866L88.5957 224.512L96.1379 220.158Z"
        fill="url(#paint4_linear_33_69)"
      />
      <path
        d="M208.039 170.764C234.968 170.763 256.799 148.932 256.799 122.002C256.799 95.0718 234.967 73.2403 208.037 73.2403C207.699 73.2403 207.362 73.2438 207.026 73.2507C201.227 38.6525 171.139 12.288 134.893 12.288C107.525 12.288 83.6678 27.3189 71.1262 49.5758C68.0706 49.1041 64.9401 48.8594 61.7524 48.8594C28.0893 48.8594 0.799988 76.1488 0.799988 109.812C0.799988 143.475 28.0893 170.764 61.7524 170.764C61.7526 170.764 61.7521 170.764 61.7524 170.764L208.039 170.764Z"
        fill="url(#paint5_linear_33_69)"
      />
      <defs>
        <linearGradient id="paint0_linear_33_69" x1="176.672" y1="205.312" x2="176.672" y2="242.586" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1976D2" />
          <stop offset="1" stopColor="#0D47A1" />
        </linearGradient>
        <linearGradient id="paint1_linear_33_69" x1="33.0559" y1="184.883" x2="33.0559" y2="212.839" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1976D2" />
          <stop offset="1" stopColor="#0D47A1" />
        </linearGradient>
        <linearGradient id="paint2_linear_33_69" x1="224.605" y1="184.832" x2="224.605" y2="213.801" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CFD8DC" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
        <linearGradient id="paint3_linear_33_69" x1="128.861" y1="184.832" x2="128.861" y2="213.801" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CFD8DC" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
        <linearGradient id="paint4_linear_33_69" x1="80.9157" y1="205.312" x2="80.9157" y2="243.712" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CFD8DC" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
        <linearGradient id="paint5_linear_33_69" x1="0.800028" y1="14.848" x2="256.8" y2="168.448" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ECEFF1" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
      </defs>
    </svg>
  ),
  snow_day_night: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 257 256" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M235.689 196.032L236.749 192.074L232.792 191.014L227.102 194.299V187.729L224.205 184.832L221.308 187.729V194.299L215.618 191.014L211.661 192.074L212.721 196.032L218.411 199.317L212.721 202.602L211.661 206.559L215.618 207.619L221.308 204.334V210.904L224.205 213.801L227.102 210.904V204.334L232.792 207.619L236.749 206.559L235.689 202.602L229.999 199.317L235.689 196.032Z"
        fill="url(#paint0_linear_33_48)"
      />
      <path
        d="M191.482 220.158L192.887 214.912L187.642 213.506L180.1 217.861V209.152L176.26 205.312L172.42 209.152V217.861L164.878 213.506L159.632 214.912L161.038 220.158L168.58 224.512L161.038 228.866L159.632 234.112L164.878 235.518L172.42 231.163V239.872L176.26 243.712L180.1 239.872V231.163L187.642 235.518L192.887 234.112L191.482 228.866L183.94 224.512L191.482 220.158Z"
        fill="url(#paint1_linear_33_48)"
      />
      <path
        d="M139.945 196.032L141.005 192.074L137.048 191.014L131.358 194.299V187.729L128.461 184.832L125.564 187.729V194.299L119.874 191.014L115.917 192.074L116.977 196.032L122.667 199.317L116.977 202.602L115.917 206.559L119.874 207.619L125.564 204.334V210.904L128.461 213.801L131.358 210.904V204.334L137.048 207.619L141.005 206.559L139.945 202.602L134.255 199.317L139.945 196.032Z"
        fill="url(#paint2_linear_33_48)"
      />
      <path
        d="M95.7379 220.158L97.1434 214.912L91.8979 213.506L84.3558 217.861V209.152L80.5158 205.312L76.6758 209.152V217.861L69.1336 213.506L63.8881 214.912L65.2936 220.158L72.8357 224.512L65.2936 228.866L63.8881 234.112L69.1336 235.518L76.6758 231.163V239.872L80.5158 243.712L84.3558 239.872V231.163L91.8979 235.518L97.1434 234.112L95.7379 228.866L88.1957 224.512L95.7379 220.158Z"
        fill="url(#paint3_linear_33_48)"
      />
      <path
        d="M44.2006 196.032L45.2609 192.074L41.3037 191.014L35.6138 194.299V187.729L32.7169 184.832L29.82 187.729V194.299L24.1302 191.014L20.1729 192.074L21.2333 196.032L26.9231 199.317L21.2332 202.602L20.1729 206.559L24.1302 207.619L29.82 204.334V210.904L32.7169 213.801L35.6138 210.904V204.334L41.3037 207.619L45.2609 206.559L44.2006 202.602L38.5107 199.317L44.2006 196.032Z"
        fill="url(#paint4_linear_33_48)"
      />
      <path
        d="M207.639 170.764C234.568 170.763 256.399 148.932 256.399 122.002C256.399 95.0718 234.567 73.2403 207.637 73.2403C207.299 73.2403 206.962 73.2438 206.626 73.2507C200.827 38.6525 170.739 12.288 134.493 12.288C107.125 12.288 83.2678 27.3189 70.7262 49.5758C67.6706 49.1041 64.54 48.8594 61.3523 48.8594C27.6893 48.8594 0.399963 76.1488 0.399963 109.812C0.399963 143.475 27.6893 170.764 61.3523 170.764C61.3526 170.764 61.3521 170.764 61.3523 170.764L207.639 170.764Z"
        fill="url(#paint5_linear_33_48)"
      />
      <defs>
        <linearGradient id="paint0_linear_33_48" x1="224.205" y1="184.832" x2="224.205" y2="213.801" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CFD8DC" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
        <linearGradient id="paint1_linear_33_48" x1="176.26" y1="205.312" x2="176.26" y2="243.712" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CFD8DC" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
        <linearGradient id="paint2_linear_33_48" x1="128.461" y1="184.832" x2="128.461" y2="213.801" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CFD8DC" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
        <linearGradient id="paint3_linear_33_48" x1="80.5157" y1="205.312" x2="80.5157" y2="243.712" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CFD8DC" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
        <linearGradient id="paint4_linear_33_48" x1="32.7169" y1="184.832" x2="32.7169" y2="213.801" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CFD8DC" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
        <linearGradient id="paint5_linear_33_48" x1="0.400003" y1="14.848" x2="256.4" y2="168.448" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ECEFF1" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
      </defs>
    </svg>
  ),
  sunrise: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 257 257" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M19.6 218.912H237.2" stroke="url(#paint0_linear_129_2)" strokeWidth="10.24" strokeLinecap="round" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M128.412 107.552C128.412 107.552 142.016 122.055 153.554 125.819C165.177 129.611 184.861 125.819 184.861 125.819C184.861 125.819 187.341 145.708 194.535 155.594C201.696 165.435 219.748 173.912 219.748 173.912C219.748 173.912 210.118 191.381 210.118 203.552L46.7055 203.552C46.7055 191.381 37.0749 173.912 37.0749 173.912C37.0749 173.912 55.1271 165.435 62.2882 155.594C69.4816 145.708 71.9624 125.819 71.9624 125.819C71.9624 125.819 91.6457 129.611 103.269 125.819C114.807 122.055 128.412 107.552 128.412 107.552Z"
        fill="url(#paint1_linear_129_2)"
      />
      <path d="M102.8 64.544L128.4 38.944M128.4 38.944L154 64.544M128.4 38.944V90.144" stroke="url(#paint2_linear_129_2)" strokeWidth="10.24" strokeLinecap="round" />
      <defs>
        <linearGradient id="paint0_linear_129_2" x1="19.6" y1="219.412" x2="237.2" y2="219.412" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EFF1F5" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
        <linearGradient id="paint1_linear_129_2" x1="23.4684" y1="104.224" x2="223.754" y2="351.788" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC400" />
          <stop offset="1" stopColor="#FF6F00" />
        </linearGradient>
        <linearGradient id="paint2_linear_129_2" x1="128.4" y1="38.944" x2="128.4" y2="90.144" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B0BEC5" />
          <stop offset="1" stopColor="#EFF1F5" />
        </linearGradient>
      </defs>
    </svg>
  ),
  sunset: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 257 257" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M20 218.912H237.6" stroke="url(#paint0_linear_129_40)" strokeWidth="10.24" strokeLinecap="round" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M128.812 107.552C128.812 107.552 142.416 122.055 153.954 125.819C165.577 129.611 185.261 125.819 185.261 125.819C185.261 125.819 187.741 145.708 194.935 155.594C202.096 165.435 220.148 173.912 220.148 173.912C220.148 173.912 210.518 191.381 210.518 203.552L47.1055 203.552C47.1055 191.381 37.4749 173.912 37.4749 173.912C37.4749 173.912 55.5272 165.435 62.6882 155.594C69.8817 145.708 72.3624 125.819 72.3624 125.819C72.3624 125.819 92.0457 129.611 103.669 125.819C115.207 122.055 128.812 107.552 128.812 107.552Z"
        fill="url(#paint1_linear_129_40)"
      />
      <path d="M103.2 64.544L128.8 90.144M128.8 90.144L154.4 64.544M128.8 90.144V38.944" stroke="url(#paint2_linear_129_40)" strokeWidth="10.24" strokeLinecap="round" />
      <defs>
        <linearGradient id="paint0_linear_129_40" x1="20" y1="219.412" x2="237.6" y2="219.412" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EFF1F5" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
        <linearGradient id="paint1_linear_129_40" x1="23.8685" y1="104.224" x2="224.154" y2="351.788" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6F00" />
          <stop offset="1" stopColor="#C51162" />
        </linearGradient>
        <linearGradient id="paint2_linear_129_40" x1="128.8" y1="38.944" x2="128.8" y2="90.144" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EFF1F5" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
      </defs>
    </svg>
  ),
  thunder_day_night: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 257 257" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M256.599 127.778C256.599 154.708 234.768 176.539 207.839 176.54H148.368L157.734 139.076C158.916 134.347 156.602 129.441 152.201 127.346C147.8 125.251 142.532 126.549 139.608 130.448L105.039 176.54H61.5523C27.8893 176.54 0.599945 149.251 0.599945 115.588C0.599945 81.9247 27.8893 54.6354 61.5523 54.6354C64.74 54.6354 67.8705 54.8801 70.9262 55.3517C83.4678 33.0948 107.325 18.0639 134.693 18.0639C170.939 18.0639 201.027 44.4285 206.826 79.0266C207.162 79.0198 207.499 79.0163 207.837 79.0163C234.767 79.0163 256.599 100.848 256.599 127.778ZM117.839 176.54L131.967 157.702L147.8 136.592L141.4 162.192L137.813 176.54L117.839 176.54Z"
        fill="url(#paint0_linear_33_83)"
      />
      <path d="M109.4 187.792L147.8 136.592L135 187.792H147.8L109.4 238.992L122.2 187.792H109.4Z" fill="url(#paint1_linear_33_83)" />
      <defs>
        <linearGradient id="paint0_linear_33_83" x1="0.599945" y1="23.7566" x2="205.443" y2="195.097" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B0BEC5" />
          <stop offset="1" stopColor="#616161" />
        </linearGradient>
        <linearGradient id="paint1_linear_33_83" x1="128.6" y1="136.592" x2="128.6" y2="238.992" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC400" />
          <stop offset="1" stopColor="#FF6F00" />
        </linearGradient>
      </defs>
    </svg>
  ),
  thunderstorm_day_night: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 257 256" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M216.166 195.106L224.344 184.883L232.522 195.106C234.127 196.984 235.096 199.422 235.096 202.087C235.096 208.025 230.282 212.839 224.344 212.839C218.406 212.839 213.592 208.025 213.592 202.087C213.592 199.422 214.561 196.984 216.166 195.106Z"
        fill="url(#paint0_linear_6_185)"
      />
      <path
        d="M165.568 218.942L176.472 205.312L187.376 218.942C189.516 221.447 190.808 224.697 190.808 228.25C190.808 236.167 184.389 242.586 176.472 242.586C168.554 242.586 162.136 236.167 162.136 228.25C162.136 224.697 163.428 221.447 165.568 218.942Z"
        fill="url(#paint1_linear_6_185)"
      />
      <path
        d="M69.8239 218.942L80.7279 205.312L91.6319 218.942C93.7717 221.447 95.0638 224.697 95.0638 228.25C95.0638 236.167 88.6454 242.586 80.7278 242.586C72.8103 242.586 66.3918 236.167 66.3918 228.25C66.3918 224.697 67.684 221.447 69.8239 218.942Z"
        fill="url(#paint2_linear_6_185)"
      />
      <path
        d="M24.678 195.106L32.8559 184.883L41.0339 195.106C42.6388 196.984 43.6079 199.422 43.6079 202.087C43.6079 208.025 38.7941 212.839 32.8559 212.839C26.9178 212.839 22.1039 208.025 22.1039 202.087C22.1039 199.422 23.0731 196.984 24.678 195.106Z"
        fill="url(#paint3_linear_6_185)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M256.599 122.002C256.599 148.932 234.768 170.763 207.839 170.764H166.405C164.811 169.668 162.913 169.026 160.914 168.965L170.534 130.484C171.716 125.755 169.402 120.849 165.001 118.754C160.6 116.659 155.332 117.957 152.408 121.856L115.727 170.764H61.5524C27.8893 170.764 0.600006 143.475 0.600006 109.812C0.600006 76.1487 27.8893 48.8594 61.5524 48.8594C64.7401 48.8594 67.8706 49.1041 70.9262 49.5757C83.4679 27.3189 107.325 12.288 134.693 12.288C170.939 12.288 201.027 38.6525 206.826 73.2506C207.162 73.2438 207.499 73.2403 207.837 73.2403C234.767 73.2403 256.599 95.0718 256.599 122.002ZM128.527 170.764L129.88 168.96L144.767 149.11L160.6 128L154.2 153.6L150.36 168.96L149.909 170.764L128.527 170.764Z"
        fill="url(#paint4_linear_6_185)"
      />
      <path d="M122.2 179.2L160.6 128L147.8 179.2H160.6L122.2 230.4L135 179.2H122.2Z" fill="url(#paint5_linear_6_185)" />
      <defs>
        <linearGradient id="paint0_linear_6_185" x1="224.344" y1="184.883" x2="224.344" y2="212.839" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1976D2" />
          <stop offset="1" stopColor="#0D47A1" />
        </linearGradient>
        <linearGradient id="paint1_linear_6_185" x1="176.472" y1="205.312" x2="176.472" y2="242.586" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1976D2" />
          <stop offset="1" stopColor="#0D47A1" />
        </linearGradient>
        <linearGradient id="paint2_linear_6_185" x1="80.7278" y1="205.312" x2="80.7278" y2="242.586" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1976D2" />
          <stop offset="1" stopColor="#0D47A1" />
        </linearGradient>
        <linearGradient id="paint3_linear_6_185" x1="32.8559" y1="184.883" x2="32.8559" y2="212.839" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1976D2" />
          <stop offset="1" stopColor="#0D47A1" />
        </linearGradient>
        <linearGradient id="paint4_linear_6_185" x1="0.599998" y1="3.35974" x2="198.425" y2="193.947" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B0BEC5" />
          <stop offset="1" stopColor="#616161" />
        </linearGradient>
        <linearGradient id="paint5_linear_6_185" x1="141.4" y1="128" x2="141.4" y2="230.4" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC400" />
          <stop offset="1" stopColor="#FF6F00" />
        </linearGradient>
      </defs>
    </svg>
  ),
  wind_day_night: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 257 257" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.2799 162.192C43.4522 162.192 41.1599 159.9 41.1599 157.072C41.1599 154.244 43.4522 151.952 46.2799 151.952H231.88C239.656 151.952 245.96 145.648 245.96 137.872C245.96 130.096 239.656 123.792 231.88 123.792H230.715C226.672 123.792 222.795 125.398 219.936 128.257L216.3 131.892C214.301 133.892 211.059 133.892 209.059 131.892C207.06 129.893 207.06 126.651 209.059 124.652L212.695 121.016C217.474 116.237 223.956 113.552 230.715 113.552H231.88C245.311 113.552 256.2 124.44 256.2 137.872C256.2 151.304 245.311 162.192 231.88 162.192H46.2799ZM18.1199 172.432C15.2922 172.432 12.9999 174.724 12.9999 177.552C12.9999 180.38 15.2922 182.672 18.1199 182.672H197.32C208.622 182.672 217.8 191.867 217.8 203.186C217.8 214.468 208.652 223.632 197.388 223.632C190.918 223.632 184.83 220.564 180.981 215.362L179.164 212.907C177.482 210.633 174.275 210.154 172.002 211.836C169.729 213.518 169.25 216.725 170.932 218.998L172.749 221.453C178.53 229.264 187.671 233.872 197.388 233.872C214.326 233.872 228.04 220.106 228.04 203.186C228.04 186.229 214.295 172.432 197.32 172.432H18.1199Z"
        fill="url(#paint0_linear_45_29)"
      />
      <path
        d="M155.629 141.785C175.826 141.784 192.199 125.411 192.199 105.214C192.199 85.0159 175.826 68.6423 155.628 68.6423C155.374 68.6423 155.122 68.6449 154.87 68.65C150.52 42.7014 127.954 22.928 100.77 22.928C80.2438 22.928 62.3509 34.2012 52.9447 50.8939C50.6529 50.5401 48.305 50.3566 45.9143 50.3566C20.667 50.3566 0.199997 70.8236 0.199997 96.0709C0.199997 121.318 20.667 141.785 45.9143 141.785C45.9145 141.785 45.9141 141.785 45.9143 141.785L155.629 141.785Z"
        fill="url(#paint1_linear_45_29)"
      />
      <defs>
        <linearGradient id="paint0_linear_45_29" x1="0.199993" y1="102.8" x2="256.2" y2="230.8" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ECEFF1" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
        <linearGradient id="paint1_linear_45_29" x1="0.200027" y1="24.848" x2="192.2" y2="140.048" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ECEFF1" />
          <stop offset="1" stopColor="#B0BEC5" />
        </linearGradient>
      </defs>
    </svg>
  ),
};
