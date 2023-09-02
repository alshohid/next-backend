   import { NextResponse } from "next/server";
   export function middleware(req){
    if(req.nextUrl.pathname.startsWith("/api")){
        const res= NextResponse.next()
        res.headers.set("Asia-cup", "Bangladesh has gone")
       return res;
    }
   }