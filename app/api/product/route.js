 import { NextResponse } from "next/server";
export async function GET (req,res){
  const token=  req.cookies.get('my-cookie ')
  return NextResponse.json({status:true, token:token})
}