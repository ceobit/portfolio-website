import IconGitHub from '../icons/IconGitHub';
import IconLinkedin from '../icons/IconLinkedin';
import IconInstagram from '../icons/IconInstagram';

const Icon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub/>;
    case 'Linkedin':
      return <IconLinkedin/>;
    case 'Instagram':
      return <IconInstagram/>;
    default:
      return <IconInstagram/>;
  }
};

export default Icon;
