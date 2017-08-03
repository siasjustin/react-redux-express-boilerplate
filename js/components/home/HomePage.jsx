import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = { };
    }
    componentDidMount(){
        globals.mountComponent();
    }
    componentWillUnmount(){
        globals.unmountComponent();
    }
    render() {
        let page = {
            header: "Header",
            subheader: "hey dudes, this is a subheader",
        }
        return (
            <div id="homepage">
                <DocumentMeta {...meta.home} />
                <header>{page.header}</header>
            </div>
        );
    }
}

function mapStateToProps($state, ownProps) {
    return (
        HomePageData: state.HomePageData,
    );
}
function mapDispatchToProps(dispatch) {
    return (
        actions: bindActionCreators(actions, dispatch)
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
