import React from "react"
import ReactDOM from "react-dom/client"

const HeaderComp = () => (
    <div>
        <h1>Show me code</h1>

    </div>
)

const container = React.createElement("div", { className: "mainDiv" }, [<HeaderComp />])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(container)