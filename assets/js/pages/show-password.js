Array.from(document.querySelectorAll("form .auth-pass-inputgroup")).forEach(
  function (e) {
    Array.from(e.querySelectorAll(".password-addon")).forEach(function (r) {
      r.addEventListener("click", function () {
        var o = e.querySelector(".password-input");
        var icon = r.querySelector("i");

        if (o.type === "password") {
          o.type = "text";
          icon.classList.remove("ri-eye-fill");
          icon.classList.add("ri-eye-off-fill");
        } else {
          o.type = "password";
          icon.classList.remove("ri-eye-off-fill");
          icon.classList.add("ri-eye-fill");
        }
      });
    });
  }
);
// This code toggles the visibility of password fields in forms.
// It finds all elements with the class 'auth-pass-inputgroup' and adds a click event listener to the password addon.
// When the addon is clicked, it toggles the type of the password input between 'password' and 'text',
// and updates the icon accordingly to indicate whether the password is visible or hidden.
// The icons used are from the Remix Icon library, specifically 'ri-eye-fill' for visible passwords and 'ri-eye-off-fill' for hidden passwords.
// This allows users to easily view or hide their passwords as needed, enhancing usability while maintaining security.
