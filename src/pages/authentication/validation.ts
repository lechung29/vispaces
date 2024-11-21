export const validateSignUp = (email: string, displayName: string, password: string, confirmPassword: string) => {
    let valid = true;
    let emailError = "";
    let displayNameError = "";
    let passwordError = "";
    let confirmPasswordError = "";
    if (!email) {
        valid = false;
        emailError = "Please enter an email"
    }

    if (!displayName) {
        valid = false;
        displayNameError = "Please enter a display name"
    }
    
    if (!password) {
        valid = false;
        passwordError = "Please enter a password"
    }

    if (!confirmPassword) {
        valid = false;
        confirmPasswordError = "Please enter a confirm password"
    }

    if (!!email) {
        const emailRegex =
            /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}|(?:\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)$/;
        if (!email.match(emailRegex)) {
            valid = false;
            emailError = "Email is not a valid email address"
        }
    }

    if (!!displayName && (displayName.length <= 3 || displayName.length > 14)) {
        valid = false;
        displayNameError = "Display name must be between 4 and 14 characters"
    }

    if (!!password && password.length < 6) {
        valid = false;
        passwordError = "Password must be at least 6 characters"
    }

    if (!!confirmPassword && password !== confirmPassword) {
        valid = false;
        confirmPasswordError = "Confirm password must match the password"
    }

    return {
        valid,
        emailError,
        displayNameError,
        passwordError,
        confirmPasswordError
    }
}