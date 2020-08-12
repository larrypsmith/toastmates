# Toastmates

[Toastmates Home Page](https://toastmates.herokuapp.com/#/)

![home-page](https://user-images.githubusercontent.com/55966501/89942908-36f71900-dbd2-11ea-8621-6cdaa00c06a0.PNG)

Toastmates is a clone of [Postmates](https://postmates.com), a courier service
that delivers food, drinks, groceries and more to your front door.

# Technologies

### Back End
* **Node.js**: JavaScript runtime
* **Express.js**: server-side framework
* **express-graphql**: GraphQL schema
* **MongoDB**: NoSQL database
* **Mongoose**: MongoDB ODM 

### Front End
* **React**: UI components
* **Apollo Client**: GraphQL state management
* **styled-components**: CSS-in-JS

# Key Features

## GraphQL vs. REST API

Toastmates utilizes GraphQL and Apollo Client in place of a REST API and Redux. This section outlines some of the implementation differences between the two sets of technologies.

### HTTP Requests

When making an HTTP request to a REST API endpoint, the client has no control over the composition of the response data. This results in over-fetching, where the client receives more data than it wants from an endpoint, and under-fetching, where the client doesn't receive all the data it needs from an endpoint and must send requests to multiple endpoints.
  
GraphQL doesn't share these inconveniences. With GraphQL, the client can describe *exactly* the information it wants from the server with each request. All requests are sent to a single endpoint, and the actions taken by the server are determined by information sent in the request body.

When a user navigates to the `/feed` page on Toastmates, the client requests a list of restaurants, or merchants, from the server to be rendered in the browser. With a REST API, the request URL and method may be: 

```JavaScript
'GET https://toastmates.herokuapp.com/api/merchants'
```

And the response data may be:

```JavaScript
merchants: [
  {
    id: 1,
    name: 'Applebees',
    cuisine: 'American',
    address: '123 4th St',
    deliveryTime: {
      low: 30,
      high: 50
    }
  },
  {
    id: 2,
    name: "Chevy's",
    cuisine: 'Mexican',
    address: '567 8th St',
    deliveryTime: {
      low: 20,
      high: 30
    }
  }
]
```

The client can't tell from the request string what the shape of the response data will be. Additionally, if the client only wants the name and address of each restaurant and doesn't want to over-fetch, a different endpoint that serves only that data must be used.

With GraphQL, the same URL and method are used for all data fetching and mutating operations: 

```JavaScript
'POST https://toastmates.herokuapp.com/graphql'
```

The client sends in the request body a nested object that describes the data it wants from the server: 

```JavaScript
{
  allMerchants {
    id,
    name,
    cuisine,
    address,
    deliveryFee
    deliveryTime {
      low,
      high
    }
  }
}
```

`allMerchants` tells the server the client wants a list of merchants. The fields nested under `allMerchants` have been defined on the `Merchant` model in the database.

If the client wants only names and addresses, other fields can be omitted from the request:

```JavaScript
{
  allMerchants {
    name,
    address
  }
}
```

The response data shape is evident in the request, so the client knows exactly how to interact with it. Fields can be added or removed at will, so over-fetching and under-fetching are no longer issues.

### Resolver Functions, not Routes

When the `/graphql` endpoint on the API receives a request for `allMerchants`, it must be told how to obtain the desired data. 

With a REST API, an Express route could be used to handle all `GET` requests to `/api/merchants`:

```JavaScript
router.get("/api/merchants", (req, res) => {
  // Find all merchants in database
  Merchant.find({})
    // send merchants to client as JSON
    .then(merchants => res.json(merchants))
    .catch(err => res.json(err));
})
```

With GraphQL, instructions are instead provided for handling a query of `allMerchants`:

```JavaScript
const RootQuery = new GraphQLObjectType({ 
  name: 'RootQueryType',
  fields: {
    allMerchants: {
      type: new GraphQLList(MerchantType),
      resolve() {
        return Merchant.find({});
      }
    }
  }
});
```

To determine the data to send in the response, GraphQL looks to the `resolve` function corresponding to the query type (in this case: `allMerchants`). It invokes the function, which queries all `merchants` in the database just like the REST API would.

### Data Normalization and Storage

When response data such as a list of `merchants` is received by the client, it often needs to be stored somewhere so it can be referenced later.

In previous personal projects with REST APIs, this was done with Redux. An action would be dispatched to the Redux store, which was configured to normalize each piece of response data by its ID:

```JavaScript
merchants: {
  1: {
    id: 1,
    name: 'Applebees',
    cuisine: 'American',
    address: '123 4th St',
    deliveryTime: {
      low: 30,
      high: 50
    }
  },
  2: {
    id: 2,
    name: "Chevy's",
    cuisine: 'Mexican',
    address: '567 8th St',
    deliveryTime: {
      low: 20,
      high: 30
    }
  }
}
```

This pattern allowed for constant-time lookup of individual merchants when the ID was known.

Apollo Client does the same thing for GraphQL responses automatically, normalizing each datum by its ID and type and storing it in the Apollo Cache. 

Upon subsequent queries for `allMerchants`, the Apollo Client first checks whether the desired data is already in the cache. If it is, the client pulls the data from the cache directly instead of making another request to the server.

### Component-Data Relationship

With Apollo Client, a GraphQL query is tied directly to a React component. The query's schema is defined outside the component and passed as an argument to the `useQuery` hook inside the component:

```JavaScript
const GET_ALL_MERCHANTS = gql`
  {
    allMerchants {
      id,
      name,
      cuisine,
      address,
      deliveryFee
      deliveryTime {
        low,
        high
      },
      menus
    }
  }
`;

const MerchantList = () => {
  const { data } = useQuery(GET_ALL_MERCHANTS);
  const { allMerchants } = data;

  return (
    <ul>
      {allmerchants.map(merchant => (
        <li key={merchant.id}>
          Welcome to {merchant.name}!
        </li>
      ))}
    </ul>
  );
};
```

The hook returns an object containing the response data. Whenever the data changes, the React component is forced to re-render. This way, the UI state always reflects the most recent data fetched from the server.

This contrasts with a REST API and Redux, where components manually filter data from the entire Redux Store with `useSelector` and dispatch actions to fetch fresh data from the server with `useEffect` and `useDispatch`: 

```JavaScript
const MerchantList = () => {
  const merchants = useSelector(state => state.merchants);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMerchants());
  });

  return (
    <ul>
      {allmerchants.map(merchant => (
        <li key={merchant.id}>
          Welcome to {merchant.name}!
        </li>
      ))}
    </ul>
  );
};
```

For the purpose of data fetching, Apollo Client is able to accomplish with one hook what takes Redux three hooks.

## Responsive Design

Toastmates is a fully responsive, mobile-friendly site. It uses media queries to resize UI components according to screen width. 

![responsiveness](https://user-images.githubusercontent.com/55966501/90052628-43d94280-dc8e-11ea-92ac-8d040c92d9d7.gif)

Most components' default styles are mobile-first, and media queries are applied as screens grow larger. This places the burden of processing media queries on larger machines with more processing power.

```CSS
position: absolute;
left: 16px;
top: 16px;
z-index: 100000;
color: rgb(255, 255, 255);
cursor: pointer;

@media screen and (min-width: 768px) {
  left: 24px;
  top: 24px;
}

@media screen and (min-width: 1060px) {
  display: none;
}
```

## User Authentication and Authorization with JSON Web Tokens

Toastmates requires a user be logged in to place an order. New users must create an account or log in as a 'demo user.'

### Creating an Account and Logging In

A new user can create an account by filling out a registration form:

![registration](https://user-images.githubusercontent.com/55966501/90052974-ba764000-dc8e-11ea-9d37-8e5d9826fdf9.png)

When the form is submitted, a `register` mutation containing the form data is sent to the server.

In the backend the form data is validated, the password is hashed, and a new `user` document is saved to the database.

An existing user can log in by filling out a similar form that accepts only an email and password. A `login` mutation instructs the database to look for a user with the provided email. If one is found, the provided password is hashed and compared to the hashed password stored in the database. If they match, the user is logged in.

### Authenticating User Actions with JWTs

Once a user is logged in, the server needs a way to verify the user's identity on subsequent requests so that the server can make changes to the database for the user. The client could send the user's ID in the header of every request, but this would pose a huge security risk, as anyone who knows the user's ID could make requests to the server on that user's behalf and without their knowledge.

This is where JSON Web Tokens (JWTs) come in. A JWT is a cryptographically signed JSON object whose contents can't be accessed unless the reader knows the secret 'key' that was used to sign the token. In the case of Toastmates, the reader is the server, and the crytographically signed content is the user's ID.

Once a user's credentials have been verified, the server generates a JWT, places the user's ID inside, and signs it with a secret key that is known only to the server. Once the token is signed, it doesn't look like a JSON object, but a string of nonsense: 

```JavaScript
const token = jwt.sign({ id: 1234 }, SECRET_KEY);
console.log(token)

// Console:
yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMzJmM2YzNmMwN2NhMWU0OTM4ZDVjNSIsImlhdCI6MTU5NzE3NTU3M30.S6ADDUtqFxkOGJ5DyUMYLwVmNREE_yji_xJWUIgku2E
```

The token can then be unpacked to retrieve its original contents:

```JavaScript
const decoded = jwt.verify(token, SECRET_OR_KEY);
console.log(decoded);

// Console:
{id: 1234}
```

The server sends the signed JWT to the client alongside the other response data, and the client saves the token to `localStorage` as an `auth-token`. The client sends the `auth-token` in the headers of *every subsequent request* to the server. In Toastmates this is accomplished by passing a `headers` option to the `ApolloClient` constructor: 

```JavaScript
const client = new ApolloClient({
  uri,
  cache,
  headers: {
    authorization: localStorage.getItem('auth-token') || ""
  }
});
```

With every request that requires authorization, such as placing an order, the server unpacks the user's ID from the JWT from the `authorization` header and uses it to mutate the database. 

When a user logs out, the `auth-token` is removed from `localStorage`.

## Programmatic Styling with `styled-components`

### How It Works

The traditional method of styling React components is the same as HTML elements: with stylesheets and classnames. In previous projects (Bitter and ThoughtBoard), I accomplished this by creating a CSS class for each React component in its own CSS file, but I found this method cumbersome. I didn't like having to constantly switch between CSS and JSX files, and the only method I found for setting styles programmatically was by applying classnames conditionally. 

Enter `styled-components`, a library that lets you define all the styles for a component directly inside the JSX file:

```JavaScript
const RedButton = styled.button`
  color: red;
`;

const HelloButton = () => (
  <RedButton>Hello!</RedButton>
);
```

`styled-components` also allows for programmatic declaration of styles through component props. An anonymous function can be given as an embedded expression to the value of any CSS property, and the function will receive the component's props as a parameter: 

```JavaScript
const AnyColorButton = styled.button`
  color: ${props => props.color || '#fff'};
`;

const BlueButton = () => (
  <AnyColorButton color='#0000ff'>This button is blue!</AnyColorButton>
);
```

### Theming

In Toastmates programmatic styles are used for theming among other things. A `theme` is an object containing styles that will be reused throughout a UI. Toastmates' `theme` is used for colors: 

```JavaScript
const theme = {
  palette: {
    common: {
      black: '#000',
      white: '#fff'
    },
    text: {
      primary: '#2d3138',
      secondary: '#8f95a3'
    },
    primary: {
      main: '#00cc99',
      dark: '#00997d',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#ffdf18',
      contrastText: '#2d1383'
    },
    disabled: 'rgb(217, 219, 224)',
    error: 'rgb(221, 51, 0)'
  }
}
```

By wrapping the entire application in a `ThemeProvider`, every component gets access to the `theme` via props:

```JavaScript
 ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
```

```JavaScript
const StyledButton = styled.button`
  background-color: ${props => props.theme.palette.primary.main};
  color: ${props => props.theme.palette.common.white};
`
```

## TODO

- [ ] Infinite scrolling feed page