import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { withFormElement } from '../../../components/common/FormControls/Forms';
import { maxLengthCreator } from '../../../utilites/validators/validator';
import { login } from '../../../state/actions/settingsActions';
import styleFormError from '../../../components/common/FormControls/Forms.module.css';
import style from './login.module.css';
import { connect } from 'react-redux';
import Button from '../../../components/button/button';

const maxLength = maxLengthCreator(100)

const Input = withFormElement("input");

const ContactForm = (props) => {
    
    // const arreyName = ['firstName', 'lastName' , 'email', 'message'];
    const { handleSubmit } = props
    
    return (
            <form onSubmit = {handleSubmit} className={style.form_wrap} autoComplete="off">

                {props.props.props.map((k, i) => (
                    <div key={`form-${i}`}>
                        <label className={style.form_wrap_label}/>
							{/* <span className = {style.span}>{k}</span> */}
							<Field

                                type = "text"
                                placeholder = {k}
                                name = {k} //отредактировать.Затестить
                                component = {Input}
                                validate = {[maxLength]}
                            />


                    </div>

                    )

                    )}
                    <div className = {style.buttonForm}>
                        <Button text={props.props.text}/>
                    </div>

                {/* <div >
                    <Field
                        className = {style.input}
                        type = "text"
                        placeholder = "Nume"
                        name = "firstName"
                        component = {Input}
                        validate = {[maxLength]}
                    />
                </div>
                <div>
                    <Field
                        className = {style.input}
                        type = "text"
                        placeholder = "Prenume"
                        name = "lastName"
                        component = {Input}
                        validate = {[maxLength]}
                    />
                </div>
                <div >
                    <Field
                        className = {style.input}
                        type = "text"
                        placeholder = "E-mail"
                        name = "email"
                        component = {Input}
                        validate = {[maxLength]}
                    />
                </div>
                <div >
                    <Field
                        className = {style.input}
                        type = "text"
                        placeholder = "Message"
                        name = "message"
                        component = {Input}
                        validate = {[maxLength]}
                    />
                </div> */}
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
        props.login(formData.firstName, formData.lastName , formData.email, formData.message)
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
