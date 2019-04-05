class Main extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
      return (
        <div className="central">
            <div className="main">
                <div className="row">
                    <div className="offset-md-4 col-md-4 offset-sm-2 col-sm-8">
                        <p className="basic-text">
                            STORIES
                        </p>
                    </div>
                </div>
                <div className="row">
                    <Learn />
                </div>
            </div>
            <div className="container body-part">
                <div className="text-holder row">
                    <p className="subheading offset-md-2 col-md-8 offset-sm-1 col-sm-10">
                        COMMUNITY
                    </p>
                </div>
                <div className="text-holder row">
                    <p className="tagline offset-md-2 col-md-8 offset-sm-1 col-sm-10">
                        Share your stories with world as you travel through it!
                    </p>
                </div>
            </div>
            <div className="secondary">
            </div>
            <div className="container body-part">
                <div className="text-holder row">
                    <p className="subheading offset-md-2 col-md-8 offset-sm-1 col-sm-10">
                        DISCOVER
                    </p>
                </div>
                <div className="text-holder row">
                    <p className="tagline offset-md-2 col-md-8 offset-sm-1 col-sm-10">
                        The whole world is waiting!
                    </p>
                </div>
                <div className="text-holder row">
                    <Learn />
                </div>
            </div>
        </div>
      )
    }
};