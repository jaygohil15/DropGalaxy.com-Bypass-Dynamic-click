// ==UserScript==
// @name         DropGalaxy
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       JethaLal_420
// @match        https://dropgalaxy.com/*
// @match        https://techthematter.xyz/*
// @match        https://financemonk.net/*
// @match        https://ruokareseptit.online/*
// @match        https://a2zapk.com/*
// @icon         https://www.google.com/s2/favicons?domain=dropgalaxy.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log('---------------------------------')
    let dwnBtn1, url, dwnBtn2

    const loaded = () => {
        // First Download Page
        dwnBtn1 = document.getElementById('method_free')
        // Second Download Page
        dwnBtn2 = document.getElementById('downloadBtnClick')
        // Third Download Page
        url = document.getElementById('url')
    }

    let intervalId = setInterval(() => {
        loaded()
        if(dwnBtn1) {
            // First Download Page Bypassed Using simple Click
            console.log('Download Btn on First Page Clicked')
            dwnBtn1.click()
            clearInterval(intervalId)
        }
        if (dwnBtn2) {
            // Second Download Page Bypassed using Simple click 
            // Will wait 16 seconds
            setTimeout( () => {
                console.log('Download Btn on Second Page Clicked')
                dwnBtn2.click()
            }, 16000)
            clearInterval(intervalId)
        }
        if (url) {
            clearInterval(intervalId)
            url = url.value
            window.open(url, '_self')
        }
    }, 1000)
})();
