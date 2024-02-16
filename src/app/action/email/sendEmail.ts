"use server";

import { Resend } from "resend";
import { CreateEmailOptions, CreateEmailRequestOptions } from "resend/build/src/emails/interfaces";

const resend = new Resend('re_7XGjWAR7_LAwxANrg58WonyNYfFWGUsHG');

export const sendEmail = async (payload: CreateEmailOptions, options?: CreateEmailRequestOptions | undefined) => {
    const data = await resend.emails.send(payload, options);
    console.log("Email sent successfully")
    return data;
}