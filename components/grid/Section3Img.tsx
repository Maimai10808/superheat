import Image from "next/image";

export function Section3Img({ imgsrc }: { imgsrc: string }) {
  return (
    <div className="bg-white p-5 w-full h-[614px] relative overflow-hidden">
      <Image
        src={imgsrc}
        fill={true}
        style={{ objectFit: "contain" }}
        alt="Picture of the author"
        className="relative z-0"
      />
    </div>
  );
}
