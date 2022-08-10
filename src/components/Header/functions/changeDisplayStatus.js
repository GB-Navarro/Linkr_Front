export default function changeDisplayStatus(logoutDisplayStatus, setLogoutDisplayStatus){
    if(logoutDisplayStatus === 'none'){
        setLogoutDisplayStatus('flex');
    }else{
        setLogoutDisplayStatus('none');
    }
}