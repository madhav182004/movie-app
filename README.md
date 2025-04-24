# 🎬 Movie App

A fully responsive, modern movie browsing app built with **Next.js 13 (App Router)**, **TypeScript**, **Tailwind CSS**, and powered by the **TMDB API**.

Explore trending, top-rated, and upcoming movies, and dive deep into detailed movie pages with cast info.

---

## 🚀 Features

- 🔥 View **Trending**, **Top Rated**, and **Upcoming** movies  
- 📄 Detailed **Movie Pages** with description, ratings, and cast  
- ⚡ Optimized for **performance and SEO** with SSR  
- 💀 Beautiful **skeleton loaders** during data fetch  
- 📱 Fully **responsive design** using Tailwind CSS  
- 🧠 Built using **Next.js 13 App Router architecture**

---

## 🛠️ Tech Stack

| Tech         | Description                           |
|--------------|---------------------------------------|
| Next.js 13   | React Framework for Web Development   |
| TypeScript   | Typed JavaScript                      |
| Tailwind CSS | Utility-first CSS framework           |
| TMDB API     | Fetches movies, cast, and more        |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Main layout
│   ├── globals.css          # Global styles
│   ├── page.tsx             # Home page
│   ├── movie/[id]/          # Dynamic movie details
│   ├── toprated/            # Top rated movies page
│   └── upcoming/            # Upcoming movies page
├── components/
│   ├── Header.tsx
│   ├── MovieCard.tsx
│   ├── CastDetails.tsx
│   ├── HomeClient.tsx
│   └── SkeletonLoading.tsx
```

---

## 🧪 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/madhav182004/movie-app.git
cd movie-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env.local` file in the root and add:

```env
NEXT_PUBLIC_API_KEY=your_tmdb_api_key_here
```

### 4. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔧 Configuration

### `next.config.ts`

Ensure TMDB image domains are allowed:

```ts
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
```

---

## 🙋‍♂️ Author

**Madhav**

- 🐙 [GitHub](https://github.com/madhav182004)

---

## 📬 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).