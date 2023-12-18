import { api } from '../services/api';

export const getPosts = async () => {
  const {data} = await api.get('/posts'); 
  
  if(data){
      console.log(data)
      return data;
  }

  return []
}

export const getPostBySlug = async (id) => {
  try {
    const { data } = await api.get(`/post/${id}`);

    if (data) {
      return data;
    }

    return {};
  } catch (error) {
    console.error(`Erro ao obter o post com ID ${id}:`, error);
    return {};
  }
};
