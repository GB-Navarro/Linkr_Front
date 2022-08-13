import { useState } from "react";
import { IonIcon } from "react-ion-icon";
import { HeaderContainer, Logo, Box, Image, LogoutBox, Logout, Text } from "./styles.js"
import changeDisplayStatus from "./functions/changeDisplayStatus.js";
import profile from "./../../assets/images/profile.jpg";
import { useNavigate } from "react-router-dom";
import logoutUser from "./functions/logoutUser.js";
export default function Header(){

    const [logoutDisplayStatus, setLogoutDisplayStatus] = useState('none');

    const navigate = useNavigate();

    return(
        <>
            <HeaderContainer>
                <Logo> Linkr </Logo>
                <Box onClick={() => changeDisplayStatus(logoutDisplayStatus, setLogoutDisplayStatus)}>
                    {
                        logoutDisplayStatus === "none" ? <IonIcon name="chevron-down-outline"/> : <IonIcon name="chevron-up-outline"/>
                    }
                    <Image src={profile}/>
                </Box>
            </HeaderContainer>
            <LogoutBox display={logoutDisplayStatus}>
                <Logout> <Text onClick={() => logoutUser(navigate)}>Logout</Text> </Logout>
            </LogoutBox>   
        </>
    ) 
}