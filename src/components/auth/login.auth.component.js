import React from 'react';
import { useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import axios from "axios";
import isLength from 'validator/lib/isLength';
import { Button, Form, Alert } from 'react-bootstrap';
import { MOCK_URL } from '../../pages/constants';


const formInitialState = {
    email: {
        value: "",
        isValid: false,
        message: ""
    },
    password: {
        value: "",
        isValid: false,
        message: ""
    }
};

const LoginAuthComponent = () => {
    const [formState, setFormState] = useState(formInitialState);
    const [isLoading, setisLoading] = useState(false);
    const [alert, setAlert] = useState({ type: "danger", message: "" })
    const { email, password } = formState;

    const handleInputChange = (ev) => {
        ev.preventDefault()
        const { name, value } = ev.target;
        setAlert({ ...alert, message: "" })

        if (name === "email") {
            if (!isEmail(value)) {
                setFormState({
                    ...formState,
                    email: {
                        isValid: false,
                        message: "You're email is incorrect!!!",
                        value: value
                    }
                })
                return;
            }
        } else {
            if (!isLength(value, { min: 5 })) {
                setFormState({
                    ...formState,
                    password: {
                        isValid: false,
                        message: "Your're email is incorrect,it should be at least 5 characters",
                        value: value
                    }
                })
                return;
            }
        }

        setFormState({
            ...formState,
            [name]: {
                isValid: true,
                message: "",
                value: value
            }
        })
    }

    const handleLoginFormSubmission = (ev) => {
        ev.preventDefault()
        if (!email.isValid || !password.isValid) {
            setAlert({
                type: "danger",
                message: "Your email or password is incorrect"
            });
            return;
        }
        setisLoading=(true);
        const request = axios.post(MOCK_URL + "/login-react", { email: email, password: password });
        request.then((res) => {
            setisLoading=(true);
            const { data } = res;
            if (data) {
                const { errors, user } = data
                if (typeof errors !== "undefined" && typeof user !== "undefined") {
                    if (errors.length > 0) {
                        setAlert({
                            type: "danger",
                            message: errors.map((e) => { return e.message + ";" ;})
                        });
                        return;
                    }
                    const { name, age } = user;
                    setAlert({
                        types: "success",
                        message: "Welcome ${name} emi, your age is ${age}"
                    })
                }
            }
        });
        request.catch((err) => {
            setisLoading=(true);
            console.log("Err>", err)
        });


    }
    return (<div>
            {alert.message.length > 0
                && (<Alert variant={alert.type} dismissible onClose={() => {
                    setAlert({
                        ...alert, message: ""
                    })
                }} >
                    {alert.message}
                </Alert>)}
            <h1 className="text-center">Login</h1>
            <Form onSubmit={handleLoginFormSubmission}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={email.value}
                        isValid={email.isValid}
                        isInvalid={!email.isValid && email.message.length > 0}
                        onChange={handleInputChange}
                        placeholder="Enter email" />
                    <Form.Text className='text-muted'>
                        We'll never share your email with anyone else.
                    </Form.Text>
                    <Form.Control.Feedback type="valid">
                        All Ok!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        {email.message}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        type="password"
                        value={password.value}
                        isValid={password.isValid}
                        isInvalid={!password.isValid && password.message.length > 0}
                        placeholder="Password"
                        onChange={handleInputChange} />
                    <Form.Control.Feedback type="invalid">
                        {password.massage}
                    </Form.Control.Feedback>
                    <Button block className="mt-3" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default LoginAuthComponent;
