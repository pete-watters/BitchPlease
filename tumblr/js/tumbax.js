if (null == pathToLoadingImage || pathToLoadingImage == "" || pathToLoadingImage == "undefined") var pathToLoadingImage = '';
if (null == tumbaxWidgetWidth || tumbaxWidgetWidth == "" || tumbaxWidgetWidth == "undefined") var tumbaxWidgetWidth = 640;
if (null == tumbaxColumns || tumbaxColumns == "" || tumbaxColumns == "undefined") var tumbaxColumns = 2;
var tumbaxBlog;
var postOffset = 20;
var tumblrBlogUrl;

function loadTumbax() {
    $('#tumbax').append('<div id="tumbax-header"><div id="tumbax-stat-holder"></div></div>');
    var tumbaxColumnsHTML = '';
    var columnWidth = 100 / tumbaxColumns;
    for (var i = 1; i <= tumbaxColumns; i++) {
        tumbaxColumnsHTML += '<div id="tumbax-video-list-div' + i + '" style="width:' + columnWidth + '%;" class="tumbax-video-list-div"></div>'
    }
    $('#tumbax').append('<div id="tumbax-encloser">' + tumbaxColumnsHTML + '<div class="load-more-wrapper"><span class="load-more" id="load-more"> Load More..</span></div></div>');
    $('#load-more').click(function () {
        $('#load-more').text('loading..');
        loadMore()
    });
    $('#tumbax').append('<div id="tumbax-lightbox"><div id="tumbax-lightbox-wrapper"><div id="tumbax-lightbox-image"><img id="tumbax-img-lightbox" src=""><iframe id="tumbax-video-lightbox" width="640" height="360" src="" frameborder="0" allowfullscreen></iframe></div><div id="tumbax-lightbox-helper"></div></div></div>');
    $('#tumbax-lightbox').click(function () {
        $('#tumbax-img-lightbox').attr('src', '');
        $('#tumbax-video-lightbox').attr('src', '');
        $('#tumbax-lightbox').hide();
        $('#tumbax-img-lightbox').hide();
        $('#tumbax-video-lightbox').hide()
    });
    $('#tumbax-lightbox').hide();
    $('#tumbax-img-lightbox').hide();
    $('#tumbax-video-lightbox').hide()
}
$(document).ready(function () {
    var style = '<style>.tumbax-showing {color:black;font-weight:normal;}.tumbax-duration {background-color: black;color: white;padding: 2px 3px;font-weight: bold;position: absolute;bottom: 0;right: 0;opacity: 0.8;}#tumbax-header {background-color:rgb(53,53,53);font:24px Arial;color:white;line-height:25px;height:90px;text-align:left;border: 1px solid rgb(53,53,53);}.tumbax-stat {float:right;margin:10px;font:10px Arial;color:#ccc;margin-top: 25px;text-align: center;}#tumbax-stat-holder {float:right;height:100%;}.tumbax-stat-count {font: 18px Arial;}#tumbax-channel-desc {text-align:left;}#tumbax {width:' + tumbaxWidgetWidth + 'px;background-color: rgb(230,230,230);margin:0px auto;font-family: Calibri;font-size: 14px;text-align:center; overflow-x:hidden; border: 1px solid #cccccc;}.tumbax-video-tnail,.tumbax-pic-tnail,.tumbax-link-tnail {min-height:50px;width:100%; background-repeat:no-repeat; background-size:cover;position: relative;}.tumbax-video-tnail-box {width:94%;margin:3%;float:left;overflow:hidden;box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 1px 3px rgba(0, 0, 0, 0.2);}#tumbax-encloser {padding: 0.5%;display: inline-block;}.tumbax-video-list-div{text-align:left;display: inline-block;background-color:rgb(230,230,230);float:left;	}.tumbax-video-list-title {color:#438bc5;display: inline-block;padding:2% 10px; padding-bottom: 10px;font-weight:bold;}.tumbax-video-list-views {color:#555;padding:1% 10px; padding-bottom: 3%;display:inline-block;font-size:12px;}.tumbax-playlist-sidebar {background-color:rgba(0,0,0,0.8);float:right;max-width:50%;height:100%;color:white;text-align:center;}.tumbax-playlist-video-count {	display:inline-block;margin:3%;margin-top:5%;height:20%;}.tumbax-playlist-sidebar-video {opacity:1;width:22%;height:50px;float:left;background-color:rgb(230,230,230);display:inline-block;margin:1%;background-size:cover;background-position: center center;background-repeat:no-repeat;}.tumbax-tab {background-color:rgb(230,230,230);color:#666;text-shadow:0 1px 0 #fff;display: inline-block;margin: 5px;margin-top: 10px;padding: 5px;cursor:pointer;cursor:hand;}#tumbax-tabs {text-align:left;background-color:rgb(230,230,230);padding-left: 10px;border-left: 1px solid #cccccc;border-right: 1px solid #cccccc;}#tumbax-lightbox {position:fixed;background-color:rgba(0,0,0,0.9);z-index:100;width:100%;height:100%;left:0;top:0;}#tumbax-video-lightbox {opacity:1;}#tumbax-header a {float:left;text-decoration: none;color: inherit;}#tumbax-encloser a {font-weight:normal; color:#555;}</style>';
    $('html > head').append(style);
    var lightboxStyle = '<style>#tumbax-lightbox {position:fixed;background-color:rgba(0,0,0,0.9);z-index:100;width:100%;height:100%;left:0;top:0;}#tumbax-img-lightbox {opacity:1; max-width:1000px; max-height:700px; z-index:200;cursor:pointer;cursor:mouse;}#tumbax-lightbox-wrapper {height: 100%;width: 100%;white-space: nowrap;}#tumbax-lightbox-image {display: inline-block;vertical-align: middle;white-space: normal;z-index:120;}#tumbax-lightbox-helper {display: inline-block;vertical-align: middle;height: 100%;}#tumbax-video-lightbox{}</style>';
    $('html > head').append(lightboxStyle);
    var extraStyle = '<style>.tumbax-pic-train {width: 100%;border: none;display: block;margin: 2%;}._1y4 {height: 26px;left: 50%;margin: -13px 0 0 -17px;position: absolute;top: 50%;width: 35px;}.link-img,.video-img {width:100%;}.load-more-wrapper {}#load-more {border: 1px solid gainsboro;display: block;padding: 10px 0;text-align: center;color: #555;font: 13px arial,sans-serif;font-weight: bold;float: left;width: 96%;margin: 5px 2%;cursor: pointer;cursor: mouse;}.load-more:hover {background-color: rgb(223, 221, 221);}.tumbax-like-wrapper{display:inline-block; margin-top:15px;}</style>';
    $('html > head').append(extraStyle);
    var newStyle = '<style>.tumbax-title-link {text-decoration: none;	  }.tumbax-post p {margin:3%;}.tumbax-post img {width: 106%;height: auto;margin-left: -3%;height:auto;	  }.tumbax-post iframe {width:100%;height:auto;}.tumbax-title { margin:10px; font-size: 16px;color:#438bc5;font-family: Arial; font-weight: bold; display:inline-block;margin-bottom: 0px;}	.tumbax-title h1,.tumbax-title h2,.tumbax-title h3,.tumbax-title h4,.tumbax-title h5,.tumbax-title h6 {font-size: 16px;}.tumbax-player {width:100%;display:inline-block;}.tumbax-player embed {width:100%; height:auto;}.tumbax-chat {width: 100%;white-space: pre-wrap;margin: 3%;}.tumbax-post img {cursor:pointer;cursor:hand;}</style>';
    $('html > head').append(newStyle);
    prepareTumbax()
});

