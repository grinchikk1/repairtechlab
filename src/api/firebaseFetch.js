import {
    setDoc,
    updateDoc,
    getDoc,
    getDocs,
    deleteDoc,
    doc,
    collection,
    Timestamp,
    addDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

// Реєстрація користувача
export const createUser = async (data) => {
    try {
        const docRef = doc(db, "User", `${data.email}`);
        await setDoc(docRef, {
            ...data,
            date: Timestamp.now(),
        });
        const response = await getDoc(docRef);
        const userData = response.data();
        userData.date = userData.date.toMillis();
        return userData;
    } catch (error) {
        throw new Error("Error create User:", error);
    }
};

// Отримання дані користувача
export const getUser = async (email) => {
    try {
        const response = await getDoc(doc(db, "User", email));
        return response;
    } catch (error) {
        throw new Error("Error get User:", error);
    }
};

// Отримання всіх зареєстрованих користувачів
export const getAllUsers = async () => {
    try {
        const response = await getDocs(collection(db, "User"));
        return response;
    } catch (error) {
        throw new Error("Error get all Users:", error);
    }
};

// Створення форми
export const addData = async (data) => {
    try {
        const response = await addDoc(collection(db, "form"), {
            ...data,
            date: Timestamp.now(),
        });
        return response;
    } catch (error) {
        throw new Error("Error add document:", error);
    }
};

// Отримання всіх даних форми
export const getData = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "form"));

        const formData = querySnapshot.docs.map((docForm) => ({
            id: docForm.id,
            data: docForm.data(),
        }));

        return formData;
    } catch (error) {
        throw new Error("Error get User:", error);
    }
};

// Оновлення форми
export const updateData = async (id, data) => {
    try {
        const docRef = doc(db, "form", id);
        const { date, ...updatedData } = data;
        await updateDoc(docRef, updatedData);
        return { id, data };
    } catch (error) {
        throw new Error("Error updating document:", error);
    }
};

// Видалення форми за id
export const deleteData = async (id) => {
    try {
        const docRef = doc(db, "form", id);
        await deleteDoc(docRef);
    } catch (error) {
        throw new Error("Error deleting document:", error);
    }
};
