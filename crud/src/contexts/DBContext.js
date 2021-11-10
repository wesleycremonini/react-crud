import React, { useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'

const DBContext = React.createContext();

export function useDB() {
    return useContext(DBContext);
}

export function DBProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const postsRef = collection(db, "posts");


    async function createPost(typeValue, infoValue, assignedValue) {
        return await addDoc(postsRef, { type: typeValue, info: infoValue, status: "abertos", assigned: assignedValue,
            color: typeValue === 'Bug' ? "danger" : typeValue === "Tarefa" ? 'primary' : typeValue === 'Documentação' ? "dark" : "warning"
        })
    };
    
    async function editPost(postRef, typeValue, infoValue, assignedValue, statusValue) {
        const postDoc = doc(db, 'posts', postRef)
        return await updateDoc(postDoc, { type: typeValue, info: infoValue, status: statusValue, assigned: assignedValue,
            color: typeValue === 'Bug' ? "danger" : typeValue === "Tarefa" ? 'primary' : typeValue === 'Documentação' ? "dark" : "warning"
        })
    };

    async function deletePost(typeValue, infoValue, assignedValue) {
        return await deleteDoc(postsRef, { type: typeValue, info: infoValue, status: "abertos", assigned: assignedValue,
            color: typeValue === 'Bug' ? "danger" : typeValue === "Tarefa" ? 'primary' : typeValue === 'Documentação' ? "dark" : "warning"
        })
    };


    useEffect(() => {
        async function fetchPosts() {
            const data = await getDocs(postsRef);
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        fetchPosts();
        setLoading(false);
    }, [postsRef])
    

    const value = {
        posts,
        createPost,
        editPost,
        deletePost
    }

    return (
        <DBContext.Provider value={value}>
            {!loading && children}
        </DBContext.Provider>
    )
}
