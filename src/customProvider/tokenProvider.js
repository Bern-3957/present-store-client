const TOKEN_KEY = 'auth_token';

const setToken = (token) => {
    localStorage.setItem(
        TOKEN_KEY,
        JSON.stringify({
            value: token,
        })
    );
};


const getToken = () => {
    const storedToken = localStorage.getItem(TOKEN_KEY);
    return storedToken ? JSON.parse(storedToken) : null;
};

const removeToken = ()=> {
    localStorage.removeItem(TOKEN_KEY);
};

export { getToken, setToken, removeToken};
