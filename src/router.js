import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import enterBtn from './images/enterBtn.png'
import startBg from './images/startBg.png'
import selectCountryBg from './images/selectCountryBg.png'
import submitBtn from './images/submitBtn.png'

import generatePost from './images/generatePost.png'
import uploadBg from './images/uploadBg.png'
import passportBg2 from './images/passportBg2.png'


import './App.css';

// This example shows how to render two different screens
// (or the same screen in a different context) at the same url,
// depending on how you got there.
//
// Click the colors and see them full screen, then "visit the
// gallery" and click on the colors. Note the URL and the component
// are the same as before but now we see them inside a modal
// on top of the old screen.

class ModalSwitch extends React.Component {
    // We can pass a location to <Switch/> that will tell it to
    // ignore the router's current location and use the location
    // prop instead.
    //
    // We can also use "location state" to tell the app the user
    // wants to go to `/img/2` in a modal, rather than as the
    // main page, keeping the gallery visible behind it.
    //
    // Normally, `/img/2` wouldn't match the gallery at `/`.
    // So, to get both screens to render, we can save the old
    // location and pass it to Switch, so it will think the location
    // is still `/` even though its `/img/2`.
    previousLocation = this.props.location;

    componentWillUpdate(nextProps) {
        let { location } = this.props;

        // set previousLocation if props.location is not modal
        if (
            nextProps.history.action !== "POP" &&
            (!location.state || !location.state.modal)
        ) {
            this.previousLocation = this.props.location;
        }
    }

    render() {
        let { location } = this.props;

        let isModal = !!(
            location.state &&
            location.state.modal &&
            this.previousLocation !== location
        ); // not initial render

        return (
            <div>
                <Switch location={isModal ? this.previousLocation : location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/selectCountry" component={SelectCountry} />
                    <Route path="/upload" component={Upload} />
                    <Route path="/passport" component={Passport} />
                </Switch>
                {isModal ? <Route path="/upload" component={Modal} /> : null}
            </div>
        );
    }
}

const IMAGES = [
    { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
    { id: 1, title: "Lime Green", color: "LimeGreen" },
    { id: 2, title: "Tomato", color: "Tomato" },
    { id: 3, title: "Seven Ate Nine", color: "#789" },
    { id: 4, title: "Crimson", color: "Crimson" }
];

function Thumbnail({ color }) {
    return (
        <div
            style={{
                width: 50,
                height: 50,
                background: color
            }}
        />
    );
}

function Image({ color }) {
    return (
        <div
            style={{
                width: "100%",
                height: 400,
                background: color
            }}
        />
    );
}

function Home() {
    return (
        <div className="App">
            <header className="App-header">

                <img src={startBg} className="App-bg" alt="logo" />
                <Link to="/selectCountry">
                    <img src={enterBtn} className="App-btn" alt="logo" />
                </Link>

            </header>
        </div>
    );
}

function SelectCountry() {
    return (
        <div className="container">
            <img src={selectCountryBg} className="App-bg" alt="logo" />
            <Link to="/upload">
            <img src={submitBtn} className="App-btn" alt="logo" />
            </Link>

        </div>
    );
}

function Upload() {
    return (
        <div className="container">
            <img src={uploadBg} className="App-bg" alt="logo" />
            <Link to="/passport">
                <img src={generatePost} className="App-btn" alt="logo" />
            </Link>

        </div>
    );
}

function Passport() {
    return (
        <div className="container">
            <img src={passportBg2} className="App-bg" alt="logo" />


        </div>
    );
}


function ImageView({ match }) {
    let image = IMAGES[parseInt(match.params.id, 10)];

    if (!image) return <div>Image not found</div>;

    return (
        <div>
            <h1>{image.title}</h1>
            <Image color={image.color} />
        </div>
    );
}

function Modal({ match, history }) {
    let image = IMAGES[parseInt(match.params.id, 10)];

    if (!image) return null;

    let back = e => {
        e.stopPropagation();
        history.goBack();
    };

    return (
        <div
            onClick={back}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                background: "rgba(0, 0, 0, 0.15)"
            }}
        >
            <div
                className="modal"
                style={{
                    position: "absolute",
                    background: "#fff",
                    top: 25,
                    left: "10%",
                    right: "10%",
                    padding: 15,
                    border: "2px solid #444"
                }}
            >
                <h1>{image.title}</h1>
                <Image color={image.color} />
                <button type="button" onClick={back}>
                    Close
                </button>
            </div>
        </div>
    );
}

function ModalGallery() {
    return (
        <Router>
            <Route component={ModalSwitch} />
        </Router>
    );
}

export default ModalGallery;