import React from 'react';

const Foot = () => {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl text-center">
            <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
            <img src="./src/assets/main-logo.png" className="h-8" alt="CvGo Logo" />
                CvGo
            </a>
            <p className="my-6 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ducimus commodi! Officiis voluptatem similique debitis aliquam perspiciatis eum. Odio veritatis dolorem modi, necessitatibus omnis accusantium?    
            </p>
            <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Premium</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Campaigns</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Blog</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Affiliate Program</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">FAQs</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
                </li>
            </ul>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2021-2022 <a href="#" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
        </div>
        </footer>
  );
};

export default Foot;