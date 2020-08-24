import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBn7knz7PsTX450tQubS02aHvC2fCCUR9Q',
  authDomain: 'notificationapp-9ae0a.firebaseapp.com',
  databaseURL: 'https://notificationapp-9ae0a.firebaseio.com',
  projectId: 'notificationapp-9ae0a',
  storageBucket: 'notificationapp-9ae0a.appspot.com',
  messagingSenderId: '364633048901',
  appId: '1:364633048901:web:339ee5cc25a7d04628602c',
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export function initNotification() {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
    if (permission === 'granted') {
      messaging
        .getToken()
        .then((currentToken) => {
          if (currentToken) {
            console.log('TOKEN');
            console.log(currentToken);
          } else {
            console.log(
              'No Instance ID token available. Request permission to generate one.'
            );
          }
        })
        .catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
        });
    }
  });
}

// export function configureNotification() {
//   Notification.requestPermission().then((permission) => {
//     console.log(permission);
//     if (permission === 'granted') {
//       messaging
//         .getToken()
//         .then((currentToken) => {
//           if (currentToken) {
//             sendTokenToServer(currentToken);
//             updateUIForPushEnabled(currentToken);
//           } else {
//             // show request permission
//             console.log(
//               'No Instance ID token available. Request permission to generate one'
//             );
//             // show permission UI.
//             updateUIForPushPermissionRequired();
//             setTokenSentToServer(false);
//           }
//         })
//         .catch((err) => {
//           console.log('An error occured while retrieving token. ', err);
//           showToken('Error retrieving Instance ID token. ', err);
//           setTokenSentToServer(false);
//         });
//     }
//   });
// }
