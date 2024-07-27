"use client"
export default function NotFound() {
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
        <main className="grid min-h-full place-items-centerpx-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold ">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight  sm:text-5xl">Page not found</h1>
            <p className="mt-6 text-base leading-7 ">Sorry, we couldn’t find the page you’re looking for.</p>
            
          </div>
        </main>
      </>
    )
  }
  