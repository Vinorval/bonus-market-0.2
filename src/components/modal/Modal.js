import React from 'react';
import Close from '../../images/close.svg';

const Modal = ({ show, closePopup, children }) => {
    //закрытие модала на esc
    React.useEffect(() => {
        const close = (e) => { if(e.key === 'Escape') closePopup()};
        document.addEventListener('keydown', close);

        return () => document.removeEventListener('keydown', close);
    });

    return (
        <section className={ show ? 'popup' : 'invisible'} onClick={e => (e.currentTarget === e.target) && closePopup()} >
            <div className='popup__wrap' >
                <button className='popup__buttonClose' onClick={closePopup} >
                    <img src={Close} className='popup__ikonClose' alt='Иконка закрытия попапа'/>
                </button>
                {children}
            </div>
        </section>
    )
}

export default Modal;