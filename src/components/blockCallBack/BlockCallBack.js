const BlockCallBack = ({ position }) => {
    return (
        <div className={`block-call-back ${position === 'footer' && "block-call-back_position_footer"}`} >
            <p className="block-call-back__number margin_none" >924-565-9456</p>
            <button className={`block-call-back__button margin_none padding_none background_none ${position === 'footer' && "block-call-back__button_position_footer"}`} >Заказать обратный звонок</button>
        </div>
    )
};

export default BlockCallBack;