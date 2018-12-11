const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};


const fieldsNotEmpty = ({formErrors, ...rest}) =>{
    let valid = true;
    Object.values(rest).forEach(val =>{
        val === "" && (valid = false);
    })
    return valid;
}

const passWordMatch = (password, confirmPassword)=>{
    return password === confirmPassword;
};


export {formValid, fieldsNotEmpty, passWordMatch};