import React from 'react';
import {Field, reduxForm, reset} from 'redux-form';
import { withFormElement } from '../../../components/common/FormControls/Forms';
import { maxLengthCreator, required, email } from '../../../utilites/validators/validator';
import { login } from '../../../state/actions/settingsActions';
import styleFormError from '../../../components/common/FormControls/Forms.module.css';
import style from './login.module.css';
import { connect } from 'react-redux';
import Button from '../../../components/button/button';

const inputMaxLength = maxLengthCreator(30)
const textAreaMaxLength = maxLengthCreator(1000)

const Input = withFormElement("input");
const TextArea = withFormElement("textarea");

const ContactForm = (props) => {
    
    // const arreyName = ['firstName', 'lastName' , 'email', 'message'];
    const { handleSubmit } = props;
    const { texts } = props.props;
    
    return (
            <form onSubmit = {handleSubmit} className={style.form_wrap} autoComplete="off">

                {/* {props.props.props.map((k, i) => (
                    <div key={`form-${i}`}> */}
                        <label className={style.form_wrap_label}/>
{/* 							
							<Field

                                type = "text"
                                placeholder = {k}
                                name = {k} //отредактировать.Затестить
                                component = {Input}
                                validate = {[maxLength]}
                            /> */}

                <div>
                    <Field
                        className = {style.input}
                        type = "text"
                        placeholder = {texts[0]}
                        name = "firstName"
                        component = {Input}
                        validate = {[required, inputMaxLength]}
                    />
                </div>
                <div>
                    <Field
                        className = {style.input}
                        type = "text"
                        placeholder = {texts[1]}
                        name = "lastName"
                        component = {Input}
                        validate = {[required, inputMaxLength]}
                    />
                </div>
                <div >
                    <Field
                        className = {style.input}
                        type = "text"
                        placeholder = {texts[2]}
                        name = "email"
                        component = {Input}
                        validate = {[email, inputMaxLength]}
                    />
                </div>
                <div >
                    <Field
                        className = {style.input}
                        type = "text"
                        placeholder = {texts[3]}
                        name = "message"
                        component = {TextArea}
                        validate = {[required, textAreaMaxLength]}
                    />
                </div>

                <div className = {style.buttonForm}>
                    <Button text={texts[4]}/>
                </div>

                    {props.error

                        && <div className = {styleFormError.summuryError} >
                            {props.error}
                        </div> }
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(ContactForm)


const Login = (props) => {
    
    const onSubmit = (formData) => {
        props.login(formData.firstName, formData.lastName , formData.email, formData.message).then( () => {
            reset()
        })
    }
    
    return(   
        <div className = {style.loginForm}>
            <LoginReduxForm
                onSubmit = {onSubmit}
                props = {props}
                text = {props.text}
            />
        </div>
    )
}

export default connect(null, {login})(Login);
