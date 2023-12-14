require('dotenv').config();
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type msgProps = {
    from: string,
    to: string | undefined,
    subject: string,
    text: string,
    html: string,
}

const gmailAdress = process.env.GMAIL_EMAIL_ADDRESS;
const password = process.env.GMAIL_APP_PASSWORD;

export async function POST(req: NextRequest, res: NextResponse) {

    try {
        if (req.method !== 'POST') {
            throw new Error('Invalid HTTP method. Only POST is allowed.');
        }
        const { email, subject, message } = await req.json();

        const msg: msgProps = {
            from: email,
            to: gmailAdress,
            subject: subject,
            text: message,
            html: `<p>${message}</p>`,
        };

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: gmailAdress,
                pass: password,
            },
            tls: {
                rejectUnauthorized: true,
            },
        });

        transporter.sendMail(msg, (err, info) => {
            transporter.close();

            if (err) {
                return new NextResponse(
                    JSON.stringify({ success: false, message: 'Authentication failed' }),
                    { status: 401, headers: { 'content-type': 'application/json' } },
                );
            } else {
                return new NextResponse(
                    JSON.stringify({ success: true, message: 'Message successfully sent' }),
                    { status: 200, headers: { 'content-type': 'application/json' } },
                );
            }
        });
    } catch (error) {
        return new NextResponse(
            JSON.stringify({ success: false, message: 'Authentication failed' }),
            { status: 403, headers: { 'content-type': 'application/json' } },
        );
    }
   
    return new NextResponse(
        JSON.stringify({ success: true, message: 'Message successfully sent' }),
        { status: 200, headers: { 'content-type': 'application/json' } },
    );
};
