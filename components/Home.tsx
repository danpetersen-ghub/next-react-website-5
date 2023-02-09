import firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const handleSignIn = () => {
    console.log("Clicky Click")
}


const Home = () => {
    return (
        <div>
            <h1>Welcome to my Next.js and Firebase website</h1>
            <button onClick={handleSignIn}>Sign in with Google</button>
        </div>
    )
}

export default Home
