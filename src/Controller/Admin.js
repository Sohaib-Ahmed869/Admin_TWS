// Desc: Admin Controller
const URL = process.env.REACT_APP_BACKEND_URL;
const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            resolve(reader.result.split(',')[1]);
        };

        reader.onerror = (error) => {
            reject(error);
        };

        reader.readAsDataURL(file);
    });
};

const getProducts = async () => {
    try {
        const productResponse = await fetch(`${URL}/admin/product`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `${localStorage.getItem('token')}`
            }
        });
        const productData = await productResponse.json();
        console.log(productData);
        if (productResponse.status === 200) {
            console.log("success");
            return productData.products;
        } else {
            console.log("error");
            return [];
        }

    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    convertBase64,
    getProducts
}

    