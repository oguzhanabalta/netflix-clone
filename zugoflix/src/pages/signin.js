import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import {FirebaseContext} from '../context/firebase'
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signin() {
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInValid = password === '' || emailAddress === '';
    const handleSignin = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(()=>{
                // push to the browse page
                history.push(ROUTES.BROWSE);

            })
            .catch((error)=>{
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            })
    }


    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Oturum Aç</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input
                            placeholder="Email adresi"
                            value={emailAddress}
                            onChange={({target}) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            placeholder="Şifre"
                            type="password"
                            autoComplete="off"
                            value={password}
                            onChange={({target}) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInValid} type="submit">
                            Oturum Aç
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        Netflix'e katılmak ister misiniz? <Form.Link to="/signup">Şimdi kaydolun.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                    Bu sayfa robot olmadığınızı kanıtlamak için Google reCAPTCHA tarafından korunuyor. Daha fazlasını öğrenin.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>

    )
}