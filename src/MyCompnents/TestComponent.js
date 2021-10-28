import React from 'react'
class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0
        }
    }

    componentDidMount() {
        this.refs.mydiv.addEventListener('click', this.clickhandler);
    }

    componentWillUnmount() {
        this.refs.mydiv.removeEventListener('click', this.clickhandler);
    }

    clickhandler() {
        this.setState({
            clicks: this.clicks + 1
        });
    }

    render() {
        let children = this.props.children;
        return (
            <div ref="mydiv">
                <h2>My component ({this.state.clicks})</h2><h3>{this.props.headerText}</h3>
                {children}
            </div>
        );
    }
}
export default TestComponent;