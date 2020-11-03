import React, { useState } from 'react';
import usePhotoStore from '../../store/photoStore';
import Button from '../Button';
import Input from '../Input';
import Modal from '../Modal';
import { FormActions, InputLabel, InputGroup } from './AddPhoto.styles';

interface AddPhotoProps {
  handleModalClose?: () => void;
}

const AddPhoto: React.FC<AddPhotoProps> = ({ handleModalClose }) => {
  const [state, setState] = useState({
    url: '',
    label: '',
  });

  const { addPhoto } = usePhotoStore();

  const handleInputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    await addPhoto(state);
    if (handleModalClose) handleModalClose();
  };

  return (
    <Modal width='450px' title='Add a new photo'>
      <form onSubmit={onSubmit}>
        <InputGroup>
          <InputLabel>Label</InputLabel>
          <Input
            value={state.label}
            onChange={handleInputOnChange}
            name='label'
            fullWidth
            placeholder='Suspendisse elit massa'
          />
        </InputGroup>
        <InputGroup>
          <InputLabel>Photo URL</InputLabel>
          <Input
            value={state.url}
            onChange={handleInputOnChange}
            name='url'
            fullWidth
            placeholder='https://images.unsplash.com/photo-1604399996731-684c59b950ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80'
          />
        </InputGroup>
        <FormActions>
          <Button onClick={handleModalClose} rounded>
            cancal
          </Button>
          <Button rounded variant='primary'>
            submit
          </Button>
        </FormActions>
      </form>
    </Modal>
  );
};

export default AddPhoto;
