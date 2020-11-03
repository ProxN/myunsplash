import React, { useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import Modal from '../Modal';
import usePhotoStore from '../../store/photoStore';
import { FormActions } from './DeletePhoto.styles';

const DeletePhoto: React.FC = () => {
  const [password, setPassword] = useState('');
  const { hideDeleteModal, deletePhoto } = usePhotoStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    await deletePhoto(password);
    hideDeleteModal();
  };
  return (
    <Modal width='450px' title='Are you sure?'>
      <form onSubmit={onSubmit}>
        <Input
          type='password'
          onChange={handleChange}
          value={password}
          fullWidth
          placeholder='Your password...'
        />
        <FormActions>
          <Button onClick={hideDeleteModal} rounded>
            Cancal
          </Button>
          <Button rounded variant='danger'>
            Delete
          </Button>
        </FormActions>
      </form>
    </Modal>
  );
};

export default DeletePhoto;
