const WebpackPwaManifest = require("webpack-pwa-manifest");

new WebpackPwaManifest(
    {
        "name": "Budget Tracker",
        "short_name": "Tracker",
        "icons": [
            {
                "src": "./icons/icon-72x72.png",
                "type": "image/png",
                "sizes": "72x72"
            },
            {
                "src": "./icons/icon-96x96.png",
                "type":"image/png",
                "sizes":"96x96"
            },
            {
                "src":  "./icons/icon-128x128.png",
                "type":"image/png",
                "sizes":"128x128"
            },
            {
                "src":"./icons/icon-144x144.png",
                "type":"image/png",
                "sizes": "144x144"
            },
            {
                "src":"./icons/icon-152x152.png",
                "type":"image/png",
                "sizes":"152x152"
            },
            {
                "src": "./icons/icon-192x192.png",
                "type":"image/png",
                "sizes":"192x192"
            },
            {
                "src":"./icons/icon-384x384.png",
                "type":"image/png",
                "sizes":"384x384"
            },
            {
                "src": "./icons/icon-512x512.png",
                "type":"image/png",
                "sizes":"512x512"
            }
        ],
        "background_color": "#dddddd",
        "theme_color": "#dddddd",
        "start_url":"../index.html",
        "display":""
        
    })
