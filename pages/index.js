import Layout from '../pages/components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

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


// const PostLink = props => (
//     <li>
//       <Link href="/p/[id]" as={`/p/${props.id}`}>
//         <a>{props.id}</a>
//       </Link>
//     </li>
//   );
  
//   function Blog() {
//     return (
//       <Layout>
//         <h1>My Blog</h1>
//         <ul>
//           <PostLink id="hello-nextjs" />
//           <PostLink id="learn-nextjs" />
//           <PostLink id="deploy-nextjs" />
//         </ul>
//       </Layout>
//     );
//   }


//  const Index = props => (
//      <Layout>
//          <h1>Batman Tv Shows</h1>
//          <ul>
//              {props.shows.map(show => (
//                  <li key={show.id}>
//                      <Link href='/p/[i]' as="{`/p/${show.id}}">
//                          <a>{show.name}</a>
//                      </Link>
//                  </li>
//              ))}
//          </ul>
//      </Layout>
     
//  );

//  Index.getInitialProps = async function(){
//          const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//          const data = await res.json();

//          console.log(`Show data fetched. Count: ${data.length}`);
//         return {
//             shows: data.map(entry => entry.show)
//         };
// }

// function getPosts(){
//     return [
//         { id: 'hello-next', title: 'hello next.js'},
//         { id: 'hello-next', title: 'hello next.js2'}
//     ]
// }

// const PostLink = ({ post }) => (
//     <li>
//       <Link href="/p/[id]" as={`/p/${post.id}`}>
//         <a>{post.title}</a>
//       </Link>
//     </li>
//   );

// export default function Blog(){
//     return(
//         <Layout>
//             <h1>My Blog</h1>
//             <ul>
//                 {getPosts().map(post => (
//                     <PostLink key={post.id} post={post} />
//                 ))}
//             </ul>
//             <style jsx>{
//                 `
//                 h1,
//                 a{
//                     font-family: 'Arial';
//                 }
//                 ul{
//                     padding: 0
//                 }
//                 li {
//                     list-style: none;
//                     margin: 5px 0;
//                 }
//                 a{
//                     text-decoration: none;
//                     color: blue;
//                 }
//                 a:hover {
//                     opacity: 0.6;
//                 }
//                 `
//             }

//             </style>
//         </Layout>
//     )
// }

export default Blog;