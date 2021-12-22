import React from 'react'
import './Modaldialogo.css'



const  Modal= ({isOpen, closeModal, title, children }) => {

    const handleModalDialogClick = (e)  =>{
        e.stopPropagation();
    }
    return (
        <div className= {`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>

            <div className="modal_dialog" onClick={handleModalDialogClick}>

                <h1> {title} </h1>
            <button  className="botonpublicidad" onClick={closeModal}> X </button>
            </div>
        </div>
    )
}

export default Modal


