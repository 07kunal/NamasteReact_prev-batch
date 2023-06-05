import React from 'react'
import ReactDOM from 'react-dom'

const heading = React.createElement('h1', { class: "heading" }, "Episode-3")

const container = React.createElement('div', { class: "container" }, [heading])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container)