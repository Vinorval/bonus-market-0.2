<Modal show={showModal} closePopup={onClick} type='promo'>
    <h3 className="margin_none">У вас есть промокод на 10%</h3>
    <p className="margin_none">Используйте промокод ЗАКАЗ10 и получите скидку в 10%</p>
    <button className="button margin_none padding_none button_color_yellow button_width_narrow" >Применить</button>
</Modal>

<Modal show={showModal} closePopup={onClick} type='call-back'>
    <AuthForm 
        title='Заказать звонок'
        inputArr={[{ name: 'name', type: 'text', placeholder: 'Ваше имя' }, { name: 'phone', type: 'phone', placeholder: 'Номер телефона' }]} 
        button='Отправить' 
        linksArr={[]} 
    />
</Modal>