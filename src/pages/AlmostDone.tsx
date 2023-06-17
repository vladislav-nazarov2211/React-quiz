import React, { useRef, useState } from 'react';
import images from './../img/icons/clapping.svg'
import { useNav } from '../hook/useNav';
//@ts-ignore
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';
import { useSelector } from 'react-redux';
import { RootState } from '../redux-toolkit/store/store';

export const AlmostDone = () => {

    const {path, cardNext, cardPrev} = useNav()
    const [showMode, setShowMode] = useState<boolean>(false)
    const [captchaVal, setCaptchaVal] = useState<string>('')
    const navigate = useNavigate()
    const {register, formState: {errors, isValid}, handleSubmit} = useForm({mode: 'onBlur'})
    const [emailVal, setEmailVal] = useState<string>('')
    const form = useRef()
    const state = useSelector((state: RootState) => state.questions)

    const onSubmit = () => {
        setShowMode(true)
        if (captchaVal != '') {
            //@ts-ignore
            emailjs.send('service_kc39ifp', 'template_vl5aa0a', {user_name: '', user_email: emailVal, message: {score: state.totalScore, total: state.totalCards}}, 'IQs1y7jpaociV_Jcp')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            navigate('/final')
        }
    }

    function onChange(value: any) {
        if (value != '') {
            setCaptchaVal(value)
        }
    }

    return (
        <div className="plate">
            <div className="cover-content-wrapper">
                <form
                //@ts-ignore
                ref={form} className="cover-content" onSubmit={handleSubmit(onSubmit)}>

                    <img className="title-img" width="70" src={images} alt="Отлично! Последний шаг!" />
                    <div className="title">Отлично! Последний шаг!</div>

                    <div className="form-group">
                        <label className="label" htmlFor="email">Введите Email:</label>
                        <input 
                            {...register('email', {required: true, pattern: /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i, maxLength: 40})}
                            className="input-email" 
                            type="text" id="email" 
                            placeholder="Ваш Email" 
                            name="email"
                            onChange={(e) => {setEmailVal(e.target.value)}}
                            value={emailVal}
                        />
                        {errors.email && errors.email.type === "required" && (
                            <div className='emailError'>Введите Ваш Email!</div>
                        )}
                        {errors.email && errors.email.type === "pattern" && (
                            <div className='emailError'>Не корректный Email!</div>
                        )}
                        {errors.email && errors.email.type === "maxLength" && (
                            <div className='emailError'>Не более 40-ти символов!</div>
                        )}
                    </div>
                    {showMode &&
                        <ReCAPTCHA
                            sitekey="6Ld1F_QlAAAAAKESHB5bckBs8iT1iUWq0NUKv9FG"
                            onChange={onChange}
                        />
                    }
                    
                                        
                    <button type="submit" className="button button--huge">Получить результаты</button>

                    <label className="checkbox">
                        <input 
                            {...register('checkbox', {required: true})}
                            type="checkbox" 
                            className="checkbox__real" 
                            name="checkbox"
                        />
                        <div className="checkbox__fake"></div>
                        <div className="checkbox__text">С политикой конфеденциальности ознакомлен</div>
                        {errors.checkbox && errors.checkbox.type === "required" && (
                            <div className='checkedError'>Для продолжения необходимо согласиться с условиями!</div>
                        )}
                    </label>

                </form>
            </div>
	    </div>
    )
}