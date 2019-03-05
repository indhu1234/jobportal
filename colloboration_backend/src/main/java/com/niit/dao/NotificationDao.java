package com.niit.dao;

import java.util.List;

import com.niit.model.Notification;

public interface NotificationDao
{
	void addNotification(Notification notification);
	List<Notification> getAllNotificationsNotViewed(String email);//glyphicon globe
	void updateNotificationViewedStatus(int notificationId);
	Notification getNotification(int id);
}
