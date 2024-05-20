import { v4 as uuidv4 } from "uuid";

export const H1 = ({ data }) => (
  <h1
    className={`transition-all duration-500 absolute z-20 gin-regular text-7xl sm:text-8xl ${data.classes}`}>
    {data.header}
    <span className="text-bronze absolute top-[1px] left-0 gin-lines opacity-90">
      {data.header}
    </span>
  </h1>
);

export const H2 = ({ data }) => (
  <h2 className={`wilson-wells text-6xl ${data.classes}`}>{data.header}</h2>
);

export const H4 = ({ data }) => (
  <h4 className={`gin-regular text-5xl ${data.classes}`}>{data.header}</h4>
);

export const AccentuatedText = ({ data }) => {
  return (
    <div
      className={`relative elza text-xl leading-7 pl-12 before:content-[''] before:w-10 before:block before:absolute before:left-0 before:top-3 before:h-[1px] ${data.classes}`}>
      {data.content.map((item, index) => {
        return (
          <p
            key={uuidv4()}
            className={`${index + 1 !== data.content.length ? "mb-6" : null}`}>
            {item.children[0].text}
          </p>
        );
      })}
    </div>
  );
};

export const StandardText = ({ data }) => {
  return (
    <div className={`relative elza ${data.classes}`}>
      {data.content.map((item, index) => {
        return (
          <p
            key={uuidv4()}
            className={`${index + 1 !== data.content.length ? "mb-6" : null}`}>
            {item.children[0].text}
          </p>
        );
      })}
    </div>
  );
};

export const QuoteText = ({ data }) => (
  <p
    className={`wilson-wells text-3xl md:text-5xl text-bronze text-center animate-drift mt-10 md:mt-0 ${data.classes}`}>
    {data.quote}
  </p>
);

export const Statistics = ({ data }) => {
  return (
    <div>
      <p className="gin-regular text-xl text-bronze">{data.subheader}</p>
      <p className="gin-regular text-5xl mb-3">{data.header}</p>
      <p className="elza text-xl leading-7">{data.content}</p>
    </div>
  );
};
