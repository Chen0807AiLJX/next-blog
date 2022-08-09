/*
 * @Author: AiLjx
 * @Date: 2022-08-09 17:20:24
 * @LastEditors: AiLjx
 * @LastEditTime: 2022-08-09 19:07:32
 */
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
