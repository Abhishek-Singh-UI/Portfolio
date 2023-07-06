import about_img from '../../../images/about.jpg';
function About_main() {
    return(
        <div className="content-body row">
            <div className="left col-6">
                <p className='banner-title'>I'm Abhishek Singh. I live in Bengaluru, where I design the future.
                </p>
                <p className='banner-description'>I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.</p>
            </div>
            <div className="right col-6">
                <img src={about_img} alt="cannot show image" />
            </div>
          
        </div>
    )
}
export default About_main;