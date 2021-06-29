import React, { useState, useEffect } from 'react';
import { Row, Form, Button, Col } from 'react-bootstrap';
const SearchForm = (props) => {
    const [searchText, setSearchText] = useState("");

    const onChangeHandler=(e)=>{
        let val=e.target.value;
        setSearchText(val);
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        props.getSearchText(searchText);
        setSearchText("");
    }
return(
    <Row>
        <Col>
            <Form onSubmit={onSubmitHandler}>
                <Form.Row className="d-flex justify-content-center">
                    <Form.Group controlId="TVShowName">
                        <Form.Control
                            placeholder="Enter TV show name"
                            value={searchText}
                            onChange={onChangeHandler} />
                    </Form.Group>
                </Form.Row>
                <Form.Row className="d-flex justify-content-center">
                <Button variant="primary" size="lg" type="submit">
                    Search!
                </Button>
                </Form.Row>
            </Form>
        </Col>
    
    </Row>
)


}
export default SearchForm;