window.fbAsyncInit = function() {
    FB.init({
      appId      : '688898375995981',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.3'
    });
    FB.AppEvents.logPageView();
  };
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
   FBlogin = function(){
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
        console.log(response);
    });
    function checkLoginState() {
        FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
          console.log(response);
        });
      }
    FB.login(function(response){
        if(response.authResponse){
            console.log('token',response.authResponse.accessToken);
            localStorage.setItem("token",response.authResponse.accessToken);
            swal("Welcome", "You Have Logged in Successfully..", "success")
            window.location.href="/restaurants-details"
            FB.api('/me', function(response){
                console.log('name',response.name);
            })
        }
    },{scope: 'email,user_likes'});
   }
