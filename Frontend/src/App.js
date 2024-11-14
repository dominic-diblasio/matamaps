import React from "react";
import Sidebar from "./components/common/Sidebar";
import AuthIndex from "./screens/AuthIndex";
// import MainIndex from "./screens/MainIndex";
import RealIndex from "./screens/RealIndex";

function App(props) {

  function activekey() {
    const baseUrl = process.env.PUBLIC_URL || "";
    const res = window.location.pathname.replace(baseUrl, "");
    return res || "/";
}

  console.log(activekey())

  if (activekey() === "/sign-in" || activekey() === "/sign-up" || activekey() === "/password-reset" || activekey() === "/2-step-authentication" || activekey() === "/page-404") {
    return (
      <div id="mytask-layout" className="theme-indigo">
          <AuthIndex />
      </div>
    )
  }
  return (
    <div id="mytask-layout" className="theme-indigo">
      <Sidebar activekey={activekey()} history={props.history} />
        <RealIndex activekey={activekey()} />
        {/* <EmptySidebar activekey={activekey()} history={props.history} /> */}

    </div>
  );
}


export default App;


// import React from "react";
// import Sidebar from "./components/common/Sidebar";
// import AuthIndex from "./screens/AuthIndex";
// import MainIndex from "./screens/MainIndex";

// function App(props) {

//   function activekey() {
//     var res = window.location.pathname
 
//     var baseUrl = process.env.PUBLIC_URL
//     baseUrl = baseUrl.split("/");
//     res = res.split("/");
//     res = res.length > 0 ? res[baseUrl.length] : "/";
//     res = res ? "/" + res : "/";;
//     const activeKey1 = res;
//     return activeKey1
//   }
//   console.log(activekey())

//   if (activekey() === "/sign-in" || activekey() === "/sign-up" || activekey() === "/password-reset" || activekey() === "/2-step-authentication" || activekey() === "/page-404") {
//     return (
//       <div id="mytask-layout" className="theme-indigo">
//           <AuthIndex />
//       </div>
//     )
//   }
//   return (
//     <div id="mytask-layout" className="theme-indigo">
//       <Sidebar activekey={activekey()} history={props.history} />
//         <MainIndex activekey={activekey()} />
//     </div>
//   );
// }


// export default App;