function prepareTumbax() {
    tumbaxBlog = tumblrBlogLink.substring(tumblrBlogLink.indexOf('http://') + 7, tumblrBlogLink.indexOf('.com') + 4);
    loadTumbax();
    var apiPostURL = "http://api.tumblr.com/v2/blog/" + tumbaxBlog + "/posts/?api_key=" + tumblrApiKey + "&limit=20";
    getPageDetails(apiPostURL);
    var apiPostURL = "http://api.tumblr.com/v2/blog/" + tumbaxBlog + "/avatar/64";
    $.ajax({
        url: apiPostURL,
        type: "GET",
        async: true,
        cache: true,
        dataType: "jsonp",
        success: function (avatarData) {
            showInfo(avatarData, tumblrBlogUrl, tumbaxBlog)
        },
        error: function (html) {
            alert(html)
        },
        beforeSend: setHeader
    })
}

function getPageDetails(fqlUrl) {
    fqlPending = 1;
    $.ajax({
        url: fqlUrl,
        type: "GET",
        async: true,
        cache: true,
        dataType: 'jsonp',
        success: function (response) {
            showTumbax(response)
        },
        error: function (html) {
            alert(html)
        },
        beforeSend: setHeader
    })
}

function showTumbax(data) {
    var tumbaxColumn;
    tumblrBlogUrl = data.response.blog;
    var postArray = data.response.posts;
    var title;
    var description;
    var caption;
    var type;
    var url;
    for (var i = 0; i < postArray.length; i++) {
        type = postArray[i].type;
        postHTML = '<tr><td><div class="tumbax-post"  class="tumbax-pic-tnail">';
        if (type == "link") {
            title = postArray[i].title;
            description = postArray[i].description;
            url = postArray[i].url;
            if (null != url && url != "" && url != "undefined") postHTML += '<a class="tumbax-title-link" target="_blank" href="' + url + '">';
            if (null != title && title != "" && title != "undefined") postHTML += '<span class="tumbax-title">' + title + '</span><br>';
            postHTML += '</a>';
            if (null != description && description != "" && description != "undefined") postHTML += description
        } else if (type == "photo") {
            caption = postArray[i].caption;
            url = postArray[i].post_url;
            photoArray = postArray[i].photos;
            if (null != url && url != "" && url != "undefined") postHTML += '<a class="tumbax-title-link" target="_blank" href="' + url + '">';
            if (null != caption && caption != "" && caption != "undefined") postHTML += '<span class="tumbax-title">' + caption + '</span>';
            postHTML += '</a>';
            for (var j = 0; j < photoArray.length; j++) {
                var sizeArray = photoArray[j].alt_sizes;
                for (var k = (sizeArray.length - 1); k >= 0; k--) {
                    url = sizeArray[k].url;
                    if (sizeArray[k].width >= 150) {
                        break
                    }
                }
                if (null != url && url != "" && url != "undefined") postHTML += '<img src="' + url + '"/>'
            }
        } else if (type == "text") {
            title = postArray[i].title;
            description = postArray[i].body;
            url = postArray[i].post_url;
            if (null != url && url != "" && url != "undefined") postHTML += '<a class="tumbax-title-link" target="_blank" href="' + url + '">';
            if (null != title && title != "" && title != "undefined") postHTML += '<span class="tumbax-title">' + title + '</span><br>';
            postHTML += '</a>';
            if (null != description && description != "" && description != "undefined") postHTML += description
        } else if (type == "quote") {
            title = postArray[i].text;
            description = postArray[i].source;
            url = postArray[i].post_url;
            if (null != url && url != "" && url != "undefined") postHTML += '<a class="tumbax-title-link" target="_blank" href="' + url + '">';
            if (null != title && title != "" && title != "undefined") postHTML += '<span class="tumbax-quote">\"' + title + '\"</span><br><br>';
            postHTML += '</a>';
            if (null != description && description != "" && description != "undefined") postHTML += '<b>Source - </b>' + description
        } else if (type == "audio") {
            title = postArray[i].caption;
            description = postArray[i].player;
            url = postArray[i].post_url;
            if (null != url && url != "" && url != "undefined") postHTML += '<a class="tumbax-title-link" target="_blank" href="' + url + '">';
            if (null != title && title != "" && title != "undefined") postHTML += '<span class="tumbax-title">' + title + '</span>';
            postHTML += '</a>';
            if (null != description && description != "" && description != "undefined") postHTML += '<div class="tumbax-player">' + description + '</div>'
        } else if (type == "answer") {
            asking_name = postArray[i].asking_name;
            title = postArray[i].question;
            description = postArray[i].answer;
            url = postArray[i].post_url;
            if (null != asking_name && asking_name != "" && asking_name != "undefined") postHTML += '<b>' + asking_name + ' asked - </b>';
            if (null != url && url != "" && url != "undefined") postHTML += '<a class="tumbax-title-link" target="_blank" href="' + url + '">';
            if (null != title && title != "" && title != "undefined") postHTML += '<span class="tumbax-title">' + title + '</span><br>';
            postHTML += '</a>';
            if (null != description && description != "" && description != "undefined") postHTML += description
        } else if (type == "video") {
            title = postArray[i].caption;
            description = postArray[i].player[0].embed_code;
            url = postArray[i].post_url;
            if (null != url && url != "" && url != "undefined") postHTML += '<a class="tumbax-title-link" target="_blank" href="' + url + '">';
            if (null != title && title != "" && title != "undefined") postHTML += '<span class="tumbax-title">' + title + '</span>';
            postHTML += '</a>';
            if (null != description && description != "" && description != "undefined") postHTML += description
        } else if (type == "chat") {
            title = postArray[i].title;
            description = postArray[i].body;
            url = postArray[i].post_url;
            if (null != url && url != "" && url != "undefined") postHTML += '<a class="tumbax-title-link" target="_blank" href="' + url + '">';
            if (null != title && title != "" && title != "undefined") postHTML += '<span class="tumbax-title">' + title + '</span><br><br>';
            postHTML += '</a>';
            if (null != description && description != "" && description != "undefined") postHTML += '<div class="tumbax-chat">' + description + '</div>'
        }
        postHTML += '</div></td></tr>';
        tumbaxColumn = getNextTumbaxColumn();
        $('#tumbax-video-list-div' + tumbaxColumn).append('<div class="tumbax-video-tnail-box">' + postHTML + '<br/></div>');
        $('#tumbax-table').append(postHTML)
    }
    $('.tumbax-post img').click(function () {
        showPicLightbox(this.src)
    });
    fqlPending = 0;
    $('#load-more').text('Load More..')
}

