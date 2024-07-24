import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const fethData = async () => {
  const res = await fetch("https://test-api-py77dwlbxa-df.a.run.app/data");
  return res.json();
}

interface resultType {
  name: string;
  code: string;
  createDate: string;
  verifyBy: string;
  verifyDate: string;
  status: string;
}

const statusMap = [
  "bg-blue-500",
  "bg-rose-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-amber-500",
  "bg-slate-500",
  "bg-orange-500",
];

const ECommerce: React.FC = async () => {
  const result = await fethData() as resultType[];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ชื่อหน่วยงาน</TableHead>
          <TableHead className="text-center">รหัสหน่วยบริการ</TableHead>
          <TableHead className="text-center">วันที่ขึ้นทะเบียน</TableHead>
          <TableHead className="text-center">ชื่อผู้ตรวจสอบ</TableHead>
          <TableHead className="text-center">วันที่ตรวจสอบ</TableHead>
          <TableHead className="text-center">สถานะ</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {result.map((data, index) => (
          <TableRow key={data.name}>
            <TableCell>{data.name}</TableCell>
            <TableCell className="text-center">{data.code}</TableCell>
            <TableCell className="text-center">{data.createDate}</TableCell>
            <TableCell className="text-center">{data.verifyBy}</TableCell>
            <TableCell className="text-center">{data.verifyDate}</TableCell>
            <TableCell className="text-center">
              <div className={cn(
                "py-1 rounded-full text-white",
                statusMap[index]
              )}>{data.status}</div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ECommerce;
