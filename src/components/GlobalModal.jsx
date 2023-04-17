import React,{useState} from 'react'
import { Button, Modal } from 'react-bootstrap';

const GlobalModal = (props) => {
    const {customOpen,children,handleModalClose} = props
    const [open, setOpen] = useState(customOpen);

    const handleClose = () => {
      setOpen(false)
      handleModalClose()

    };
    const handleShow = () => setOpen(true);
  return (
    <div>

      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>

    </div>
  )
}

export default GlobalModal