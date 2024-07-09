/*
 * @Descripttion: 
 * @version: 
 * @Author: poor-rain
 * @Date: 2024-07-07 19:45:20
 * @LastEditors: sueRimn
 * @LastEditTime: 2024-07-07 19:46:01
 */
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};