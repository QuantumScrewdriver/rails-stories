class About extends React.Component {
    render() {
        return (
            <div className="central">
                <div className="about">
                    <div className="row">
                        <div className="offset-md-4 col-md-4 offset-sm-2 col-sm-8">
                            <p className="basic-text">
                                STORIES
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container body-part">
                    <div className="text-holder row">
                        <p className="subheading offset-md-2 col-md-8 offset-sm-1 col-sm-10">
                            ABOUT
                        </p>
                    </div>
                    <div className="text-holder row">
                        <p className="tagline offset-md-2 col-md-8 offset-sm-1 col-sm-10">
                            A site where you can share your incredible experiences with the rest of the world!
                        </p>
                    </div>
                    <div className="row">
                        <div className="button-holder offset-md-4 col-md-4 offset-sm-2 col-sm-8">
                            <a className="button-learn" href="/signup">Sign Up Here</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}