import React from 'react';
import {Form, Button, Card} from 'react-bootstrap';

class SearchBar extends React.Component {
    render() {
        let test = [];

        for(let [key, value] of Object.entries(this.props.languages)) {
            for(let [key2, value2] of Object.entries(value)) {
                test.push(value2);
            }
        }
        let counts = {};
        let compare = 0;
        let mostFrequent;
        (function(array){
            for(let i = 0, len = array.length; i < len; i++) {
                let word = array[i];

                if(counts[word] === undefined) {
                    counts[word] = 1;
                } else {
                    counts[word] = counts[word] + 1;
                }
                if(counts[word] > compare){
                    compare = counts[word];
                    mostFrequent = test[i];
                }
            }
                return mostFrequent;
        })(test);
        return (
            <div className="w-50 text-center mx-auto p-3 mt-2">
                <Card>
                    <Card.Title>GitHub Guess</Card.Title>
                <Form onSubmit={this.props.handleSubmit}>
                    <Form.Group >
                        <Form.Control type="Search" placeholder="Enter Github Username" onChange={this.props.searchInput}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                {
                    this.props.hidden ? 
                    <Card.Text>
                    </Card.Text> :
                    <Card.Text>
                        I Guess your favourite language is {mostFrequent}
                    </Card.Text>
                }

                </Card>
            </div>
        )
    }
}

export default SearchBar