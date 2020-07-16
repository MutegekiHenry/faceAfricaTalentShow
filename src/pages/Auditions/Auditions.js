import React, {useState} from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import firebase from 'firebase';
import Axios from 'axios';

function Auditions(props) {
    const [Email, setEmail] = useState('');
    const [Name, setName] = useState('');
    const [DateOfBirth, setDate] = useState('');
    const [Talent, setTalent] = useState('');
    const [Upload, setUpload] = useState('');
    
    const handleSubmit = event => {
        event.preventDefault();
      
        const data = { Email, Name, DateOfBirth,Talent, Upload};
      
        Axios.post('https://us-central1-ourprojectname.cloudfunctions.net/submit', data)
          .then(res => {
            if (firebase) {
              return firebase
                .database()
                .ref('contacts')
                .push(data);
            }
          })
          .catch(error => {
            console.log(error);
          });
      };
    return (
        <div>
            < Card style = {
                {
                    width: '20rem',
                    position: 'fixed',
                    top: 'auto',
                    left: '50%',
                    transform: 'translate(-50% , 50%)'
                }
            } >
                <Card.Body>
                        <Form onSubmit ={handleSubmit} >
                            <label>
                                Email
                            </label>
                            <br/>
                            <input
                                type="email"
                                placeholder = "someOne@something.com"
                                autoComplete = "off"
                                value = {Email}
                                onChange ={e => setEmail(e.target.value)}
                            />
                            <br/>
                            <label>
                                Name
                            </label>
                            <br/>
                            <input
                                type="text"
                                placeholder = "Full Name"
                                autoComplete = "off"
                                value = {Name}
                                onChange ={e => setName(e.target.value)}
                            />
                            <br/>
                            <label>
                                Date of Birth
                            </label>
                            <br/>
                            <input
                                type="date"
                                placeholder = "dd/mm/yyyy"
                                autoComplete = "off"
                                value = {DateOfBirth}
                                onChange ={e => setDate(e.target.value)}
                            />
                            <br/>
                            <label>
                                Talent Category
                            </label>
                            <br/>
                            <input
                                type="text"
                                placeholder = "Enter your talent"
                                autoComplete = "off"
                                value = {Talent}
                                onChange ={e => setTalent(e.target.value)}
                            />
                             <br/>
                             <label>
                                Upload Video
                            </label>
                            <br/>
                            <input
                                type="file"
                                autoComplete = "off"
                                value = {Upload}
                                onChange ={e => setUpload(e.target.value)}
                            />
                            <br/>
                            <br/>
                            <Button variant="primary" type="submit"> Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
export default withRouter(Auditions);