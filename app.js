(function(n,t,a,e){var i="aptrinsic";n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;
  var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
  var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-R60GTDQUT3DM-2");
aptrinsic("identify",
  {
  //User Fields
    "id": "anirudh12345", // Required for logged in app users
    "email": "anirudh@TinDog.com",
    "firstName": "anirudh",
    "lastName": "allika",
    "signUpDate": 1522697426479, //unix time in ms
    "plan" : "gold", //Custom attributes - please create those custom attributes in Aptrinsic via Account Settings to be tracked.
    "price" : 95.5,
    "userHash": "" // optional transient for HMAC identification
  },
  {
  //Account Fields
    "id":"001Tindog1234", //Required
    "name":"TinDog Account",
    "Program": "Platinum" // flat custom attributes
 });
