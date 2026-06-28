import { currentUser } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const user = await currentUser();

  return (
    <div>
      <h1>Hello {user?.firstName}</h1>
      <p>{user?.emailAddresses[0].emailAddress}</p>
    </div>
  );
}