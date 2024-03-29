require('dotenv').config();
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

type msgProps = {
    from: string,
    to: string | undefined,
    subject: string,
    text: string,
    html: string,
}

const gmailAdress = process.env.GMAIL_EMAIL_ADDRESS;
const password = process.env.GMAIL_APP_PASSWORD;

export async function POST(req: NextRequest) {
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
                rejectUnauthorized: false,
            },
        });

        await new Promise((resolve, reject) => {
            transporter.sendMail(msg, (err, info) => {
                transporter.close();
                if (err) {
                    reject('Failed to send email');

                } else {
                    resolve('Email successfully sent');
                }
            });
        });
        return new NextResponse(
            JSON.stringify({ success: true, message: 'Email successfully sent' }),
            { status: 200, headers: { 'content-type': 'application/json' } },
        );
    } catch (error) {
        return new NextResponse(
            JSON.stringify({ success: false, message: 'Internal server error' }),
            { status: 401, headers: { 'content-type': 'application/json' } },
        );
    }
};

export function GET() {
    try {
        const filePath = path.join(process.cwd(), '/public/documents/KosmalaMikolajCV.pdf');
        const fileName = 'KosmalaMikolajCV.pdf';
        const fileContent: Buffer = fs.readFileSync(filePath)
        return new NextResponse(
            fileContent,
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/pdf',
                    'Content-Disposition': `attachment; filename=${fileName}`
                }
            }
        )
    } catch (error) {
        console.error(error);
    }
};

