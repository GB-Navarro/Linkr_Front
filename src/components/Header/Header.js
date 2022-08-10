import { useState } from "react";
import { IonIcon } from "react-ion-icon"
import { HeaderContainer, Logo, Box, Image, LogoutBox, Logout, Text } from "./styles.js"
import changeDisplayStatus from "./functions/changeDisplayStatus.js";
import profile from "./../../assets/images/profile.jpg"
export default function Header(){

    const [logoutDisplayStatus, setLogoutDisplayStatus] = useState('none');

    return(
        <>
            <HeaderContainer>
                <Logo> Linkr </Logo>
                <Box>
                    <IonIcon name="chevron-down-outline" onClick={() => changeDisplayStatus(logoutDisplayStatus, setLogoutDisplayStatus)}/>
                    <Image src={profile}/>
                </Box>
            </HeaderContainer>
            <LogoutBox display={logoutDisplayStatus}>
                <Logout> <Text>Logout</Text> </Logout>
            </LogoutBox>   
        </>
    ) 
}