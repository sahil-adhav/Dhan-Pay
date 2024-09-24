"use server";

import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

export const createOnRampTransaction = async (
  amount: number,
  provider: string
) => {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  const token = Math.random().toString();

  if (!userId) {
    return {
      message: "User is not logged in!",
    };
  }

  await prisma.onRampTransaction.create({
    data: {
      userId: Number(userId),
      provider,
      amount,
      status: "Processing",
      startTime: new Date(),
      token,
    },
  });

  return {
    message: "Entry added to onRampTxn!",
  };
};
