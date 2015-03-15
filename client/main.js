Meteor.autosubscribe(function () {
//    if (Meteor.user() || Session.get("exploreMode")) {
    Meteor.subscribe("userData");
    Meteor.subscribe("publicCourses");
    Meteor.subscribe("myCourses");
//Meteor.subscribe("myFlashcards");
//Meteor.subscribe("myCollections");
//        Meteor.subscribe("myItems");
//        Meteor.subscribe("lessons");
    Meteor.subscribe("theBrain");
    Meteor.subscribe("unreadNotifications");
//    }
});

if (Meteor.isClient) {
    Meteor.startup(function () {
        Meteor.call("getServerNextDay", function (error, result) {
            Session.set("serverNextDay", result);
        });
        setInterval(function () {
            console.log("doing interval in getServer");
            Meteor.call("getServerNextDay", function (error, result) {
                Session.set("serverNextDay", result);
            });
        }, 600000);

    });

}


jQuery.fn.justtext = function () {

    return $(this).clone()
        .children()
        .remove()
        .end()
        .text();

};

stripHtml = function (str) {
    return jQuery('<div />', { html: str }).text();
}

var _renderer = null;

//Meteor.autosubscribe(function () {
Deps.autorun(function () {
    if (Meteor.userId()) {
        window.clearTimeout(_renderer);
        _renderer = window.setTimeout(function () {
//        var _now = Meteor.moment.fullNow();
            Meteor.call("getServerTime", function (error, result) {
                var _serverTime = result;
                var _thirtyMinutesAgo = new Date(_serverTime - 60000 * 30);
                console.log("_thirtyMinutesAgo", _thirtyMinutesAgo);
                Notifications.find({
                    user: Meteor.userId(),
                    read: false, created: {
                        $gte: _thirtyMinutesAgo
                    }
                }).observe({
                    added: function (item) {

                        console.log("added again ", item);

                        var _eventUserName = Meteor.userDetails.getName(item.eventUserId);
                        var _eventUserPicture = Meteor.userDetails.getProfilePicture(item.eventUserId);
                        if (!_eventUserName) {
                            setTimeout(function () {
                                _eventUserName = Meteor.userDetails.getName(item.eventUserId);
                                _eventUserPicture = Meteor.userDetails.getProfilePicture(item.eventUserId);
                                console.log("from timeout username ", _eventUserName, "item", item);

                                Meteor.popUp.notification(_eventUserName, item.message, _eventUserPicture);
                            }, 2000);
                        } else {

                            Meteor.popUp.notification(_eventUserName, item.message, _eventUserPicture);
                        }
                    }
                });

            });

        }, 300);
    }
});

Deps.autorun(function () {
    if (Meteor.userId()) {
        Meteor.subscribe("itemsToReLearnCount");
        var _now = moment().hours(0).minutes(0).seconds(0).milliseconds(0)._d;
        console.log("_now", _now);
        Meteor.subscribe("itemsToRepeatCount", _now);
    }
});

Deps.autorun(function () {
    console.log("deps selectedCourse ", Session.get("selectedCourse"));
    Meteor.subscribe("selectedCourse", Session.get("selectedCourse"));
//    setTimeout(function () {
//        $("#transition").css("display", "block");
//    }, 20);
});

Meteor.startup(function () {
    loadFilePicker("AHkjyUnfjQku2SL4OTQbxz");
    new GA(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    window.ga('create', 'UA-33043573-4', 'thebrain.pro');
    console.log("creating GA");
});


$.fn.modal.Constructor.prototype.enforceFocus = function () {
}; // Fix to enable stacking modals

