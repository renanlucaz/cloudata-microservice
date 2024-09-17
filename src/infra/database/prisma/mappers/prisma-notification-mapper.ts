import { Notification } from '@app/entities/notification';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipient_id: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }
}
