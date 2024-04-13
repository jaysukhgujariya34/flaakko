import Connection from '@/db/config';
import User from '@/models/user';
import bcryptjs from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

Connection();

export const POST = async (NextRequest: Request) => {
  try {
    const body = await NextRequest.json();
    const { name, email, password} = body;

    if (!name || !email || !password) {
      return new Response("Name, Username and Password is required", {
        status: 401,
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return new Response("User already exist", { status: 400 });
    }

    const salt = await bcryptjs.genSalt(12);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return new Response("Signup successful! Welcome flaakko!", { status: 200 });
  } catch (error) {
    console.log(error);
  }
};