import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBkPPTdniPFVszlmMnODqI7GDOovmWs-OE",
  authDomain: "wcms-6fcb2.firebaseapp.com",
  databaseURL: "https://wcms-6fcb2.firebaseio.com",
  projectId: "wcms-6fcb2",
  storageBucket: "wcms-6fcb2.appspot.com",
  messagingSenderId: "82466668974"
};

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;



// const database = firebase.database();

// database.ref('beef').on('value', (snapshot) => {
//   const beef = [];
//   snapshot.forEach((childSnapshot) => {
//     beef.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(beef);
// });

// database.ref('beef')
// .once('value')
// .then((snapshot) => {
//   const beef =[];
//   snapshot.forEach((childSnapshot) => {
//     beef.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(beef);
// });

// database.ref('lamb').push({
//      title: "Lamb Chops",
//      price: "$12",
//      image: "https://res.cloudinary.com/react-web/image/upload/w_150,c_scale,f_auto/v1502849220/wcms/lamb/Lamb_leg_chop.actual_white_background_f8zhtn"
// });
// database.ref('lamb').push({
//   title: "Lamb Leg",
//   price: "$9.50",
//   image: "https://res.cloudinary.com/react-web/image/upload/w_150,c_scale,f_auto/v1502849220/wcms/lamb/Lamb_leg_chop.actual_white_background_f8zhtn"
// });
// database.ref('beef').push({
//      title: 'Osso Buco',
//      price: '$6.99',
//      image: "http://res.cloudinary.com/react-web/image/upload/v1506167688/osso-bucco_a1tgyl.png"
// })
// database.ref('beef').push({
//      title: "Dolphin Shin",
//      price: "8.5",
//      image: "http://res.cloudinary.com/react-web/image/upload/v1506254240/wcms-placeholder_wpqwpj.png"
// })
//  database.ref().on('value', (snapshot) => {
//    console.log(snapshot.val());
//  });
// database.ref('lamb').on('value', (snapshot) => {
//   console.log(snapshot.val());
// });


// lamb: {
//   lambChops: {
//     title: "Lamb Chops",
//     price: "$12",
//     image: "https://res.cloudinary.com/react-web/image/upload/w_150,c_scale,f_auto/v1502849220/wcms/lamb/Lamb_leg_chop.actual_white_background_f8zhtn",
//   },
//   lambLeg: {
//     title: "Lamb Leg",
//     price: "9.5",
//     image: "https://res.cloudinary.com/react-web/image/upload/w_15,c_scale,f_auto/v1502849046/wcms/lamb/Lamb_leg_whole_zpu2ww"
//   }
// },
//   beef: {
//     ossoBuco: {
//     title: 'Osso Buco',
//     price: '$6.99',
//     image: "http://res.cloudinary.com/react-web/image/upload/v1506167688/osso-bucco_a1tgyl.png"
//   },
//   dolphinShin: {
//     title: "Dolphin Shin",
//     price: "8.5",
//     image: "http://res.cloudinary.com/react-web/image/upload/v1506254240/wcms-placeholder_wpqwpj.png"
//   }
//   }










// database.ref('notes').push({
//   title: 'Go for a poo',
//   body: 'Got the runs'
// });

// const firebaseNotes = {
//   notes: {
//     asdffasd: {
//       title: 'First Note',
//       body: 'This is my note'
//     }
//   }
// };

// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// })

// setTimeout(() => {
//   database.ref('benblocker/position').set('forward');
// }, 3500);

// database.ref('player/benblocker')
// .once('value')
// .then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// })
// .catch((e) => {
//   console.log('Error fetching data', e);
// })

// firebase.database().ref().set({
//   player: {
//     'benblocker': {
//       name: 'Ben Blocker',
//       number: 1,
//       position: 'G',
//       "contacts": {
//         "ghopper": true
//       }
//     },
//     'davedefender': {
//       name: 'Dave Defender',
//       number: 2,
//       position: 'D',
//       "contacts": {
//         "ghopper": true
//       }
//     },
//     'samsweeper': {
//       name: 'Sam Sweeper',
//       number: 3,
//       position: 'D',
//       "contacts": {
//         "ghopper": true
//       }
//     },
//     'mattmidfielder': {
//       name: 'Matt Midfielder',
//       number: 4,
//       position: 'M',
//       "contacts": {
//         "ghopper": true
//       }
//     },
//     'williamwinger': {
//       name: 'William Winger',
//       number: 5,
//       position: 'M',
//       "contacts": {
//         "ghopper": true
//       }
//     },
//     'fillipeforward': {
//       name: 'Fillipe Forward',
//       number: 6,
//       position: 'F',
//       "contacts": {
//         "ghopper": true
//       }
//     },
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed', e)
// });

// database.ref('player/').update({

// })

//database.ref('age').set(100);
//database.ref('location/country').set('United States');

// database.ref()
// .remove()
// .then(() => {
//   console.log('Data is removed');
// }).catch((e) => {
//   console.log('Did not remove data', e);
// });