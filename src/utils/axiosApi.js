import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'https://web-api.vance.club/public/api' });


axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject((error.response && error.response.data) || 'Wrong Services');
    }
);

export const fetcherGet = async (args) => {
    const [url, config] = Array.isArray(args) ? args : [args];
    // const token= localStorage.getItem('token');

    try {
        const res = await axiosInstance.get(url, { ...config, headers: {
            "Content-Type": "application/json" }});
        if (res?.status !== 200) {
            throw new Error('Error fetching data (from utils/axiosInstance), Status Text: ', res.statusText);
        }
        return res?.data;
    } catch (error) {
        if (error.msg) {
            // Throw the error response so it can be handled in the calling function
            throw error.msg;
        } else {
            // Throw a generic error if there's no response
            throw new Error('Error fetching data (from utils/axiosInstance):', error);
        }
    }
};

export const fetcherPost = async (url, { body = {}} = {}) => {
    console.log('Post Request Body:', body)
    console.log('Post Request URL:', url)

    // const token= localStorage.getItem('token');

    try {
        const res = await axiosInstance.post(
            url,
            {
                ...body
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    // authorization: token
                }
            }
        );
        return res.data;
    } catch (error) {
        if (error.msg) {
            // Throw the error response so it can be handled in the calling function
            throw error.msg;
        } else {
            // Throw a generic error if there's no response
            throw new Error('Error fetching data (from utils/axiosInstance):', error);
        }
        
    }
};
