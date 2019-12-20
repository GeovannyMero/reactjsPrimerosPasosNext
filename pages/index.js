import Layout from '../pages/components/MyLayout';
import Link from 'next/link';

const PostLink = props => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);
function Blog () {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink title="Hello"/>
                <PostLink title="World"/>
            </ul>
        </Layout>
    );
}

export default Blog;