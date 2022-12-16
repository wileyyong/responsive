import { Box, Stack, Typography } from '@mui/material';

import Iconify from '../../../components/Iconify';
import useResponsive from '../../../hooks/useResponsive';

export default function DashboardFooter() {
  const isDesktop = useResponsive('up', 'md');
	const isMobile = useResponsive('down', 'sm');

	let sx = {};
	if(isDesktop) {
		sx = {
			position: 'fixed',
			bottom: 0,
			left: 0,
			zIndex: 9,
		}
	}
	if(isMobile) {
		sx = {
			flexDirection: 'column',
			height: 'auto',
		}
	}

	return (
		<Box sx={{
			height: '100px', 
			width: "100%", 
			display: "flex", 
			alignItems: "center", 
			p: 3, 
			backgroundColor: "#282828",
			...sx,
		}}>
			<Stack direction={isMobile ? "column" : "row"} spacing={1} alignItems="center">
				<svg
					width="35"
					height="40"
					viewBox="0 0 35 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M33.2086 4.41926C30.2625 1.69972 24.2004 0 17.515 0C11.2828 0 5.67391 1.47309 1.76466 4.07932C0.0649829 5.26912 0.0083271 6.91218 0.0083271 8.78187C-0.104985 12.9745 0.744854 27.4788 14.8522 38.187C14.9088 38.2436 14.9655 38.3003 15.0788 38.3569L16.0419 39.0368L17.4017 40L18.7048 38.9802L19.6112 38.2436L19.6679 38.187C31.9622 29.0085 34.2851 17.1105 34.5684 10.8215C34.7384 6.6289 34.2851 5.38244 33.2086 4.41926ZM18.2515 36.5439L17.345 37.2805L16.3819 36.6006C16.2686 36.5439 16.2119 36.4873 16.2119 36.4873C2.84112 26.4023 2.10459 12.8045 2.21791 8.83853C2.27456 6.79887 2.38787 6.34561 3.01109 5.89235C6.5804 3.51275 11.6794 2.15297 17.515 2.15297C23.6338 2.15297 29.2427 3.68272 31.7923 6.00567C32.1322 6.28895 32.5854 6.74221 32.4155 10.7082C32.0755 16.6006 29.9226 27.762 18.3648 36.4873L18.2515 36.5439Z"
						fill="white"
						fillOpacity="0.5"
					/>
					<path
						d="M30.7158 7.19566C26.41 3.28633 11.6228 1.98322 3.91759 7.19566C3.80428 7.25232 1.76467 23.6262 17.2317 35.2408C17.2317 35.2408 17.2884 35.2975 17.345 35.2975C17.4017 35.2408 17.4583 35.2408 17.4583 35.2408C32.8687 23.6262 30.7725 7.25232 30.7158 7.19566ZM18.8181 29.0652L17.2884 28.272L15.7587 29.0652L16.0419 27.3655L14.7955 26.1757L16.4952 25.9491L17.2884 24.4194L18.0816 25.9491L19.7812 26.1757L18.5348 27.3655L18.8181 29.0652ZM23.6905 12.5781H20.801V12.2948C20.2345 11.275 17.2884 11.275 17.2884 11.275C17.2884 11.275 14.3423 11.275 13.7757 12.2948V17.4506C14.3423 18.4704 17.2884 18.4704 17.2884 18.4704C17.2884 18.4704 20.2345 18.4704 20.801 17.4506V17.1673H23.6905V18.4704C23.4072 21.1899 17.2884 21.1899 17.2884 21.1899C17.2884 21.1899 11.1695 21.1899 10.8863 18.4704V11.275C11.1695 8.55542 17.2884 8.55543 17.2884 8.55543C17.2884 8.55543 23.4072 8.55542 23.6905 11.275V12.5781Z"
						fill="white"
						fillOpacity="0.5"
					/>
				</svg>
				<Typography variant='body2' color="#AAAAAA" fontSize='10px'>©2022 Champria.gg</Typography>			
				<Typography variant='body2' color="#AAAAAA" fontSize='10px'>Terms of Service</Typography>
				<Typography variant="body2" color="#AAAAAA" fontSize='10px'>Privacy Policy</Typography>
			</Stack>
			<Box flexGrow={1} height={10} />
			<Stack direction={isMobile ? "column" : "row"} alignItems='center' spacing={1}>
				<Typography variant='body2' color="#AAAAAA" fontSize='10px'>Contact with us</Typography>
				<Stack direction="row" alignItems={'center'} spacing={1}>
					<Iconify icon="bxl:facebook" width={20} height={20} />
					<Iconify icon="ant-design:twitter-outlined" width={20} height={20} />
					<Iconify icon="ant-design:instagram-outlined" width={20} height={20} />
					<Iconify icon="akar-icons:linkedin-fill" width={20} height={20} />
				</Stack>
			</Stack>
		</Box>
	);
}