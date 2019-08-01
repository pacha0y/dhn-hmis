
/**
 * Get values entered in a form
 * @param {*} formId 
 */
function getFormEntryValues(formId){
  var form = document.getElementById(formId);
  var formParams = {};
  try{
    formSize = form.length;
    for(var i = 0; i < formSize; i++){
      input = form[i];
      inputName =  input.name
      inputValue = input.value;
      
      //if(input.required && inputValue == ""){
        //alert("Please enter value for " + inputName.replace("_"," ") + " to continue!");
        //return;
      //}
      
      if(!(inputName == "") && !(inputValue == "")){
        if (input.type == "checkbox"){
          if(inputValue == "on"){
            inputValue = true;
          }else{
            inputValue = false;
          }
        }
        formParams[inputName] = inputValue;
      }
    }

    return formParams;

  }catch(e){
    console.log("Form "+ form +" does not exist")
  }
}