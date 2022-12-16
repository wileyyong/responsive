
import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Box, IconButton, Button } from '@mui/material';

import Iconify from '../../components/Iconify';

const IconButtonStyle = styled(IconButton)(({ theme }) => ({
  padding: 3,
  color: theme.palette.common.white,
	'& svg': {
		width: 15,
		height: 15,
	}
}));

ScrimReviewItem.propTypes = {
  checked: PropTypes.bool,
	viewMode: PropTypes.bool,
};

export default function ScrimReviewItem({checked, viewMode = false}) {
	return (
		<Box display='flex' width='100%'>
			<Box flexGrow={1} p={1} bgcolor="#282828" borderRadius="8px 0 0 8px">
				<Typography variant='subtitle2' fontSize='12px'>
					PandaChan vs DDRS
				</Typography>
				<Typography variant='body2' fontSize='10px' sx={{color: '#AAAAAA'}}>
					Rocket League | NA-WEST
				</Typography>
				<Typography variant='body2' fontSize='10px' sx={{color: '#AAAAAA'}}>
					Nov 11 | 5:00 PM EST | 1 Hour
				</Typography>
			</Box>
			{
				!viewMode ? (
					<Box p={1} width="110px" bgcolor="#7635EF" borderRadius="0 8px 8px 0" display="flex" justifyContent={'center'} alignItems={'center'}>
						<IconButtonStyle>
							{
								!checked ? (
									<Iconify icon="cil:thumb-up" />
								) : (
									<Iconify icon="heroicons-solid:thumb-up" />
								)
							}
						</IconButtonStyle>
						<Button 
							color="primary" 
							sx={{
								backgroundColor: '#FFFF',
								color: '#7635EF',
								padding: '2px 5px',
								fontSize: 8,
								minWidth: 'unset',
								lineHeight: 1,
								borderRadius: '4px',
								fontStyle: 'italic',
							}}
						>
							MEH
						</Button>
						<IconButtonStyle>
							{
								!checked ? (
									<Iconify icon="cil:thumb-down" />
								) : (
									<Iconify icon="heroicons-solid:thumb-down" />
								)
							}
						</IconButtonStyle>
						<IconButtonStyle>
							<Iconify icon="bi:upload" />
						</IconButtonStyle>
					</Box>
				) : (
					<Box p={1} width="110px" bgcolor="#5225A7" borderRadius="0 8px 8px 0" display="flex" justifyContent={'center'} alignItems={'center'}>
						<Typography variant="body2">
							VIEW 
						</Typography>
						<IconButtonStyle>
							<Iconify icon="eva:arrow-ios-forward-fill" width={20} height={20} />
						</IconButtonStyle>
					</Box>
				)
			}
		</Box>	
	);
}