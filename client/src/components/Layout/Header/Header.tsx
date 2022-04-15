import { FC, ReactElement } from 'react';
import './Header.scss';

interface IHeader {
  children: ReactElement;
}

const Header: FC<IHeader> = ({ children }) => <header className='Header'>{children}</header>;

export default Header;
