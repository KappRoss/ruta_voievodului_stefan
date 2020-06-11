export const required = (value) => value ? '' : "!";

export const maxLengthCreator = (maxLength) => {
    return (value) => {
        if(value && value.length > maxLength) return `max ${maxLength} sym`;
    
        return undefined;
    } 
}


export const email = value =>
  !value || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? '!'
    : undefined
