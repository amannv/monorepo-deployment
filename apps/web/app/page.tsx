import { prisma } from "@repo/database/prisma";


export default async function Home() {
  const user = await prisma.user.findFirst();
  
  return (
    <div>
      firstName: Aman
      {user?.username}
      password: Verma
      {user?.password }

      Hey guys! How are you doing?
    </div>
  );
}
