//https://qiita.com/TakeshiNickOsanai/items/838c0f15c10a2270a109
//を参考にした。
//firebaseアカウントは保手濱の。
//プロジェクト名はBreadisBaked


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChRPsmCWWs1CD4VCjl4hm52YcQs2JneI8",
  authDomain: "breadisbaked-62f8f.firebaseapp.com",
  projectId: "breadisbaked-62f8f",
  storageBucket: "breadisbaked-62f8f.appspot.com",
  messagingSenderId: "322007044092",
  appId: "1:322007044092:web:c5fe921b55e25e283eec79",
  measurementId: "G-G78Q4QFY67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);