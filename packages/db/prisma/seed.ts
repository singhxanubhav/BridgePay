import { PrismaClient } from '@prisma/client'
import bcrypt from "bcrypt";
const prisma = new PrismaClient()

async function main() {
  const Anubhav = await prisma.user.upsert({
    where: { number: '11223344' },
    update: {},
    create: {
      number: '11223344',
      password: await bcrypt.hash('Anubhav', 10),
      name: 'Anubhav',
      Balance: {
        create: {
            amount: 20000,
            locked: 0
        }
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Success",
          amount: 20000,
          token: "token__1",
          provider: "HDFC Bank",
        },
      },
    },
  })
  const Aman = await prisma.user.upsert({
    where: { number: '123456' },
    update: {},
    create: {
      number: '123456',
      password: await bcrypt.hash('Aman', 10),
      name: 'Aman',
      Balance: {
        create: {
            amount: 2000,
            locked: 0
        }
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Failure",
          amount: 2000,
          token: "token__2",
          provider: "HDFC Bank",
        },
      },
    },
  })
  console.log({ Anubhav, Aman })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })