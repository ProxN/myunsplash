import React, { useState } from 'react';
import { ReactComponent as LogoSVG } from '../../assets/my_unsplash_logo.svg';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import Input from '../Input';
import Button from '../Button';
import AddPhoto from '../AddPhoto';
import {
  Headercontainer,
  LogoLink,
  Navbar,
  NavRightSide,
} from './Header.style';

const Header: React.FC = () => {
  const [showAddPhoto, setShowAddPhoto] = useState(false);

  const showAddModal = (): void => {
    setShowAddPhoto(true);
  };

  const hideAddModal = (): void => {
    setShowAddPhoto(false);
  };
  return (
    <>
      <Headercontainer>
        <Navbar>
          <LogoLink>
            <LogoSVG />
          </LogoLink>
          <Input icon={<SearchIcon />} placeholder='Search by name' rounded />
          <NavRightSide>
            <Button onClick={showAddModal} variant='primary' rounded>
              Add Photo
            </Button>
          </NavRightSide>
        </Navbar>
      </Headercontainer>
      {showAddPhoto && <AddPhoto handleModalClose={hideAddModal} />}
    </>
  );
};

export default Header;
