import Link from "next/link";
export default function SecondaryLink({ title, href, target }) {
  return (
    <Link
      className="bg-bronze py-5 px-7 rift font-bold text-2xl inline-block transition-all duration-300 hover:rotate-12 hover:bg-iron"
      href={href ? href : ""}
      target={target ? target : ""}>
      {title ? title : ""}
    </Link>
  );
}