function setHeader(xhr) {
    if (xhr && xhr.overrideMimeType) {
        xhr.overrideMimeType("application/j-son;charset=UTF-8")
    }
}

function loadMore() {
    if (!fqlPending) {
        var fqlUrl = "http://api.tumblr.com/v2/blog/" + tumbaxBlog + "/posts/?api_key=" + tumblrApiKey + "&offset=" + postOffset + "&limit=10";
        postOffset += 10;
        getPageDetails(fqlUrl)
    }
}

function getNextTumbaxColumn() {
    var lowestHeight = $('#tumbax-video-list-div1').height();
    var tempHeight = 0;
    var columnNumber = 1;
    for (var i = 1; i <= tumbaxColumns; i++) {
        tempHeight = $('#tumbax-video-list-div' + i).height();
        if (tempHeight < lowestHeight) {
            lowestHeight = tempHeight;
            columnNumber = i
        }
    }
    return columnNumber
}

function showPicLightbox(picSrc) {
    $('#tumbax-img-lightbox').show();
    $('#tumbax-lightbox').show();
    showLoadingInLightbox();
    setTimeout(function () {
        $('#tumbax-img-lightbox').attr('src', picSrc)
    }, 10)
}

function showVideoLightbox(videoSrc) {
    $('#tumbax-video-lightbox').show();
    $('#tumbax-lightbox').show();
    setTimeout(function () {
        $('#tumbax-video-lightbox').attr('src', videoSrc)
    }, 10)
}

