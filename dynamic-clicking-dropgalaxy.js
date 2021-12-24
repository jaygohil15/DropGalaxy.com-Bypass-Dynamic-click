// ==UserScript==
// @name         DropGalaxy
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       JethaLal_420
// @match        https://dropgalaxy.com/*
// @icon         https://www.google.com/s2/favicons?domain=dropgalaxy.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var adBlock = document.getElementById('adblock_detected')
    var adCheck = document.getElementById('adblock_check')
    if (adBlock) {
        adBlock.remove()
    }
    if (adCheck) {
        adCheck.remove()
    }

    setTimeout(() => {
        var dwnBtn = document.getElementsByClassName('fa-cloud-download')[0]
        if (dwnBtn) {
        dwnBtn.click()
        }
        var createBtn = document.getElementById('downloadBtnClick')
        if (createBtn) {
        createBtn.disabled = false
        createBtn.click()
        }
        /*var finalDbtn = document.getElementById('dllink')

        var link = finalDbtn.getAttribute('action')
        console.log(link)

        window.open(link, '_blank')*/
    }, 3000)
})();
