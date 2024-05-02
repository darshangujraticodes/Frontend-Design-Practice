//setting some default (change LP url for new Lps)
var conversion_tracking_lp_url = 'https://satrehappynest.in/';
var site_visit_event_name = 'Visited Landing Page';

$(window).load(function () {
    var getip_settings = {
        "url": "https://ipv4-a.jsonip.com/",
        "method": "GET",
        "timeout": 0,
        "crossOrigin": true,
        "headers": {}
    };
    $.ajax(getip_settings).done(function (apiresponse, status) {
        //console.log(status);
        if (apiresponse['ip']) {
            ip = apiresponse['ip'];
            Set_Cookie('visiter_ip', ip);
            var fbapi_data = {
                "url": "https://fbconversion.realatte.com/api/facebook-conversion/track",
                "method": "POST",
                "timeout": 0,
                "headers": {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify({
                    "landing_page_url": conversion_tracking_lp_url,
                    "email": "",
                    "mobile": "",
                    "event_name": site_visit_event_name,
                    "remote_address": ip,
                    "http_user_agent": navigator.userAgent
                })
            };
            $.ajax(fbapi_data).done(function (response, status) {
                console.log('FB Conv', response);
            });

        }

    });
});

// to call this function set on click event on button or a tag eg--> onclick="send_fb_event('your_event_name');

function send_fb_event(event_name) {
    var fbapi_data = {
        "url": "https://fbconversion.realatte.com/api/facebook-conversion/track",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        data: JSON.stringify({
            "landing_page_url": conversion_tracking_lp_url,
            "email": "",
            "mobile": "",
            "event_name": event_name,
            "remote_address": Get_Cookie('visiter_ip'),
            "http_user_agent": navigator.userAgent
        })
    };
    $.ajax(fbapi_data).done(function (response, status) {
        console.log(response);
    });
}