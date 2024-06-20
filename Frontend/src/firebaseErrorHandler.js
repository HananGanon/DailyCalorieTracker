// src/firebaseErrorHandler.js
export const firebaseErrorHandler = (error) => {
    console.error("Firebase error:", error.code, error.message);
    // הוסף כאן לוגיקה נוספת לטיפול בשגיאות, כמו הצגת הודעה למשתמש
  };
  