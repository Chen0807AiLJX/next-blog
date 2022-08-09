/*
 * @Author: AiLjx
 * @Date: 2022-08-08 15:28:03
 * @LastEditors: AiLjx
 * @LastEditTime: 2022-08-09 19:13:56
 */
import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import Date from "../components/date";

import { getSortedPostsData } from "../utils/posts";

interface Props {
    allPostsData: {
        date: string;
        title: string;
        id: string;
    }[];
}

const Home: NextPage<Props> = ({ allPostsData }) => {
    return (
        <Layout home>
            <div>
                <Head>
                    <title>{siteTitle}</title>
                </Head>

                <section className='text-xl leading-normal text-center'>
                    <p>你好，我是 Ailjx</p>
                    <p>一个又菜又爱玩的前端小白，欢迎来到我的博客！</p>
                </section>

                <section className='text-xl leading-normal pt-4'>
                    <h2 className=' text-2xl my-4 font-bold'>Blog</h2>
                    <ul>
                        {allPostsData.map(({ id, date, title }) => (
                            <li key={id} className='mb-5'>
                                <Link href={`/posts/${id}`}>
                                    <a>{title}</a>
                                </Link>
                                <br />
                                <small>
                                    <Date dateString={date} />
                                </small>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData,
        },
    };
};

export default Home;
