import { IonIcon } from "react-ion-icon"
import { HeaderContainer, Logo, Box, Image } from "./styles.js"
import profile from "./../../assets/images/profile.jpg"
export default function Header(){
    return(
        <>
            <HeaderContainer>
                <Logo> Linkr </Logo>
                <Box>
                    <IonIcon name="chevron-down-outline"/>
                    <Image src={profile}/>
                </Box>
            </HeaderContainer>
        </>
    )
}