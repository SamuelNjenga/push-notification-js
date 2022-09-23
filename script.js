const button = document.querySelector("button");

button.addEventListener("click", () => {
  const notification = Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      new Notification("Example notification", {
        body: "This is more text",
        data: {
          hello: "world",
        },
      });
    }
  });
  notification.data;
});
