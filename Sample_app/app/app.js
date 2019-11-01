$(document).ready(function() {
  app.initialized().then(function(_client) {
    var client = _client;
    client.events.on("app.activated", function() {
      $("#submit").on("click", function(e) {
        e.preventDefault();
        var name = $("#name").val();
        var age = $("#age").val();
        console.log(name, age);
        $("#form").hide();
        $("p").text("Welcome," + name + ". Your age is" + age);
      });
      //   client.iparams.get().then(
      //     function(data) {
      //       console.log(data);
      //       var dt = new Date();
      //       var year = dt.getFullYear();
      //       console.log(year);
      //       $("#apptext").text("Year:" + (year - data.Age));
      //     },
      //     function(error) {
      //       console.log(error);
      //       // failure operation
      //     }
      //   );
      // client.data.get('contact')
      //     .then(function(data) {
      //         $('#apptext').text("Ticket created by " + data.contact.name);
      //     })
      //     .catch(function(e) {
      //         console.log('Exception - ', e);
      //     });
    });
  });
});
