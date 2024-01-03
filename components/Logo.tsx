import LogoImage from "@logos/black.svg";
import { AspectRatio } from "./ui/aspect-ratio";
import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/" className="overflow-hidden" prefetch={false}>
      <div className="flex items-center w-72 h-14">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image
            priority
            alt="Logo"
            src={LogoImage}
            className=" dark:filter dark:invert"
          />
        </AspectRatio>
      </div>
    </Link>
  );
}

export default Logo;
