import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { title, cover_img, reading_time, author_img, author, posted_date, hashtags, } = blog;
    return (
        <div className='mt-8'>
            <img src={cover_img} alt="" />
            <div className='flex justify-between items-center mt-4'>
                <div className='flex'>
                    <img className='w-[60px] h-[60px] rounded-full' src={author_img} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time}</span>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hashtag, index) => <span key={index} className='ml-2'><a href="">#{hashtag}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;