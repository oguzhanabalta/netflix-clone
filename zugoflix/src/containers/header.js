import React from "react";
import {Header} from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg"

export function HeaderContainer({children}) {
    return(
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt="NETFLİX" src={logo}/>
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Oturum Aç</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}