function showLoadingInLightbox() {
    $('#tumbax-img-lightbox').attr('src', '');
    $('#tumbax-img-lightbox').attr('src', pathToLoadingImage)
}

function showInfo(avatarData, blogData, tumbaxBlog) {
    var pageName = blogData.title;
    var pagePic = avatarData.response.avatar_url;
    var pageLink = blogData.url;
    var tumbaxName = tumbaxBlog.substring(0, tumbaxBlog.indexOf('.'));
    $('#tumbax-header').append('<a target="_blank" href="' + pageLink + '"><img style="vertical-align:middle; height:60px; margin:15px; display:inline-block;" src="' + pagePic + '"/>' + pageName + '</a>&nbsp;&nbsp;&nbsp;');
    $('#tumbax-header').append('<iframe style="margin-top: 30px;" class="btn" frameborder="0" border="0" scrolling="no" allowtransparency="true" height="25" width="180" src="http://platform.tumblr.com/v1/follow_button.html?button_type=1&tumblelog=' + tumbaxName + '&color_scheme=light"></iframe>')
}

function getReadableNumber(number) {
    if (null == number || number == "" || number == "undefined") return "?";
    number = number.toString();
    var readableNumber = '';
    var count = 0;
    for (var k = number.length; k >= 0; k--) {
        readableNumber += number.charAt(k);
        if (count == 3 && k > 0) {
            count = 1;
            readableNumber += ','
        } else {
            count++
        }
    }
    return readableNumber.split("").reverse().join("")
}