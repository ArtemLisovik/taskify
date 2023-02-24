import { Button } from "shared/ui"
import Input from "shared/ui/Input/Input"

interface AuthProps {
    authType: 'login' | 'registration'
}

const Auth = ({ authType }: AuthProps) => {
    const registration = (authType === 'registration') ? <Registration /> : null
    const login = authType === 'login' ? <Login /> : null
    return (
        <div className="intro">
            {registration}
            {login}
        </div>
    )
}

export { Auth }


const Registration = () => {
    return (
        <div>
            <h3 className="auth__title">
                Login to your account
            </h3>
            <form name='login' className="auth__form">
                <Input
                    name='email'
                    type='email'
                    placeholder="Enter your e-mail"
                />

                <Input
                    name='password'
                    type='password'
                    placeholder="Enter your password"
                />

                <Button content="Confirm" type="neon"/>
            </form>
        </div>
    )
}

const Login = () => {

    return (
        <>
            <h3 className="auth__title">
                Login to your account
            </h3>
            <form name='login' className="auth__form">
                <Input
                    name='email'
                    type='email'
                    placeholder="Enter your e-mail"
                />

                <Input
                    name='password'
                    type='password'
                    placeholder="Enter your password"
                />

                <Button content="Confirm" type="neon"/>
            </form>
        </>
    )
}