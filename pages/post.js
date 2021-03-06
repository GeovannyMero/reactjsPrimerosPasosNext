import { useRouter } from 'next/router';
import Layout from '../pages/components/MyLayout';

const Page = () => {
    const router = useRouter();

    return (
        <Layout>
            <h1>{router.query.title}</h1>
            <p>This is the Blog</p>
        </Layout>
    );
}
export default Page;