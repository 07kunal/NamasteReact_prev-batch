import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'


const heading = React.createElement('h1', { className: "heading", key: "h1" }, "Kunal Check")
const heading2 = React.createElement('h1', { className: "heading", key: "h2" }, "Episode-test")
const listItem1 = React.createElement('li', { key: 'i1' }, "Test1")
const listItem2 = React.createElement('li', { key: 'i2' }, "Test2")
const listItem3 = React.createElement('li', { key: 'i3' }, "Test3")

const list = React.createElement('ul', { key: 'l1' }, [listItem1, listItem2, listItem3])
const header = React.createElement("div", { className: "header", key: 'h010' }, [heading, list])

// writing html using jsx
const myName = () => <h1>Kunal Gautam</h1>

//this is jsx html light syntax not full html. which is React Element.



//making functional component 
const HeaderComp = () => {
    return (
        <div className="headingmain" key="hearder01">
            <h1>functional component write here</h1>
            {myName()}
            {/* <myName/>  */}

            <ul>
                <li>Test1</li>
                <li>Test2</li>
                <li>Test3</li>
            </ul>
        </div>
    )
}

//passing functional component into array , 
//1 just invoke it , like HeaderComp()
//2 just <HeaderComp/> as tag in the Container
// putting react element in the component like above , {myName} inside HeaderComp


const container = React.createElement('div', { class: "container" }, [<Header />, header, heading2, <HeaderComp />])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container)