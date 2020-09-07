// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyDWVVzvkLEBBibkn2yx_zidrkZm5gwAaqo",
    authDomain: "contactform-35b89.firebaseapp.com",
    databaseURL: "https://contactform-35b89.firebaseio.com",
    projectId: "contactform-35b89",
    storageBucket: "contactform-35b89.appspot.com",
    messagingSenderId: "1095713091557",
    appId: "1:1095713091557:web:0c1f13a7dc187c26d9090c",
    measurementId: "G-1V8275E23Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  var messageRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e)
{
    e.preventDefault();

    var name = getInputVal('name');
    var email = getInputVal('email');
    var concern = getInputVal('concern');

    saveMessage(name, email, concern);

    document.querySelector('.alert').style.display = 'block';


    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);
    
    document.getElementById('contactForm').reset();
} 


function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(name, email, concern) {
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        concern: concern
    });
}