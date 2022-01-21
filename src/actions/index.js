export const addBlog = (blog,description,image) =>{
    return {
        type: 'CREATEBLOG',
        payload: [blog],
        para:[description],
        image:[image]
    }
}