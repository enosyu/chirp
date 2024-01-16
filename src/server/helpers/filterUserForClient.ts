import type { User } from "@clerk/nextjs/server";
export const filterUserInput = (user: User) => {
  return {
    id: user.id,
    username: user.username,
    imageUrl: user.imageUrl,
  };
};