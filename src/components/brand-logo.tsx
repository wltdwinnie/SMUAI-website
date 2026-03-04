import Image from "next/image";

export default function BrandLogo() {
  return (
    <Image
      src="/brand/smuai_white_logo.png"
      alt="SMUAI"
      width={140}
      height={44}
      priority
    />
  );
}
