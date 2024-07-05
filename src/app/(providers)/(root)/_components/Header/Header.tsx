import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";
import HomeIcon from "./home.svg";

type HeaderProps = {
  title: string;
  hidden?: boolean;
} & PropsWithChildren;

function Header({ title, hidden, children }: HeaderProps) {
  return (
    <header
      className={`px-4 py-6 mb-8 flex flex-row justify-center items-center ${
        hidden && "hidden"
      }`}
    >
      <span className="w-1/5 relatve cursor-pointer">
        <Link href="/">
          <Image src={HomeIcon} alt="홈 아이콘" width={30} height={30} />
        </Link>
      </span>
      <h2 className="w-3/5 text-2xl text-center">{title}</h2>
      <span className="w-1/5 flex justify-end">{children}</span>
    </header>
  );
}

export default Header;
