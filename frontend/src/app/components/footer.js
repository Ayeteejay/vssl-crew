import getData from "./Strapi";

const currentYear = () => new Date().getFullYear();
export default async function Footer(){
    const data = await getData("/api/footer?populate=*");    
    return (
        <footer className="relative z-10">
          <div className="container mb-12">
              <div className="grid pb-10 md:mt-10 md:mb-10 md:grid-cols-2 border-b border-stone-700">
                  <h5 className="text-4xl wilson-wells mb-2 md:mb-0">{data.our_manifesto}</h5>
                  <p className="text-base leading-6 elza">{data.about_vssl}</p>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between">
                  <p className="text-lg wilson-wells text-stone-700 text-center mt-10 mb-2 md:mt-0 md:mb-0 md:text-left transition-all duration-700 hover:rotate-6"><a href={data.main_site.href} className="text-link" target={data.main_site.target}>{data.main_site.title}</a> &#8226; <a href={data.google_maps.href} className="text-link" target={data.google_maps.target}>{data.google_maps.title}</a></p>
                  <ul className="mt-3 md:mt-0 elza text-sm text-center md:text-right">
                      <li className="mb-1">&copy; {currentYear()} {data.legal}</li>
                      <li className="mb-1"><a href={data.privacy_policy.href} target={data.privacy_policy.target} className="text-link">{data.privacy_policy.title}</a> / <a href={data.terms_of_use.href} target={data.terms_of_use.target} className="text-link">{data.terms_of_use.title}</a></li>
                      <li><a href={data.contact.href} className="elza text-link">{data.contact.title}</a></li>
                  </ul>
              </div>
            </div>
        </footer>
    )
}