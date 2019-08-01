/**
 * Register patient
 * @param {string} end_point 
 * @param {object} params 
 * @param {string} call_back 
 */
function postPatient(end_point, params, call_back){
  console.log(params);
  var protocal = "http";
  var address = "localhost";
  var port = "3007";
  var end_point = "/api/v1/"+end_point;
  var url = protocal +"://"+ address +":"+ port;
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 ) {
      if ( (this.status == 201 || this.status == 200)) {
        var obj = JSON.parse(this.responseText);
          //eval(call_back)(obj);
          try {
            if (obj){
              createPatient(obj, url, call_back)
            } 
            document.getElementById("innerPop").style.display = "none";
          }catch(e) {
        
          }
      }else if (this.status == 404 || this.status == 500) {
        var message = "Error " + this.status + ". An error has occured,Click yes to continue to patient dashboard or No to go to the main dashboard";
        console.log(message);
        //genericError(message);
      }else if (this.status == 401) {
        var message = "Error " + this.status + ". You have been logged out ,Click yes to continue to patient dashboard or No to go to the main dashboard";
        console.log(message);
        //genericError(message);
      }
      }else {
        // var message = "Error " + this.status + ". An error has occured,Click yes to continue to patient dashboard or No to go to the main dashboard";
        // genericError(message);
      }
  };
  xhttp.open("POST", url + end_point, true);
  xhttp.setRequestHeader('Authorization', "65f4Y83C8KB2");
  xhttp.setRequestHeader('Content-type', "application/json");
  xhttp.send(params);

}

function createPatient(person, url, call_back) {
  var parametersPassed = JSON.stringify({person_id: person.person_id, program_id: 1});

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 201) {
      var obj = JSON.parse(this.responseText);
      //if (__$('guardian_present').value == 'Yes' && showTypeOfPatient() == true) {
        //document.location = "/views/patient/relationships/guardian_search.html?patient_id=" + person_id;
      //} else {
        
      //}
      try {
        if (obj){
          eval(call_back)(obj)
        } 
        document.getElementById("innerPop").style.display = "none";
      }catch(e) {
        
      }
    }
  };
  xhttp.open("POST", url + '/api/v1/patients', true);
  xhttp.setRequestHeader('Authorization', "65f4Y83C8KB2");
  xhttp.setRequestHeader('Content-type', "application/json");
  xhttp.send(parametersPassed);
}