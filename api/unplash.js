import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID Ftd3BhzCBu92cUUDxGqpJzC3OEdc_0aG8EsKOCUGfcU"  
    }
})