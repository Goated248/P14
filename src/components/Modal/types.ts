export interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    escapeClose?: boolean
    clickClose?: boolean
    showCloseButton?: boolean
    closeText?: string
    fadeDuration?: number
    zIndex?: number
    overlayClassName?: string
    modalClassName?: string
  }
  