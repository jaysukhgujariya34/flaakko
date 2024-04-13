import Connection from '@/db/config';
import User from '@/models/user';
import bcryptjs from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

Connection();

export const POST = async (NextRequest: Request) => {
  try {
    const body = await NextRequest.json();
    const { email, password } = body;

    if (!email || !password) {
      return new Response("Username and Password is required", { status: 401 });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return new Response("Username does not exist", { status: 400 });
    }

    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return new Response("Incorrect Password", { status: 400 });
    }

    // Ensure process.env.JWT_SECRETKEY is defined
    if (!process.env.JWT_SECRETKEY) {
      throw new Error("JWT secret key is not defined");
    }

    // Assuming tokenData is your payload
     const tokenData = {
       email: user.email,
       id: user._id,
     };

    // Sign the token
    const token = jwt.sign(tokenData, process.env.JWT_SECRETKEY, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({ message: "Login successfull", token });

    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (error:any) {
    console.log("Error", error.message);
    return new Response("Something went wrong ", { status: 500 });
  }
};