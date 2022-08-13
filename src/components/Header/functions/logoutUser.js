import axios from "axios";

export default function logoutUser(navigate) {
    const token = localStorage.getItem("token");

    const URL = "http://localhost:4000/sign-out";
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };

    const promise = axios.delete(URL, config);

    promise.then(res => {
        localStorage.removeItem("token");
        alert("User logged out successfully.");
        navigate("/");
    });
    promise.catch(err => {
        alert(err.response.data);
    });
}