let socket = io();

socket.on("connect", () => {
  console.log("Connected to server");

  //   socket.emit("createMessage", {
  //     from: "WDJ",
  //     text: "Wats going on!",
  //   });
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});

socket.on("newMessage", function (message) {
  console.log("newMessage", message);
  let li = document.createElement("li");
  li.innerText = `${message.from}:${message.text}`;

  document.querySelector("body").appendChild(li);
});

socket.on("newLocationMessage", function (message) {
  console.log("newLocationMessage", message);
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.setAttribute("target", "_blank");
  a.setAttribute("href", message.url);
  a.innerText = "My current location";
  li.appendChild(a);

  document.querySelector("body").appendChild(li);
});

socket.emit(
  "createMessage",
  {
    from: "JJJJ",
    text: "Heyyyyy",
  },
  function (message) {
    console.log("Got it", message);
  }
);

document.querySelector("#submit-btn").addEventListener("click", function (e) {
  e.preventDefault();
  socket.emit(
    "createMessage",
    {
      from: "User",
      text: document.querySelector('input[name="message"]').value,
    },
    function () {}
  );
});

document
  .querySelector("#send-location")
  .addEventListener("click", function (e) {
    if (!navigator.geolocation) {
      return alert("Geoooooooooooooooooooo");
    }
    navigator.geolocation.getCurrentPosition(
      function (position) {
        socket.emit("createLocationMessage", {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      function () {
        alert("Unableeeeeeeeeeee");
      }
    );
  });
