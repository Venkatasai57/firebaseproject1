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
  
  
  var name,rollv,sec,gen ,a;
  function ready(){
      name=document.getElementById('name').value;
      rollv=document.getElementById('roll').value;
      sec=document.getElementById('sec').value;
      gen=document.getElementById('gen').value;
  }
  
  
  //  function  inst(){
     // ready();
    //  firebase.database().ref('student/'+rollv).set({
      //    nameofstudent:name,
        //  rollno:rollv,
         // section:sec,
         // gender:gen
     // });
  // }
  
  document.getElementById('select').onclick=function(){
      ready();
      firebase.database().ref('student/'+rollv).on('value',function(snapshot){

        a=snapshot.val().rollno;
        if(a!=rollv){
            alert('No data found')
        }
        else{
            alert('Successfully loaded')
          document.getElementById('name').value=snapshot.val().nameofstudent; 
          document.getElementById('roll1').value=snapshot.val().rollno; 
          document.getElementById('sec').value=snapshot.val().section; 
          document.getElementById('gen').value=snapshot.val().gender; }
      });
  }
  
 // document.getElementById('update').onclick=function(){
   //   ready();
     // firebase.database().ref('student/'+rollv).update({
       //   nameofstudent: name,
         // rollno:rollv,
          //section:sec,
          
     // });
  //}
  
  document.getElementById('delet').onclick=function(){
      ready();
      firebase.database().ref('student/'+rollv).remove();
      alert('Successfully Deleted.......')
  }
  

  document.getElementById('back').onclick=function(){
  
    open( 'proj1.html', function (err) {
        if ( err ) throw err;    
      });

  }

