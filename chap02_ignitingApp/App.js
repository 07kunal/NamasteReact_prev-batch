//vanila js

// const heading = document.createElement("h1")
// heading.innerHTML = "this is new add feature"
// const root = document.getElementById("root")
// root.appendChild(heading)


//react code 

import React from "react"
import ReactDOM from "react-dom/client"


const heading = React.createElement('h1', { id: "title" }, 'Hello world from parcel')

const heading2 = React.createElement('h1', { id: "title2", }, 'Hello universie')

const container = React.createElement('div', { class: "container" }, [heading, heading2])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container)