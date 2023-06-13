import api3 from "../api3";

export const  getnow = async (limitt,skipp)=>{
    const url = `/v1/1699fc37-715d-4a4e-a61b-e5487f07d817`;    

    try { 
        const ts = await api3.get(url);
        return ts.data;
    } catch (error) {
        return {
            category:[],
            totall:100,
            limitt:30,
            skipp:0
        };
    }  
}
export const post = (category)=>{    

}

export const put = (category)=>{

}

export const deleteCategory = (category)=>{

}