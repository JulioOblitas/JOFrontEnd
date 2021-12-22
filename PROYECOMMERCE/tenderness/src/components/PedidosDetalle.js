
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

export default function PedidosDetalle() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [cargo, setCargo] = useState({
        Cargo: "cargo ejemplo"
      });
    return (
        <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="mb-3">
              <label class="form-label">Email address</label>
              <input
                type="text"
                class="form-control"
                value={cargo.Cargo}
                onChange={(e) => {
                  setCargo(e.target.value);
                }}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
 
    </>
  );
}
   
