import './Modal.scss';

import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="modal_overlay">
            <div onClick={(e) => e.stopPropagation()} className="modal_outer">
                Modal Content
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;