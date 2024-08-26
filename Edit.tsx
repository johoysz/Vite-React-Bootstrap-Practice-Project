import {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {useNavigate} from 'react-router-dom';

const Edit = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();

    var index = Employees.map( function(e) {
        return e.id;
    }).indexOf(id);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        let em = Employees[index];
        em.Name = name;
        em.Age = age;    
        
        history('/');
    }
    useEffect(() => {
        setName(localStorage.getItem('Name') || '')
        setAge(localStorage.getItem('Age') || '')
        setId(localStorage.getItem('Id') || '')
    },[])

    return (
      <div>
            <Form className='d-grip gap-2' style={{margin:'15rem'}}>
                <Form.Group className='mb-3' controlId='formName'>
                    <Form.Control type='text' value={name} placeholder='Enter name' required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formAge'>
                    <Form.Control type='text' value={age} placeholder='Enter age' required onChange={(e) => setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button type='submit' onClick={(e) => handleSubmit(e)}>
                    Save Changes
                </Button>   
            </Form>
      </div>
     )
}

export default Edit;
