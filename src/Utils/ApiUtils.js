import request from 'superagent'

const URL = 'https://nameless-refuge-82657.herokuapp.com/'

export async function signUp(email, password) {
  const response = await request 
    .post(`${URL}/auth/signup`)
    .send({ 
      email: email, 
      password: password })

  return response.body
}

export async function logIn(email, password) {
  const response = await request 
    .post(`${URL}/auth/signin`)
    .send({ 
       email: email,
       password: password })

  return response.body
}  

export async function newTodo(todo, token) {
  const response = await request
    .post(`${URL}/api/todos`)
    .set('Authorization', token)
    .send({ todo })

  return response.body
}

export async function doneTodo(todoId, token) {
  const response = await request
    .put(`${URL}/api/todos/${ todoId }`)
    .set('Authorization', token)

  return response.body;
}

export async function getAllTodo(token) {
  const response = await request
    .get(`${URL}/api/todos`)
    .set('Authorization', token)

  return response.body
}



