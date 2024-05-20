import CreateUrl from "./Port";

export const Landscape = ({ data }) => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-72 md:h-80"
      style={{ backgroundImage: `url(${CreateUrl(data.src)})` }}></div>
  );
};
