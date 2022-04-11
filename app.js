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
//  aptrinsic("identify",
//    {
//    //User Fields
//      "id": "Peter1234", // Required for logged in app users
//      "email": "peter@TinDog.com",
//      "firstName": "peter",
//      "lastName": "parker",
//      "signUpDate": 1522697426479, //unix time in ms
//      "plan" : "gold", //Custom attributes - please create those custom attributes in Aptrinsic via Account Settings to be tracked.
//      "price" : 95.5,
//      "userHash": "" // optional transient for HMAC identification
//    },
//    {
//    //Account Fields
//      "id":"001Ting5678", //Required
//      "name":"TinDog Account",
//      "Program": "Platinum" // flat custom attributes
//   });
aptrinsic('track', 'Engagement', {"name":"Product Release","Audience Size" :5000 ,"Launched" : true , 
"Launched date":"2018-03-08T18:11:00Z" });
aptrinsic('track', 'Adoption', {"name":"Product Release","Audience Size" :5000 ,"Launched" : true , 
"Launched date":"2018-03-08T18:11:00Z" });
<script> (function (d, w, c) { if(!d.getElementById("spd-busns-spt")) { var n = d.getElementsByTagName('script')[0], s = d.createElement('script'); var loaded = false; s.id = "spd-busns-spt"; s.async = "async"; s.setAttribute("data-self-init", "false"); s.setAttribute("data-init-type", "opt"); s.src = 'https://cdn.freshbots.ai/assets/share/js/freshbots.min.js'; s.setAttribute("data-client", "90366f4533279e7a6f7284cd1deffa385bacc062"); s.setAttribute("data-bot-hash", "41961ebf9223fc37b7a3f427e122435c17bb5ed7"); s.setAttribute("data-env", "prod"); s.setAttribute("data-region", "us"); if (c) { s.onreadystatechange = s.onload = function () { if (!loaded) { c(); } loaded = true; }; } n.parentNode.insertBefore(s, n); } }) (document, window, function () { Freshbots.initiateWidget({ autoInitChat: false, getClientParams: function () { return ; } }, function(successResponse) { }, function(errorResponse) { }); }); </script>
