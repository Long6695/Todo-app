import {Modal, Box} from '@mui/material';
import React from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 400,
    width: '100%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

const CustomModal = ({open, onClose, children}: Props) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
       {children}
      </Box>
    </Modal>
  );
};

export default CustomModal;
