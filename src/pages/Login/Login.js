import React, {useState, useEffect} from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import firebase from 'firebase';
function Login(props) {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const login = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(Email, Password)
            .then(res => {
                localStorage.setItem( "isAuth" , "true" )
                props.history.push({
                    pathname: '/home',
                    state: { ...props , ...res }
                });
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        if (props.location.state !== undefined) {
            setEmail(props.location.state.Email);
            setPassword(props.location.state.Password);
        }
    }, [props.location.state])
    return (
        <div>
            < Card style = {
                {
                    position: 'fixed',
                    top: '10%',
                    left: '50%',
                    transform: 'translate(-50% , 50%)',
<<<<<<< HEAD
                    width: '30rem',
                    height: '30rem',
                    backgroundColor: 'rgb(151, 211, 151)'
=======
                    width: '20rem',
                    height: '20rem'
>>>>>>> e24e6ee28f80cc2313b33c370e13ecf9c4ed1ccc
                }
            } >
                <Card.Body>
                        <Form onSubmit= {login} >
                            <label>
                                Email
                            </label>
                            <br/>
                            <input
                                type="email"
                                placeholder = "someOne@something.com"
                                value = {Email}
                                onChange ={ e => setEmail(e.target.value)}
                                autoComplete = "off"
                            />
                            <br/>
                            <br/>
                            <label>
                                Password
                            </label>
                            <br/>
                            <input
                                type="password"
                                placeholder = "Password"
                                value = {Password}
                                onChange ={ e => setPassword(e.target.value)}
                                autoComplete = "off"
                            />
                            <br/>
                            <br/>
                            <Button variant="primary" type="submit"> Login</Button>
                    </Form>
                </Card.Body>
                <Card.Footer>
                    <span>Dont have an account? <Link to ="/signup">signup</Link> </span>
                </Card.Footer>
            </Card>
        </div>
    )
}
export default withRouter(Login);