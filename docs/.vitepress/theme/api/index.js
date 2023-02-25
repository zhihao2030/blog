const baseApi = import.meta.env.VITE_APP_API
const myRequest = async (url,options) => {
    const response = await fetch(baseApi + url,options)
    const data = await response.json();
    return data
}

export default myRequest
