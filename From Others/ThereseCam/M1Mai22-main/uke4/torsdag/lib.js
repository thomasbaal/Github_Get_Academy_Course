let test = '';

function isThisAEmail(inputValue){
    let indexofAt = inputValue.indexOf('@');
    let indexOfFirstDot = inputValue.indexOf('.');
     let indexOfLastDot = inputValue.substring(indexofAt).indexOf('.');

    
        if(inputValue.includes('@') && !inputValue.includes(' ')){
            if(indexOfFirstDot < indexofAt ){
               return test=  'true'
            //    return true;
            }
            return test=  'true';
        } return test=  'true'

}

function fixText(txt){
    // txt.pop(0)
    let trimmedText = txt.trim()
    return trimmedText.charAt(0).toUpperCase() + trimmedText.slice(1);
}
