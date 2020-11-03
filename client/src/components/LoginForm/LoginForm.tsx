import React, { useState } from 'react';
import axios from 'axios';
import config from '../../constants/config';
import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';
import {
  FormActions,
  InputGroup,
  InputLabel,
  ErrorLabel,
} from './LoginForm.styles';

interface LoginFormProps {
  onClose: () => void;
}

export type IUser = {
  _id: string;
  username: string;
};

interface IResponseData {
  status: string;
  data: IUser;
}

const LoginForm: React.FC<LoginFormProps> = ({ onClose }) => {
  const [state, setState] = useState({
    password: '',
    username: '',
  });
  const [error, setError] = useState('');

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

    try {
      const { data } = await axios.post<IResponseData>(
        `${config.API_URL}user`,
        state
      );

      const user = {
        id: data.data._id,
        username: data.data.username,
      };
      localStorage.setItem('user', JSON.stringify(user));
      onClose();
    } catch (err) {
      setError('Username or password is inccorect!');
    }
  };

  return (
    <Modal width='350px' title='Login'>
      {error && <ErrorLabel>{error}</ErrorLabel>}
      <form onSubmit={onSubmit}>
        <InputGroup>
          <InputLabel>Username</InputLabel>
          <Input
            onChange={handleInputOnChange}
            name='username'
            value={state.username}
            fullWidth
            placeholder='Your username...'
          />
        </InputGroup>
        <InputGroup>
          <InputLabel>Password</InputLabel>
          <Input
            onChange={handleInputOnChange}
            name='password'
            fullWidth
            value={state.password}
            type='password'
            placeholder='Your password...'
          />
        </InputGroup>
        <FormActions>
          <Button variant='primary'>Login</Button>
        </FormActions>
      </form>
    </Modal>
  );
};

export default LoginForm;
