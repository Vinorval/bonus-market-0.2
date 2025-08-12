import React from "react";
import Location from "../../components/location/Location";
import Nav from "../../components/nav/Nav";
import { navPagesCompanyArr } from "../../utils/navigationPage";

import time from "../../images/contacts/time.svg";
import metka from "../../images/contacts/place-point.svg";
import phone from "../../images/contacts/smartphone.svg";
import email from "../../images/contacts/email.svg";

const ContactsPage = () => {
    const location = [ { link: "/", text: 'Главная ' }, { link: "/company", text: '/ О компании ' }, { link: "/contacts", text: '/ Контакты ' }, ];
    const [isOpen, setIsOpen] = React.useState(false);
    const onClickButton = () => setIsOpen(!isOpen);

    return (
        <main className="page padding_limit_width">
            <Location path={location} />
            <h2 className="page__title margin_none">Контакты</h2>
            <Nav navArr={navPagesCompanyArr} />
            <section className="info-block">
            {!isOpen ? 
               <div className="contacts contacts_position_page" >
                    <h3 className="info-block__title margin_none">Свяжитесь с нами</h3>
                    <p className="margin_none contacts__text">Мы всегда на связи с нашими клиентами. Если у вас остальсь вопросы или есть предложения, то мы будем рады ответить на них.</p>
                    <button type="button" onClick={onClickButton} className="contacts__button button_color_yellow button_width_narrow margin_none padding_none">Написать</button>
               </div>
            : 
               <div className="contacts contacts_position_page" >
                    <from className="contacts__from" >
                        <input placeholder="Ваше имя" name="name" className="contacts__input"/>
                        <textarea placeholder="Текст сообщения" readonly name="massenge" className="contacts__input contacts__input_type_textarea"/>
                        <input placeholder="Email" name="email" className="contacts__input"/>
                        <button type="button" onClick={onClickButton} className="contacts__button button_color_yellow button_width_narrow margin_none padding_none">Отправить</button>
                    </from>
                </div>
            }
                <div className="info-block__basic">
                    <div className="info-block__contact">
                        <img src={time} />
                        <div>
                            <h3 className="margin_none">Режим работы:</h3>
                            <p className="margin_none">Пн.-Пт. с 9:00 до 18:00</p>
                        </div>
                    </div>
                    <div className="info-block__contact">
                        <img src={metka} />
                        <div>
                            <h3 className="margin_none">Адрес:</h3>
                            <p className="margin_none">г.Якутск, ул.Авиаторов 19А</p>
                        </div>
                    </div>
                    <div className="info-block__contact">
                        <img src={phone} />
                        <div>
                            <h3 className="margin_none">Телефон:</h3>
                            <p className="margin_none">+7 (999) 060-01-05</p>
                        </div>
                    </div>
                    <div className="info-block__contact">
                        <img src={email} />
                        <div>
                            <h3 className="margin_none">Email:</h3>
                            <p className="margin_none">guli.iva@yandex.ru</p>
                        </div>
                    </div>
                    <h3 className="info-block__title margin_none info-block__title_width_full"> </h3>
                </div>
            </section>
        </main>
    )
};

export default ContactsPage;