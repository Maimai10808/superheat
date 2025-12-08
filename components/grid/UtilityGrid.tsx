import React from "react";
import Image from "next/image";

export function UtilityGrid({
  imgsrc,
  imgbg,
  Title,
  Capacity,
  Power,
  Voltage,
  RecoveryRate,
  Dimension,
  Passiveincome,
}: {
  imgsrc: string;
  imgbg: string;
  Title: React.ReactNode;
  Capacity: React.ReactNode;
  Power: React.ReactNode;
  Voltage: React.ReactNode;
  RecoveryRate: React.ReactNode;
  Dimension: React.ReactNode;
  Passiveincome: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-10 ">
      {/* image */}
      <div className={`${imgbg}  rounded-3xl flex relative w-full h-[450px]  overflow-hidden `}>
        <Image
          src={imgsrc}
          fill={true}
          style={{ objectFit: "contain" }}
          alt="Picture of the author"
          className="relative z-0"
        />
      </div>

      {/* table */}
      <div className="w-full">
        <p className="font-section5-table-td">{Title}</p>
        <table className="w-full mt-5">
          <tbody className="">
            <tr className="border-b border-gray-600">
              <th className="text-left py-1 pr-6 font-section5-table-th">Capacity</th>
              <td className="text-left py-1 md:pl-20 pl-3 font-section5-table-td">{Capacity}</td>
            </tr>
            <tr className="border-b border-gray-600">
              <th className="text-left py-1 pr-6 font-section5-table-th">Power</th>
              <td className="text-left py-1 md:pl-20 pl-3 font-section5-table-td">{Power}</td>
            </tr>
            <tr className="border-b border-gray-600">
              <th className="text-left py-1 pr-6 font-section5-table-th">Voltage</th>
              <td className="text-left py-1 md:pl-20 pl-3 font-section5-table-td">{Voltage}</td>
            </tr>
            <tr className="border-b border-gray-600">
              <th className="text-left py-1 pr-6 font-section5-table-th">Recovery Rate</th>
              <td className="text-left py-1 md:pl-20 pl-3 font-section5-table-td">{RecoveryRate}</td>
            </tr>
            <tr className="border-b border-gray-600">
              <th className="text-left py-1 pr-6 font-section5-table-th">Dimension</th>
              <td className="text-left py-1 md:pl-20 pl-3 font-section5-table-td ">{Dimension}</td>
            </tr>
            <tr className="border-b border-gray-600">
              <th className="text-left py-1 pr-6 font-section5-table-th">Passive income</th>
              <td className="text-left py-1 md:pl-20 pl-3 font-section5-table-td">{Passiveincome}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
