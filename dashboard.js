
document.getElementById("logout").onclick = function() {
    var checkUserLogout = confirm("Are you sure you want to logout?");
    if (checkUserLogout) {
        firebase.auth().signOut();
    }
    
};

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
    } else {
        window.location.href = 'index.html';
    }
});






