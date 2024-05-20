const PORT = process.env.NEXT_PUBLIC_LOCAL_STRAPI_PORT || "http://127.0.0.1:1337";

export default function CreateUrl(path){
    return `${PORT}${path}`;
}