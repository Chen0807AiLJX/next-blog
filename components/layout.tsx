/*
 * @Author: AiLjx
 * @Date: 2022-08-08 16:20:48
 * @LastEditors: AiLjx
 * @LastEditTime: 2022-08-09 16:37:29
 */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "Ailjx";
export const siteTitle = "Ailjx Blog";

interface Props {
    children: React.ReactNode;
    home?: boolean;
}

export default function Layout({ children, home }: Props) {
    return (
        <div className='max-w-2xl mx-auto px-4 mt-12 mb-24'>
            <Head>
                <link rel='icon' href='/favicon.ico' />
                <meta name='description' content='AiljxBlog——Ailjx的博客' />
                <meta
                    property='og:image'
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name='og:title' content={siteTitle} />
                <meta name='twitter:card' content='summary_large_image' />
            </Head>
            <header className='flex flex-col items-center'>
                {home ? (
                    <>
                        <Image
                            priority
                            src='/images/author.jpg'
                            className='rounded-full'
                            height={144}
                            width={144}
                            alt={name}
                        />
                        <h1 className='text-5xl font-extrabold tracking-tighter my-4'>
                            {name}
                        </h1>
                    </>
                ) : (
                    <>
                        <Link href='/'>
                            <a>
                                <Image
                                    priority
                                    src='/images/author.jpg'
                                    className='rounded-full'
                                    height={108}
                                    width={108}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className='text-2xl my-4'>
                            <Link href='/'>
                                <a>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className='mt-12'>
                    <Link href='/'>
                        <a>← 返回首页</a>
                    </Link>
                </div>
            )}
        </div>
    );
}
