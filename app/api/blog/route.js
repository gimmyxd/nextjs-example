import { NextResponse } from "next/server";
import { getBlog, updateBlog, deleteBlog } from "../../../utils/service";

export async function GET(req){
  try {
    const blogId = req.nextUrl.searchParams.get("blogId");
    const blog = await getBlog(blogId);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" });
    }

      return new NextResponse(JSON.stringify({ data: blog }), { status: 200 });

  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}

export async function PATCH(req){

  try {

    const body = await req.json();

    const blogId = req.nextUrl.searchParams.get("blogId");

    const blog = await getBlog(blogId);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" });
    }
      const updatedBlog = await updateBlog(blogId, body);
      return new NextResponse(JSON.stringify({ data: updatedBlog }), { status: 200 });

  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }


}

export async function DELETE(req){
  try{

    const blogId = req.nextUrl.searchParams.get("blogId");

    const blog = await getBlog(blogId);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" });
    }
      const res = await deleteBlog(blogId);
      return new NextResponse(JSON.stringify({ status: "ok", deleted: res }), { status: 200 });

  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
