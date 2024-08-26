import {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {v4 as uuidv4} from 'uuid';
import {useNavigate} from 'react-router-dom';

const Add = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    let history = useNavigate();

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const ids = uuidv4();
        let uniqueId = ids.slice(0,8);

        let a = name, b = age;

        Employees.push({id: uniqueId, Name: a, Age: b});

        history('/');
    }

    return (
        <div>
            <Form className='d-grip gap-2' style={{margin:'15rem'}}>
                <Form.Group className='mb-3' controlId='formName'>
                    <Form.Control type='text' placeholder='Enter name' required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formAge'>
                    <Form.Control type='text' placeholder='Enter age' required onChange={(e) => setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button type='submit' onClick={(e) => handleSubmit(e)}>
                    Submit
                </Button>   
            </Form>
        </div>
    )
}

export default Add;