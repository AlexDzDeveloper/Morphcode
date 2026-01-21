import './blog.css';
import Article1 from './articles/Article1';
import Article2 from './articles/Article2';
import Article3 from './articles/Article3';
import Article4 from './articles/Article4';
import Article5 from './articles/Article5';
import Article6 from './articles/Article6';

function Blog() {
	return(
		<div className='blog'>
			<div className="container">
				<div className="blog__title">From the blog</div>
				<div className="blog__grid">
					<Article1/>
					<Article2/>
					<Article3/>
					<Article4/>
					<Article5/>
					<Article6/>
				</div>
			</div>
		</div>
	)
}

export default Blog;