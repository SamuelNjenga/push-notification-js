const button = document.querySelector("button");

button.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      const notification = new Notification("Example notification", {
        body: "This is more text",
        data: {
          hello: "world",
        },
        icon: "glove_icon.png",
        tag: "Welcome Page",
      });
      notification.data;
      notification.addEventListener("close", (e) => {
        console.log(e);
      });
      notification.addEventListener("error", (e) => {
        alert("error");
      });
    }
  });
});

let notification;
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    notification = new Notification("Come back please", {
      body: "PLEASEEE",
      tag: "Come Back",
    });
  } else {
    notification.close();
  }
});
