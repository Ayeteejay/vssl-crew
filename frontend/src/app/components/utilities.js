export const Divider = () => {
    return (
        <hr className="border-stone-700 mb-14 mt-16 md:mb-20"/>
    )
}
export const SmokeNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="absolute -top-7 left-10 group h-[25px] w-[25px] cursor-pointer">
            <span className="w-3 h-[1px] bg-smoke block absolute top-1 -right-[9px] -rotate-45 transition-all duration-400 group-hover:bg-bronze"></span>
            <span className="w-3 h-[1px] bg-smoke block absolute -top-1 -right-[9px] rotate-45 transition-all duration-400 group-hover:bg-bronze"></span>
            <span className="w-8 h-[1px] bg-smoke block transition-all duration-400 group-hover:bg-bronze"></span>
        </div>
    );
}

export const InkNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="absolute -top-7 left-10 group h-[25px] w-[25px] cursor-pointer">
            <span className="w-3 h-[1px] block absolute top-1 -right-[9px] -rotate-45 transition-all duration-400 bg-ink group-hover:bg-bronze"></span>
            <span className="w-3 h-[1px] block absolute -top-1 -right-[9px] rotate-45 transition-all duration-400 bg-ink group-hover:bg-bronze"></span>
            <span className="w-8 h-[1px] block transition-all duration-400 bg-ink group-hover:bg-bronze"></span>
        </div>
    );
}

export const SmokePreviousArrow = (props) => {
    const {onClick } = props;    
    return (
        <div onClick={onClick} className="absolute -top-7 left-0 group h-[25px] w-[25px] cursor-pointer">
            <span className={`w-3 h-[1px] block absolute top-1 -left-[2px] rotate-45 transition-all duration-400 bg-smoke group-hover:bg-bronze`}></span>
            <span className={`w-3 h-[1px] block absolute -top-1 -left-[2px] -rotate-45 transition-all duration-400 bg-smoke group-hover:bg-bronze`}></span>
            <span className={`w-8 h-[1px] block transition-all duration-400 bg-smoke group-hover:bg-bronze`}></span>
        </div>
    );
}

export const InkPreviousArrow = (props) => {
    const {onClick } = props;    
    return (
        <div onClick={onClick} className="absolute -top-7 left-0 group h-[25px] w-[25px] cursor-pointer">
            <span className={`w-3 h-[1px] block absolute top-1 -left-[2px] rotate-45 transition-all duration-400 bg-ink group-hover:bg-bronze`}></span>
            <span className={`w-3 h-[1px] block absolute -top-1 -left-[2px] -rotate-45 transition-all duration-400 bg-ink group-hover:bg-bronze`}></span>
            <span className={`w-8 h-[1px] block transition-all duration-400 bg-ink group-hover:bg-bronze`}></span>
        </div>
    );
}
