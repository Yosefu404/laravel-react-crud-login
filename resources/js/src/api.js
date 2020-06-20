const axios = window.axios;

const BASE_API_URL = "http://localhost:8000/api";

export default {
    getAllPosts: () => axios.get("${BASE_API_URL}/posts"),
    getOnePosts: id => axios.get("${BASE_API_URL}/posts/${id}/edit"),
    addPost: id => axios.post("${BASE_API_URL}/posts", post),
    updatePost: id => axios.put("${BASE_API_URL}/posts/${id}", post),
    deletePost: id => axios.delete("${BASE_API_URL}/posts/${id}")
};
