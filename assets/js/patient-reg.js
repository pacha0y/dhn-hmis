
function registerPatient(){
  params = getFormEntryValues('patientRegistrationForm');
  postPatient('people', JSON.stringify(params), nextTask);
}

/**
 * 
 */
function nextTask(){
  alert("Hello word");
}