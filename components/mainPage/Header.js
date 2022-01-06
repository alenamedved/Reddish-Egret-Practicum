import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
      <Image src="/images/logo.png " width={80} height={80} alt="logo" />
      <nav>
        <Link href={"/"}> Home </Link>
        <Link href={"/users/login"}> Login </Link>
        <Link href={"/users/join"}> JoinUs </Link>
      </nav>
    </header>
  );
};

export default Header;
