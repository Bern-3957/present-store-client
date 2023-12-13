import React, {useEffect} from "react";
import ModalAuth from "./Auth/modalAuth";
import s from "./modalBase.module.css"
import ReactDOM from "react-dom";
import ModalReg from "./Reg/modalReg";
import ModalPassRestore from "./ModalPassRestore/modalPassRestore";
import regImg from "../../assets/images/AuthReg/Rectangle 33.png";
import ix from "../../assets/icons/AuthReg/ix.svg";
import ModalSuccessReg from "./Reg/modalSuccessReg";
import ModalSuccessAuth from "./Auth/modalSuccessAuth";


const ModalBase = (props) => {
    const modalRoot = document.getElementById('modal-root');

    const handleOutsideClick = (event) => {
        if (
            event.target.classList.contains(s.modalBase) && !event.target.closest(`.${s.modalBaseInner}`)
        ) {
            props.closeModal();
        }
    };

    useEffect(() => {
        document.body.classList.add('no-scroll');
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.body.classList.remove('no-scroll');
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [props.isModalActive]);

    return ReactDOM.createPortal(<div className={s.modalBase} onClick={handleOutsideClick}>
        <div className={s.modalBaseInner}>
            <img src={regImg} alt="authImg" className={s.auth_img}/>
            <div className={s.auth_data}>
                <img onClick={props.closeModal} src={ix} alt="ix" className={s.ix}/>
                <div className={s.buttons}>
                    <button onClick={() => {
                        props.openModal('auth-modal')
                    }} className={`${s.log_in_btn} ${props.isModalActive && props.currentModalID === 'auth-modal' && s.isActive}`}>Войти
                    </button>
                    <button onClick={() => {
                        props.openModal('reg-modal')
                    }} className={`${s.log_in_btn} ${props.isModalActive && props.currentModalID === 'reg-modal' && s.isActive}`}>Зарегистрироваться
                    </button>
                </div>
                {props.currentModalID === 'auth-modal' ? <ModalAuth openModal={props.openModal}
                                                                    closeModal={props.closeModal}
                                                                    setUserInfo={props.setUserInfo}
                                                                    setUserToken={props.setUserToken}
                                                                    setIsUserAuth={props.setIsUserAuth}
                    />
                    : props.currentModalID === 'reg-modal' ? <ModalReg openModal={props.openModal}
                                                                       closeModal={props.closeModal}
                                                                       setUserInfo={props.setUserInfo}
                                                                       setUserToken={props.setUserToken}
                                                                       setIsUserAuth={props.setIsUserAuth}/>
                        : props.currentModalID === 'pass-restore-modal' ? <ModalPassRestore/>
                            : props.currentModalID === 'reg-success-modal' ? <ModalSuccessReg closeModal={props.closeModal}/>
                                : props.currentModalID === 'auth-success-modal' ? <ModalSuccessAuth closeModal={props.closeModal}/> : <p></p>
                }
            </div>
        </div>
    </div>, modalRoot)

}


export default ModalBase;


// {props.currentModalID==='auth-modal'? <ModalAuth openModal={props.openModal} isModalActive={props.isModalActive} closeModal={props.closeModal}/>
//     : props.currentModalID==='reg-modal' ? <ModalReg isModalActive={props.isModalActive} openModal={props.openModal} closeModal={props.closeModal} />
//         : <ModalPassRestore isModalActive={props.isModalActive} openModal={props.openModal} closeModal={props.closeModal} />
// }
