import { test, expect } from '@playwright/test'
import { firstCrocodile } from '../data/firstCrocodile.js'
import { user } from '../data/user.js'
import { newUser } from '../data/newUser.js'

let accessToken: string;

test("GET method", async ({ request }) => {
  const response = await request.get("/public/crocodiles/", {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const responseBody = await response.json();
  console.log(await response.json());
  expect(response.status()).toBe(200);
  expect(responseBody[0]).toHaveProperty("id", firstCrocodile.id)
  expect(responseBody[0]).toHaveProperty("name", firstCrocodile.name)
  expect(responseBody[0]).toHaveProperty("sex", firstCrocodile.sex)
  expect(responseBody[0]).toHaveProperty("date_of_birth", firstCrocodile.date_of_birth)
  expect(responseBody[0]).toHaveProperty("age", firstCrocodile.age)
})

test("POST method", async ({ request }) => {
  const response = await request.post("/user/register/", {
    headers: {
      'Content-Type': 'application/json',
    },
    data: newUser,
  })

  console.log(await response.json())
  expect(response.status()).toBe(201)
  const responseBody = await response.json()
  expect(responseBody).toHaveProperty("username", newUser.username)
  expect(responseBody).toHaveProperty("first_name", newUser.first_name)
  expect(responseBody).toHaveProperty("last_name", newUser.last_name)
  expect(responseBody).toHaveProperty("email", newUser.email)
})

test("POST Token Obtain Pair and GET my crocodile", async ({ request }) => {
  const response = await request.post("/auth/token/login/", {
    headers: {
      'Content-Type': 'application/json',
    },
    data: user,
  })

  console.log(await response.json())
  expect(response.status()).toBe(200)
  expect(response.ok).toBeTruthy()
  const responseBody = await response.json()
  expect(responseBody.access).not.toBe('')
  expect(responseBody.refresh).not.toBe('')
  accessToken = responseBody.access
  console.log(accessToken)

  const secondResponse = await request.get("/my/crocodiles/", {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken,
    },
  })

  console.log('Bearer ' + accessToken)
  console.log(await secondResponse.json())
  expect(secondResponse.status()).toBe(200)
  expect(secondResponse.ok).toBeTruthy()
  const secondResponseBody = await secondResponse.json()
  console.log(secondResponseBody)
});