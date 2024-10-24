import React from 'react';

const HomePage = () => {
  return (
    <div class="container mx-auto py-8 flex flex-col gap-8">
      <header class="bg-white flex justify-between align-center py-4 px-6 rounded-lg">
        <h1><span class="font-bold">Good</span>Mj</h1>
		<nav class="flex gap-6">
			<a href="#">Link</a>
			<a href="#">Link</a>
			<a href="#">Link</a>
		</nav>
      </header>
      <main class="bg-white flex justify-between align-center py-4 px-6 rounded-lg">
        <p>Welcome to my simple React home page! This is a basic example of a React project.</p>
      </main>
	  <footer>
		<p class="text-white">&copy; Copyright 2024 AV Web Design. All rights reserved.</p>
	  </footer>
    </div>
  );
}

export default HomePage;