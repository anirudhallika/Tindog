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
<script>
(function(e,t,n){
  var r=e.Userpilot;
  e.Userpilot=n;
  n.queue=[];
  n.track=function(ev,data){n.queue.push(["track",ev,data])};
  n.identify=function(id,traits){n.queue.push(["identify",id,traits])};
  n.reload=function(){n.queue.push(["reload"])};
  n.init=function(token){n.queue.push(["init", token])};
  var s=t.createElement("script");
  s.async=true;
  s.src="https://js.userpilot.io/sdk/latest.js";
  var x=t.getElementsByTagName("script")[0];
  x.parentNode.insertBefore(s,x);
})(window,document,window.Userpilot||function(){});

// 👇 Initialize with your token
Userpilot.init("NX-4926e693");
</script>

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

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App({ isAuthenticated, user }) {
  const location = useLocation();

  // Identify user when logged in
  useEffect(() => {
    if (isAuthenticated && window.Userpilot) {
      window.Userpilot.identify(user.id, {
        name: user.name,
        email: user.email,
        created_at: user.createdAt,
        company: {
          id: user.companyId,
          name: user.companyName,
          industry: user.industry,
          plan: user.plan,
        },
      });
    }
  }, [isAuthenticated, user]);

  // Reload Userpilot on route change
  useEffect(() => {
    if (isAuthenticated && window.Userpilot) {
      window.Userpilot.reload();
    }
  }, [location, isAuthenticated]);

  return (
    <div>
      <h1>Welcome {user?.name}</h1>
      <button
        onClick={() =>
          window.Userpilot?.track("Clicked purchase button", {
            plan: "Pro",
            price: 99,
          })
        }
      >
        Buy Now
      </button>
    </div>
  )
}

export default App;

