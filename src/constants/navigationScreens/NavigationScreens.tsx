import ForgetPassword from "../../screens/authentication/forgotPassword/ForgetPossword";
import Login from "../../screens/authentication/login/Login";
import SignUp from "../../screens/authentication/signUp/SignUp";
import { AUTH_STACK_SCREEN } from "../navigationScreenNames/NavigationScreenNames";


export const AUTH_STACK_NAVIGATION_SCREEN=[
    {name:AUTH_STACK_SCREEN.SIGNUP ,component:SignUp},
    {name:AUTH_STACK_SCREEN.LOGIN ,component:Login},
    {name:AUTH_STACK_SCREEN.FORGOT_PASSWORD ,component:ForgetPassword},
]