
import { NextResponse } from "next/server";

export async function POST(_req: Request){
  return NextResponse.json({
    'GET/api/blogs': { enabled: true, visible: true },
    'POST/api/blog/1': {
      enabled: true,
      visible: true,
    },
    'POST/api/blog/2': {
      enabled: true,
      visible: true,
    },
    'POST/api/blog/3': {
      enabled: true,
      visible: true,
    },
    'POST/api/blog/4': {
      enabled: false,
      visible: false,
    },
    'POST/api/blog/5': {
      enabled: false,
      visible: true,
    },
  })
}

