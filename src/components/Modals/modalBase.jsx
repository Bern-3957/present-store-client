import React, {useEffect, useState} from "react";
import ModalAuth from "./modalAuth";
import s from "./modalBase.module.css"
import ReactDOM from "react-dom";


const ModalBase = (props) => {
    console.log('Render isModalActive:', props.isModalActive);
    const modalRoot = document.getElementById('modal-root');
    const [a, setA] = useState(false)

    const handleOutsideClick = (event) => {
        if (
            event.target.classList.contains(s.modalBase) &&
            !event.target.closest(`.${s.modalBaseInner}`)
        ) {
            props.closeModal();
            setA(!a)
        }
    };

    useEffect(() => {
        const body = document.body;
        console.log(props.isModalActive)

        if (props.isModalActive ) {
            body.classList.add('no-scroll');
        } else {
            body.classList.remove('no-scroll');
        }


        // Добавить обработчик при монтировании компонента
        document.addEventListener('click', handleOutsideClick);

        // Удалить обработчик при размонтировании компонента
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [props.isModalActive, a]);

    // const handleOutsideClick = (event) => {
    //     debugger;
    //     if (
    //         event.target.classList.contains(s.modalBase) &&
    //         !event.target.closest(`.${s.modalBaseInner}`)
    //     ) {
    //         props.closeModal();
    //     }
    // };

    // useEffect(() => {
    //     console.log('useEffect is called. isModalActive:', props.isModalActive);
    //
    //     const body = document.body;
    //
    //     if (props.isModalActive === false) {
    //         // Восстановить прокрутку
    //         body.style.overflow = 'auto';
    //     } else if (props.isModalActive === true) {
    //         // Заблокировать прокрутку
    //         body.style.overflow = 'hidden';
    //     }
    //
    //     // Добавить обработчик при монтировании компонента
    //     document.addEventListener('click', handleOutsideClick);
    //
    //     // Удалить обработчик при размонтировании компонента
    //     return () => {
    //         console.log('useEffect cleanup.');
    //         document.removeEventListener('click', handleOutsideClick);
    //     };
    // }, [props.isModalActive]);


    return ReactDOM.createPortal( <div className={s.modalBase} onClick={handleOutsideClick}>
        <div className={s.modalBaseInner} >
            <ModalAuth/>
        </div>
    </div>, modalRoot)
}


export default ModalBase;