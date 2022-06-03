import { useNavigate } from "react-router-dom";

export const useRouting = () => {
    const navigate = useNavigate();
    
    const routingTo = (route) => {
        return navigate(route);
    };

    return { routingTo };
};