import { useState } from 'react'
import Modal from './Modal'

const ModalExample = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        escapeClose
        clickClose
        showCloseButton
        closeText="×"
      >
        <h2>Hello from Modal</h2>
        <p>This is a custom React modal replacing jQuery Modal!</p>
      </Modal>
    </>
  )
}

export default ModalExample