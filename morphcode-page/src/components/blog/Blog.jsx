import './blog.css';
import Article1 from './articles/Article1';

function Blog() {
	return(
		<div className='blog'>
			<div className="container">
				<div className="blog__title">From the blog</div>
				<Article1/>
			</div>
		</div>
	)
}

export default Blog;