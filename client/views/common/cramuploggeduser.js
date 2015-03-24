Template.cramuploggeduser.events({
    "click #logOut": function (e, template) {
        e.preventDefault();
        Meteor.logout();
        Router.go('/cramupindex');
    }
});

Template.cramuploggeduser.user = function () {
    return Meteor.user();
};

Template.cramuploggeduser.events({
    'mouseenter .theme-colors > li > span ': function (e) {
        var $el = $(e.target),
            body = $('body');
        body.attr("class", "").addClass("theme-" + $el.attr("class"));
    },
    'mouseleave .theme-colors > li > span ': function (e) {
        var $el = $(e.target),
            body = $('body');
        if (body.attr("data-theme") !== undefined) {
            body.attr("class", "").addClass(body.attr("data-theme"));
        } else {
            body.attr("class", "");
        }
    },
    'click .theme-colors > li  > span ': function (e) {
        var $el = $(e.target);
        $("body").addClass("theme-" + $el.attr("class")).attr("data-theme", "theme-" + $el.attr("class"));
    }
})
