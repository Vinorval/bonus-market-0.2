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

<Modal show={showModal} closePopup={onClick} type='success-pay'>
    <h3 className="margin_none">Заказ сделан!</h3>
    <p className="margin_none">Наш оператор вскоре свяжется с вами для уточнения времени доставки</p>
</Modal>

<Modal show={showModal} closePopup={onClick} type='pay-one-click'>
    <AuthForm 
        title='Купить в один клик'
        inputArr={[{ name: 'name', type: 'text', placeholder: 'Ваше имя' }, { name: 'phone', type: 'phone', placeholder: 'Номер телефона' }]} 
        button='Отправить' 
        linksArr={[]} 
    />
</Modal>

<Modal show={showModal} closePopup={onClick} type='likes'>
                    <h3 className="margin_none">Избранное</h3>
                    <ul className="margin_none padding_none likes-list">
                    <li className="margin_none list-style_none like-item">
                        <img className="like-item__img" src={product} alt="product" />
                        <div className="like-item__info">
                            <h3 className="like-item__title margin_none">Драже "Сладкие часики" в блочке 30шт 1/600 (13 гр) БЛОК</h3>
                            <p className="margin_none">Цена за штуку<br />15.20 руб.</p>
                            <button className="button like-item__basket button_color_yellow button_width_narrow margin_none padding_none">В корзину</button>
                        </div>
                         <button className="button background_none like-item__button" ><img src={close} alt="button-close" /></button>
                    </li>
                    <li className="margin_none list-style_none like-item">
                        <img className="like-item__img" src={product} alt="product" />
                        <div className="like-item__info">
                            <h3 className="like-item__title margin_none">Драже "Сладкие часики" в блочке 30шт 1/600 (13 гр) БЛОК</h3>
                            <p className="margin_none">Цена за штуку<br />15.20 руб.</p>
                            <button className="button like-item__basket button_color_yellow button_width_narrow margin_none padding_none">В корзину</button>
                        </div>
                         <button className="button background_none like-item__button" ><img src={close} alt="button-close" /></button>
                    </li>
                </ul>
                </Modal>


                <Modal show={showModal} closePopup={onClick} type='order'>
                    <div className="order-popup">
                    <h3 className="margin_none">Выполнен</h3>
                    <div className="order-popup__date">
                        <p className="margin_none">Создан 2.10 в 13:44</p>
                        <p className="margin_none">Заказ № 1057488</p>
                    </div>
                    <h3 className="margin_none">7 товаров на сумму: 4473 ₽</h3>
                    <ul className="margin_none padding_none likes-list">
                    <li className="margin_none list-style_none like-item like-item_type_popup">
                        <img className="like-item__img" src={product} alt="product" />
                        <div className="like-item__info like-item__info_type_popup">
                            <h3 className="margin_none">Драже "Сладкие часики" в блочке 30шт 1/600 (13 гр) БЛОК</h3>
                            <p className="margin_none">1 шт</p>
                        </div>
                        <h3 className="margin_none">15.20 руб.</h3>
                    </li>
                    <li className="margin_none list-style_none like-item like-item_type_popup">
                        <img className="like-item__img" src={product} alt="product" />
                        <div className="like-item__info like-item__info_type_popup">
                            <h3 className="margin_none">Драже "Сладкие часики" в блочке 30шт 1/600 (13 гр) БЛОК</h3>
                            <p className="margin_none">1 шт</p>
                        </div>
                        <p className="margin_none">15.20 руб.</p>
                    </li>
                </ul>
                <div className="order-popup__date">
                        <h3 className="margin_none">Оплата</h3>
                        <p className="margin_none">Картой курьеру</p>
                    </div>
                    <div className="order-popup__date">
                        <h3 className="margin_none">Адрес доставки</h3>
                        <p className="margin_none">г. Якутск пр-кт Ленина д.36</p>
                    </div>
                    </div>
                </Modal>