import { forwardRef } from "react";
import { Box, BoxProps } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export interface DownloadProps extends BoxProps {
  disabledLink?: boolean;
  isHovered?: boolean;
}

const Download = forwardRef<HTMLDivElement, DownloadProps>(
  ({ disabledLink = false, sx, isHovered, ...other }, ref) => {
    const theme = useTheme();

    const GREY = theme.palette.grey[900];
    const PRIMARY_MAIN = theme.palette.primary.main;

    const Download = (
      <Box
        ref={ref}
        component="div"
        sx={{
          ...sx,
        }}
        {...other}
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.9799 2.99999C18.5867 3.35576 18.1735 3.68881 17.7424 3.99749C16.9974 4.49749 16.1599 4.84249 15.2799 5.01749C14.8974 5.09249 14.4974 5.12499 13.6999 5.18749C11.6974 5.34749 10.6949 5.42749 9.85986 5.72249C8.90511 6.05958 8.03794 6.60616 7.32199 7.32211C6.60603 8.03807 6.05946 8.90524 5.72236 9.85999C5.42736 10.695 5.34736 11.6975 5.18736 13.7C5.16009 14.2294 5.10334 14.7569 5.01736 15.28C4.84236 16.16 4.49736 16.9975 3.99736 17.7425C3.77986 18.0675 3.51986 18.3725 2.99986 18.98C1.69736 20.51 1.04486 21.275 0.662363 22.075C-0.220137 23.925 -0.220137 26.075 0.662363 27.925C1.04486 28.725 1.69736 29.49 2.99986 31.02C3.51986 31.6275 3.77986 31.9325 3.99736 32.2575C4.49736 33.0025 4.84236 33.84 5.01736 34.72C5.09236 35.1025 5.12486 35.5025 5.18736 36.3C5.34736 38.3025 5.42736 39.305 5.72236 40.14C6.05946 41.0947 6.60603 41.9619 7.32199 42.6779C8.03794 43.3938 8.90511 43.9404 9.85986 44.2775C10.6949 44.5725 11.6974 44.6525 13.6999 44.8125C14.4974 44.875 14.8974 44.9075 15.2799 44.9825C16.1599 45.1575 16.9974 45.505 17.7424 46.0025C18.0674 46.22 18.3724 46.48 18.9799 47C20.5099 48.3025 21.2749 48.955 22.0749 49.3375C23.9249 50.22 26.0749 50.22 27.9249 49.3375C28.7249 48.955 29.4899 48.3025 31.0199 47C31.6274 46.48 31.9324 46.22 32.2574 46.0025C33.0024 45.5025 33.8399 45.1575 34.7199 44.9825C35.1024 44.9075 35.5024 44.875 36.2999 44.8125C38.3024 44.6525 39.3049 44.5725 40.1399 44.2775C41.0946 43.9404 41.9618 43.3938 42.6777 42.6779C43.3937 41.9619 43.9403 41.0947 44.2774 40.14C44.5724 39.305 44.6524 38.3025 44.8124 36.3C44.8749 35.5025 44.9074 35.1025 44.9824 34.72C45.1574 33.84 45.5049 33.0025 46.0024 32.2575C46.2199 31.9325 46.4799 31.6275 46.9999 31.02C48.3024 29.49 48.9549 28.725 49.3374 27.925C50.2199 26.075 50.2199 23.925 49.3374 22.075C48.9549 21.275 48.3024 20.51 46.9999 18.98C46.6441 18.5868 46.311 18.1736 46.0024 17.7425C45.5028 16.9972 45.1561 16.1602 44.9824 15.28C44.8965 14.7569 44.8397 14.2294 44.8124 13.7C44.6524 11.6975 44.5724 10.695 44.2774 9.85999C43.9403 8.90524 43.3937 8.03807 42.6777 7.32211C41.9618 6.60616 41.0946 6.05958 40.1399 5.72249C39.3049 5.42749 38.3024 5.34749 36.2999 5.18749C35.7705 5.16022 35.243 5.10347 34.7199 5.01749C33.8396 4.84371 33.0027 4.49702 32.2574 3.99749C31.8267 3.68815 31.4136 3.35514 31.0199 2.99999C29.4899 1.69749 28.7249 1.04499 27.9249 0.66249C27.0116 0.225942 26.0121 -0.000640869 24.9999 -0.000640869C23.9876 -0.000640869 22.9882 0.225942 22.0749 0.66249C21.2749 1.04499 20.5099 1.69749 18.9799 2.99999ZM35.9324 19.6575C36.2857 19.2708 36.4763 18.7627 36.4645 18.239C36.4527 17.7153 36.2394 17.2163 35.869 16.8459C35.4986 16.4755 34.9996 16.2622 34.4759 16.2504C33.9522 16.2386 33.4441 16.4292 33.0574 16.7825L20.9324 28.9075L16.9424 24.92C16.5556 24.5667 16.0476 24.3761 15.5238 24.3879C15.0001 24.3997 14.5012 24.613 14.1308 24.9834C13.7603 25.3538 13.547 25.8528 13.5352 26.3765C13.5234 26.9002 13.714 27.4083 14.0674 27.795L19.4924 33.22C19.8739 33.6007 20.3909 33.8146 20.9299 33.8146C21.4689 33.8146 21.9858 33.6007 22.3674 33.22L35.9349 19.6575H35.9324Z"
            fill="#2382F7"
          />
        </svg>
      </Box>
    );

    return Download;
  }
);

export default Download;