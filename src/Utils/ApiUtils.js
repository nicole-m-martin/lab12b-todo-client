import request from 'superagent'

const URL = 'http://localhost:3000'

export async function signUp(email, password) {
  const response = await request 
    .post(`${URL}/auth/signup`)
    .send({ email, password })

  return response.body
}

export async function logIn(email, password) {
  const response = await request 
    .post(`${URL}/auth/login`)
    .send({ email, password })

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
      .put(`${URL}/api/todos/${todoId}`)
      .set('Authorization', token)

  return response.body;
}

