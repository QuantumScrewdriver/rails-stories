class Sidebar extends React.Component {
    constructor(props){
        super(props);
    };

    generateMenu() {
        document.getElementById("menu").classList = "show";
    }

    hideMenu() {
        document.getElementById("menu").classList = "hide";
    }

    render() {
        return (
            <div className="central">
                <div className="header">
                    <button className="menu-holder" onMouseDown={this.generateMenu} >
                        <img src={this.props.menu} className="menu-button" />
                    </button>
                </div>
                <div className="hide" id="menu">
                    <button className="menu-hider" onMouseDown={this.hideMenu}>
                        <img src={this.props.hide} className="menu-button" />
                    </button>
                    <List />
                </div>
            </div>
        )
    }
}