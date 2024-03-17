import prisma from "@/utils/connect";
import { NextResponse } from 'next/server';

export const GET = async (req) => {
  try {
    const topPosts = await prisma.post.findMany({
      take: 5, // Limit to the top 5 posts
      orderBy: {
        views: 'desc', // Order by views in descending order (you can modify this based on your criteria)
      },
      include: {
        category: true, // Include related category information if needed
        user: true, // Include related user information if needed
        comments: true, // Include related comments information if needed
      },
    });

    return new NextResponse(JSON.stringify(topPosts), { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }),
      { status: 500 }
    );
  }
};