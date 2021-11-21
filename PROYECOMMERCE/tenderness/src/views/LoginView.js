import { useContext } from "react";

import { AuthContext } from  "../context/AuthContext"

export default function LoginView() {
    const { signIn } = useContext(AuthContext);

    return (
        <button className="btn btn-danger btn-lg" onClick={signIn}>
            Ingresa con Google
        </button>
    );
}