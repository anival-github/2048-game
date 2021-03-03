/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

const withFullScreen = (Component) => {
  const FullScreenComponent = (props) => {
    const fullScreenHandle = useFullScreenHandle();

    return (
      <FullScreen handle={fullScreenHandle}>
        <Component {...props} />
      </FullScreen>
    );
  };

  return FullScreenComponent;
};

export default withFullScreen;
