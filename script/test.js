const getResource = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Ошибку по адресу ${url}, статус ошибки ${response}`);
    }

    return await response.json();
};
 
const sendData = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
    });
    
    if (!response.ok) {
        throw new Error(`Ошибку по адресу ${url}, статус ошибки ${response}`);
    }

    return await response.json();
};