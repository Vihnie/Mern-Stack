import { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchPosts = async () => {
    const data = await api.get('/posts');
    setPosts(data);
  };

  const fetchCategories = async () => {
    const data = await api.get('/categories');
    setCategories(data);
  };

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, []);

  return (
    <PostContext.Provider value={{ posts, setPosts, categories }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => useContext(PostContext);
