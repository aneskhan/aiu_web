import {useState} from 'react'
import "./Testimonials.css"
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"

const Testimonials = () => {

    const [tx, setTx] = useState(0);

    const slideForward = () => setTx(prev => (prev > -75 ? prev - 25 : prev));
    const slideBackward = () => setTx(prev => (prev < 0 ? prev + 25 : prev));

    return (
        <div className="testimonials">
            <img src={next_icon} alt="Следующий отзыв" className="next-btn" onClick={slideForward}/>
            <img src={back_icon} alt="Предыдущий отзыв" className="back-btn" onClick={slideBackward}/>
            <div className="slider">
                <ul style={{transform: `translateX(${tx}%)`}}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="Аружан"/>
                                <div>
                                    <h3>Аружан</h3>
                                    <span>Астана, Казахстан</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at consectetur
                                deleniti dignissimos dolor explicabo harum maxime nihil nobis nostrum officiis
                                reiciendis sint, ut vero voluptas! Debitis explicabo placeat ut!</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="Арман"/>
                                <div>
                                    <h3>Арман</h3>
                                    <span>Астана, Казахстан</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at consectetur
                                deleniti dignissimos dolor explicabo harum maxime nihil nobis nostrum officiis
                                reiciendis sint, ut vero voluptas! Debitis explicabo placeat ut!</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="Малика"/>
                                <div>
                                    <h3>Малика</h3>
                                    <span>Семей, Казахстан</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at consectetur
                                deleniti dignissimos dolor explicabo harum maxime nihil nobis nostrum officiis
                                reiciendis sint, ut vero voluptas! Debitis explicabo placeat ut!</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="Даулет"/>
                                <div>
                                    <h3>Даулет</h3>
                                    <span>Павлодар, Казахстан</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at consectetur
                                deleniti dignissimos dolor explicabo harum maxime nihil nobis nostrum officiis
                                reiciendis sint, ut vero voluptas! Debitis explicabo placeat ut!</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Testimonials
