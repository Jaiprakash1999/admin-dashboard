# React + TypeScript Admin Dashboard

A responsive admin dashboard built using **React**, **TypeScript**, and **Tailwind CSS**. It fetches user data from a public API and displays it with support for search, pagination, loading states, and responsive layouts for desktop and mobile.

---

## Features

- **Search** by first or last name
- **Responsive UI** for desktop and mobile
- **Loading Skeletons** for a smooth UX during data fetch
- **Pagination** with items per page control
- **Optimized with `memo`** for performance
- Written in **TypeScript**
- Styled using **Tailwind CSS**

---

## Tech Stack

- **React**
- **TypeScript**
- **Tailwind CSS**
- **Axios**
- **Vite**
- **React Loading Skeleton**
- **FontAwesome Icons**

---

## API

This project uses the [Reqres API](https://reqres.in/api/users) to fetch paginated user data.

### Example Response

```json
{
  "page": 1,
  "per_page": 6,
  "total": 12,
  "total_pages": 2,
  "data": [
    {
      "id": 1,
      "email": "george.bluth@reqres.in",
      "first_name": "George",
      "last_name": "Bluth",
      "avatar": "https://reqres.in/img/faces/1-image.jpg"
    }
  ]
}
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/admin-dashboard.git
cd admin-dashboard

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## Author

**Jaiprakash Kushwaha**
