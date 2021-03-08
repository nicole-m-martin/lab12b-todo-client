export const USER = 'USER'

export function getFromLocalStorage() {
    const user = localStorage.getItem(USER)
    if (user && user.token) return JSON.parse(user)

    return {
    id: '',
    email: '',
    token: ''
    }
  }

export function putInLocalStorage(user) {
    localStorage.setItem(USER, JSON.stringify(user));
  }

