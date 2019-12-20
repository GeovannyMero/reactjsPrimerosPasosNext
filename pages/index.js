import Layout from '../pages/components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

// const PostLink = props => (
//     <li>
//         <Link href={`/post?title=${props.title}`}>
//             <a>{props.title}</a>
//         </Link>
//     </li>
// );
// function Blog () {
//     return (
//         <Layout>
//             <h1>My Blog</h1>
//             <ul>
//                 <PostLink title="Hello"/>
//                 <PostLink title="World"/>
//             </ul>
//         </Layout>
//     );
// }
 const Index = props => (
     <Layout>
         <h1>Batman Tv Shows</h1>
         <ul>
             {props.shows.map(show => (
                 <li key={show.id}>
                     <Link href='/p/[i]' as="{`/p/${show.id}}">
                         <a>{show.name}</a>
                     </Link>
                 </li>
             ))}
         </ul>
     </Layout>
     
 );

 Index.getInitialProps = async function(){
         const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
         const data = await res.json();

         console.log(`Show data fetched. Count: ${data.length}`);
        return {
            shows: data.map(entry => entry.show)
        };
}


export default Index;