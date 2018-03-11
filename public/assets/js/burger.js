// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devourButton").on("click", function(event) {
      
    var id = $(this).data("id");
    var devourStateChange = 1;

    var newDevourState = {
      devoured: devourStateChange,
      
    };

    // Send the PUT request.
    $.ajax("/api/burgers" + id, {
      type: "PUT",
      data: devourStateChange
    }).then(
      function() {
        console.log("changed sleep to ", newDevourState + id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  
  $(".create-form").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger= {
      burger_name: $("#burg").val().trim(),
      devoured: 0
    };
    console.log(newBurger);

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // $(".delete-cat").on("click", function(event) {
  //   var id = $(this).data("id");

  //   // Send the DELETE request.
  //   $.ajax("/api/cats/" + id, {
  //     type: "DELETE"
  //   }).then(
  //     function() {
  //       console.log("deleted cat", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
});
