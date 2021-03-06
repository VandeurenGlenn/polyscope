Template.signIn.events({
  "submit [data-action=sign-in]": function(e) {
    var $form, email, pass;
    $form = $(e.target);
    if ($form[0].valid) {
      email = $form.find("#email").val();
      pass = $form.find("#password").val();
      return Meteor.loginWithPassword(email, pass, function(error) {
        if (error) {
          return console.log(error.reason);
        } else {
          return Router.go("home");
        }
      });
    }
  }
});
