"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menus = ["home", "about", "projects", "contact"];
  const router = useRouter();

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="fixed top-0 w-full"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="w-full pr-3 sm:hidden" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">Farrel Jaohari</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden w-full gap-10 sm:flex" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">Farrel Jaohari</p>
        </NavbarBrand>
        {menus.map((menu, i) => (
          <NavbarItem key={i}>
            <Link
              color="foreground"
              className="font-semibold capitalize"
              href={`#${menu}`}
            >
              {menu}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menus.map((menu, i) => (
          <NavbarMenuItem key={i}>
            <Button
              className="w-full bg-transparent font-semibold capitalize"
              onClick={() => {
                setIsMenuOpen(false);
                router.push(`#${menu}`);
              }}
              size="lg"
            >
              {menu}
            </Button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
