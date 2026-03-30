function Articles() {
    return (
        <div className="text-center font-bold font-google-sans text-3xl mt-20">
            <p>Want to learn more? Here are a variety of articles on imposter syndrome:</p>
            <br></br>
            <ul className="text-center font-google-sans text-2xl space-y-6" >
                <li><a href="https://ctl.stanford.edu/students/imposter-syndrome" style={{color: 'blue', textDecoration: 'underline'}}>* Stanford University</a></li>
                <li><a href="https://www.psychologytoday.com/us/blog/the-imposter-syndrome/201903/what-is-imposter-syndrome" style={{color: 'blue', textDecoration: 'underline'}}>*Psychology Today</a></li>
                <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5864271/" style={{color: 'blue', textDecoration: 'underline'}}>* National Center for Biotechnology Information</a></li>
                <li><a href="https://hbr.org/2022/05/impostor-syndrome-has-its-advantages" style={{color: 'blue', textDecoration: 'underline'}}>* Harvard Business Review</a></li>
                <li><a href="https://wellbeing.jhu.edu/blog/2022/04/06/an-honest-reflection-on-my-imposter-syndrome-and-self-doubt/" style={{color: 'blue', textDecoration: 'underline'}}>* Johns Hopkins University</a></li>

            </ul>
        </div>
    );


}

export default Articles;