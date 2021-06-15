import React from 'react';
import isEmail from 'validator/lib/isEmail';
import { useState } from 'react';
import isLength from 'validator/lib/isLength';
import { Button, Form, Row, Col } from 'react-bootstrap';

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
const SignupAuthComponent = () => {
    const [formState, setFormState] = useState(formInitialState);
    const { email, password } = formState;


    const handleInputChange = (ev) => {
        ev.preventDefault()
        const { name, value } = ev.target;

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



    return (
        <div>
            <h1 className="text-center">Sign Up</h1>
            <Form >
                <Row>
                    <Col>
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstname"
                            placeholder="First name"
                            onChange={handleInputChange}
                            required 
                            />
                    </Col>
                    <Col>
                        <Form.Label>Last name</Form.Label>

                        <Form.Control
                            type="text"
                            name="lastname"
                            placeholder="Last name" 
                            onChange={handleInputChange}
                            required/>

                    </Col>
                </Row>


                <Form.Group className="my-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={email.value}
                        isInvalid={!email.isValid && email.message.length > 0}
                        isValid={email.isValid}
                        placeholder="Enter your email"
                        onChange={handleInputChange} />
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
                       onChange={handleInputChange}
                    />
                </Form.Group>


                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check
                        type="checkbox"
                        id="autoSizingCheck"
                        className="mb-2"
                        label="Remember me"
                    />
                </Form.Group>

                <Button block className="mt-3" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default SignupAuthComponent;
