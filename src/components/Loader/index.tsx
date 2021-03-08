import React, { memo } from 'react';

import ScaleLoader from 'react-spinners/ScaleLoader';

import { Container } from './styles';

interface LoaderProps {
  isLoading: boolean;
  color?: string;
  size?: number;
}

const Loader: React.FC<LoaderProps> = ({
  isLoading,
  color = '#F7941E',
  size = 50,
}) => {
  return (
    <ScaleLoader color={color} loading={isLoading} height={size} width={size} />
  );
};

export default memo(Loader);
