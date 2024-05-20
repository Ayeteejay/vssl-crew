import getData from "./Strapi";
import Navigation from "./Navigation";

export default async function Header(){
    const data = await getData("/api/header?populate=*");
    return (
        <div className="relative z-40">
            <Navigation navigationItems={data.navigation_link}></Navigation>
        </div>
    )
}