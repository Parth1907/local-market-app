import { NextResponse } from "next/server";
import axios from 'axios'

export async function POST(request: Request) {
    const body = await request.json();
    try {
        const response = await axios.post('http://localhost:5001/api/user/login');
        return NextResponse.json(response.data, {status: response.status});
    } catch (error: any) {
        return NextResponse.json(error.response.data, {status: error.response.status});
    }
}