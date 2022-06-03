import { baseApi } from './baseApi';

export const apiCommentsList = () => {
    const { axiosCommentsList, axiosComment, axiosCommentsCreate, axiosCommentsUpdate } = baseApi();

    const getListComments = async () => {
        try {
            const data = await axiosCommentsList.get(`${axiosCommentsList.defaults.baseURL}`)
            return data;
        } catch (err) {
            return console.error(`Error in get list comments ${err}`);
        }
    }

    const getComment = async (id) => {
        try {
            const data = await axiosComment.get(`${axiosComment.defaults.baseURL}/${id}`);
            return data;
        } catch (e) {
            return console.error(`Error in get comment ${e}`);
        }
    };

    const postComments = async (dataPost) => {
        try {
            const { data } = await axiosCommentsCreate.post(`${axiosCommentsCreate.defaults.baseURL}`, dataPost);
            return data;
        } catch (e) {
            return console.error(`Error in post comment ${e}`);
        }
    };

    const putComment = async (dataPut) => {
        try {
            const { data } = await axiosCommentsUpdate.put(`${axiosCommentsUpdate.defaults.baseURL}/${dataPut._id}`, dataPut);
            return data;
        } catch (e) {
            return console.error(`Error in post comment ${e}`);
        }
    };
    return {
        getListComments,
        getComment,
        postComments,
        putComment
    }
}