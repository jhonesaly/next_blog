import { supabase } from '../services/api';

export const getPosts = async () => {
  
  const { data: posts, error } = await supabase
  .from('posts')
  .select('*')

  if (posts) {
    return posts;
  } else {
    return [error];
  }
}

export const getPostBySlug = async (id) => {
  try {
    const { data: post, error } = await supabase
      .from('posts')
      .select('*')
      .eq('id', id)
      .single();

    if (post) {
      return post;
    }

    return {};
  } catch (error) {
    console.error(`Erro ao obter o post com ID ${id}:`, error);
    return {};
  }
};
