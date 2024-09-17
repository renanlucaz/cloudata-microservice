import type { Notification } from '@app/entities/notification';

export class NotificationViewModule {
  static toHHTP(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
    };
  }
}
