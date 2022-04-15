import { FunctionComponent, ReactElement } from 'react';
import './Layout.scss';

interface ILayout {
  children: ReactElement;
}

const Layout: FunctionComponent<ILayout> = ({ children }) => <main className='Layout'>{children}</main>;

export default Layout;
