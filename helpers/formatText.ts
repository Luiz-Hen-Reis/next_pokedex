export const toCapitalize = (text: string) => {
    let firstLetter = text.charAt(0).toUpperCase();
    let textWithoutFirstLetter = text.slice(1, text.length);

    let newText = `${firstLetter}${textWithoutFirstLetter}`

    return newText;
}