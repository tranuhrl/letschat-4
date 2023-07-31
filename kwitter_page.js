// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAtyWGT5n_Uv-tkK9wXrbg-rTIXN31he_8",
    authDomain: "letschat2-28cfa.firebaseapp.com",
    databaseURL: "https://letschat2-28cfa-default-rtdb.firebaseio.com",
    projectId: "letschat2-28cfa",
    storageBucket: "letschat2-28cfa.appspot.com",
    messagingSenderId: "389017797556",
    appId: "1:389017797556:web:66489ec9375ae05c77a8e1"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0,
    });
    
    msg.value = ""
}