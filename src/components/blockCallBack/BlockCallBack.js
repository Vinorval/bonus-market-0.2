import Modal from "../modal/Modal";
import AuthForm from "../authForm/AuthFrom";
import React from "react";

const BlockCallBack = ({ position }) => {
    const [ showModal, setShowModal ] = React.useState(false);
    const onClick = () => setShowModal(!showModal);
    return (
        <div className={`block-call-back ${position === 'footer' && "block-call-back_position_footer"}`} >
            <p className="block-call-back__number margin_none" >924-565-9456</p>
            <button onClick={() => onClick()} className={`block-call-back__button margin_none padding_none background_none ${position === 'footer' && "block-call-back__button_position_footer"}`} >Заказать обратный звонок</button>
            <Modal show={showModal} closePopup={onClick} type='call-back'>
                <AuthForm 
                    title='Заказать звонок'
                    inputArr={[{ name: 'name', type: 'text', placeholder: 'Ваше имя' }, { name: 'phone', type: 'phone', placeholder: 'Номер телефона' }]}
                    button='Отправить' 
                    linksArr={[]} 
                />
        </Modal>
        </div>
    )
};

export default BlockCallBack;