import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.render(
    <GoogleOAuthProvider clientId="491218694600-is3dk5t573u0foet9htr06jv321smkbf.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>, document.getElementById("root"));


