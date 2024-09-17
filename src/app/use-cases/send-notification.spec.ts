import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('shoud be able to send notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      category: 'Social',
      content: 'THis is a notification',
      recipientId: '123',
    });

    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
