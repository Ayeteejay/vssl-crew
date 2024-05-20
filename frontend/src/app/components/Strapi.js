export default async function getData(path){ 
    const PORT = process.env.NEXT_PUBLIC_LOCAL_STRAPI_PORT;
    const res = await fetch(
        `${PORT}${path}`,
        { 
        headers:{
            "Authorization":`bearer ${process.env.STRAPI_API_KEY}`,
        },
        cache: "no-store",
        }
    );
    if (!res.ok) {    
        throw new Error("Error on data fetching!");
    }
    const jsonRes = await res.json();  
    return jsonRes.data.attributes;
}