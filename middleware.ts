/*
 * @Descripttion: 
 * @version: 
 * @Author: poor-rain
 * @Date: 2024-07-07 19:45:20
 * @LastEditors: sueRimn
 * @LastEditTime: 2024-07-09 19:31:36
 */
import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  ignoredRoutes: ["/api/webhooks/clerk"],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};