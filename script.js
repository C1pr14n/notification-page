"use strict";

const btn = document.querySelector(".header-btn");
const notifications = document.querySelectorAll(".notification");
const notificationNr = document.getElementById("notifications-number");

const unreadNotifications = Array.from(notifications).filter((el) =>
  el.classList.contains("notification-unread")
);

notificationNr.textContent = unreadNotifications.length;

btn.addEventListener("click", (e) => {
  notifications.forEach((el) => el.classList.remove("notification-unread"));
  notificationNr.textContent = 0;
});
