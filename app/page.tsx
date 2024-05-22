'use client';
import Image from "next/image";
import { useUser } from '@auth0/nextjs-auth0/client';

export default  function Home() {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      

      <div>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      <div style={{color:"red", marginTop:"20px"}}>
        <a href="/api/auth/login">Login</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="/api/auth/logout">Logout</a>
      </div>

      {user && (
      <div>
        <img src={user.picture} alt={user.name}/>
        <h2>userName:{user.name}</h2>
        <p>userEmail:{user.email}</p>
      </div>
    )}
     
      </div>

    </main>
  );
}
