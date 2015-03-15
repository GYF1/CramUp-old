Template.cramupsignup.events({
  "submit ": function (e, template) {
    e.preventDefault();
    var _email = $('#sky-form4 .newEmail').val();
    var _password = $("#sky-form4 .newPassword").val();

    var _user = {
      "email": _email,
      "password": _password
    };

    console.log('_user');
    console.log(_user);
    var _id = Accounts.createUser(_user);

    Meteor.loginWithPassword(_email, _password, function (err) {
      console.log('err::');
      console.log(err);
      if (err) {
        Meteor.modal.error("TheBrain is confused<br/>Please make sure you are not trying to register account with the same email address again!")
      } else {
        Meteor.modal.hideClosestTo("#signUp");
        //Router.go("/");
      }
    });
  }
});
