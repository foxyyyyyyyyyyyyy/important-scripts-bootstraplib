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
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
    document.head.appendChild(link);
}

// Function to load Bootstrap JS
function loadBootstrapJS() {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
    document.body.appendChild(script);
}

// Function to load IonIcons JS
function loadIonIconsJS() {
    var script = document.createElement('script');
    script.src = 'https://unpkg.com/ionicons@latest/dist/ionicons.js';
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
    loadIonIconsJS();
    loadBootstrapJS();
    loadNCDevtoolsJS();
}

// Call the loadLibrary function when the document is ready
document.addEventListener('DOMContentLoaded', loadLibrary);
