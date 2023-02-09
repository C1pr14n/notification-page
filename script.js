"use strict";

const btn = document.querySelector(".header-btn");
const notifications = document.querySelectorAll(".notification");
const notificationNr = document.getElementById("notifications-number");

const unreadMessages = document.querySelectorAll(".unread");
const span = document.querySelectorAll(".bullet");

// Unread Notification
const unreadNotifications = Array.from(notifications).filter((el) =>
  el.classList.contains("notification-unread")
);
notificationNr.textContent = unreadNotifications.length;

// Mark all as read
btn.addEventListener("click", () => {
  notifications.forEach((el) => el.classList.remove("notification-unread"));
  notificationNr.textContent = 0;
  span.forEach((el) => el.classList.remove("dot"));
});
