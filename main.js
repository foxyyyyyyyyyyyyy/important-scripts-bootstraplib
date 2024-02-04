// Simple Devtools Library
// Author: Fabian Maier
// Version: 1.0.0
// License: MIT
// Last Updated: 2024-02-04
// Repository:
////////////////////////////////////////////
// Description: 
// This is a simple devtools library that can be used to load Bootstrap and Ionicons CSS and Bootstrap JS.
// It also loads the NC Devtools JS file which contains simple Devtools for Bootstrap.

// Function to load Bootstrap CSS
function loadBootstrapCSS() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
    document.head.appendChild(link);
}

// Function to load Ionicons CSS
function loadIoniconsCSS() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.5.10/css/ionicons.min.css';
    document.head.appendChild(link);
}

// Function to load Bootstrap JS
function loadBootstrapJS() {
    var script = document.createElement('script');
    script.src = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js';
    document.body.appendChild(script);
}

// Function to load NC Devtools JS
function loadNCDevtoolsJS() {
    var script = document.createElement('script');
    script.src = 'src/nc-devtools.js';
    document.body.appendChild(script);
}

// Function to load the library
function loadLibrary() {
    loadBootstrapCSS();
    loadIoniconsCSS();
    loadBootstrapJS();
    loadNCDevtoolsJS();
}

// Call the loadLibrary function when the document is ready
document.addEventListener('DOMContentLoaded', loadLibrary);