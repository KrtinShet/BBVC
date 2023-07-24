import { forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";
// @mui
import { useTheme } from "@mui/material/styles";
import { Box, Link, BoxProps } from "@mui/material";

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const theme = useTheme();

    const PRIMARY_LIGHT = theme.palette.primary.light;

    const PRIMARY_MAIN = theme.palette.primary.main;

    const PRIMARY_DARK = theme.palette.primary.dark;

    // OR using local (public folder)
    // -------------------------------------------------------
    // const logo = (
    //   <Box
    //     component="img"
    //     src="/logo/logo_single.svg" => your path
    //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
    //   />
    // );

    const logo = (
      <Box
        ref={ref}
        component="div"
        sx={{
          width: 40,
          height: 40,
          display: "inline-flex",
          cursor:"pointer",
          ...sx,
        }}
        {...other}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 216 283"
          fill="none"
        >
          <defs>
            <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
              <stop offset="0%" stopColor={PRIMARY_DARK} />
              <stop offset="100%" stopColor={PRIMARY_MAIN} />
            </linearGradient>

            <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset="0%" stopColor={PRIMARY_LIGHT} />
              <stop offset="100%" stopColor={PRIMARY_MAIN} />
            </linearGradient>

            <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset="0%" stopColor={PRIMARY_LIGHT} />
              <stop offset="100%" stopColor={PRIMARY_MAIN} />
            </linearGradient>
          </defs>

          <g
            fill={PRIMARY_MAIN}
            fillRule="evenodd"
            stroke="none"
            strokeWidth="1"
          >
            <path
              d="M22.5837 238.771C15.4603 228.315 11.8898 215.255 11.8898 199.584V181.918H0V199.584C0 217.691 4.11571 232.932 12.3471 245.314C20.561 257.696 32.7058 267.071 48.7905 273.42C64.8577 279.752 84.6975 282.918 108.31 282.918C131.931 282.918 151.701 279.752 167.619 273.42C183.519 267.071 195.514 257.696 203.605 245.314C211.695 232.932 215.741 217.691 215.741 199.584V181.918H203.816V199.584C203.816 223.205 195.962 240.873 180.247 252.596C164.514 264.301 140.532 270.149 108.31 270.149C86.8081 270.149 68.9294 267.537 54.6651 262.304C40.3832 257.081 29.6894 249.236 22.5837 238.771Z"
              fill="#FF8812"
            />
            <path
              d="M51.3384 28.054L51.2681 28.0627C50.2919 28.5552 48.1109 32.7853 44.7076 40.7705C42.6937 45.8711 41.0667 51.0861 39.8179 56.3978C36.7224 69.7036 35.5 81.7253 36.1332 92.4367C36.9422 102.102 40.2928 112.312 46.185 123.076C47.1699 124.993 48.1109 126.514 48.9904 127.623C50.6437 129.689 54.4252 133.972 60.3349 140.471C61.1616 141.456 62.0674 142.678 63.07 144.138C66.1567 148.922 68.1794 153.1 69.138 156.679C70.0438 160.548 70.2285 165.623 69.7008 171.91C69.094 176.967 68.7159 179.649 68.5576 179.948C65.1718 191.442 63.4921 197.431 63.5097 197.924C63.3866 198.583 63.3602 199.111 63.4305 199.498C63.4745 200.07 63.9406 200.756 64.8288 201.565C64.9783 202.136 64.9519 202.576 64.7409 202.875C71.8115 191.135 76.0503 182.877 77.475 178.102C78.9964 173.696 80.0517 169.8 80.6409 166.414C81.4763 161.111 81.7666 157.013 81.4939 154.111C81.151 148.351 79.0315 141.359 75.1445 133.137L64.2836 115.187C59.948 110.113 56.7381 105.716 54.6714 101.97C52.1299 97.6341 50.3359 93.2194 49.2982 88.7343C47.5393 82.0683 46.7214 72.3155 46.8709 59.4934C47.3634 46.003 49.263 36.0391 52.552 29.6105C52.5432 28.6344 52.1387 28.1155 51.3384 28.054Z"
              fill="#2382F7"
              fill-opacity="0.9961"
            />
            <path
              d="M180.658 23.8147L180.544 23.8235C171.151 31.4921 163.984 39.7323 159.059 48.5441C153.871 57.6022 150.054 68.4983 147.6 81.2412C146.466 89.6837 146.589 97.7216 147.987 105.355C148.603 108.653 149.271 111.537 149.992 113.991L155.225 129.223C155.665 130.577 156.131 132.301 156.641 134.394C158.532 142.423 159.675 149.142 160.044 154.559C160.343 161.04 160.185 166.352 159.569 170.468C158.98 175.639 157.063 182.287 153.8 190.422C153.721 190.862 153.73 191.24 153.818 191.548L154.785 193.236C154.856 193.764 154.768 194.124 154.53 194.327C164.714 183.281 170.413 168.12 171.626 148.843C172.154 139.679 171.776 130.647 170.483 121.756C169.278 114.607 168.584 110.966 168.416 110.825C167.906 108.697 166.517 104.766 164.239 99.032C162.735 94.0017 161.865 90.2993 161.636 87.9248C161.24 84.5303 161.064 81.505 161.117 78.858C161.302 73.7397 161.627 69.8087 162.102 67.0737C163.351 58.9214 165.277 51.9211 167.898 46.073C170.791 39.0903 175.1 32.4067 180.816 26.0133C181.564 24.7733 181.511 24.0433 180.658 23.8147Z"
              fill="#2382F7"
              fill-opacity="0.9961"
            />
            <path
              d="M149.799 0L148.691 0.167091C121.596 7.41356 103.366 24.6591 93.9732 51.8861C91.4405 62.6503 90.9041 73.0011 92.3551 82.9298C94.4921 95.4265 96.2598 104.564 97.658 110.342C98.089 112.839 100.666 121.493 105.406 136.311C106.54 140.348 107.464 144.279 108.185 148.104C109.979 158.2 110.638 169.298 110.155 181.39C109.803 192.084 108.07 201.371 104.94 209.233C100.798 219.118 94.369 229.715 85.6539 241.024C85.0031 242.247 85.1438 242.959 86.0672 243.17C101.695 228.466 111.483 216.919 115.414 208.547C121.49 196.868 125.553 182.604 127.611 165.728C129.423 153.442 129.335 139.873 127.356 125.019C125.914 114.616 124.727 108.108 123.795 105.478C122.792 101.679 119.688 92.8058 114.508 78.8581C113.47 75.7449 112.828 73.564 112.564 72.2976C110.937 64.2333 110.638 56.6614 111.676 49.5732C115.15 38.3605 119.239 29.8477 123.962 24.0523C126.107 21.2293 128.456 18.6087 131.015 16.1814C136.133 11.4677 141.234 7.57186 146.325 4.47628C147.31 3.96621 147.944 2.79657 148.225 0.976163C148.761 0.413331 149.289 0.0879437 149.799 0Z"
              fill="#2382F7"
              fill-opacity="0.9961"
            />
          </g>
        </svg>
      </Box>
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link component={RouterLink} to="/" sx={{ display: "contents" }}>
        {logo}
      </Link>
    );
  }
);

export default Logo;
