import connectMongoDB from "@/db/config";
import User from "@/models/user";
import { NextResponse } from "next/server";

interface RequestBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { name, email, password } = await request.json();

    await connectMongoDB(); // Connect to MongoDB
    await User.create({ name, email, password }); // Create a new topic

    return NextResponse.json({ message: "User Created" }, { status: 201 }); // Respond with success message and 201 status code
  } catch (error) {
    console.error("Error creating User:", error);
    return NextResponse.json(
      { message: "Error creating User" },
      { status: 500 }
    ); // Respond with error message and 500 status code
  }
}

export async function GET(): Promise<NextResponse> {
  try {
    await connectMongoDB(); // Connect to MongoDB
    const users = await User.find(); // Find all users

    return NextResponse.json({ users }, { status: 200 }); // Respond with users and 200 status code
  } catch (error) {
    console.error("Error fetching topics:", error);
    return NextResponse.json(
      { message: "Error fetching topics" },
      { status: 500 }
    ); // Respond with error message and 500 status code
  }
}

export async function DELETE(request: { nextUrl: URL }): Promise<NextResponse> {
  const id = request.nextUrl.searchParams.get("id");

  try {
    await connectMongoDB(); // Connect to MongoDB
    await User.findByIdAndDelete(id); // Find and delete the user by ID
    return NextResponse.json({ message: "User deleted" }, { status: 200 }); // Respond with success message
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { message: "Error deleting user" },
      { status: 500 }
    ); // Respond with error message
  }
}
