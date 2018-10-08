import React from 'react';

import googleApiServiceConfig from './serviceConfiguration';

class GoogleApiService extends React.Component {
    render() {
        return (
            <div className="container google-api">
                <a id="google_api_init_button" className="second-link">Iniciar Google API</a>
                <a id="google_api_authorize_button" className="second-link">Autorizar Google API</a>
                <h3 id="sign-in_status"></h3>
            </div>
        );
    }

    constructor(props) {
        super(props);
        this.handleClientLoad = this.handleClientLoad.bind(this);
        this.initClient = this.initClient.bind(this);
        this.clientInitialized = this.clientInitialized.bind(this);
    }

    componentDidMount() {
        var initButton = document.getElementById('google_api_init_button');
        initButton.onclick = this.handleClientLoad;
    }

    //On load, called to load the auth2 library and API client library.
    handleClientLoad() {
        const script = document.createElement("script");
        script.src = "https://apis.google.com/js/api.js";
        script.onload = () => {
            console.log("Handling client load", this.initClient);
            gapi.load('client:auth2', this.initClient);
        }
        document.body.appendChild(script);
    }

    initClient() {
        console.log("Init Client");
        gapi.client.init(googleApiServiceConfig).then(this.clientInitialized())
    }

    clientInitialized() {
        console.log("Client Initialized");
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
        // Handle the initial sign-in state.
        this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

        var authorizeButton = document.getElementById('google_api_authorize_button');
        authorizeButton.onclick = this.handleAuthClick;
    }

    handleAuthClick(event) {
        console.log("Getting Authorization");
        gapi.auth2.getAuthInstance().signIn();
    }


    updateSigninStatus(isSignedIn) {
        var status = "Is authenticated: " + isSignedIn;
        var signInStatus = document.getElementById('sign-in_status').innerHTML = status;
    }
}

export default GoogleApiService;
