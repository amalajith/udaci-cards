import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

export const CARD_STORAGE_KEY = 'UdaciCards:card'
const NOTIFICATION_KEY = 'UdaciCards:notifications'

const createNotification = () => {
    return {
        title: 'Take Quiz',
        body: "Hi, don't forget to take a quiz today!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

export const setLocalNotification = () => {

    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(results => JSON.parse(results))
        .then((data) => {

            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()
                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(0)
                            tomorrow.setMinutes(40)
                            // console.log(createNotification())
                            // Notifications.presentLocalNotificationAsync(createNotification())
                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            )
                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}

export const clearLocalNotification = () => {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}