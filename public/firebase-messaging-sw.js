importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js'
);

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
firebase.messaging();

// Notification.requestPermission().then((permission)=>{console.log(permission)})
