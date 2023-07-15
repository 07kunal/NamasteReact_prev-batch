import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/component/Header"
import Body from "./src/pages/body/Body"
import Footer from "./src/component/Footer"



/* 
 header 
  -logo
  -nav item (html, about us , )
 body
  - search bar
  -Restraunt List 
   -RestaurantCard
     -image
     -name
     -rating
     -cusions
 footer
  -links
  -copyright
 */


const AppLayout = () => (
    <>
        <Header />
        <Body />
        <Footer />
    </>

)

const container = React.createElement("div", { className: "mainDiv" }, [<AppLayout />])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(container)