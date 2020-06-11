export const required = (value) => {
    if(value) return undefined

    return "*";
} 

export const maxLengthCreator = (maxLength) => {
    return (value) => {
        if(value && value.length > maxLength) return `max ${maxLength} sym`;
    
        return undefined;
    } 
} 