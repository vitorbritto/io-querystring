/*!
 * Copyright 2015, All Rights Reserved.
 *
 * Code licensed under the MIT License:
 * http://vitorbritto.mit-license.org/
 *
 * Author: Vitor Britto <code@vitorbritto.com.br>
 */


(function(window, document, undefined) {

    'use strict';

    var ioQuery = (function() {

        var extract = extract || {};

        // EXTRACT METHOD
        extract.query = function(url) {

            var qparts,
                qpart,
                i       = 0,
                qparams = {},
                parts   = (url || '').split('?');

            if (parts.length <= 1) {
                return qparams;
            } else {
                qparts = parts[1].split('&');
                for (i in qparts) {
                    if (qparams.hasOwnProperty) {
                        qpart = qparts[i].split('=');
                        qparams[decodeURIComponent(qpart[0])] = decodeURIComponent(qpart[1] || '');
                    }
                }
                return qparams;
            }

        };

        // INITIALIZE MODULE
        return {
            parse: extract.query
        };

    })();

    // Global
    window.ioQuery = ioQuery;

})(window, document);
