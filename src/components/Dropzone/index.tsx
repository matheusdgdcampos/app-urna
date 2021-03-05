import React, { useState, useCallback } from 'react';

import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

import { Container } from './styles';

interface DropzoneProps {
  fileUpload(file: File): void;
}

const Dropzone: React.FC<DropzoneProps> = ({ fileUpload }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      const fileURL = URL.createObjectURL(file);
      setSelectedFileUrl(fileURL);
      fileUpload(file);
    },
    [fileUpload],
  );

  const { getInputProps, getRootProps } = useDropzone({
    accept: ['*.jpg', '*.png'],
    onDrop,
  });

  return (
    <Container {...getRootProps()}>
      <input {...getInputProps()} />

      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Avatar" />
      ) : (
        <p>
          <FiUpload />
          Arraste ou clique para adicionar imagem do estabelecimento.
        </p>
      )}
    </Container>
  );
};

export default Dropzone;
