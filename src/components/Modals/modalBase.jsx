import React, {useEffect} from "react";
import ModalAuth from "./Auth/modalAuth";
import s from "./modalBase.module.css"
import ReactDOM from "react-dom";
import ModalReg from "./Reg/modalReg";
import ModalPassRestore from "./ModalPassRestore/modalPassRestore";


const ModalBase = (props) => {
    const modalRoot = document.getElementById('modal-root');

    const handleOutsideClick = (event) => {
        if (
            event.target.classList.contains(s.modalBase) && !event.target.closest(`.${s.modalBaseInner}`)
        ) {props.closeModal();}
    };

    useEffect(() => {
        document.body.classList.add('no-scroll');
        document.addEventListener("click", handleOutsideClick);
        return ()=>{
            document.body.classList.remove('no-scroll');
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [props.isModalActive]);

    return ReactDOM.createPortal( <div className={s.modalBase} onClick={handleOutsideClick}>
        <div className={s.modalBaseInner} >
            {props.currentModalID==='auth-modal'? <ModalAuth openModal={props.openModal} isModalActive={props.isModalActive} closeModal={props.closeModal}/>
                : props.currentModalID==='reg-modal' ? <ModalReg isModalActive={props.isModalActive} openModal={props.openModal} closeModal={props.closeModal} />
                : <ModalPassRestore isModalActive={props.isModalActive} openModal={props.openModal} closeModal={props.closeModal} />
            }
        </div>
    </div>, modalRoot)

}


export default ModalBase;

