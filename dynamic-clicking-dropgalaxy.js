// ==UserScript==
// @name         DropGalaxy
// @namespace    http://tampermonkey.net/
// @version      0.1
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

    const adBlock = document.getElementById('adblock_detected')
    const adCheck = document.getElementById('adblock_check')
    const ipCheck = document.querySelector('body > div.container.pt-5.page.premium.downloadPage > script:nth-child(8)')
    //var adb = document.getElementById('adb')

    /*if (adb) {
        console.log(adb)
        adb.remove()
    }*/
    if (ipCheck) {
        console.log(ipCheck)
        //ipCheck.remove()
        //ipCheck.value = 0
    }
    if (adBlock) {
        console.log(adBlock)
        //adBlock.remove()
    }
    if (adCheck) {
        console.log(adCheck)
        //adCheck.remove()
    }

    setTimeout(() => {
        const dwnBtn = document.getElementById('method_free')
        if (dwnBtn) {
        setTimeout(() => {
            dwnBtn.click()
            console.log('clicked')
        }, 5000)
        }

        const dwnBtn1 = document.getElementById('downloadbtn')
        if (dwnBtn1) {
            setTimeout(() => {
            dwnBtn1.click()
                console.log('clicked')
            }, 22000)

        }
        const dwnBtn2 = document.getElementById('dl')
        if (dwnBtn2) {
            setTimeout(() => {
                dwnBtn2.click()
                //window.open(dwnBtn2.href, '_blank')
                console.log(dwnBtn2)
            }, 5000)
        }
        /*var createBtn = document.getElementById('downloadBtnClick')
        if (createBtn) {
        createBtn.disabled = false
        createBtn.click()
        }
        /*var finalDbtn = document.getElementById('dllink')

        var link = finalDbtn.getAttribute('action')
        console.log(link)

        window.open(link, '_blank')*/
    }, 1000)
})();
