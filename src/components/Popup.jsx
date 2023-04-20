import React, { useState, forwardRef, useImperativeHandle } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const Popup = forwardRef((props, ref) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useImperativeHandle(ref, () => ({
    handleShow,
  }))

  return (
    <div>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className='header-modal'>
            <span>{props.name}</span>
            <Modal.Title>{props.title}</Modal.Title>
          </div>
        </Modal.Header>
        <div className="tags">
          {props.tags.map((tag, index) => {
            return (
              <span key={index}>
                <h7 className="tag">{tag}</h7>
              </span>
            )
          })}
        </div>
        <Modal.Body>{props.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Choose
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
})

export default Popup
