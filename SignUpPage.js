import Button from '../components/Button';
import InputFormField from '../components/InputFormField';
import { Link } from 'react-router-dom';
function SignUpPage() {
    return (
        <div className="login-container signup-page">
            <h1>Sign Up</h1>
            <form className="form">
                <InputFormField type="text" placeholder="Username" />
                <InputFormField type="email" placeholder="Email" />
                <InputFormField type="password" placeholder="Password" />
                <Button type="submit" text="Sign Up" className="sign-up">Sign Up</Button>
            </form>
            <Link to="/login">Already have an account. Login</Link>
        </div>
    );
}

export default SignUpPage;