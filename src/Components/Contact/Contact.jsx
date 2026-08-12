import React from 'react'
import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY ?? "b33a7dad-a5b7-4053-8284-e0f3ce0d0e36";

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Отправка...");
        const formData = new FormData(event.target);

        formData.append("access_key", WEB3FORMS_ACCESS_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Сообщение успешно отправлено");
                event.target.reset();
            } else {
                console.error("Web3Forms error", data);
                setResult(data.message || "Не удалось отправить сообщение");
            }
        } catch (error) {
            console.error("Web3Forms error", error);
            setResult("Ошибка сети. Попробуй ещё раз позже.");
        }
    };

    return (
        <div className="contact">
            <div className="contact-col">
                <h3>Отправь сообщение <img src={msg_icon} alt=""/></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequatur eos harum maxime
                    officia. Architecto dolores eum impedit, magni maiores maxime quasi reiciendis soluta! Consequatur
                    cum facilis non odio sunt!</p>
                <ul>
                    <li><img src={mail_icon} alt=""/>Contact@kuana.dev</li>
                    <li><img src={phone_icon} alt=""/>+7 (747) 682 74 26</li>
                    <li><img src={location_icon} alt=""/>Астана, Казахстан</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Имя</label>
                    <input type="text" name="name" placeholder="Введи свое Имя" required/>
                    <label>Номер телефона</label>
                    <input type="tel" name="phone" placeholder="Введи номер телефона" required/>
                    <label>Твое сообщение</label>
                    <textarea name="message" rows="6" placeholder="Введи сообщение" required></textarea>
                    <button type="submit" className="btn dark-btn">Отправить <img src={white_arrow} alt=""/></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}
export default Contact
