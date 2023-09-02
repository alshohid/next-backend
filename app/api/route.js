 import {NextResponse} from 'next/server'
  import {headers} from "next/headers"
 export async function  POST(req,res){
          return NextResponse.json({},
              {
                     status:200,
                     headers:{ 'Set-Cookie':`my-cookie = 123-ABN-XZY;path=/`

          }})
        
 }