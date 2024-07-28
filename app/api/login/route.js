import { NextResponse } from "next/server";
import axios from 'axios';

export async function POST(request) {    
    const body = await request.json();
    try {
        const response = await axios.post('http://localhost:5001/api/user/login', body);
        // console.log(response);
        const data = response.data;

        const nextResponse = NextResponse.json(data, {status: response.status});
        
        // nextResponse.headers.set('Authorization',`${data.authorization.scheme} ${data.authorization.authToken}`);
        return nextResponse;
    } catch (error) {
        return NextResponse.json(error.response.data, {status: error.response.status});
    }
}