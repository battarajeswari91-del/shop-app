import InputFormField from "../components/InputFormField";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
function LoginPage() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/productList");
    };

    return (
        <div className="login-container login-page">
            <h1>Login</h1>
            <form className="form" onSubmit={handleSubmit}>
                <InputFormField type="text" placeholder="Username" />
                <InputFormField type="password" placeholder="Password" />
                <Button type="submit" text="Login" className="log-in">Login</Button>
                <Button type="button" text="Sign Up" onClick={() => navigate("/signup")} className="sign-up">
                    Sign Up
                </Button>
                <Link to="/forgot-password">Forgot Password?</Link>
            </form>
        </div>
    );
}

export default LoginPage;
