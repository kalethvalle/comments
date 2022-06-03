import axios from "axios";

export const baseApi = () => {
    // baseApiCommentsList
    const baseApiCommentsList = `${process.env.REACT_APP_SERVER_GET_LIST_COMMENTS}`
    const axiosCommentsList = axios.create({
        baseURL: baseApiCommentsList
    })

    // baseApiComment
    const baseApiComment = `${process.env.REACT_APP_SERVER_GET_COMMENTS}`
    const axiosComment = axios.create({
        baseURL: baseApiComment
    })

    // baseApiCommentsCreate
    const baseApiCommentsCreate = `${process.env.REACT_APP_SERVER_POST_COMMENTS}`
    const axiosCommentsCreate = axios.create({
        baseURL: baseApiCommentsCreate
    })

    // baseApiCommentsUpdate
    const baseApiCommentsUpdate = `${process.env.REACT_APP_SERVER_PUT_COMMENTS}`
    const axiosCommentsUpdate = axios.create({
        baseURL: baseApiCommentsUpdate
    })

    return {
        axiosCommentsList,
        axiosComment,
        axiosCommentsCreate,
        axiosCommentsUpdate
    }
}