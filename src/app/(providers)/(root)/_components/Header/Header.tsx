import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";
import HomeIcon from "./home.svg";

type HeaderProps = {
  title: string;
} & PropsWithChildren;

function Header({ title, children }: HeaderProps) {
  return (
    <header className="p-4 flex flex-row justify-between items-center">
      <span className="relatve cursor-pointer">
        <Link href="/">
          <Image src={HomeIcon} alt="홈 아이콘" width={30} height={30} />
        </Link>
      </span>
      <h2 className="text-2xl">{title}</h2>
      <span>{children}</span>
    </header>
  );
}

export default Header;
