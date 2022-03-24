// 24-3-2022 - Practice

// Cart Implementation
// Create New Cart Component using react hooks, functional component
// Each Item in this component should be added from Product Component 
// Now each Product should have general fields, like Name, Description, Rating, Price, Category (New Product Document/ Collection)
// In Product component each item when we click to display details should also have a button "Add To Item" on click should add to New Cart
// On Cart Component, Button for save to Checkout should save the cart item to database (New Cart Document/ Collection)

// 23-3-2022 - Practice Question 1 : Product

// Create a product component using functional component and hooks (try using use state to read default values from reducer)
// Create a form to allowuser to submit Product Details - name, price, desc, rating
// Create an action method to add the detail to database using a server api
// Server Side - Create product router and api to save the product using productdatamodel

// Other Practice Questions 
// Practice - 2

//1. Create a component with name Hobby, add a textbox to insert hobbyname into it and save it to the database using SaveAPI
//2. Create an action to save the hobby, can use useractions file and userrouter file for the same


// Practice - 1

//1. Create a child component with your Name, parent would be app component
//2. Pass various properties like Name, Age, Address, etc as an object from app component and show values accordingly.
//3. Pass some html elements (h1, input, etc) as properties, show as child elements
//4. Use callback function to send "User Name" from child component back to parent
//5. Create an input box in Class Component and bind event to read values using setState (can use existing component)

//Get-AppXPackage -AllUsers | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register "$($_.InstallLocation)\AppXManifest.xml"}