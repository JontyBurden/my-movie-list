import {BiAddToQueue} from 'react-icons/bi'

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '200px',
    zIndex: 1000
  }
  
  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  }

const Modal = ({ open, children, onClose, title }) => {
    
    if(!open) return null

    return (
        <>
        <div style={OVERLAY_STYLES}></div>
        <div className="modal" style={MODAL_STYLES}>
            <h2>test</h2>
            <button onClick={onClose} >Close</button> 
            {children}       
        </div>
        </>
    );
}
 
export default Modal;