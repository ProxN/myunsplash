import React from 'react';
import { ReactComponent as LogoSVG } from '../../assets/my_unsplash_logo.svg';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import Input from '../Input';
import Button from '../Button';
import {
  Headercontainer,
  LogoLink,
  Navbar,
  NavRightSide,
} from './Header.style';

const Header: React.FC = () => {
  return (
    <Headercontainer>
      <Navbar>
        <LogoLink>
          <LogoSVG />
        </LogoLink>
        <Input icon={<SearchIcon />} placeholder='Search by name' rounded />
        <NavRightSide>
          <Button variant='primary' rounded>
            Add Photo
          </Button>
        </NavRightSide>
      </Navbar>
    </Headercontainer>
  );
};

export default Header;
