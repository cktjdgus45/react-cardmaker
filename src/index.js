import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import CardRepository from './service/card_repository';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input.jsx/image_file_input';

const authService = new AuthService();
const imageUploader = new ImageUploader();
const cardRepository = new CardRepository();
const FileInput = props => (<ImageFileInput {...props} imageUploader={imageUploader}></ImageFileInput>)

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} CardRepository={cardRepository} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById('root')
);

