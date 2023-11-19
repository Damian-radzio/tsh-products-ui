# Products List

## Overview

This application was built using React and Typescript, with state management handled by Redux Toolkit.


## How to Run the Application Locally

1. Make sure you have Node.js v20 installed. If not, you can download it from [here](https://nodejs.org/en/download/) or use the following command:
    ```bash
    nvm install 20
    ```
2. Clone the repository:
    ```bash
    git clone https://github.com/Damian-radzio/tsh-products-ui.git
    ```

3. Navigate to the project folder:
    ```bash
    cd tsh-products-ui
    ```

4. Then use this version (node version is declared in the .nvmrc file): 
    ```bash
    nvm use 20
    ```

5. Install dependencies:
    ```bash
    npm install
    ```

7. Start the project:
    ```bash
    npm start
    ```

## That's it! The project should now be running at [http://localhost:3000](http://localhost:3000).


## About project features:

### Navigation:

- Logo, search bar, filter buttons, and login button.
- By default, all filters are disabled, showing all products, both active and inactive, with or without promotions.
  
### Search:

- The search bar scans all pages to find products containing the entered phrase.

### Filter Buttons:

- **Promo:** Activating the promo button filters all pages for products on promotion.
  
- **Active:** Activating the active button filters all pages for active products.

### Login Button (Work in Progress):

- The button redirects to an empty page at `/login`. It is prepared for ongoing work on the creation of the login page.

### Logo:

- Clicking the logo takes us to the /products page and resets all filters (search bar and filter buttons).

### Products List:

- Each product has an image, description, and a button for a modal with product details.

### Product Details Button:

- Opens a modal window above the products list with detailed product information.

### Pagination:

- Pagination displays all available user-accessible pages with first and last buttons for direct navigation to the beginning or end of the list.

##  Planned Features

- Implement a button to navigate to a detailed product subpage with the option to purchase.
- Create a login view.
- Implement a password recovery view.
- Develop the functionality to add a product to favorites or cart.
- Create a cart view.
- Introduce a filter for favorite products.


