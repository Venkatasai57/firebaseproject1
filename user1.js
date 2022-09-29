const firebaseConfig = {
    apiKey: "AIzaSyCt_u38-dPn7rXhRawz5xLNRKZfp-H92aw",
    authDomain: "login-9ff9c.firebaseapp.com",
    projectId: "login-9ff9c",
    storageBucket: "login-9ff9c.appspot.com",
    messagingSenderId: "983121271440",
    appId: "1:983121271440:web:3a242925ea28a9cc421615"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  var name,rollv,sec,gen;
  function ready(){
      full_name=document.getElementById('full_name').value;
      rollv=document.getElementById('roll').value;
      sec=document.getElementById('sec').value;
      gen=document.getElementById('gen').value;
  }
  
  
  function  register(){
      ready();
      firebase.database().ref('student/'+rollv).set({
          nameofstudent:full_name,
          rollno:rollv,
          section:sec,
          gender:gen
      });

      alert('Successfull inserted')
  }