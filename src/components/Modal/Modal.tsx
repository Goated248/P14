import { useEffect } from 'react'
import './Modal.css'
import type { ModalProps } from './types'



const Modal = ({
    isOpen,
    onClose,
    children,
    escapeClose = true,
    clickClose = true,
    showCloseButton = true,
    closeText = "×",
    fadeDuration = 300,
    zIndex = 1000,
    overlayClassName = '',
    modalClassName = '',
  }: ModalProps) => {
    useEffect(() => {
      if (!isOpen || !escapeClose) return
  
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose()
      }
  
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, escapeClose, onClose])
  
    if (!isOpen) return null
  
    return (
      <div
        className={`modal-overlay ${overlayClassName}`}
        style={{ zIndex }}
        onClick={() => clickClose && onClose()}
      >
        <div
          className={`modal-content ${modalClassName}`}
          style={{ animationDuration: `${fadeDuration}ms` }}
          onClick={(e) => e.stopPropagation()}
        >
          {showCloseButton && (
            <button className="modal-close" onClick={onClose}>
              {closeText}
            </button>
          )}
          {children}
        </div>
      </div>
    )
  }
  
  export default Modal