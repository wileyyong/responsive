
// utils
import createAvatar from '../utils/createAvatar';
//
import Avatar from './Avatar';

// ----------------------------------------------------------------------

export default function MyAvatar({ ...other }) {

  return (
    <Avatar
      src=''
      alt='name'
      color='default'
      {...other}
    >
      {createAvatar('name').name}
    </Avatar>
  );
}
