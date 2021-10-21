var firebaseConfig = {
    apiKey: "AIzaSyDgYm-cXBisxxoPNBckn5BvCVhh6t_PaKo",
    authDomain: "kwitter-8c25a.firebaseapp.com",
    databaseURL: "https://kwitter-8c25a-default-rtdb.firebaseio.com",
    projectId: "kwitter-8c25a",
    storageBucket: "kwitter-8c25a.appspot.com",
    messagingSenderId: "604086516434",
    appId: "1:604086516434:web:36bb6181f2e7167fc20b0b",
    measurementId: "G-FH6S4DDSQ7"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";