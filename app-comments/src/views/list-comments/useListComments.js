import React from "react";
import { useRouting } from '../../utilities/useRouting';
import { apiCommentsList } from '../../services/apiCommentsList';

export const useListComments = () => {
    const { routingTo } = useRouting();
    const { getListComments } = apiCommentsList();
    const [comments, setComments] = React.useState([]);

    React.useEffect(() => {
        initComments();
    }, []);

    const initComments = async () => {
        try {
            const data = await getListComments();
            return setComments(data.data.comments)
        } catch (err) {
            setComments([])
            return console.error(err);
        }
    }

    const editComment = (id) => {
        return routingTo(`/comentarios/edicion/${id}`);
    }

    return {
        comments,
        editComment
    }
}