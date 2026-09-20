import { prisma } from "@repo/database/prisma";


export default async function Home() {
  const user = await prisma.user.findFirst();
  
  return (
    <div>
      firstName:
      {user?.username}
      password:
      {user?.password }
    </div>
  );
}
