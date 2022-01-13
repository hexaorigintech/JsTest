# Edsson code assignment
Frontend javascript test

## Getting started
1. Clone this repository locally in the regular way
3. Install dependencies using `yarn install`
3. Run project in dev mode `yarn dev`

This starts the NextJS development server on http://localhost:3000.

### API requests
In `/search`, you'll find two pages of search, one for server side rendering and one for client side rendering:
- Server side - http://localhost:3000/search-server-side  (Fetch data befor and render on server side)
- Client side - http://localhost:3000/search-clinet-side  (Fetch the data as the page is rendered in the browser)

## Preview:
![alt text](https://github.com/hexaorigintech/JsTest/blob/main/public/product-search.png)

Bonus Done: Overall style improved using tailwind css.

### Performance issues
On `/profile` page there is wait(25) to make input response slow, according to instructions we don't have to remove wait(25)

In `FormInput.tsx`, I have replace `onInput` with `onChange` as onInput renders very time we write something in input and makes overall response slow.

### Button component
I have created a page `http://localhost:3000/button` where you can see how button is designed using tailwindcss.
Also Button takes color, size and icon option from props. We can pass the props to create different variants of Button.
