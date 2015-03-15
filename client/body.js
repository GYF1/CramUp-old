Template.TheBrainBody.events({
//    "mouseenter .btn-primary": function(e) {
//        $(e.target).stop(true, true).switchClass("btn-primary-main", "btn-primary-reversed", 400);
//    },
//    "mouseleave .btn-primary": function(e) {
//        $(e.target).stop(true, true).switchClass("btn-primary-reversed", "btn-primary-main", 400);
//    },
    "click .logOut": function(e) {
        e.preventDefault();
        Meteor.logout();
        Router.go('/');
    },
    "click .mobile-nav li a[href!='#']": function (e, template) {
        $(".mobile-nav").stop().slideToggle(600, "easeInOutBack");
    },
    "click .toggle-mobile": function (e, template) {
        $(".mobile-nav").slideToggle(600, "easeInOutBack");
    },
    'mouseenter li.dropdown': function (e, template) {
        $(e.target).stop(true, true).addClass("open");
        $(e.target).children(".dropdown-menu").stop(true, true).show('normal', "easeInOutCubic");
    },
    'mouseleave li.dropdown.open': function (e, template) {
        $(e.target).stop(true, true).removeClass("open");
        $(e.target).children(".dropdown-menu").stop(true, true).hide('normal', "easeInOutCubic");

    },
    'mouseenter div.dropdown': function (e, template) {
        $(e.target).stop(true, true).addClass("open");
        $(e.target).children(".dropdown-menu").stop(true, true).show('normal', "easeInOutCubic");

    },
    'mouseleave div.dropdown.open ': function (e, template) {
        $(e.target).stop(true, true).removeClass("open");
        $(e.target).children(".dropdown-menu").stop(true, true).hide('normal', "easeInOutCubic");

    },
//    "mouseenter .badge-downVote": function(e) {
//        $(e.target).switchClass("badge-warning", "badge-warning-reversed", 300);
//    },
//    "mouseleave .badge-downVote": function(e) {
//        $(e.target).switchClass("badge-warning-reversed", "badge-warning", 200);
//    },
//    "mouseenter .badge-upVote": function(e) {
//        $(e.target).switchClass("badge-success", "badge-success-reversed");
//    },
//    "mouseleave .badge-upVote": function(e) {
//        $(e.target).switchClass("badge-success-reversed", "badge-success");
//    },
    "click .slimboxPicture": function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var _convert = 640;
        if ($(window).width() < 640) {
            _convert = $(window).width() - 50;
        }
        jQuery.slimbox(e.target.parentElement.href + "/convert?w=" + _convert, e.target.parentElement.title);
    }
})