// lib/utils/firebaseUtils.js
import { firestore } from '../firebase';

export const saveUserToFirestore = async (user) => {
  try {
    const userRef = firestore.collection('users').doc(user.id);
    await userRef.set({
      id: user.id,
      email: user.emailAddresses[0].emailAddress,
      firstName: user.firstName,
      lastName: user.lastName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });
    console.log('User saved to Firestore');
  } catch (error) {
    console.error('Error saving user to Firestore', error);
  }
};
