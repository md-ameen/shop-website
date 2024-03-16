import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore/lite";
import { db, storage } from '../../firebase';
import { getStorage, ref, getDownloadURL } from "firebase/storage";


const Product = () => {
  const [todos, setTodos] = useState([]);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "todos"));
        const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setTodos(newData);
        console.log(newData);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    const fetchImage = async () => {
      try {
        const storageRef = ref(storage, 'women-1.jpg');
        const url = await getDownloadURL(storageRef);
        setImageUrl(url);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchPost();
    fetchImage();
  }, []);

  return (
    <div className="product">
      {todos.map(item => (
        <div className="product__link" key={item.id}>
          <div className="product__container">
            <img className="product__image" src={imageUrl} alt="" />
            <div className="product__info">
              <h3>{item.title}</h3>
              <h3 className="product__price">${item.price}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
