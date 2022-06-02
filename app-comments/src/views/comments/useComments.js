import * as React from "react";

export const useComments = () => {
    React.useEffect(() => {
        console.log('esto es lo primero que hace');;
    }, [])

    const createData = (name, email, webSite, comment) => {
        return { name, email, webSite, comment };
    }
    
    const rows = [
        createData('kaleth valle', 'kaleth@gmail.com', 'www.vallesoft.com', 24),
        createData('erika guevara', 'erika@gmail.com', 'www.vallesoft.com', 24),
        createData('angel valle', 'angel@gmail.com', 'www.vallesoft.com', 24),
        createData('addis valle', 'addis@gmail.com', 'www.vallesoft.com', 24),
        createData('edwin valle', 'edwin@gmail.com', 'www.vallesoft.com', 24),
        
    ];

    return {
        rows
    }
}