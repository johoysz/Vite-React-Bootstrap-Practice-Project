import {Button, Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {Link,useNavigate} from 'react-router-dom';

const Home = () => {

    let history = useNavigate();
    
    const handleEdit = (id: string, name: string, age: string) => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Age', age);
        localStorage.setItem('Id', id);
    }

    const handleDelete = (id: string) => {
        var index = Employees.map( function(e) {
            return e.id;
        }).indexOf(id);
        Employees.splice(index,1);

        history('/');
    }

  return (
    <>
        <div style = {{margin:'10rem'}}>
            <div className="container mx-auto p-2">
                <h1>Student Record CRUD</h1>
            </div>
            <Table striped bordered hover size = 'sm'>
                <thead className="text-center">
                    <tr>
                        <th style={{width:'50%'}}>Name</th>
                        <th>Age</th>
                        <th style={{width:'20%'}}>Action</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {
                        Employees && Employees.length > 0 ?
                        Employees.map ((item) => {
                            return (
                                <tr key={item.Name}>
                                    <td>
                                        {item.Name}
                                    </td>
                                    <td>
                                        {item.Age}
                                    </td>
                                    <td>
                                        <Link to={'/edit'}>
                                            <Button onClick={() => handleEdit(item.id, item.Name, item.Age)}>Edit</Button>
                                        </Link>
                                        &nbsp;
                                        <Button className="btn btn-danger" onClick={() => { 
                                            if(window.confirm("Are you sure you want to delete this record?")) {     
                                                handleDelete(item.id) 
                                            }
                                        }}>Delete
                                        </Button>
                                    </td>
                                </tr>
                            )
                        }) : 'No record found'
                    }
                </tbody>

            </Table>
            <br/>
            <Link to={'/create'} className="d-grid gap-2 text-decoration-none">
                    <Button className="btn btn-success" size='lg'>
                        Add record
                    </Button>
            </Link>
        </div>
    </>
  )
}

export default Home;
