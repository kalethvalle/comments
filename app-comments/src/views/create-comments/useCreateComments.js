import React from 'react';
import { useRouting } from '../../utilities/useRouting';
import { apiCommentsList } from '../../services/apiCommentsList';

import { useParams } from "react-router-dom";

export const useCreateComments = () => {
    const initialComment = {
        name: '',
        email: '',
        webSite: '',
        comment: ''
    }
    const { id } = useParams();
    const { routingTo } = useRouting();
    const { getComment, postComments, putComment } = apiCommentsList();
    const [update, setUpdate] = React.useState(false);
    const [comment, setcomment] = React.useState(initialComment);

    React.useEffect(() => {
        if (id) {
            getIdComment(id)
        }
    }, []);

    const getIdComment = async (idComment) => {
        try {
            const data = await getComment(idComment);
            setUpdate(true);
            return setcomment(data.data.comment)
        } catch (err) {
            console.error(err)
            return routingTo('/')
        }
    }

    const onChangeValues = (name, type, value) => {
        if (type === "input") {
            return setcomment({ ...comment, [name]: value });
        }
    };


    const saveComment = async () => {
        try {
            await postComments(comment);
            setcomment(initialComment);
            return routingTo('/')
        } catch (e) {
            return console.error(e);
        }
    }

    const updateComment = async () => {
        try {
            await putComment(comment);
            setcomment(initialComment);
            return routingTo('/')
        } catch (e) {
            return console.error(e);
        }
    }

    return {
        onChangeValues,
        saveComment,
        updateComment,
        comment,
        update
    }
}