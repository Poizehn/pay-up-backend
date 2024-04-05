import "dotenv/config";
import crypto from "crypto";
import sql from "mysql2";
import express from "express";
console.log(process.env.TEST);
hello();
export function hello() {
	let x = crypto.randomBytes(12);
	console.log(x.toString("hex"));
	return "Hello World!";
}
