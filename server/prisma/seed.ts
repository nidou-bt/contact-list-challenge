import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const contactData: Prisma.ContactCreateInput[] = [
  {
    name: "Alice",
    emailAddress: "alice@prisma.io",
    phoneNumber: 12345678,
    picture: "",
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const c of contactData) {
    const contact = await prisma.contact.create({
      data: c,
    });
    console.log(`Created user with id: ${contact.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
