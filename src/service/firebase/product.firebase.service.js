import Fb from "../../Fb";

export const get = async ()=>{
    const products = [];
    try {
        const conn = Fb.collection("products");
        const data = await conn.get();
        data.docs.map(item=>{
            const f = item.data();// day moi la du lieu cua tung product
            f.id = item.id;// nap them id vao san pham
            products.push(f);                 
        });
    } catch (error) {
        
    }
    return products;
}