'use server';

import prisma from '@repo/db/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth';
import { OnRampStatus } from "@prisma/client";

export async function createOnRamptxn(amount: number, provider: string) {
  const session = await getServerSession(authOptions);
  const userId = (await session?.user?.id) || '';
  const token = Math.random().toString().substring(2, 7);

  if (!userId) {
    return {
      message: 'User not logged in',
    };
  }

  try {
    // Start the transaction with two operations:
    await prisma.$transaction([
      prisma.onRampTransaction.create({
        data: {
          userId: Number(userId),
          amount: amount,
          provider,
          status: OnRampStatus.Success, // Set status to "Completed"
          token: token,
          startTime: new Date(),
        },
      }),
      prisma.balance.upsert({
        where: {
          userId: Number(userId),
        },
        update: {
          amount: {
            increment: amount,
          },
        },
        create: {
          userId: Number(userId),
          amount: amount,
          locked: 0,
        },
      }),
    ]);

    return {
      message: 'Transaction created and balance updated successfully',
    };
  } catch (e) {
    console.log(e);
    return {
      message: 'Error while processing transaction',
    };
  }
}