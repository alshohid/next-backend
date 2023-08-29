 import { NextResponse } from "next/server";
 export async function GET(request,response){
    const {searchParams}=  new URL(request.url)
    const name= searchParams.get("name")
    const email = searchParams.get("email")
    const id = searchParams.get("id")

    return NextResponse.json({msg:id,name:name,email:email})
 }
 export async function POST(request,response){
    return NextResponse.json({msg:"I am Post Method "})
 }