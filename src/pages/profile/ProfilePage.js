import React from "react";
import Location from "../../components/location/Location";
import Nav from "../../components/nav/Nav";
import { navPagesProfileArr } from "../../utils/navigationPage";
import Modal from "../../components/modal/Modal";
import AuthForm from "../../components/authForm/AuthFrom";

import iconChange from '../../images/change.svg';
import deleteButton from '../../images/close-little.svg'; 

const ProfilePage = () => {
    const location = [ { link: "/", text: 'Главная ' }, { link: "/profile", text: '/ Профиль ' }, ];
    const inputArr = [
        { name: 'surname', type: 'text', value: 'Виноградова' },
        { name: 'name', type: 'text', value: 'Валерия' },
        { name: 'email', type: 'email', value: 'Email' },
        { name: 'phone', type: 'phone', value: '' },
        { name: 'password', type: 'password', value: 'Пароль' }
    ];
    const formObject = {
        title: 'Адрес доставки',
        inputArr: [
            { name: 'surname', type: 'text', placeholder: 'Фамилия' },
            { name: 'email', type: 'email', placeholder: 'Email' },
            { name: 'phone', type: 'phone', placeholder: 'Телефон' },
            { name: 'city', type: 'text', placeholder: 'Город' },
            { name: 'adress', type: 'text', placeholder: 'Адрес доставки' },
        ],
        button: 'Добавить адрес',
        linksArr: [],
    };
    const [ showModal, setShowModal ] = React.useState(false);
    const onClickClose = () => setShowModal(!showModal);

    return (
        <main className="page padding_limit_width">
            <Location path={location} />
            <h2 className="page__title margin_none">Профиль</h2>
            <Nav navArr={navPagesProfileArr} />
            <section className="info-block">
                <form className="form-profile">
                    <div className="form-auth__inputs-block">
                        {inputArr.map((el, index) => (
                            <label key={index} className="form-auth__label">
                                <input type={el.type} name={el.name} value={el.value} className="form-auth__input" />
                            </label>
                        ))}
                    </div>
                    <div className="form-profile__buttons-block">
                        <button type="submit" className="button button_color_yellow button_width_wide margin_none padding_none">Сохранить</button>
                        <button type="reset" className="button button_width_very-wide margin_none padding_none">Отменить изменения</button>
                    </div>
                </form>
                <div className="adress-block" >
                    <div className="adress-block__adresses" >
                        <h3 className="margin_none">Ваши профили</h3>
                        <ul className="margin_none padding_none adress-block__list">
                            <li className="margin_none list-style_none adress">
                                <p className="margin_none">г. Якутск пр-кт Ленина д.36</p>
                                <div>
                                    <img src={iconChange} alt="иконка изменения адреса" />
                                    <img src={deleteButton} alt="иконка удаления адреса" />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <button type="submit" className="button button_color_yellow button_width_very-wide margin_none padding_none">Добавить новый адрес</button>
                </div>
                <h3 className="info-block__title margin_none info-block__title_width_full"> </h3>
            </section>
            <Modal show={showModal} closePopup={onClickClose} type='warning'>
                <AuthForm 
                    title={formObject.title}
                    inputArr={formObject.inputArr}
                    button={formObject.button} 
                    linksArr={formObject.linksArr} 
                />
            </Modal>
        </main>
    )
};

export default ProfilePage;