import { Layout } from 'react-admin';
import MainMenu from './Menu';

const MainMonitor = (props) =>
    <Layout
    {...props}
    menu={MainMenu}
/>;

export default MainMonitor;