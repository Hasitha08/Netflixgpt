export const checkValiddata = (name , email , password) =>{

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const IsNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);

    if(!isEmailValid) return "Email id is not valid";
    if(!isPasswordValid) return "Password is not valid";
    if(!IsNameValid) return "Name is not valid";

    return null;
};