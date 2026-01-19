import './blog.css';
import Article1 from './articles/Article1';
import Article2 from './articles/Article2';
import Article3 from './articles/Article3';

function Blog() {
	return(
		<div className='blog'>
			<div className="container">
				<div className="blog__title">From the blog</div>
				<div className="blog__grid">
					<Article1/>
					<Article2/>
					<Article3/>
				</div>
			</div>
		</div>
	)
}

export default Blog;