import React from "react";
import "./style.css";
import Card from '../Card';

class ListHeader extends React.Component {

    state = {
        sortedEmployees: [],
    }

    componentDidMount() {
        if (this.state.sortedEmployees.length < 1) {
            this.setState({
                sortedEmployees: this.props.empList
            })
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.empList !== prevProps.empList) {
            this.setState({
                sortedEmployees: this.props.empList
            })
        }
    }

    render() {
        return (

            <div>
                {
                    this.state.sortedEmployees.length > 0 &&
                    this.state.sortedEmployees.map((item, index) => (
                            <Card
                                image={item.picture.large}
                                first={item.name.first}
                                last={item.name.last}
                                title={item.name.title}
                                phone={item.cell}
                                email={item.email}
                            />
                    ))
                }
            </div>
        );
    }
}

export default ListHeader;