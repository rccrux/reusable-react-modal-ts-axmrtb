import React, { Component, FunctionComponent, useState } from "react";
import { render } from "react-dom";
import { Modal } from './modal/modal'
import { ConfirmationModal } from './confirmation-modal/confirmation-modal'
import { useModal } from './useModal';
import { Text } from './text'


const App: FunctionComponent = () => {
  const { isShown, toggle } = useModal();
  
  const onConfirm = () => toggle();
  const onCancel = () => toggle();

  return (
    <React.Fragment>
      <button onClick={toggle}>Open modal</button>
      <Text />
      <Text />
      <Modal
          isShown={isShown}
          hide={toggle}
          headerText='Confirmation'
          modalContent={
            <ConfirmationModal 
              onConfirm={onConfirm} 
              onCancel={onCancel}
              message='Are you sure you want to delete element?'
            />
          }
        />
    </React.Fragment>

  );
};

render(<App />, document.getElementById("root"));
