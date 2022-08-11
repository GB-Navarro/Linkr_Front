export default function logoutUser(navigate) {
    localStorage.removeItem("token");
    navigate("/");
}