import { useState, useEffect, useRef } from "react";
import { IonIcon } from "react-ion-icon";
import { HeaderContainer, Logo, Box, Image, LogoutBox, Logout, Text } from "./styles.js"
import profile from "./../../assets/images/profile.jpg";
import { useNavigate } from "react-router-dom";
import logoutUser from "./functions/logoutUser.js";
export default function Header() {

    const [logoutDisplayStatus, setLogoutDisplayStatus] = useState(false);

    const navigate = useNavigate();

    const boxRef = useRef();

    useEffect(() => {
        function closeDropDown(event) {
            if (event.path[0] !== boxRef.current) {
                setLogoutDisplayStatus(false);
            }
        }
        document.body.addEventListener("click", closeDropDown);

        return () => { document.body.removeEventListener("click", closeDropDown) }
    }, []);

    return (
        <>
            <HeaderContainer>
                <Logo> Linkr </Logo>
                <Box ref={boxRef} onClick={() => setLogoutDisplayStatus(!logoutDisplayStatus)}>
                    {
                        !logoutDisplayStatus ? <IonIcon name="chevron-down-outline" /> : <IonIcon name="chevron-up-outline" />
                    }
                    <Image src={profile} />
                </Box>
            </HeaderContainer>
            <LogoutBox open={logoutDisplayStatus}>
                <Logout> <Text onClick={() => logoutUser(navigate)}>Logout</Text> </Logout>
            </LogoutBox>
        </>
    )
}