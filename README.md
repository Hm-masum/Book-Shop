# Ink Spire

- Frontend: [Ink-Spire](https://ink-spire21.vercel.app/)
- Backend: [Ink-Spire](https://y-flame-eta.vercel.app/)

## Project Overview

The InkSpire is a full-stack e-commerce platform that allows users to browse, purchase, and manage books online. It includes role-based authentication, an intuitive UI/UX, and secure payment integration.

---
### Public Routes

- **Home Page**: Overview of the platform
- **All Products Page**: Showcase all product with filtering , sorting and searching options.
- **Product Details Page**:  Detailed information about a specific Product.
- **About Page**: Information about the InkSpire and mission.
- **Contact Page**: Contact with Inkspire.

### Private Routes

- **Checkout Page**: Accessible to authenticated users for placing orders.
- **User Dashboard**: View order history and account details.
- **Admin Dashboard**: Manage products, view orders, and oversee platform activities.
---

## Getting Started
### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Hm-masum/Book-Shop.git
   ```
2. Navigate to the project folder:
   ```sh
   cd Book-Shop
   ```
3. Navigate to the Frontend folder:
   ```sh
   cd Book-Shop-Client
   ```
4. install dependencies:
   ```sh
   npm install 
   ```
3. Navigate to the Backend folder:
   ```sh
   cd Book-Shop-Server
   ```
4. install dependencies:
   ```sh
   npm install 
   ```

### Environment Variables
Create a  `.env` file in the root directory of Book-Shop-Server folder and add the following:
```
PORT=5000
DATABASE_URL= your database url
BCRYPT_SALT_ROUNDS = 12
JWT_ACCESS_SECRET= jwt access secret
JWT_REFRESH_SECRET= jwt refresh secret
JWT_ACCESS_EXPIRES_IN= 5d
JWT_REFRESH_EXPIRES_IN= 365d

SP_ENDPOINT=https://sandbox.shurjopayment.com
SP_USERNAME=sp_sandbox
SP_PASSWORD=pyyk97hu&6u6
SP_PREFIX=SP
SP_RETURN_URL= https://ink-spire21.vercel.app/order-verify

```
---
## Admin Credentials
```
Admin gmail: hhmasum88@gmail.com
Admin password: securepassword
```
---

## Technologies Used

- **Frontend:** React.js, Tailwind CSS, Shadcn UI
- **Backend:** Express.js,Node.js, Mongoose
- **Authentication:** JWT, bcrypt.js
- **Payment Gateway:** SurjoPay
- **State Management:** Redux
