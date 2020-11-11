// ==UserScript==
// @name         TSPLinks
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       Somyrion
// @description  Adds links to the NationStates sidebar under the region popup specific to the South Pacific
// @match        http://*.nationstates.net/*
// @match        https://*.nationstates.net/*
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @grant        none
// ==/UserScript==

/* global $ */
this.$ = this.jQuery = jQuery.noConflict(true); //Prevent jQuery 3.5.1 messing with NS jQuery 1.x.

(function() {
    'use strict';
    if ($('#panelregionbar > a').attr("href").indexOf("region=the_south_pacific") >= 0) {
        $('#panelregionbar .popoutmenu').append('<li><a href="https://tspforums.xyz/" target="_blank"><i class="icon-align-left"></i>Offsite Forum</a></li>' +
                                               '<li><a href="https://discord.gg/qEjy2uG" target="_blank"><i class="icon-chat"></i>Discord Server</a></li>' +
                                               '<li><a href="https://www.nationstates.net/region=the_south_pacific_wa_voting_center"><i class="icon-wa"></i>WA Voting Center</a></li>' +
                                               '<li><a href="https://www.nationstates.net/page=dispatch/id=1043675"><i class="icon-award"></i>SWAN Censuses</a></li>' +
                                               '<li><a href="https://www.nationstates.net/region=knowhere"><i class="icon-flag-empty"></i>Knowhere</a></li>' +
                                               '<li><a href="https://www.nationstates.net/region=psomewhere_over_the_rainbow"><i class="icon-flag-empty"></i>Psomewhere</a></li>');
    }
})();
