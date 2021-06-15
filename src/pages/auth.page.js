import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import LoginAuthComponent from '../components/auth/login.auth.component';
import SignupAuthComponent from '../components/auth/signup.auth.component';


const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <Container col-xs="12" col-md="10" col-lg="6">
                {isLogin
                    ? <LoginAuthComponent />
                    : <SignupAuthComponent />
                }
            <Row>
                <p>
                    { isLogin
                        ? "If you're still not registered you can "
                        : "If you're already signed up,please "
                    }
                    <button
                        className="btn btn-link"
                        onClick={(ev) => { ev.preventDefault(); setIsLogin(!isLogin); }}
                    >{ isLogin ? "signup" : "login"}
                    </button>
                </p>
            </Row>

        </Container>
    )
}

export default AuthPage;
