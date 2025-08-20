import React from 'react';
import Close from '../../images/close.svg';

const Modal = ({ show, closePopup, children, type }) => {
    //закрытие модала на esc
    React.useEffect(() => {
        const close = (e) => { if(e.key === 'Escape') closePopup()};
        document.addEventListener('keydown', close);
        return () => document.removeEventListener('keydown', close);
    });

    return (
        <section className={ show ? `popup popup_show_active popup_type_${type}` : `popup popup_type_${type}`} onClick={e => (e.currentTarget === e.target) && closePopup()} >
            <div className={`popup__wrap popup__wrap_type_${type}`} >
                <button className='popup__button-close' onClick={closePopup} >
                    <img src={Close} className='popup__ikon-close' alt='Иконка закрытия попапа'/>
                </button>
                <div className='popup__children'>{children}</div>
            </div>
        </section>
    )
}

export default Modal;