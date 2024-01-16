import { test, expect } from '@playwright/test'

test("Contract - GET crocodiles", async ({ request }) => {
  const response = await request.get("/public/crocodiles/", {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const responseBody = await response.json()
  console.log(await response.json())
  expect(response.status()).toBe(200)
  expect(typeof responseBody[0].id).toBe('number')
  expect(typeof responseBody[0].name).toBe('string')
  expect(typeof responseBody[0].sex).toBe('string')
  expect(typeof responseBody[0].date_of_birth).toBe('string')
  expect(typeof responseBody[0].age).toBe('number')
})