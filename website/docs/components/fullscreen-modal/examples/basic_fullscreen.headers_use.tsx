import React from 'react';
import FullscreenModal from '@semcore/ui/fullscreen-modal';
import Button from '@semcore/ui/button';

const Demo = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <Button onClick={() => setVisible(true)}>Open fullscreen window</Button>
      <FullscreenModal visible={visible} onClose={() => setVisible(false)}>
        <FullscreenModal.Close />
        <FullscreenModal.Back>Go to Tool Name</FullscreenModal.Back>
        <FullscreenModal.Header title='Modal Window Title' description='Additional information' />
        <FullscreenModal.Footer />
      </FullscreenModal>
    </>
  );
};

export default Demo;
